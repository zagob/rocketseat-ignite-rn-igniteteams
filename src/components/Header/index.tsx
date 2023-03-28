import * as Style from "./styles";

import logoImg from "@assets/logo.png";
import { useNavigation } from "@react-navigation/native";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  const { goBack } = useNavigation();
  return (
    <Style.Container>
      {showBackButton && (
        <Style.BackButton onPress={() => goBack()}>
          <Style.BackIcon />
        </Style.BackButton>
      )}
      <Style.Logo source={logoImg} />
    </Style.Container>
  );
}
