import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Alert, Platform } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Writer from './components/Writer'

const TAMANHO_CIRCULO = 100

const Circulo = ({ onPress }) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.containerCirculo]}>
      <Text style={styles.titulo}>Animações em React Native</Text>
      <Writer/>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.circulo]}>
          <AntDesign name="arrowright" size={28} color="#8C4227"/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default function App(){
  const onPress = () => {
    let mensagem = "Você clicou! 👏"
    if(Platform.OS === 'web'){
      alert(mensagem)
    }else{
      Alert.alert(
        'Aviso',
        mensagem, 
        [{ 
          text: 'Cancelar',
          onPress: () => console.log('Pressionou o cancelar'),
          style: 'cancel'
        },
        {
          text: 'Ok',
          onPress: () => console.log('Pressionou o Ok')
        }],{
        cancelable: false // Tira o comportamento de cancelar clicando em qualquer lugar
        })
      }
    } 
  return(
    <View style = {styles.container}>
      <Circulo onPress={onPress}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2CDAC',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 25,
    color: '#d99873',
    padding: 20
  },
  containerCirculo: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: TAMANHO_CIRCULO
  },
  circulo: {
    backgroundColor: '#D99873',
    width: TAMANHO_CIRCULO,
    height: TAMANHO_CIRCULO,
    borderRadius: TAMANHO_CIRCULO/2,
    justifyContent: 'center',
    alignItems: 'center'
  }
})