import { useState } from 'react';
import {StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
const [enteredGoalText, setEnteredGoalText] = useState(''); // 앞에는 현재 상태값을 나타내는 변수를 정의하고, 뒤에는 상태값 업데이트를 위한 함수를 정의하고, useState로 초기값을 설정한다. 
const [courseGoals, setCourseGoals] = useState<string[]>([]);

  function goalInputHandler(enteredText : string) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler () {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      enteredGoalText
    ]);
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
        <ScrollView >
          {courseGoals.map((goal) =><Text style={styles.goalItems} key={goal}>{goal}</Text>)}
        </ScrollView>
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
  },
  goalItems: {
    margin: 8,
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#4994EC',
    color: 'white',
  }
});