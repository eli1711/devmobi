import React from 'react';
import { Text, View } from 'react-native';

// Componente funcional que exibe os dados
const OlaPerfilFuncao = ({ nome, endereco, telefone }) => (
  <View>
    <Text>Nome (Função): {nome}</Text>
    <Text>Endereço (Função): {endereco}</Text>
    <Text>Telefone (Função): {telefone}</Text>
  </View>
);

export default OlaPerfilFuncao;
