import * as Style from "./styles";

interface ListEmptyProps {
  message: string;
}

export function ListEmpty({ message }: ListEmptyProps) {
  return (
    <Style.Container>
      <Style.Message>{message}</Style.Message>
    </Style.Container>
  );
}
