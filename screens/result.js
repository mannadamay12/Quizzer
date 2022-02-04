import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Result = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image source={{url:'https://storyset.com/illustration/exams/rafiki'}}
                style={styles.banner}
                resizeMode="contain" />
      </View>
      <View>
          <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                <Text>Home</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
    banner:{
        height: 300,
        width: 300,
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    }
});
