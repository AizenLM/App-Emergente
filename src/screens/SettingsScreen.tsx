import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const SettingsScreen = () => {
  const [fontSize, setFontSize] = useState(16);
  const [fontStyle, setFontStyle] = useState("normal");
  const [theme, setTheme] = useState("light");

  const applySettings = () => {
    alert(`Configuraciones aplicadas:\n- Tamaño de letra: ${fontSize}\n- Estilo de letra: ${fontStyle}\n- Tema: ${theme}`);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize }]}>Configuraciones</Text>

      {/* Control para Tamaño de Letra */}
      <View style={styles.preference}>
        <Text style={styles.label}>Tamaño de letra:</Text>
        <Slider
          style={styles.slider}
          minimumValue={12}
          maximumValue={30}
          value={fontSize}
          onValueChange={(value) => setFontSize(value)}
        />
        <Text style={styles.value}>{Math.round(fontSize)} px</Text>
      </View>

      {/* Control para Estilo de Letra */}
      <View style={styles.preference}>
        <Text style={styles.label}>Estilo de letra:</Text>
        <Picker
          selectedValue={fontStyle}
          style={styles.picker}
          onValueChange={(itemValue) => setFontStyle(itemValue)}
        >
          <Picker.Item label="Normal" value="normal" />
          <Picker.Item label="Negrita" value="bold" />
          <Picker.Item label="Cursiva" value="italic" />
        </Picker>
      </View>

      {/* Control para Tema */}
      <View style={styles.preference}>
        <Text style={styles.label}>Tema:</Text>
        <Picker
          selectedValue={theme}
          style={styles.picker}
          onValueChange={(itemValue) => setTheme(itemValue)}
        >
          <Picker.Item label="Claro" value="light" />
          <Picker.Item label="Oscuro" value="dark" />
        </Picker>
      </View>

      {/* Botón para Aplicar Configuraciones */}
      <TouchableOpacity style={styles.applyButton} onPress={applySettings}>
        <Text style={styles.applyButtonText}>Aplicar Configuraciones</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  preference: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500",
  },
  slider: {
    width: "100%",
  },
  value: {
    textAlign: "right",
    fontSize: 16,
  },
  picker: {
    height: 40,
    width: "100%",
  },
  applyButton: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  applyButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SettingsScreen;
