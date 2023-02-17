import { artic_iiif_endpoint } from "utils/articConstants";

const getImage = (
  id: string,

  /**
   * ```
   * xs: 200 px
   * sm: 400 px
   * md: 600 px
   * lg: 846 px
   * xl: 1686 px
   * ```
   */
  size: "xs" | "sm" | "md" | "lg" | "xl"
) => {
  let sizePx;
  switch (size) {
    case "xs":
      sizePx = 200;
      break;
    case "sm":
      sizePx = 400;
      break;
    case "md":
      sizePx = 600;
      break;
    case "lg":
      sizePx = 846;
      break;
    case "xl":
      sizePx = 1686;
      break;
  }
  return `${artic_iiif_endpoint}/${id}/full/${sizePx},/0/default.jpg`;
};

export default getImage;
