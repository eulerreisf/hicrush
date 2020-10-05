import React from 'react';
import { View, Text, Button } from 'react-native';

const SignUp = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>SignUp</Text>
    <Button
      title="Ir para o Login"
      onPress={() => navigation.navigate('SignIn')}
    />
  </View>
);

export default SignUp;
