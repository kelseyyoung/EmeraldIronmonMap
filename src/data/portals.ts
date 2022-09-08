import { BoundingBoxCoords } from "./trainers";

export interface MapPortalData {
  portal1: BoundingBoxCoords;
  portal2: BoundingBoxCoords;
}

export type MapPortalGroup = {
  color: string;
  area: string;
  portals: MapPortalData[];
};

export const defaultPortalSize = 24;

export const portalGroups: MapPortalGroup[] = [];
