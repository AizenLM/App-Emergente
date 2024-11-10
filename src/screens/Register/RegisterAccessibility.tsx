import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Switch } from "react-native";

const RegisterAccessibility = ({ navigation, route }: any) => {
  const { name, curp, nss } = route.params;

  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preferencias de Accesibilidad</Text>

      <View style={styles.option}>
        <Text>Tamaño de texto grande</Text>
        <Switch value={largeText} onValueChange={setLargeText} />
      </View>

      <View style={styles.option}>
        <Text>Contraste alto</Text>
        <Switch value={highContrast} onValueChange={setHighContrast} />
      </View>

      <Button
        title="Siguiente"
        onPress={() =>
          navigation.navigate("RegisterSecurity", {
            name,
            curp,
            nss,
            largeText,
            highContrast,
          })
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
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
});

export default RegisterAccessibility;
