import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { SimpleLineIcons, EvilIcons } from '@expo/vector-icons';

export default function Login({ navigation }) {
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);

    const validateUser = () => {
        if (name === 'root' && password === 'DanteJefferson_0101') navigation.navigate('Home',{ user:{name: name, password: password} });
        else alert('Please enter your name and password');
    }
    return (
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',paddingTop: 15, paddingBottom: 15 }}>
                <EvilIcons name="user" size={100} color="black" />
                <Text>Bienvenido</Text>
            </View>
            <View style={{width: '80%', padding: 5}}>
                <TextInput style={{marginBottom: 10, padding: 10, borderBottomWidth: 1}} placeholder="Introduce el usuario" onChangeText={(name) => { setName(name) }} />
                <TextInput style={{padding: 10, borderBottomWidth: 1}} secureTextEntry={true} placeholder="Introduce la contraseña" onChangeText={(password) => { setPassword(password) }} />
            </View>
            <TouchableOpacity onPress={() => { validateUser() }} style={{ width: '40%', display: 'flex', flexDirection: 'row', justifyContent: 'center' ,alignItems: 'center', backgroundColor: '#F7DC6F', padding: 8, margin: 8, borderRadius: 10 }}>
                <SimpleLineIcons name="login" size={22} color="black" />
                <Text style={{paddingLeft: 10}}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    )
}