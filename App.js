import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from "react-native";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const menuOptions = [
  {name: "Perfil", icon: "arrow-down-circle", onPress: () => console.log("Perfil") },
  {name: "Empresas EDC", icon: "arrow-down-circle", onPress: () => console.log("Perfil") },
  {name: "Marco Legal",  icon: "arrow-down-circle", onPress: () => console.log("Marco Legal") },
  {name: "Beneficios",  icon: "arrow-down-circle", onPress: () => console.log("Beneficios") },
  {name: "Instructivo Recor Regimenes de Beneficio EdC",  icon: "arrow-down-circle", onPress: () => console.log("Instructivo Recor Regimenes de Beneficio EdC"),},
  {name: "Beneficiario Provisiorio", icon: "arrow-down-circle", onPress: () => console.log("Beneficiario Provisiorio"),},
  {name: "Regimen EdC", icon: "arrow-down-circle", onPress: () => console.log("Regimen EdC") },
  {name: "Instructivo de validación Recor", icon: "arrow-down-circle", onPress: () => console.log("Instructivo de validación Recor"),},
  {name: "Preguntas Frecuentes", icon: "arrow-down-circle", onPress: () => console.log("Perfil") },
];

export default function App() {
  return (
    <View style={styles.container}>
       <Image source={require("./assets/landing.png")} style={styles.image} />
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons style={styles.containermenu} name="ios-menu" size={32} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Menú</Text>
      </View>
      <ScrollView style={styles.menu}>
        {menuOptions.map((option) => (
          <TouchableOpacity key={option.name} onPress={option.onPress}>
            <View style={styles.menuOptionContainer}>
              <Ionicons name={option.icon} size={24} color="#000" />
              <Text style={styles.menuOption}>{option.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 30,
  },
  image: {
    width: 400,
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: -50,
  },
  menuOptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  containermenu: {
    marginBottom: 30,
  }
});
