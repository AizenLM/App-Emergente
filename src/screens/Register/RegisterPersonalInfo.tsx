import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

const RegisterPersonalInfo = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [curp, setCurp] = useState("");
  const [nss, setNss] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información Personal</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="CURP"
        value={curp}
        onChangeText={setCurp}
      />
      <TextInput
        style={styles.input}
        placeholder="NSS"
        value={nss}
        onChangeText={setNss}
      />

      <Button
        title="Siguiente"
        onPress={() =>
          navigation.navigate("RegisterAccessibility", { name, curp, nss })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

export default RegisterPersonalInfo;
