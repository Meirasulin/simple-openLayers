import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import LayersTwoToneIcon from "@mui/icons-material/LayersTwoTone";
import TravelExploreTwoToneIcon from "@mui/icons-material/TravelExploreTwoTone";
import { SpeedDial, SpeedDialAction, Box } from "@mui/material";
import SatelliteAltTwoToneIcon from "@mui/icons-material/SatelliteAltTwoTone";
import { googleMapsLayer, tileLayer, vectorLayer } from "../helpers/layres";
import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { editLayers } from "../store/layersSlice";

const actions = [
  { icon: <LayersTwoToneIcon />, name: "geographic", layer: vectorLayer },
  {
    icon: <SatelliteAltTwoToneIcon />,
    name: "Satellite",
    layer: googleMapsLayer,
  },
  {
    icon: <TravelExploreTwoToneIcon />,
    name: "Open Street Map",
    layer: tileLayer,
  },
];

const LayersOption = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch();

  return (
    <Box>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<MapTwoToneIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              dispatch(editLayers(action.layer));
              handleClose();
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};
export default LayersOption;
