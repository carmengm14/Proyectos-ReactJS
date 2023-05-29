import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../utils/colors'

export default function Footer() {
  return (
    <View style={styles.viewFooter}>
        {/* SE USA TEXT EN VEZ DE BUTTON YA QUE EN IPHONE Y ANDROID CAMBIA EL BOTTOM POR LO QUE CON TEXT PODREMOS HACER QUE SE VEA IGUAL EN AMBOS*/}
      <Text>Footer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    viewFooter:{
        position: 'absolute',
        bottom: 0,
        width: "100%",
        backgroundColor: colors.PRIMARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',

    },
})