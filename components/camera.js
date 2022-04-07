import { Camera } from 'expo-camera';
import React, { useState, useRef, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function CameraComponente() {
    const camareReference = useRef();
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(null);
    const [vistaPrevia, setVistaPrevia] = useState(false);
    const [uri, setUri] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }


    const tomarFoto = async ()=>{
        console.log('funciona');
        if(camareReference.current){
            const options = {quality: 0.7, base64: true}
            let photo = await camareReference.current.takePictureAsync(options);
            const {uri, base64} = photo;
            if(base64){
                await camareReference.current.pausePreview();
                setVistaPrevia(true);
                setUri(uri);
            }else{
                alert('No se tomo');
            }
        }else{
            console.log('No referencia a la camara');
        }
    }

    return (
        <Camera type={type} ref = {camareReference} style={styles.camera}>
            {!vistaPrevia ?
                <View style = {styles.container}>
                    <TouchableOpacity
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Ionicons name="md-camera-reverse-outline" size={50} color="#eee" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=> tomarFoto()}
                    >
                        <MaterialIcons name="photo-camera" size={50} color="#eee" />
                    </TouchableOpacity>
                </View>
                :
                <View style = {styles.viewImage}>
                    <Image source = {{uri: uri}} style = {styles.logo}/>
                    <Text>Tu IMC: 20</Text>
                </View>}
        </Camera>
    );
}

const styles = StyleSheet.create({
    camera: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        padding: 20,
        position: 'relative'
    },
    viewImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 10,
    },
    logo: {
        width: 305,
        height: 159,
        marginBottom: 20,
    },
});