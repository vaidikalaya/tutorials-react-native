import React from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {

  function showAlert() {
    alert('Button pressed successfully');
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello World</Text>
      <Button title="Click me" onPress={() => showAlert()}></Button>
    </View>
  );
}