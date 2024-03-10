import MapComponent from "./MapComponent";
import ClickedCoordinates from "./ClickedCoordinates";
import RotationMap from "./RotationMap";

const MapPage = () => {
  return (
    <>
      <MapComponent />
      <ClickedCoordinates />
      <RotationMap />
    </>
  );
};
export default MapPage;
