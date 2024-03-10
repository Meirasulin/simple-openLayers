import { Overlay } from "ol";

type refType = HTMLElement | undefined;

const targtPopup = (element: refType) => {
  const popup = new Overlay({
    element: element,
    positioning: "center-center",
    stopEvent: true,
  });
  return popup;
};
export default targtPopup;
