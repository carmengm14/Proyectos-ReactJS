import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, YellowBox } from "react-native";
import colors from "./src/utils/colors.js";
import Form from "./src/components/Form.js";

YellowBox.ignoreWarnings([])


export default function App(){
  return(
    <>
    <StatusBar barStyle= "light-content"/>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}>Cotizador de Préstamos</Text>
        <Form />
      </SafeAreaView>

      <View>
      <Text>Resultado</Text>
      </View>

      <View>
      <Text>Footer</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,

  },
});