import React, { useState, useCallback, useEffect } from "react";
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  StatusBar,
} from "react-native";
import Constants from "expo-constants";
import Form from "../../components/Main/Form";
import UserList from "../../components/Main/UserList";
import { User } from "../../store/users/types";

import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store";
import { deleteUser, loadUsers, saveUser } from "../../store/users/actions";

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

  const users = useSelector((state: ApplicationState) => state.users.data);

  const dispatch = useDispatch();

  const handleDelete = (user: User) => {
    dispatch(deleteUser(user));
  };

  const getUsers = () => {
    dispatch(loadUsers());
  };

  let type: string;
  const handleForm = (name: string, document: string) => {
    if (document.length === 11) type = "individual";
    else if (document.length === 14) type = "business";
    const user: User = { name, document, type };

    dispatch(saveUser(user));
  };

  useEffect(() => {
    getUsers();
  });

  const [usersArray, setUsers] = useState(users);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Form handle={handleForm} />
        <UserList users={users} delete={handleDelete} />
      </ScrollView>
    </>
  );
};

export default Main;

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
