import React, { useState, useCallback } from "react";
import { ScrollView, RefreshControl, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Form from "../../components/Main/Form";
import UserList from "../../components/Main/UserList";
import users from "../../../tools/usersMock";

const wait = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const Main = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  const handleForm = (name: string, document: string) => {
    console.log("Nome: ", name);
  };

  const handleDelete = (id: number) => {
    console.log("Id: ", id);
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Form handle={handleForm} />
        <UserList users={users} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f5",
    paddingTop: 100,
  },
});

export default Main;
