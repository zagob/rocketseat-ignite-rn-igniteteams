import * as Style from "./styles";

interface HightlightProps {
  title: string;
  subtitle: string;
}

export function Hightlight({ title, subtitle }: HightlightProps) {
  return (
    <Style.Container>
      <Style.Title>{title}</Style.Title>
      <Style.Subtitle>{subtitle}</Style.Subtitle>
    </Style.Container>
  );
}
