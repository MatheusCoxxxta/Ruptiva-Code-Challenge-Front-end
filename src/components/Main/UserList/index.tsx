import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { DataTable } from "react-native-paper";

const UserList = (props: {
  users: { id: number; name: string; document: string }[];
}) => {
  let { users } = props;

  return (
    <>
      <DataTable style={[styles.dataTable, styles.dataTableHeader]}>
        <DataTable.Header>
          <DataTable.Title>Nome</DataTable.Title>
          <DataTable.Title>Documento</DataTable.Title>
        </DataTable.Header>
      </DataTable>
      <ScrollView style={styles.container}>
        <DataTable style={styles.dataTable}>
          {users.map((user: { id: number; name: string; document: string }) => (
            <DataTable.Row key={user.id}>
              <DataTable.Cell>
                {user.name.slice(0, 11)}{" "}
                {user.name.length > 11 ? <Text>...</Text> : null}
              </DataTable.Cell>
              <DataTable.Cell>{user.document}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "85%",
  },

  dataTable: {
    marginBottom: 5,
  },

  dataTableHeader: {
    width: "85%",
  },
});

export default UserList;
