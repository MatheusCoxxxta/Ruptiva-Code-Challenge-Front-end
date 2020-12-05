import React, { useState, useCallback, useEffect } from "react";
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from "react-native";
import Constants from "expo-constants";
import Form from "../../components/Main/Form";
import UserList from "../../components/Main/UserList";
import { User } from "../../store/users/types";

import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store";
import {
  deleteUser,
  loadUsers,
  saveUser,
  loadRequest,
} from "../../store/users/actions";
import userType from "../../../tools/userType";

const wait = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const Main = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getUsers();

    wait(2000).then(() => setRefreshing(false));
  }, []);

  const users = useSelector((state: ApplicationState) => state.users.data);

  const dispatch = useDispatch();

  const handleDelete = (user: User) => {
    dispatch(deleteUser(user));
  };

  const getUsers = () => {
    dispatch(loadRequest());
  };

  let type: any;
  const handleForm = (name: string, document: string) => {
    type = userType(document);
    const user: User = { name, document, type };
    dispatch(saveUser(user));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const [usersArray, setUsers] = useState(users);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <ScrollView
        scrollEnabled={false}
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <ImageBackground
          source={require("../../../assets/ruptiva-logo.png")}
          imageStyle={{ width: 100, height: 50 }}
          style={styles.container}
          resizeMode="center"
        ></ImageBackground>
        <Form handle={handleForm} />
        <UserList users={users} delete={handleDelete} />
      </ScrollView>
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 50,
    alignSelf: "center",
    width: "90%",
    height: 100,
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e0e0e5",
    paddingTop: 0,
  },
});
