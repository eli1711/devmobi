import React from 'react';
import { Text, View } from 'react-native';

class OlaPerfilClasse extends React.Component {
  render() {
    const { nome, endereco, telefone } = this.props;

    return (
      <View>
        <Text>Nome (Classe): {nome}</Text>
        <Text>Endereço (Classe): {endereco}</Text>
        <Text>Telefone (Classe): {telefone}</Text>
      </View>
    );
  }
}

export default OlaPerfilClasse;
