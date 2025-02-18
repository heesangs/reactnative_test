import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState(''); // 앞에는 현재 상태값을 나타내는 변수를 정의하고, 뒤에는 상태값 업데이트를 위한 함수를 정의하고, useState로 초기값을 설정한다. 
  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, // 지금까지 입력했던 goal리스트들을 새로운 배열로 복사한다. (새로운 배열로 복사하는것이지만 버추어돔에서 키값이 변경된 애들만 상태업데이트를 하기 때문에 비효율적으로 메모리가 사용되는것은 아니다.)
      {text: enteredGoalText, key: Math.random().toString()}, // 최근 입력한 goal! 
    ]);
  };
  return (
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
        <FlatList data={courseGoals} renderItem={(itemData) => {
          //itemData.index // itemData는 Index 프로퍼티 접근 권한도 제공.
          return (
            <Text style={styles.goalItems}>{itemData.item.text}</Text>
          )

        }} alwaysBounceVertical={false} />
      </View>
    </View>
  );// 스크롤뷰에 대한 다양한 프로퍼티(props)를 공식문서에서 확인해보자.
  // FlatList에 data(props) 넣고 텍스트를 잘라내고 self-closing을 한다. renderItem(props)를 넣는다.이녀석은 FlatList에 지시하는 함수를 값으로 갖는 props이다. 
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 8,
    padding: 16,

  },
  goalsContainer: {
    flex: 4,
  },
  goalItems: {
    margin: 8,
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#4994EC',
    color: 'white',
  }
});