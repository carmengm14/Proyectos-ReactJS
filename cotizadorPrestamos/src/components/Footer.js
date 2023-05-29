import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../utils/colors'

export default function Footer(props) {
    const {calculate} = props;
  return (
    <View style={styles.viewFooter}>
        {/* SE USA TEXT EN VEZ DE BUTTON YA QUE EN IPHONE Y ANDROID CAMBIA EL BOTTOM POR LO QUE CON TEXT PODREMOS HACER QUE SE VEA IGUAL EN AMBOS
        EL TOUCHABLE HACE QUE CUANDO PASES EL RATON SEA CLICABLE
        */}
      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.text}>CALCULAR</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
    viewFooter:{
        position: 'absolute',
        top: 370,
        bottom: 0,
        width: '100%',
        backgroundColor: colors.PRIMARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.PRIMARY_WHITE,
        textAlign: 'center',
    },
    button: {
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
        width: '75%',
    },
})