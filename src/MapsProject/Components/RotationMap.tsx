import { ButtonGroup, Button } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { left, rest, right } from "../store/rotationSlice";

const RotationMap = () => {
  const dispatch = useAppDispatch();
  return (
    <ButtonGroup variant="text" sx={{ margin: "1em" }}>
      <Button onClick={() => dispatch(right())}>Right rotation</Button>
      <Button onClick={() => dispatch(left())}>Left rotation</Button>
      <Button onClick={() => dispatch(rest())}>Rest rotation</Button>
    </ButtonGroup>
  );
};

export default RotationMap;
