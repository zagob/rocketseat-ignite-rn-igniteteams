import { TouchableOpacityProps } from "react-native";
import * as Style from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type?: Style.ButtonTypeStyleProps;
}

export function Button({ type = "PRIMARY", title, ...rest }: ButtonProps) {
  return (
    <Style.Container type={type} {...rest}>
      {title}
    </Style.Container>
  );
}
