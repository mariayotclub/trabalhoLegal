import React from 'react';
import { auth } from '../firebase';
import { signOut} from 'firebase/auth';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList} from '../App';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput,  Text, Linking, View, Alert, FlatList, ImageBackground, Image, TouchableOpacity, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Home(){
    const navigation = useNavigation<HomeScreenProp>();

    const deslogar = () =>{
        signOut(auth).then(() =>{
            navigation.replace('Login');
        })
    }

    return(
          <ImageBackground 
      resizeMode='stretch' 
      source={require('../assets/amarelo.jpg')} 
      style={styles.container2}
    >
            <Button title="Sair (logout)" onPress={deslogar} color="#FF3B30" />

      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 40, marginBottom: 5, }}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#ffffffff', marginBottom: 5, alignItems: 'center',justifyContent: 'center', }}> Discografia do NJZ</Text>
        <Text style={{fontSize: 5, fontWeight: 'bold', color: '#ffffffff', marginBottom: 5, alignItems: 'center',justifyContent: 'center', }}>Clique na capa do album para saber mais</Text>
      </View>
      <View style={styles.container}>
      <TouchableOpacity style={styles.box1} onPress={() => Linking.openURL('https://newjeans.fandom.com/pt-br/wiki/New_Jeans')}>
        <ImageBackground source={require('../assets/New.webp')} style={styles.album} imageStyle={{ borderRadius: 5 }}>
        </ImageBackground>
         <Text style={styles.texto}>New Jeans</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box2} onPress={() => Linking.openURL('https://newjeans.fandom.com/pt-br/wiki/OMG')}>
       <ImageBackground source={require('../assets/omg.webp')} style={styles.album} imageStyle={{ borderRadius: 5 }}></ImageBackground>
            <Text style={styles.texto}>OMG</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box3} onPress={() => Linking.openURL('https://newjeans.fandom.com/pt-br/wiki/Get_Up')}>
       <ImageBackground source={require('../assets/getup.webp')} style={styles.album} imageStyle={{ borderRadius: 5 }}>
        </ImageBackground>
            <Text style={styles.texto}>Get up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box1} onPress={() => Linking.openURL('https://newjeans.fandom.com/pt-br/wiki/NJWMX')}>
       <ImageBackground source={require('../assets/NJWMX.webp')} style={styles.album} imageStyle={{ borderRadius: 5 }}>
        </ImageBackground>
            <Text style={styles.texto}>NJWMX</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box2} onPress={() => Linking.openURL('https://newjeans.fandom.com/pt-br/wiki/How_Sweet')}>
       <ImageBackground source={require('../assets/howsweet.webp')} style={styles.album} imageStyle={{ borderRadius: 5 }}>
        </ImageBackground>
            <Text style={styles.texto}>How Sweet</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box3}  onPress={() => Linking.openURL('https://newjeans.fandom.com/pt-br/wiki/Bubble_Gum')}>
       <ImageBackground source={require('../assets/bubblegum.jpg')} style={styles.album} imageStyle={{ borderRadius: 5 }}>
        </ImageBackground>
          <Text style={styles.texto}>Bubblegum</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box1} onPress={() => Linking.openURL('https://newjeans.fandom.com/pt-br/wiki/Ditto')}>
    <ImageBackground source={require('../assets/ditto.webp')} style={styles.album} imageStyle={{ borderRadius: 5 }}>
        </ImageBackground>      
          <Text style={styles.texto}>Ditto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box2} onPress={() => Linking.openURL('https://newjeans.fandom.com/pt-br/wiki/Supernatural')}>
        <ImageBackground source={require('../assets/supernatural.jpg')} style={styles.album} imageStyle={{ borderRadius: 5 }}>
        </ImageBackground>
            <Text style={styles.texto}>Supernatural</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container11: { flex: 1, alignItems: 'center', justifyContent: 'center' },
 container: {
    flex: 1,
    backgroundColor: '#ffc3c3ff00',
    alignItems: 'center',     //horizontal
    justifyContent: 'center', //vertical
    flexDirection: 'column',
    flexWrap: 'wrap',         //quebra em linhas ou colunas
    alignContent: 'space-evenly',
    rowGap: 20,
    //columnGap: 30
  },
  container2: {
    flex: 1,
    backgroundColor: '#ffc3c3ff00',
  },
  box1: {
    backgroundColor: '#57a0ff00',
    width: 120,
    height: 120,
    alignItems: 'center',     
    justifyContent: 'center',
    borderRadius: 5
  },
  box2: {
    backgroundColor: '#57a0ff00',
    width: 120,
    height: 120,
    alignItems: 'center',     
    justifyContent: 'center',
    borderRadius: 5
  },
  box3: {
    backgroundColor: '#57a0ff00',
    width: 120,
    height: 120,
    alignItems: 'center',     
    justifyContent: 'center',
    borderRadius: 5
  },
  texto: {
    fontSize: 5,
    color: '#ffffffff',
    fontWeight: 700
  },

  album: {
   width: '100%', 
   height: '100%',
   alignItems: 'center', 
   justifyContent: 'center', 
   borderRadius: 5
  }
});