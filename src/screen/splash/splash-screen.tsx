import React, { SFC } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
//import { useEffect } from 'react';
import { appInit } from '@domain/lifecycle/app-init';

type StateParams = {
  //declare nav state params here
}

interface Props extends Navigation<StateParams> {
  //declare props here
}

export const SplashScreen: SFC<Props> = ({ navigation }) => {

  //application space entry point
  //CANT USE YET
  // useEffect(() => {
  //     appInit().fork(console.error, ()=> props.navigation.navigate("Tabs"))
  // })
  appInit().fork(console.error, () => navigation.navigate('ProductList'))

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
      <View style={{ paddingTop: 100, width: 50, height: 50, backgroundColor: 'powderblue' }}>

        <Text>Splash</Text>

      </View>
    </TouchableOpacity>

  );
}