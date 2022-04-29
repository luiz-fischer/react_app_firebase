// screens/LoginScreen.js
import { Button, ImageBackground, Text, TextInput, View } from "react-native";
import styles from "../components/styles";
import { useEffect, useState } from "react";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  useEffect(() => {
    console.log(email, senha);
  }, [email, senha]);
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/login.jpg")}
    >
      <View style={styles.sub_container}>
        <Text style={styles.container}>Faça seu Login</Text>
        <Text>Digite seu E-mail</Text>
        <TextInput onChangeText={setEmail} />
        <Text>Digite sua Senha</Text>
        <TextInput onChangeText={setSenha} secureTextEntry={true} />
        <Button
          title={"Fazer Login"}
          onPress={() => navigation.navigate("Login")}
        ></Button>
      </View>
    </ImageBackground>
  );
}
