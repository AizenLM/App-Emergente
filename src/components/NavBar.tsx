import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,

} from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const NavBar = ({ navigation }: any) => {
  return (
    <View>
      <View style={styles.navBar}>
        <TouchableOpacity>
          <IonIcon name="home" size={30}></IonIcon>
        </TouchableOpacity>
        <TouchableOpacity>
          <IonIcon name="mic" size={30}></IonIcon>
        </TouchableOpacity>
        <TouchableOpacity
        >
          <IonIcon name="build" size={30}></IonIcon>
        </TouchableOpacity>
      </View>
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
    
})
export default NavBar;