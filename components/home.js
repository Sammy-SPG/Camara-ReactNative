import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default function Home({ navigation }) {

    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    if (!fontsLoaded) {
        return <AppLoading />;
      }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calcular IMC</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', position: 'relative', width: '100%' }}>
                <TextInput placeholder="Ingresa el peso" style={styles.inputText} keyboardType="numeric" onChangeText={(value) => setPeso(parseFloat(value))} />
                <TextInput placeholder="Ingresa la altura" style={styles.inputText} keyboardType="numeric" onChangeText={(value) => setAltura(parseFloat(value))} />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Camera', {
                    IMC: (typeof peso === 'number' && typeof altura === 'number') ?
                        (Math.round(peso / Math.pow(altura, 2))) : 'No es numero'
                })}
            >
                <Text style={styles.text}>Tomar foto</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 22
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 30,
        fontFamily: 'Inter_900Black'
    },
    inputText: {
        borderBottomWidth: 1,
        borderColor: '#292929',
        width: '85%',
        margin: 5,
        padding: 5,
        borderRadius: 5,
    },
    button: {
        width: '60%',
        borderRadius: 20,
        padding: 5,
        backgroundColor: '#FA8072',
        marginTop: 10,
    },
    text: {
        textAlign: 'center',
        color: '#eee',
        fontSize: 18,
    }
})