import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const LoginScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Simulamos la autenticación con credenciales predefinidas
  const handleLogin = () => {
    if (username === "usuario" && password === "1234") {
      // Si el nombre de usuario y la contraseña coinciden, se navega a la pantalla principal
      navigation.navigate("Home");
    } else {
      // Si las credenciales son incorrectas, mostramos un mensaje de error
      Alert.alert("Error", "Credenciales incorrectas");
    }
  };
  const handleRegister = ()=>{
    navigation.navigate("RegisterPersonalInfo")
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>¡Bienvenido a tu Casa Inteligente!</Text>
      </View>
      <View style={styles.login}>
        <Text style={styles.title}>Iniciar sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <View style={styles.hr} />
        <View style={styles.contentRegister}>
        <Text>Nuevo en nuestra aplicacion? </Text>
        <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
          <Text style={styles.textRegister}>Crear Cuenta</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    padding: 10,
  },
  login: {
    flex: 1,
    marginTop: 30,
  },
  hr: {
    alignSelf: 'center',
    width: '80%',         // Ajusta el ancho de la línea
    height: 1,            // Altura de la línea
    backgroundColor: '#ccc', // Color de la línea
    marginVertical: 20,   // Espacio encima y debajo de la línea
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonRegister: {
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
    width: 250,
    alignSelf: 'center'

  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  contentRegister: {
    alignItems: "center"
  },
  textRegister: {
    color: "#b92727"
  }
});

export default LoginScreen;
