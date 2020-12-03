import React, { useState } from "react";
import { Handle, StyleSheet, View } from "react-native";
import {
  FormLabel,
  InputGroup,
  FormInput,
  FormButton,
  ButtonText,
} from "./style";
import { TextInputMask } from "react-native-masked-text";

const Form = (props: { handle: (name: string, document: string) => void }) => {
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");

  const handleForm = () => {
    props.handle(name, document);
  };

  return (
    <View style={styles.container}>
      <FormLabel>Nome</FormLabel>
      <InputGroup>
        <FormInput
          placeholder="Insira seu nome"
          value={name}
          onChangeText={(value) => setName(value)}
        />
      </InputGroup>

      <FormLabel>Documento</FormLabel>
      <InputGroup>
        <TextInputMask
          style={styles.documentInput}
          type={document.length < 14 ? "cpf" : "cnpj"}
          placeholder="Insira CPF ou CNPJ"
          value={document}
          onChangeText={(value) => setDocument(value)}
        />
      </InputGroup>

      <InputGroup>
        <FormButton>
          <ButtonText onPress={handleForm}>Cadastrar</ButtonText>
        </FormButton>
      </InputGroup>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "90%",
    marginBottom: 70,
  },

  documentInput: {
    width: "100%",
    height: 45,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: "#fff",
  },
});

export default Form;
