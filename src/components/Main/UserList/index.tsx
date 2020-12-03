import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { DataTable } from "react-native-paper";
import styled from "styled-components/native";
import { cpfMask, cnpjMask } from "../../../../tools/documentMasks";
import { Feather } from "@expo/vector-icons";

const UserList = (props: {
  users: { id: number; name: string; document: string; type: string }[];
}) => {
  let { users } = props;

  return (
    <>
      <Title>Usuários</Title>
      <DataTable style={[styles.dataTable, styles.dataTableHeader]}>
        <DataTable.Header>
          <DataTable.Title> </DataTable.Title>
          <DataTable.Title>Nome</DataTable.Title>
          <DataTable.Title>Documento do Cliente</DataTable.Title>
        </DataTable.Header>
      </DataTable>
      <ScrollView style={styles.container}>
        <DataTable style={styles.dataTable}>
          {users.map(
            (user: {
              id: number;
              name: string;
              document: string;
              type: string;
            }) => (
              <DataTable.Row key={user.id}>
                <DataTable.Cell>
                  <TouchableOpacity
                    onPress={() =>
                      Alert.alert(
                        "Atenção!",
                        "Gostaria de deletar o usuário?",
                        [
                          {
                            text: "Cancelar",
                            onPress: () => Alert.alert("Ação cancelada."),
                            style: "cancel",
                          },
                          {
                            text: "Sim",
                            onPress: () => Alert.alert("Usuário deletado."),
                          },
                        ]
                      )
                    }
                  >
                    <Feather name="trash" size={24} color="black" />
                  </TouchableOpacity>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text
                    style={
                      user.type === "individual"
                        ? { color: "#ff6a00" }
                        : { color: "#00b2ff" }
                    }
                  >
                    {user.name}
                  </Text>
                </DataTable.Cell>

                <DataTable.Cell>
                  {user.document.length === 11
                    ? cpfMask(user.document)
                    : cnpjMask(user.document)}
                </DataTable.Cell>
              </DataTable.Row>
            )
          )}
        </DataTable>
      </ScrollView>
    </>
  );
};

const Title = styled.Text`
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: bold;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  dataTable: {
    marginBottom: 5,
  },

  dataTableHeader: {
    width: "100%",
  },
});

export default UserList;