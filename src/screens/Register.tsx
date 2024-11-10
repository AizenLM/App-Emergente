import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Button,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [curp, setCurp] = useState("");
  const [nss, setNss] = useState("");
  const [bloodType, setBloodType] = useState("A+");
  const [birthDate, setBirthDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [gender, setGender] = useState("Masculino");

  const handleRegister = () => {
    Alert.alert(
      "Registro Exitoso",
      `Nombre: ${name}\nContraseña: ${password}\nDirección: ${address}\nTeléfono: ${phone}\nCorreo: ${email}\nCURP: ${curp}\nNSS: ${nss}\nTipo de Sangre: ${bloodType}\nFecha de Nacimiento: ${birthDate.toLocaleDateString()}\nSexo: ${gender}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro</Text>

      {/* Nombre Completo */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre Completo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre Completo"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Contraseña */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {/* Dirección */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Dirección:</Text>
        <TextInput
          style={styles.input}
          placeholder="Dirección"
          value={address}
          onChangeText={setAddress}
        />
      </View>

      {/* Teléfono */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Teléfono:</Text>
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>

      {/* Correo Electrónico */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Correo Electrónico:</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      {/* CURP */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>CURP:</Text>
        <TextInput
          style={styles.input}
          placeholder="CURP"
          value={curp}
          onChangeText={setCurp}
        />
      </View>

      {/* NSS */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>NSS (Número de Seguridad Social):</Text>
        <TextInput
          style={styles.input}
          placeholder="NSS"
          value={nss}
          onChangeText={setNss}
        />
      </View>

      {/* Tipo de Sangre */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tipo de Sangre:</Text>
        <Picker
          selectedValue={bloodType}
          style={styles.picker}
          onValueChange={(itemValue) => setBloodType(itemValue)}
        >
          <Picker.Item label="A+" value="A+" />
          <Picker.Item label="A-" value="A-" />
          <Picker.Item label="B+" value="B+" />
          <Picker.Item label="B-" value="B-" />
          <Picker.Item label="AB+" value="AB+" />
          <Picker.Item label="AB-" value="AB-" />
          <Picker.Item label="O+" value="O+" />
          <Picker.Item label="O-" value="O-" />
        </Picker>
      </View>

      {/* Fecha de Nacimiento */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Fecha de Nacimiento:</Text>
        <Button title="Seleccionar Fecha" onPress={() => setShowDatePicker(true)} />
        {showDatePicker && (
          <DateTimePicker
            value={birthDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) setBirthDate(selectedDate);
            }}
          />
        )}
        <Text style={styles.dateText}>
          Fecha seleccionada: {birthDate.toLocaleDateString()}
        </Text>
      </View>

      {/* Sexo */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Sexo:</Text>
        <Picker
          selectedValue={gender}
          style={styles.picker}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Femenino" value="Femenino" />
          <Picker.Item label="Otro" value="Otro" />
        </Picker>
      </View>

      {/* Botón de Registro */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Registrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    fontSize: 16,
  },
  picker: {
    height: 50,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  dateText: {
    fontSize: 16,
    marginTop: 5,
  },
  registerButton: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  registerButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RegisterScreen;
