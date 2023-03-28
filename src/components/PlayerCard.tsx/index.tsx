import { ButtonIcon } from "@components/ButtonIcon";
import * as Style from "./styles";

type Props = {
  name: string;
  onRemove: (name: string) => void;
};

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <Style.Container>
      <Style.Icon name="person" />
      <Style.Name>{name}</Style.Name>

      <ButtonIcon
        icon="close"
        type="SECONDARY"
        onPress={() => onRemove(name)}
      />
    </Style.Container>
  );
}
