// componentes/CadastroScreen.js
import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Platform, BackHandler } from 'react-native';

class CadastroScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            endereco: '',
            cidade: '',
            cep: '',
            telefone: '',
        };
        console.log('CadastroScreen: constructor');
    }

    componentDidMount() {
        console.log('CadastroScreen: componentDidMount');
    }

    componentWillUnmount() {
        console.log('CadastroScreen: componentWillUnmount');
    }

    imprimirDados = () => {
        const { nome, endereco, cidade, cep, telefone } = this.state;
        const { username, password } = this.props; // Recebe usuário e senha via props
        Alert.alert(
            'Dados do Cadastro',
            `Usuario: ${username} \nSenha: ${password} \nNome: ${nome} \nEndereco: ${endereco} \nCidade: ${cidade} \nCEP: ${cep} \nTelefone: ${telefone}`,
            [{ text: 'OK' }]
        );
    };

    render() {
        console.log('CadastroScreen: render');
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Cadastro</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    onChangeText={(nome) => this.setState({ nome })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Endereco"
                    onChangeText={(endereco) => this.setState({ endereco })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Cidade"
                    onChangeText={(cidade) => this.setState({ cidade })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="CEP"
                    onChangeText={(cep) => this.setState({ cep })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                    onChangeText={(telefone) => this.setState({ telefone })}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Imprimir" onPress={this.imprimirDados} />
                    <Button title="Voltar" onPress={() => this.props.onVoltar()} />
                    <Button
                        title="Sair"
                        onPress={() => {
                            if (Platform.OS === 'android') {
                                BackHandler.exitApp();
                            } else {
                                Alert.alert('Sair', 'Para sair, feche o app manualmente.');
                            }
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
});

export default CadastroScreen;