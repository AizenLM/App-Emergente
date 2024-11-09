import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker as RNPicker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({ navigation }: any) => {
  // Estado para los campos del formulario
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sex, setSex] = useState('Male');
  const [disability, setDisability] = useState('None');

  // Función para manejar el registro
  const handleRegister = async () => {
    // Guardar los datos en AsyncStorage
    const userData = {
      firstName,
      lastName,
      birthDate,
      phoneNumber,
      email,
      password, // Añadido el campo de contraseña
      sex,
      disability,
    };

    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      // Navegar a la pantalla principal después del registro
      navigation.navigate('Home');
    } catch (error) {
      console.log('Error al guardar los datos en AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registro de Usuario</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={firstName}
        onChangeText={setFirstName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={lastName}
        onChangeText={setLastName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Fecha de Nacimiento (DD/MM/AAAA)"
        value={birthDate}
        onChangeText={setBirthDate}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Número Telefónico"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Campo de Contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} // Oculta el texto mientras se escribe
      />

      <Text style={styles.label}>Sexo:</Text>
      <RNPicker
        selectedValue={sex}
        onValueChange={(itemValue) => setSex(itemValue)}
        style={styles.picker}
      >
        <RNPicker.Item label="Masculino" value="Male" />
        <RNPicker.Item label="Femenino" value="Female" />
        <RNPicker.Item label="Otro" value="Other" />
      </RNPicker>

      <Text style={styles.label}>Tipo de Discapacidad:</Text>
      <RNPicker
        selectedValue={disability}
        onValueChange={(itemValue) => setDisability(itemValue)}
        style={styles.picker}
      >
        <RNPicker.Item label="Ninguna" value="None" />
        <RNPicker.Item label="Discapacidad auditiva" value="Hearing" />
        <RNPicker.Item label="Discapacidad visual" value="Visual" />
        <RNPicker.Item label="Discapacidad motriz" value="Motor" />
        <RNPicker.Item label="Discapacidad cognitiva" value="Cognitive" />
      </RNPicker>

      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f4f4f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
});

export default RegisterScreen;
