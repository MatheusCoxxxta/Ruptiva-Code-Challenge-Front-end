import React, { useState } from "react";
import { Handle, StyleSheet, View } from "react-native";
import {
  FormLabel,
  InputGroup,
  FormInput,
  FormButton,
  ButtonText,
  WarningLabel,
} from "./style";
import { TextInputMask } from "react-native-masked-text";
import { formatDocument } from "../../../../tools/documentInputFormat";

const Form = (props: { handle: (name: string, document: string) => void }) => {
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [requireName, setRequireName] = useState("");
  const [requireDocument, setRequireDocument] = useState("");

  const handleForm = () => {
    let docFormated: string = formatDocument(document);

    if (name && docFormated) {
      props.handle(name, docFormated);
      setName("");
      setDocument("");
    }
    if (!name) setRequireName("Insira um nome!");
    if (!document) setRequireDocument("Insira um CPF ou CNPJ!");
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
      {requireName && !name ? (
        <WarningLabel> {requireName} </WarningLabel>
      ) : null}
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
      {requireDocument && !document ? (
        <WarningLabel> {requireDocument} </WarningLabel>
      ) : null}

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
    marginBottom: 100,
  },

  documentInput: {
    width: "100%",
    height: 45,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 10,
    backgroundColor: "#fff",
  },
});

export default Form;
