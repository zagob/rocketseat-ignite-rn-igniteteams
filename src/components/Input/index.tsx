import * as Style from "./styles";
import { useTheme } from "styled-components/native";

export function Input({ ...rest }: Style.TextInputProps) {
  const { COLORS } = useTheme();

  return <Style.Container placeholderTextColor={COLORS.GRAY_700} {...rest} />;
}
