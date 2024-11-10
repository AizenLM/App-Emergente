import React from "react";
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const RegisterConfirmation = ({ route, navigation }: any) => {
  const {
    name,
    curp,
    nss,
    largeText,
    highContrast,
    password,
    birthDate,
    bloodType,
    disabilityType,
  } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Confirmación de Registro</Text>

      <View style={styles.card}>
        <Text style={styles.textLabel}>Nombre:</Text>
        <Text style={styles.textValue}>{name}</Text>

        <Text style={styles.textLabel}>CURP:</Text>
        <Text style={styles.textValue}>{curp}</Text>

        <Text style={styles.textLabel}>NSS:</Text>
        <Text style={styles.textValue}>{nss}</Text>

        <Text style={styles.textLabel}>Tamaño de texto grande:</Text>
        <Text style={styles.textValue}>{largeText ? "Sí" : "No"}</Text>

        <Text style={styles.textLabel}>Contraste alto:</Text>
        <Text style={styles.textValue}>{highContrast ? "Sí" : "No"}</Text>

        <Text style={styles.textLabel}>Fecha de Nacimiento:</Text>
        <Text style={styles.textValue}>{birthDate.toDateString()}</Text>

        <Text style={styles.textLabel}>Tipo de Sangre:</Text>
        <Text style={styles.textValue}>{bloodType}</Text>

        <Text style={styles.textLabel}>Tipo de Discapacidad:</Text>
        <Text style={styles.textValue}>{disabilityType}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 30,
  },
  textLabel: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  textValue: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 15,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  confirmButton: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    width: "45%",
  },
  editButton: {
    backgroundColor: "#f39c12",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    width: "45%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegisterConfirmation;
