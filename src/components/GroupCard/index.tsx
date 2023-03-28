import { TouchableOpacityProps } from "react-native";
import * as Style from "./styles";

interface GroupCardProps extends TouchableOpacityProps {
  title: string;
}

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <Style.Container {...rest}>
      <Style.Icon />
      <Style.Title>{title}</Style.Title>
    </Style.Container>
  );
}
