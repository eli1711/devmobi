import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import OlaPerfilClasse from './componentes/OlaPerfilClasse';
import OlaPerfilFuncao from './componentes/OlaPerfilFuncao';

export default function App() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <View style={styles.container}>
      {/* Formulário de entrada */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
      />

      {/* Botão para enviar os dados */}
      <Button title="Enviar" onPress={handleSubmit} />

      {/* Exibe os dados após o envio */}
      {submitted && (
        <View style={styles.profileContainer}>
          <OlaPerfilFuncao nome={nome} endereco={endereco} telefone={telefone} />
          <OlaPerfilClasse nome={nome} endereco={endereco} telefone={telefone} />
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  profileContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
