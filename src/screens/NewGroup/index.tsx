import * as Style from "./styles";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Highlight";
import { Input } from "@components/Input";

export function NewGroup() {
  return (
    <Style.Container>
      <Header showBackButton />

      <Style.Content>
        <Style.Icon />

        <Hightlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
      </Style.Content>

      <Input placeholder="Nome da turma" />

      <Button title="Criar" style={{ marginTop: 20 }} />
    </Style.Container>
  );
}
