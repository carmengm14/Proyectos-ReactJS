import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import colors from '../utils/colors'

export default function ResultCalculation(props){
    const {capital, interest, months, total, errorMessage} = props;
    return (
      <View>
        {total && <Text>RESULTADO TOTAL</Text>};
        <View>
            <Text style = {styles.error}>{errorMessage}</Text>>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    error:{
        textAlign:'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    }
});