import { View } from "ol";
import Map from "ol/Map";
import { Geometry } from "ol/geom";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import XYZ from "ol/source/XYZ";

type refType = string | HTMLElement | undefined;
export type layersType =
  | VectorLayer<VectorSource<Geometry>>
  | TileLayer<OSM>
  | TileLayer<XYZ>;

const mapModel = (refElement: refType, rotation: number, layer: layersType) => {
  const map = new Map({
    target: refElement,
    layers: [layer],
    view: new View({
      zoom: 6,
      center: [3898526, 3744713],
      rotation: rotation,
    }),
  });
  return map;
};
export default mapModel;
