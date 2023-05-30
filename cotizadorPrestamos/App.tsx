import React, {useState, useEffect} from "react";
import { StyleSheet,
         View,
         Text,
         SafeAreaView,
         StatusBar,
         YellowBox } from "react-native";
import colors from "./src/utils/colors.js";
import Form from "./src/components/Form.js";
import Footer from "./src/components/Footer.js";
import ResultCalculation from "./src/components/ResultCalculation.js";

//YellowBox.ignoreWarnings([])

export default function App(){
  const[capital, setCapital ] = useState(null);
  const[interest, setInterest] = useState(null);
  const[months, setMonths] = useState(null);
  const[total, setTotal] = useState(null) ;
  const[errorMessage, setErrorMessage]=useState('');
  
  const calculate = () => {
    reset();

    if(!capital){
      setErrorMessage("Añade la cantidad que quieres solicitar");
    }else if(!interest){
      setErrorMessage("Añade el interes del prestamo");
    }else if(!months){
      setErrorMessage("Selecciona los meses a financiar");
    }else{
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, - months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: ((fee*months).toFixed(2).replace('.',',')),
      });
     /* console.log(fee.toFixed(2).replace('.', ','));
      console.log("Total: ", (fee*months).toFixed(2).replace('.',','));
      console.log(fee * months);*/
    }
  };
  useEffect(() => {
    if(capital && interest && months){
      calculate();
    }else{
      reset();
    }
  }, [capital, interest, months])

  const reset = () => {
    setErrorMessage("");
    setTotal(null);
  }

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

      <ResultCalculation 
        capital = {capital}
        interest = {interest}
        months = {months}
        total = {total}
        errorMessage={errorMessage}/>

       <Footer calculate={calculate}/>
      
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