import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const AddDevice = ({ route, navigation }: any) => {
  const { addDevice } = route.params; // Obtener la función addDevice desde HomeScreen
  const [deviceName, setDeviceName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');

  // Lista de tipos de dispositivos con su nombre y su ícono
  const deviceTypes = [
    { name: 'Luces', icon: 'sunny' },
    { name: 'Aire Acondicionado', icon: 'snow' },
    { name: 'Televisor', icon: 'tv' },
    { name: 'Puertas', icon: 'lock-closed' },
  ];

  const handleAddDevice = () => {
    if (deviceName.trim() === '' || selectedIcon === '') {
      Alert.alert('Error', 'Debes ingresar un nombre y seleccionar un tipo de dispositivo');
      return;
    }

    addDevice(deviceName, selectedIcon);
    navigation.goBack(); // Volver a la pantalla principal después de agregar el dispositivo
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar un nuevo dispositivo</Text>

      {/* Selección del tipo de dispositivo */}
      <View style={styles.deviceTypesContainer}>
        {deviceTypes.map((device, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.deviceButton,
              selectedIcon === device.icon && styles.selectedDeviceButton,
            ]}
            onPress={() => setSelectedIcon(device.icon)}
          >
            <IonIcon name={device.icon} size={50} color={selectedIcon === device.icon ? 'white' : '#3498db'} />
            <Text style={styles.deviceText}>{device.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Entrada para el nombre del dispositivo */}
      <TextInput
        style={styles.input}
        placeholder="Ingrese el nombre del dispositivo"
        value={deviceName}
        onChangeText={setDeviceName}
      />

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
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 20,
  },
  deviceTypesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  deviceButton: {
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
    width: 120,
    height: 120,
    borderRadius: 10,
    backgroundColor: '#ecf0f1',
    margin: 5,
  },
  selectedDeviceButton: {
    backgroundColor: '#3498db',
  },
  deviceText: {
    marginTop: 10,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default AddDevice;
