import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const iconOptions = [
  'lightbulb',
  'fan',
  'television',
  'speaker',
  'fridge',
  'air-conditioner',
];

const AddDevice = ({ route, navigation }: any) => {
  const { addDevice } = route.params;

  const [name, setName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');
  const [ip, setIp] = useState('');

  const handleAddDevice = () => {
    if (!name || !ip || !selectedIcon) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    addDevice(name, selectedIcon, ip);
    Alert.alert('Éxito', `Dispositivo "${name}" agregado con éxito.`);
    navigation.goBack();
  };

  const renderIconOption = (icon: string) => (
    <TouchableOpacity
      key={icon}
      style={[
        styles.iconButton,
        selectedIcon === icon && styles.selectedIconButton,
      ]}
      onPress={() => setSelectedIcon(icon)}
    >
      <MaterialCommunityIcons name={icon} size={50} color="#ffffff" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Dispositivo</Text>

      {/* Campo para el nombre */}
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="label-outline" size={24} color="#34495e" />
        <TextInput
          style={styles.input}
          placeholder="Nombre del dispositivo"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Selección de íconos */}
      <Text style={styles.label}>Selecciona un tipo de dispositivo</Text>
      <FlatList
        data={iconOptions}
        renderItem={({ item }) => renderIconOption(item)}
        keyExtractor={(item) => item}
        numColumns={2} // Definir el número de columnas a 2
        contentContainerStyle={styles.iconList}
      />

      {/* Campo para la dirección IP */}
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="web" size={24} color="#34495e" />
        <TextInput
          style={styles.input}
          placeholder="IP del dispositivo"
          value={ip}
          onChangeText={setIp}
          keyboardType="default"
        />
      </View>

      {/* Botón para agregar el dispositivo */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddDevice}>
        <Text style={styles.addButtonText}>Agregar Dispositivo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 10,
  },
  iconList: {
    marginBottom: 15,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#3498db',
    borderRadius: 15,
    padding: 30,  // Aumentado para íconos más grandes
    elevation: 5, // Añade sombra para un efecto más 3D
    marginBottom: 20, // Espacio entre filas
  },
  selectedIconButton: {
    borderColor: '#2ecc71',
    backgroundColor: '#ecf0f1',
  },
  addButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddDevice;
