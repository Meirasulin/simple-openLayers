import { Overlay } from "ol";

type refType = HTMLElement | undefined;

const locationPopup = (element: refType) => {
  const popup = new Overlay({
    element: element,
    positioning: "center-center",
    stopEvent: true,
  });
  return popup;
};
export default locationPopup;
