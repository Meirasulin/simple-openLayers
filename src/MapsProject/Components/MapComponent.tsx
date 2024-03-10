import { useEffect, useRef } from "react";
import "ol/ol.css";
import { Box } from "@mui/material";
import mapModel from "../models/mapModel";
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import locationPopup from "../helpers/popupLocaion";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { coordinates } from "../store/mapsSlice";
import LayersOption from "./LayersOption";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import targtPopup from "../helpers/popupTargt";

const MapComponent = () => {
  const dispatch = useAppDispatch();
  const mapRef = useRef<HTMLDivElement>();
  const popupRef = useRef<HTMLElement>();
  const popupTargetRef = useRef<HTMLElement>();
  const layer = useAppSelector((store) => store.editLayers.layer);
  const rotation = useAppSelector((store) => store.rotation.rotation);

  useEffect(() => {
    const map = mapModel(mapRef.current, rotation, layer);
    const locationIcon = locationPopup(popupRef.current);
    const targtIcon = targtPopup(popupTargetRef.current);
    map.addOverlay(targtIcon);

    map.addOverlay(locationIcon);
    map.on("dblclick", (e) => {
      dispatch(coordinates(e.coordinate));
      targtIcon.setPosition(e.coordinate);
    });
    map.on("singleclick", (e) => {
      dispatch(coordinates(e.coordinate));
      locationIcon.setPosition(e.coordinate);
    });

    return () => {
      map.setTarget(undefined);
      map.un("singleclick", (e) => {
        dispatch(coordinates(e.coordinate));
      });
      // map.un("dblclick", (e) => {
      //   dispatch(coordinates(e.coordinate));
      //   targtIcon.setPosition(e.coordinate);
      // });
    };
  }, [rotation, layer, dispatch]);

  return (
    <>
      <Box
        ref={mapRef}
        sx={{ width: "600px", height: "400px", position: "relative" }}
      >
        <Box ref={popupTargetRef}>
          <HighlightOffIcon />
        </Box>
        <Box ref={popupRef}>
          <GpsFixedOutlinedIcon />
        </Box>
        <LayersOption />
      </Box>
    </>
  );
};
export default MapComponent;
