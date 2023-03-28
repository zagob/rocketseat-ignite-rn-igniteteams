import { FlatList } from "react-native";
import { useState } from "react";

import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { PlayerCard } from "@components/PlayerCard.tsx";
import { ListEmpty } from "@components/LIstEmpty";

import * as Style from "./styles";
import { Button } from "@components/Button";

export function Players() {
  const [team, setTeam] = useState("");
  const [players, setPLayers] = useState([]);

  return (
    <Style.Container>
      <Header showBackButton />

      <Hightlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <Style.Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon icon="add" />
      </Style.Form>

      <Style.HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <Style.NumberOfPlayers>{players.length}</Style.NumberOfPlayers>
      </Style.HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remover Turma" type="SECONDARY" />
    </Style.Container>
  );
}
