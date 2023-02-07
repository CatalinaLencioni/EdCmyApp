import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
  <View style={styles.container}>
  <View style={styles.header}>
  <TouchableOpacity>
  <Ionicons name="ios-menu" size={32} color="#000" />
  </TouchableOpacity>
  <Text style={styles.headerTitle}>Menú</Text>
  </View>
  <Text style={styles.title}>Economia del Conocimiento de Córdoba</Text>
  <Image
  source={require('./assets/landing.png')}
  style={styles.image}
  />
  <StatusBar style="auto" />
  </View>
  );
  }
  
  const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  },
  header: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: 40,
  paddingHorizontal: 20,
  },
  headerTitle: {
  fontWeight: 'bold',
  fontSize: 20,
  },
  image: {
  width: 400,
  height: 200,
  marginTop: -500,
  },
  title: {
  fontWeight: 'bold',
  fontSize: 20,
  marginTop: -50,
  },
  });