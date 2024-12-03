import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NavBar from '../components/NavBar';
 // Reemplaza con la dirección IP de tu ESP8266


  
const HomeScreen = ({ navigation }: any) => {
  // Estado para almacenar los dispositivos agregados
  const ESP8266_IP = 'http://192.168.201.58';
  const [devices, setDevices] = useState<any[]>([]);
  const [isLedOn, setIsLedOn] = useState(false); // Estado para rastrear si el LED está encendido

  const toggleLed = async () => {
    try {
      // Determina la ruta en función del estado actual del LED
      const route = isLedOn ? '/L' : '/H';
      await fetch(`${ESP8266_IP}${route}`);
      
      // Alterna el estado del LED después de una respuesta exitosa
      setIsLedOn(!isLedOn);

      // Muestra una alerta indicando el nuevo estado
      Alert.alert(`LED ${!isLedOn ? "encendido" : "apagado"}`);
    } catch (error) {
      Alert.alert("Error", "No se pudo conectar al ESP8266");
    }
  };

  // Función para manejar el control de los dispositivos
  const handleControlDevice = (deviceName: string) => {
    Alert.alert(
      `${deviceName} controlado`,
      `${deviceName} se ha encendido/apagado.`
    );
  };

  // Función para agregar un nuevo dispositivo
  const addDevice = (name: string, icon: string) => {
    setDevices((prevDevices) => [
      ...prevDevices,
      { name, icon }, // Agrega el dispositivo a la lista
    ]);
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Encabezado de bienvenida */}
        <View style={styles.header}>
          <Text style={styles.title}>¡Bienvenido a tu Casa Inteligente!</Text>
          <Text style={styles.subtitle}>
            Controles de dispositivos para personas con discapacidad
          </Text>
        </View>

        {/* Descripción simple */}
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionText}>
            Usa los botones a continuación para controlar los dispositivos en tu
            hogar.
          </Text>
        </View>

        {/* Controles de dispositivos */}
        <View style={styles.devicesContainer}>
          {devices.length > 0 ? (
            devices.map((device, index) => (
              <TouchableOpacity
                key={index}
                style={styles.deviceButton}
                onPress={() => toggleLed()}
              >
                <IonIcon name={device.icon} size={40} color="white" />
                <Text style={styles.deviceText}>{device.name}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noDevicesText}>No hay dispositivos aún.</Text>
          )}
        </View>

        {/* Botón para agregar un dispositivo */}
        <View style={styles.addDeviceContainer}>
          <TouchableOpacity
            style={styles.addDeviceButton}
            onPress={() => navigation.navigate('AddDevice', { addDevice })}
          >
            <Text style={styles.addDeviceText}>Agregar Dispositivo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <NavBar />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: 18,
    color: '#7f8c8d',
  },
  instructionContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  instructionText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#34495e',
  },
  devicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  deviceButton: {
    backgroundColor: '#3498db',
    padding: 20,
    borderRadius: 10,
    width: 150,
    alignItems: 'center',
    marginBottom: 15,
  },
  deviceText: {
    marginTop: 10,
    fontSize: 18,
    color: 'white',
  },
  noDevicesText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#7f8c8d',
  },
  addDeviceContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 45,
  },
  addDeviceButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  addDeviceText: {
    fontSize: 18,
    color: 'white',
  },
});

export default HomeScreen;
