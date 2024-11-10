import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";

const NavBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navBar}>
      <TouchableOpacity accessibilityLabel="Ir a inicio">
        <IonIcon name="home" size={30} color="#ffffff" />
      </TouchableOpacity>
      <TouchableOpacity accessibilityLabel="Control por voz">
        <IonIcon name="mic" size={30} color="#ffffff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')} accessibilityLabel="Configuraciones">
        <IonIcon name="build" size={30} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#3498db",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default NavBar;
