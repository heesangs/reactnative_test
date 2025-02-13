import { useState } from 'react';
import {StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText : string) {
    setEnteredGoalText(enteredText)
  };

  function addGoalHandler () {
    console.log(enteredGoalText)
  };
  return(
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='your name here'
          onChangeText={goalInputHandler}
          />
        <Button 
          title='Add'
          onPress={addGoalHandler}
          />
      </View>
      <View style={styles.goalsContainer}>
        <Text>your goal is like this...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer : {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer : {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  textInput : {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 8,
    padding: 16,

  },
  goalsContainer: {
    flex:4,
  }
});