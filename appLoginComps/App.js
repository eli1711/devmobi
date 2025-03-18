// App.js
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './componentes/LoginScreen';
import CadastroScreen from './componentes/CadastroScreen';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedin: false, username: '', password: '' };
        console.log('App: constructor');
    }

    componentDidMount() {
        console.log('App: componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('App: componentDidUpdate', prevState, this.state);
    }

    componentWillUnmount() {
        console.log('App: componentWillUnmount');
    }

    handleLogin = (username, password) => {
        this.setState({ loggedin: true, username, password }); // Atualiza estados com usuário e senha
    };

    handleVoltar = () => {
        this.setState({ loggedin: false, username: '', password: '' }); // Reseta estados
    };

    render() {
        console.log('App: render');
        return (
            <View style={styles.container}>
                {this.state.loggedin ? (
                    <CadastroScreen
                        onVoltar={this.handleVoltar}
                        username={this.state.username} // Passa usuário e senha como props
                        password={this.state.password}
                    />
                ) : (
                    <LoginScreen onLogin={this.handleLogin} />
                )}
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
});