import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import colors from '../utils/colors';

export default function ResultCalculation(props){
    const {capital, interest, months, total, errorMessage} = props;
    return (
      <View style={styles.content}>
        {total && (
            <View style={styles.boxResult}>
                <Text style={styles.title}>RESUMEN</Text>
                <DataResult title={"CANTIDAD SOLICITADA:"} value={`${capital} €`}/>
                <DataResult title={"% INTERES:"} value={`${interest} %`}/>
                <DataResult title={"PLAZO DE MESES:"} value={`${months} meses`}/>
                <View style = {styles.lineStyle} />
                <DataResult title={"TOTAL A PAGAR X MES: "} value={`${total.monthlyFee} €`}/>
                <DataResult title={"TOTAL A PAGAR: "} value={`${total.totalPayable} €`}/>

            </View>
        ) }
        <View>
            <Text style = {styles.error}>{errorMessage}</Text>
        </View>
      </View>
    );
}
//COMPONENTE INTERNO PARA NO REPETIR EL CÓDIGO DE DENTRO DE LA CAJA RESULTADO:
function DataResult(props){
    const {title, value} = props;
    return(
        <View style={styles.value}>
        <Text>{title} </Text>
        <Text>{value} </Text>
    </View>
    );   
}

const styles = StyleSheet.create({
    error:{
        textAlign:'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    },
    lineStyle:{
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR_DARK,
        margin: 10,
   },
    content: {
        marginTop: 30,
        marginHorizontal: 40,
    },
    boxResult: {
        padding: 25,
        color: colors.PRIMARY_BLACK ,
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginTop:10,
        color: colors.PRIMARY_COLOR_DARK ,
    },
    title: {
        fontSize: 30,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom: 30,
    },
});