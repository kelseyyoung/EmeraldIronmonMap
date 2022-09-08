import React from "react";
import "./EmeraldIronmonMap.css";
import FullHoenn from "./assets/FullHoenn.webp";
import { MapInteractionCSS } from "react-map-interaction";
import { ControlPanel, Trainer, Item, MapPortal } from "./components";
import { BoundingBoxCoords, items, trainers, portalGroups } from "./data";
import { useAppSelector } from "./state";

export const DEBUG_MODE = false;

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
        <div id="tooltip-container"></div>
        <div id="portal-label-container"></div>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="12880"
          height="6266"
        >
          {/* TODO: can we get the height and width from the image? Think "FullKanto" is just the string though */}
          {/* if so, then put into variables */}
          <image width="12880" height="6266" xlinkHref={FullHoenn}></image>
          {trainers.map((trainer, index) => {
            return (
              <Trainer
                key={trainer.name.split(" ").join("") + "-" + index}
                {...trainer}
              />
            );
          })}
          {items.map((item, index) => {
            return <Item key={"item-" + index} {...item} />;
          })}
          {portalGroups.map((portalGroup) => {
            return portalGroup.portals.map((portal, portalIndex) => (
              <MapPortal
                key={"portal-" + portalIndex}
                index={portalIndex + 1}
                scale={mapData.scale}
                offsetMapCoords={offsetMapCoords}
                color={portalGroup.color}
                {...portal}
              />
            ));
          })}
        </svg>
      </MapInteractionCSS>
    </div>
  );
};
