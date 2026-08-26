import React from "react";
import "./EmeraldIronmonMap.css";
import GraniteCaveRoute from "./assets/GraniteCaveRoute.webp";
import NewMauvilleRoute from "./assets/NewMauvilleRoute.webp";
import MeteorFallsRoute from "./assets/MeteorFallsRoute.webp";
import MagmaHideoutRoute from "./assets/MagmaHideoutRoute.webp";
import AquaHideoutRoute from "./assets/AquaHideoutRoute.webp";
import SeafloorCavernRoute from "./assets/SeafloorCavernRoute.webp";
import VictoryRoadRoute from "./assets/VictoryRoadRoute.webp";
import CurrentsRoute from "./assets/CurrentsRoute.webp";
import { MapInteractionCSS } from "react-map-interaction";
import { ControlPanel } from "./components";
import {
  items,
  trainers,
  portalGroups,
  defaultTrainerHeight,
  defaultTrainerWidth,
  defaultItemHeight,
  defaultItemWidth,
  defaultPortalSize,
} from "./data";
import { useAppSelector } from "./IronmonMapUtils/state";
import {
  BoundingBoxCoords,
  Item,
  MapPortal,
  TiledMap,
  Trainer,
  computeVisibleBounds,
  isBoxVisible,
  useRafThrottledValue,
  useViewportSize,
} from "./IronmonMapUtils";

export interface MapInteractionCSSValue {
  scale: number;
  translation: BoundingBoxCoords;

  // Translation directions
  // Move map "up": decrease y
  // Move map "down": increase y
  // Move map "right": increase x
  // Move map "left": decrease x
}

const mapWidth = 12800;
const mapHeight = 6408;

// Extra content-space padding around the viewport when culling SVG overlay
// entities, so markers and their tooltips near the edge don't pop in/out while
// panning. Sized comfortably larger than any single entity + tooltip.
const VIRTUALIZATION_MARGIN = 300;

