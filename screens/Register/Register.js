import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [documento, setDocumento] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [genero, setGenero] = useState('');
    const [edad, setEdad] = useState('');
    const [telefono, setTelefono] = useState('');
    const handleRegister = () => {
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>Registro</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nombres"
                    value={nombres}
                    onChangeText={setNombres}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Apellidos"
                    value={apellidos}
                    onChangeText={setApellidos}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Documento"
                    value={documento}
                    onChangeText={setDocumento}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Fecha de Nacimiento"
                    value={fechaNacimiento}
                    onChangeText={setFechaNacimiento}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Genero"
                    value={genero}
                    onChangeText={setGenero}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Edad"
                    value={edad}
                    onChangeText={setEdad}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Telefono"
                    value={telefono}
                    onChangeText={setTelefono}
                    keyboardType="phone-pad"
                />

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
                    <Text  style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default RegisterScreen;