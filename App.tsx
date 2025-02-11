import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.dummyText}>
        <Text>Hello, World!</Text>
      </View>
      <Text style={styles.dummyText}>I am programer</Text>
      <View style={styles.tableWrap}>
        <Button title="click here!"/>
        <Button title="click here!"/>
        <Button title="click here!"/>
        <Button title="click here!"/>
        <Button title="click here!"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dummyText: {
    margin: 16,
    borderColor: '#4994EC',
    borderWidth: 2,
    padding: 16,
  },
  tableWrap: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 4,
  }
})