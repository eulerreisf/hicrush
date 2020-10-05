import React from 'react';
import { View, Text, Button } from 'react-native';

const SignIn = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>SignIn</Text>
    <Button
      title="Ir para o Cadastro"
      onPress={() => navigation.navigate('SignUp')}
    />
  </View>
);

export default SignIn;
