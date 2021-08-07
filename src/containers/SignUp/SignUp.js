import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, Button } from 'react-native';

const SignUp = ({ navigation }) => {
  const { control, handleSubmit } = useForm();


  const onSubmit = data => console.log('OnSubmit data =>', data);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SignUp</Text>
      <Button
        title="Ir para o Login"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

export default SignUp;
