import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import {  TextInput } from "react-native-paper";
import * as React from "react";
import { Button } from "react-native-paper";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <View> 
      <View>
      <Image
      style={styles.imagem}
      source={{ uri: "https://www.mojosavings.com/wp-content/uploads/2013/08/sephora.jpg" }}
    />
    </View>
    <View style={styles.container}>
      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={(emailDigitado) => setEmail(emailDigitado)}
      />
      <TextInput
        label="Senha"
        mode="outlined"
        value={senha}
        onChangeText={(senhaDigitada) => setSenha(senhaDigitada)}
        secureTextEntry={true}
      />
      <br></br>
      <Button
        icon="heart"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Entrar
      </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
      flex: 1,
        alignItems: "center",
        justifyContent: "center",
       marginTop: 150,
    },
  h1: {
    frontSize: "30px",
    fontWeight: "bold",
  },
  imagem:{
    height: 200,
    width: 500,
    },
});
