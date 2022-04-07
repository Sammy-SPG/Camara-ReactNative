import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';


export default function Home({navigation}) {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calcular indice de masa corporal</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', position: 'relative', width: '100%' }}>
                <TextInput placeholder="Ingresa el peso" style={styles.inputText} keyboardType="numeric" onChangeText={(value)=> setPeso(parseFloat(value))}/>
                <TextInput placeholder="Ingresa la altura" style={styles.inputText} keyboardType="numeric" onChangeText={(value)=> setAltura(parseFloat(value))}/>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress = {()=>navigation.navigate('Camera')}
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
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
    },
    inputText: {
        borderWidth: 1,
        borderColor: '#292929',
        width: '90%',
        margin: 2,
        padding: 5,
        borderRadius: 5,
    },
    button: {
        width: '90%',
        borderRadius: 10,
        padding: 5,
        backgroundColor: '#5DADE2',
    },
    text: {
        textAlign: 'center',
        color: '#eee',
    }
})