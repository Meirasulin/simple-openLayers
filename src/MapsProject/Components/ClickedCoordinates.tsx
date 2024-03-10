import { Stack } from "@mui/material";
import Item from "../helpers/itemMUI";
import { useAppSelector } from "../store/hooks";

const ClickedCoordinates = () => {
  const clickedCoordinate = useAppSelector(
    (store) => store.coordinates.ClickedCoordinates
  );
  if (clickedCoordinate)
    return (
      <Stack
        sx={{ margin: "1em" }}
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        <Item>Clicked Coordinates:</Item>
        <Item>x: {clickedCoordinate[0]}</Item>
        <Item>y: {clickedCoordinate[1]}</Item>
      </Stack>
    );
};
export default ClickedCoordinates;
