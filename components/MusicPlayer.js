import { SafeAreaView, SafeAreaViewBase, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';


const MusicPlayer = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.mainContainer}>
        <View style={styles.coverImageContainer}>
          <Image source={require('../assets/SongCovers/SongCover2.jpg')} style={styles.coverImage} 
          />
        </View>  
        <Text style={styles.textStyle}>React Native Music Player</Text>
      </View>

      <View style={styles.songDetails}>
        <Text style={styles.songtitle}>Song Title</Text>
        <Text style={styles.songartist}>Song Artist</Text>
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={()=>{}}>
          <Ionicons name="heart-outline" size={30} color="#ffffff"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}}>
          <Feather name="repeat" size={30} color="#ffffff"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}}>
          <Ionicons name="share-outline" size={30} color="#ffffff"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}}>
          <Ionicons name="ellipsis-horizontal" size={30} color="#ffffff"/>
        </TouchableOpacity>
      </View>
    </SafeAreaView> 
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
    container :{
      backgroundColor : '#000000',
      flex : 1,
      
    },
  
    mainContainer : {
        flex : 15,
        alignItems : 'center',
        justifyContent : 'center',
        // backgroundColor : '#ffffff'
    },

    
    textStyle : {
      color : '#ffffff'
    },
    
    coverImageContainer : {
      width : 300,
      height : 400,
      // elevation : 5,
      // borderRadius : 15,
    },
    coverImage : {
      width : '100%' ,
      height : '100%' ,
      borderRadius : 15,
    },

    songDetails : {
      flex : 3
    },

    songtitle : {
      color : '#ffffff',
      fontSize : 25,
    },
    songartist : {
      fontSize : 15,
      color : '#ffffff'
    },

    bottomBar : {
      flex : 1,
      borderColor : '#ffffff',
      borderWidth : 1,
      // width : 'width',
      alignItems : 'center',
      paddingVertical : 15,
      flexDirection : 'row',
      justifyContent :'space-evenly',

    },
});
