import React, {useState} from "react";
import { StyleSheet,
         View,
         Text,
         SafeAreaView,
         StatusBar,
         YellowBox } from "react-native";
import colors from "./src/utils/colors.js";
import Form from "./src/components/Form.js";
import Footer from "./src/components/Footer.js";

//YellowBox.ignoreWarnings([])


export default function App(){
  const[capital, setCapital ] = useState(null);
  const[interest, setInterest] = useState(null);
  const[months, setMonths] = useState(null);

  return(
    <>
    <StatusBar barStyle= "light-content"/>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de Préstamos</Text>
        <Form 
          setCapital={setCapital} 
          setInterest={setInterest} 
          setMonths={setMonths}/>
      </SafeAreaView>

      <View>
      <Text>Resultado</Text>
      </View>

      <View>
        <Footer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    height: 290,
    alignItems: "center",
  },
  background:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width:'100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position:'absolute',
    //position absolute hace que se ponga arriba.
    //zIndex -1 lo que hace es decir que se ponga debajo de los elementos que esten bajo de el. Básicamente es ponerlo en el fondo del diseño.
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,

  },
});