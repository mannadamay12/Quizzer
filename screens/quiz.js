import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Quiz = ({navigation}) => {
    const [questions, setQuestions] = useState([]);
    const [ques, setQues] = useState(0);
    const getQuiz = async () => {
        const url = 'https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple';
        const response = await fetch(url);
        const data = await response.json();
        setQuestions(data.results);

    };
    useEffect(()=>{
        getQuiz();
    },[]);
  return (
    <View style={styles.container}>
        {questions&&(
            <View style={styles.parent}>
            <View style={styles.top}>
            <Text style={styles.question}>Q. Amazing Question</Text>
        </View>
        <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Option 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Option 4</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Result")}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
        </View>
        )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },

    top: {
        marginVertical: 16,
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    button :{
        width: '100%',
        backgroundColor: '#1c313a',
        borderRadius: 16,
        padding: 12,
        paddingHorizontal: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText:{
        fontSize: 18,
        fontWeight: '600',
        color: '#ffffff',
    },
    question:{
        fontSize: 28,
    },
    option:{
        fontSize: 18,
        fontWeight: '400',
        color: '#ffffff',
    },
    optionButton:{
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#34a0a4',
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    parent:{
        height: '100%',
    }
});
