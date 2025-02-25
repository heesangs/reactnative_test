import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  type Goal = {
    text: string;
    id: string;
  }
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addModalHandler() {
    setModalIsVisible(true)
  }
  function endModalHandler() {
    setModalIsVisible(false)
  }


  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      // 지금까지 입력했던 goal리스트들을 새로운 배열로 복사한다. (새로운 배열로 복사하는것이지만 버추어돔에서 키값이 변경된 애들만 상태업데이트를 하기 때문에 비효율적으로 메모리가 사용되는것은 아니다.)
      { text: enteredGoalText, id: Math.random().toString() }
      // 최근 입력한 goal! 
      // key를 id로 바꿈. -> API로 데이터를 가져올 경우는 키를 사용못할수도 있기때문. 대신 아래 FlatList에 keyExtractor 추가.
    ]);
    setModalIsVisible(false);
  };

  function deleteGoalHandler(id: string) {
    setCourseGoals((currentCourseGoals) => {
      return (
        currentCourseGoals.filter((goal) => goal.id !== id) //주어진 조건이 true일 경우만 새배열로 받음
      )
    })
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title='Add New Goal'
        color={'#4994EC'}
        onPress={addModalHandler}
      ></Button>
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        endModal={endModalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            //itemData.index // itemData는 Index 프로퍼티 접근 권한도 제공.
            return (
              <GoalItem
                value={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler} />
            );
          }}
          keyExtractor={(item, index) => {
            // 모든 항목에서 키를 가져온다.
            // id 는 고유한 값을 가지고 있으므로 좋은 key가 된다. 
            return item.id
          }}
          alwaysBounceVertical={false} />
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
  goalsContainer: {
    flex: 4,
  },

});