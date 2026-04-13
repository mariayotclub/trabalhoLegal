import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { signOut} from 'firebase/auth';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, FlatList, ImageBackground, Image, TouchableOpacity, Button, Pressable, TextInput} from 'react-native';


type RegisterScreenProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

export default function Register(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation<RegisterScreenProp>();

    const cadastrar = () =>{
        createUserWithEmailAndPassword(auth, email, senha)
        .then(() =>{
            Alert.alert("Sucesso", "Conta criada!");
            navigation.replace('Home');
        })
        .catch((erro) =>{
            Alert.alert("Erro", erro.massage);
        })
    }
     return(
            <View style={styles.container}>
                <Text style={styles.title}>Cadastro</Text>
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
                <Button title='Cadastrar' onPress={cadastrar}/>
    
                <View style={{ marginTop: 20 }}>
                    <Button title='Voltar ao Login' onPress={() =>
                        navigation.goBack()} color="#666"/>
                </View>
            </View>
        )

}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 }
});