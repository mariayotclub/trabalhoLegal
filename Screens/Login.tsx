import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { signOut} from 'firebase/auth';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, View, Alert, FlatList, ImageBackground, Image, TouchableOpacity, Button, Pressable } from 'react-native';


type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation<LoginScreenProp>();

    const logar = () =>{
        signInWithEmailAndPassword(auth, email, senha)
        .then(() =>{
            navigation.replace('Home');
        })
        .catch((erro) =>{
            Alert.alert("Erro", erro.message);
        });
    };
    return(
            <ImageBackground 
              resizeMode='stretch' 
              source={require('../assets/amarelo.jpg')} 
              style={styles.container2}
            >
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input} 
                placeholder='E-mail'
                autoCapitalize='none'
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={styles.input} 
                placeholder='Senha'
                secureTextEntry  
                onChangeText={setSenha}
                value={senha}
            />
            <Button title='Entrar' onPress={logar}/>

            <View style={{ marginTop: 20 }}>
                <Button title='Criar conta' onPress={() =>
                    navigation.navigate('Register')} color="#007BFF"/>
            </View>
        </View>
          </ImageBackground>
    )
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 },
   container2: {
    flex: 1,
    backgroundColor: '#ffc3c3ff00',
  },
});