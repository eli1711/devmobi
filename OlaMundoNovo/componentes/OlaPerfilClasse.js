import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Nome:Eli Hofni Mariano</Text>
        <Text>Endereço:Rua Doutor Alberto Catani,175</Text>
        <Text>Telefone:16-993999674</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
