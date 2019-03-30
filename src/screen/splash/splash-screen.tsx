import React, { SFC, useState, useEffect } from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import { store } from '@state/index'
//import { useEffect } from 'react';
import { appInit } from '@domain/lifecycle/app-init';
import { getAuthAction } from '@state/auth';
import { setNavRef } from '@nav/util/nav-service';

type StateParams = {
  //declare nav state params here
}

interface Props extends Navigation<StateParams> {
  //declare props here
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, marginHorizontal: 20 },
  button: { height: 40, width: '80%', marginHorizontal: '10%', backgroundColor: 'grey' },
  buttonText: { color: 'white', fontSize: 20, textAlign: 'center', marginTop: 8 }
})

export const SplashScreen: SFC<Props> = ({ navigation }) => {
  const [user, setUser] = useState('truman.marcos@foomail.org');
  const [pass, setPass] = useState('AqSMUhGxgy');
  //application space entry point
  //CANT USE YET
  useEffect(() => {
    setNavRef(navigation)
    //appInit().fork(console.error, () => navigation.navigate("Tabs"))
  }, [])
  //appInit().fork(console.error, () => navigation.navigate('ProductList'))

  //() => navigation.navigate('ProductList')

  return (
    <View style={{ marginVertical: 40 }}>
      <TextInput
        style={{ ...styles.input, marginTop: 120 }}
        placeholder={'email@address.here'}
        onChangeText={setUser}
        value={user}
      />
      <TextInput
        style={styles.input}
        placeholder={'passWordHere'}
        onChangeText={setPass}
        value={pass}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={() => store.dispatch(getAuthAction(user, pass))}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}