export const EmeraldIronmonMap = () => {
  const [mapData, setMapData] = React.useState<MapInteractionCSSValue>({
    scale: 1,
    translation: { x: -5000, y: -2500 },
  });

  const showRoutes = useAppSelector((state) => state.settings).showRoutes;

  // The live `mapData` drives the CSS transform every frame so the map stays
  // responsive, but the derived culling work (SVG overlay + tile selection)
  // only needs to run once per painted frame. Throttling to animation frames
  // coalesces the multiple transform updates a single zoom gesture can emit.
  const throttledMapData = useRafThrottledValue(mapData);

  // Latest scale, read only inside portal click handlers. Kept in a ref so
  // zooming doesn't re-render every MapPortal on every frame.
  const scaleRef = React.useRef(mapData.scale);
  scaleRef.current = mapData.scale;

  // Virtualize the SVG overlay: only render trainers/items/portals whose
  // bounding box intersects the current viewport (plus a margin). Hundreds of
  // entities would otherwise sit in the DOM even when zoomed/panned far away
  // from them.
  const viewport = useViewportSize();
  const visibleBounds = React.useMemo(
    () =>
      computeVisibleBounds(
        throttledMapData.translation,
        throttledMapData.scale,
        viewport,
        VIRTUALIZATION_MARGIN,
      ),
    [throttledMapData.translation, throttledMapData.scale, viewport],
  );

  const offsetMapCoords = React.useCallback(
    (x: number, y: number) => {
      setMapData((value: MapInteractionCSSValue) => {
        return {
          ...value,
          translation: {
            x: value.translation.x + x,
            y: value.translation.y + y,
          },
        };
      });
    },
    [setMapData],
  );

  // Recomputed as the viewport moves, but only the on-screen entities are built
  // — the full set is ~1000 elements.
  const svgContent = React.useMemo(() => {
    return (
      <>
        {trainers.map((trainer, index) => {
          if (
            !isBoxVisible(
              trainer.x,
              trainer.y,
              defaultTrainerWidth,
              defaultTrainerHeight,
              visibleBounds,
            )
          ) {
            return null;
          }
          return (
            <Trainer
              key={trainer.name.split(" ").join("") + "-" + index}
              height={defaultTrainerHeight}
              width={defaultTrainerWidth}
              {...trainer}
            />
          );
        })}
        {items.map((item, index) => {
          if (
            !isBoxVisible(
              item.x,
              item.y,
              defaultItemWidth,
              defaultItemHeight,
              visibleBounds,
            )
          ) {
            return null;
          }
          return (
            <Item
              key={"item-" + index}
              height={defaultItemHeight}
              width={defaultItemWidth}
              {...item}
            />
          );
        })}
      </>
    );
  }, [visibleBounds]);

  // Memoized separately from the trainers/items so the two lists don't rebuild
  // in lockstep; the scale the click handlers need arrives via `scaleRef`, so
  // zooming doesn't invalidate this.
  const portalContent = React.useMemo(() => {
    return portalGroups.map((portalGroup) => {
      return portalGroup.portals.map((portal, portalIndex) => {
        // Keep the pair (and its connecting line) if either endpoint is
        // on-screen.
        const visible =
          isBoxVisible(
            portal.portal1.x,
            portal.portal1.y,
            defaultPortalSize,
            defaultPortalSize,
            visibleBounds,
          ) ||
          isBoxVisible(
            portal.portal2.x,
            portal.portal2.y,
            defaultPortalSize,
            defaultPortalSize,
            visibleBounds,
          );
        if (!visible) {
          return null;
        }
        return (
          <MapPortal
            key={"portal-" + portalIndex}
            index={portalIndex + 1}
            scaleRef={scaleRef}
            offsetMapCoords={offsetMapCoords}
            color={portalGroup.color}
            size={defaultPortalSize}
            {...portal}
          />
        );
      });
    });
  }, [offsetMapCoords, visibleBounds]);

  return (
    <div className="ironmon-map">
      <ControlPanel />
      <div className="map-viewport">
        <MapInteractionCSS
          value={mapData}
          onChange={(value: MapInteractionCSSValue) => {
            setMapData(value);
          }}
          maxScale={8}
        >
          <div
            id="portal-label-container"
            className="react-portal-container"
          ></div>
          <div id="tooltip-container" className="react-portal-container"></div>
          <TiledMap
            region="hoenn"
            mapWidth={mapWidth}
            mapHeight={mapHeight}
            scale={throttledMapData.scale}
            translation={throttledMapData.translation}
          />
          <img
            width="941"
            height="1128"
            style={{
              position: "absolute",
              top: 4508,
              left: 638,
            }}
            alt="Granite Cave Route"
            className={`pixelated ${showRoutes ? "routes-visible" : "routes-hidden"}`}
            src={GraniteCaveRoute}
            draggable={false}
            decoding="async"
          ></img>
          <img
            width="660"
            height="660"
            style={{
              position: "absolute",
              top: 2759,
              left: 2539,
            }}
            alt="New Mauville Route"
            className={`pixelated ${showRoutes ? "routes-visible" : "routes-hidden"}`}
            src={NewMauvilleRoute}
            draggable={false}
            decoding="async"
          ></img>
          <img
            width="1921"
            height="962"
            style={{
              position: "absolute",
              top: 1442,
              left: 637,
            }}
            alt="Meteor Falls Route"
            className={`pixelated ${showRoutes ? "routes-visible" : "routes-hidden"}`}
            src={MeteorFallsRoute}
            draggable={false}
            decoding="async"
          ></img>
          <img
            width="2470"
            height="1030"
            style={{
              position: "absolute",
              top: 2760,
              left: 3842,
            }}
            alt="Magma Hideout Route"
            className={`pixelated ${showRoutes ? "routes-visible" : "routes-hidden"}`}
            src={MagmaHideoutRoute}
            draggable={false}
            decoding="async"
          ></img>
          <img
            width="1788"
            height="547"
            style={{
              position: "absolute",
              top: 755,
              left: 8537,
            }}
            alt="Aqua Hideout Route"
            className={`pixelated ${showRoutes ? "routes-visible" : "routes-hidden"}`}
            src={AquaHideoutRoute}
            draggable={false}
            decoding="async"
          ></img>
          <img
            width="1705"
            height="774"
            style={{
              position: "absolute",
              top: 3682,
              left: 8723,
            }}
            alt="Seafloor Cavern Route"
            className={`pixelated ${showRoutes ? "routes-visible" : "routes-hidden"}`}
            src={SeafloorCavernRoute}
            draggable={false}
            decoding="async"
          ></img>
          <img
            width="736"
            height="1751"
            style={{
              position: "absolute",
              top: 1300,
              left: 12045,
            }}
            alt="Victory Road Route"
            className={`pixelated ${showRoutes ? "routes-visible" : "routes-hidden"}`}
            src={VictoryRoadRoute}
            draggable={false}
            decoding="async"
          ></img>
          <img
            width="3600"
            height="550"
            style={{
              position: "absolute",
              top: 4400,
              left: 4000,
            }}
            alt="Currents Route"
            className={`pixelated ${showRoutes ? "routes-visible" : "routes-hidden"}`}
            src={CurrentsRoute}
            draggable={false}
            decoding="async"
          ></img>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={mapWidth}
            height={mapHeight}
            className="svg-container"
          >
            {svgContent}
            {portalContent}
          </svg>
        </MapInteractionCSS>
      </div>
    </div>
  );
};
