import "styled-components";
import customTheme from "../theme";

declare module "styled-components" {
  type ThemeType = typeof customTheme;

  export interface DefaultTheme extends ThemeType {}
}
