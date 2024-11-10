import React, { useState } from "react";
import { View, Text, Button, StyleSheet,  ScrollView } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker'; // Asegúrate de instalar este paquete
import { Picker } from "@react-native-picker/picker";

const RegisterMedicalInfo = ({ navigation, route }: any) => {
  const {
    name,
    curp,
    nss,
    largeText,
    highContrast,
    password,
  } = route.params;

  const [birthDate, setBirthDate] = useState(new Date());
  const [bloodType, setBloodType] = useState("");
  const [disabilityType, setDisabilityType] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || birthDate;
    setShowDatePicker(false);
    setBirthDate(currentDate);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Datos Médicos</Text>

      {/* DateTimePicker for Birth Date */}
      <Text style={styles.label}>Fecha de Nacimiento</Text>
      <Button title="Selecciona tu fecha de nacimiento" onPress={() => setShowDatePicker(true)} />
      {showDatePicker && (
        <DateTimePicker
          value={birthDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <Text style={styles.input}>{birthDate.toDateString()}</Text>

      {/* Picker for Blood Type */}
      <Text style={styles.label}>Tipo de Sangre</Text>
      <Picker
        selectedValue={bloodType}
        onValueChange={(itemValue) => setBloodType(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecciona tu tipo de sangre" value="" />
        <Picker.Item label="A+" value="A+" />
        <Picker.Item label="A-" value="A-" />
        <Picker.Item label="B+" value="B+" />
        <Picker.Item label="B-" value="B-" />
        <Picker.Item label="O+" value="O+" />
        <Picker.Item label="O-" value="O-" />
        <Picker.Item label="AB+" value="AB+" />
        <Picker.Item label="AB-" value="AB-" />
      </Picker>

      {/* Picker for Disability Type */}
      <Text style={styles.label}>Tipo de Discapacidad</Text>
      <Picker
        selectedValue={disabilityType}
        onValueChange={(itemValue) => setDisabilityType(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecciona el tipo de discapacidad" value="" />
        <Picker.Item label="Visual" value="Visual" />
        <Picker.Item label="Auditiva" value="Auditiva" />
        <Picker.Item label="Motriz" value="Motriz" />
        <Picker.Item label="Intelectual" value="Intelectual" />
        <Picker.Item label="Psicosocial" value="Psicosocial" />
        <Picker.Item label="Otro" value="Otro" />
      </Picker>

      {/* Button to go to the next screen */}
      <View style={styles.buttonContainer}>
        <Button
          title="Siguiente"
          onPress={() =>
            navigation.navigate("RegisterConfirmation", {
              name,
              curp,
              nss,
              largeText,
              highContrast,
              password,
              birthDate,
              bloodType,
              disabilityType,
            })
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#3498db",
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    color: "#2c3e50",
  },
  input: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: "#3498db",
    borderRadius: 5,
    width: "100%",
    marginBottom: 20,
    textAlign: "center",
    backgroundColor: "#fff",
  },
  picker: {
    width: "100%",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#3498db",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
  },
});

export default RegisterMedicalInfo;
