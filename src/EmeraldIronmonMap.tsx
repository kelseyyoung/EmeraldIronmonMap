import React from "react";
import "./EmeraldIronmonMap.css";
import FullHoenn from "./assets/FullHoenn.webp";
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
import { BoundingBoxCoords, Item, MapPortal, Trainer } from "./IronmonMapUtils";

export interface MapInteractionCSSValue {
  scale: number;
  translation: BoundingBoxCoords;

  // Translation directions
  // Move map "up": decrease y
  // Move map "down": increase y
  // Move map "right": increase x
  // Move map "left": decrease x
}

export const EmeraldIronmonMap = () => {
  const [mapData, setMapData] = React.useState<MapInteractionCSSValue>({
    scale: 1,
    translation: { x: 0, y: 0 },
  });

  const showRoutes = useAppSelector((state) => state.settings).showRoutes;

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
    [setMapData]
  );

  return (
    <div className="ironmon-map">
      <ControlPanel />
      <MapInteractionCSS
        value={mapData}
        onChange={(value: MapInteractionCSSValue) => {
          setMapData(value);
        }}
        maxScale={100}
      >
        <div
          id="portal-label-container"
          className="react-portal-container"
        ></div>
        <div id="tooltip-container" className="react-portal-container"></div>
        {/* TODO: can we get the height and width from the image? Think "FullKanto" is just the string though */}
        {/* if so, then put into variables */}
        <img
          width="12800"
          height="6408"
          src={FullHoenn}
          alt="Full Hoenn"
          className="pixelated full-map-img"
        ></img>
        <img
          width="941"
          height="1128"
          style={{
            position: "absolute",
            top: 4508,
            left: 638,
          }}
          alt="Granite Cave Route"
          className={`${showRoutes ? "routes-visible" : "routes-hidden"}`}
          src={GraniteCaveRoute}
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
          className={`${showRoutes ? "routes-visible" : "routes-hidden"}`}
          src={NewMauvilleRoute}
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
          className={`${showRoutes ? "routes-visible" : "routes-hidden"}`}
          src={MeteorFallsRoute}
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
          className={`${showRoutes ? "routes-visible" : "routes-hidden"}`}
          src={MagmaHideoutRoute}
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
          className={`${showRoutes ? "routes-visible" : "routes-hidden"}`}
          src={AquaHideoutRoute}
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
          className={`${showRoutes ? "routes-visible" : "routes-hidden"}`}
          src={SeafloorCavernRoute}
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
          className={`${showRoutes ? "routes-visible" : "routes-hidden"}`}
          src={VictoryRoadRoute}
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
          className={`${showRoutes ? "routes-visible" : "routes-hidden"}`}
          src={CurrentsRoute}
        ></img>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="12800"
          height="6325"
          className="svg-container"
        >
          {trainers.map((trainer, index) => {
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
            return (
              <Item
                key={"item-" + index}
                height={defaultItemHeight}
                width={defaultItemWidth}
                {...item}
              />
            );
          })}
          {portalGroups.map((portalGroup) => {
            return portalGroup.portals.map((portal, portalIndex) => (
              <MapPortal
                key={"portal-" + portalIndex}
                index={portalIndex + 1}
                scale={mapData.scale}
                offsetMapCoords={offsetMapCoords}
                color={portalGroup.color}
                size={defaultPortalSize}
                {...portal}
              />
            ));
          })}
        </svg>
      </MapInteractionCSS>
    </div>
  );
};
