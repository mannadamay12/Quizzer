import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home.js';
import Quiz from './screens/quiz.js';
import Result from './screens/result';
import MyStack from './navigation/index.js';

const App = () => {
  return (
          <NavigationContainer>
            <MyStack />
          </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16
  }
});

export default App;
