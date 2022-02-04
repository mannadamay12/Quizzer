import { StyleSheet, Text, TouchableOpacityBase, View } from 'react-native';
import React from 'react';
import Title from '../components/title';

const Home = ({navigation}) => {
    return (
          <View style={styles.container}>
            <Title/>
            <View style={styles.bannerContainer}>
                <Image source={{url:'https://storyset.com/illustration/exams/rafiki'}}
                style={styles.banner}
                resizeMode="contain" />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.button}>
                <Text style={styles.buttonText}>Start Quiz</Text>
            </TouchableOpacity>
          </View>
    );
  };
export default Home;

const styles=StyleSheet.create({
    banner:{
        height: 300,
        width: 300,
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
    button :{
        width: '100%',
        backgroundColor: '#1c313a',
        borderRadius: 16,
        padding: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText:{
        fontSize: 24,
        fontWeight: '600',
        color: '#ffffff',
    }
});
