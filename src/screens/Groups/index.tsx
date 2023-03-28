import { FlatList } from "react-native";
import { useState } from "react";
import * as Style from "./styles";

import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Highlight";
import { ListEmpty } from "@components/LIstEmpty";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Groups() {
  const { navigate } = useNavigation();
  const [groups, setGroups] = useState(["Rocket", "Comunidade"]);

  function handleNewGroup() {
    navigate("new");
  }

  return (
    <Style.Container>
      <Header />
      <Hightlight title="Turmas" subtitle="Joque com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Style.Container>
  );
}
