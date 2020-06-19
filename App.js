import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from "./components/CustomeButton";
export default function App() {
  return (
    <View style={styles.container}>
      <CustomButton onPress={()=> alert(`Demo 1`) } title="Demo 1" />
      <CustomButton onPress={()=> alert(`Demo 2`) } title="Demo 2" />
      <CustomButton onPress={()=> alert(`Demo 3`) } title="Demo 3" />
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
});
