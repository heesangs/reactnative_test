import {StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return(
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='your name here'></TextInput>
        <Button title='Add'></Button>
      </View>
      <View>
        <Text>your goal is like this...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer : {
    padding: 50,
  },
  inputContainer : {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput : {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 8,
    padding: 8,

  }
});