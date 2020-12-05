import React from "react";
import { StyleSheet, Image, TouchableOpacity, Alert, View } from "react-native";
import { DataTable } from "react-native-paper";
import styled from "styled-components/native";
import { cpfMask, cnpjMask } from "../../../../tools/documentMasks";
import { Feather } from "@expo/vector-icons";
import { User } from "../../../store/users/types";

import {
  Title,
  Box,
  ScrollBox,
  Row,
  UserBox,
  ImageBg,
  TextCol,
  RowName,
  RowDoc,
} from "./style";

const UserList = (props: {
  users: { _id?: string; name: string; document: string; type: string }[];
  delete: (user: User) => void;
}) => {
  let { users } = props;

  const handleDelete = (user: User) => {
    props.delete(user);
  };

  return (
    <>
      <Box style={styles.container}>
        <Title>Usuários</Title>
        <ScrollBox>
          {users.map(
            (user: {
              _id?: string;
              name: string;
              document: string;
              type: string;
            }) => (
              <Row key={user._id} style={{ flex: 1 }}>
                <UserBox>
                  <ImageBg
                    style={[
                      { borderWidth: 1 },
                      user.type === "individual"
                        ? { borderColor: "#ff6a00" }
                        : { borderColor: "#00b2ff" },
                    ]}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={
                        user.type === "business"
                          ? require("../../../../assets/Business.png")
                          : require("../../../../assets/Individual.png")
                      }
                    />
                  </ImageBg>
                  <TextCol>
                    <RowName>{user.name}</RowName>
                    <RowDoc
                      style={
                        user.type === "individual"
                          ? { color: "#ff6a00" }
                          : { color: "#00b2ff" }
                      }
                    >
                      {user.document.length === 11
                        ? cpfMask(user.document)
                        : cnpjMask(user.document)}
                    </RowDoc>
                  </TextCol>
                </UserBox>
                <TouchableOpacity
                  onPress={() =>
                    Alert.alert("Atenção!", "Gostaria de deletar o usuário?", [
                      {
                        text: "Cancelar",
                        onPress: () => Alert.alert("Ação cancelada."),
                        style: "cancel",
                      },
                      {
                        text: "Sim",
                        onPress: () => handleDelete(user),
                      },
                    ])
                  }
                >
                  <Feather name="trash" size={24} color="white" />
                </TouchableOpacity>
              </Row>
            )
          )}
        </ScrollBox>
      </Box>
    </>
  );
};

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
