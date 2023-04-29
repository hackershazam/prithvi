import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Handle sign-in logic here
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.signInText1}>Prithvi</Text>
      <Text style={styles.signInText}>Sign In</Text>
      <Text style={styles.signInDescription}>Please sign Up in to continue.</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View
        style={{
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text>Don't have an account yet? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#ff6600',
              outlineWidth: 0,
              borderWidth: 0,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 20,
    margin: 10,
    width: '90%',
    height: 40,
    borderRadius: 5,
  },
  button: {
    width: '90%',
  },
  buttonText: {
    backgroundColor: '#ff6600',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    borderRadius: 5,
    textAlign: 'center',
  },
  signInText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff6600',
  },
    signInText1: {
    fontSize: 40,
    padding: 10,
    fontWeight: 'bold',
    color: '#ff6600',
  },
  signInDescription: {
    fontSize: 14,
  },
});

export default Signup;