
import React,{useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const ViewBoxesWithColorAndText = () => {
  const [titleText, setTitleText] = useState("heesangs's zzang");
  const bodyText = 'I am so happy.';

  const onPressTitle = () => {
    setTitleText("Bird's Nest[pressed]");
  };

  return(
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={onPressTitle}>
          {titleText}
          {'\n'}
          {'\n'}
        </Text>
        <Text numberOfLines={5}>{bodyText}</Text>
      </Text>
      <View
        style={{
          flexDirection:'row',
          height: 100,
          padding: 20,
        }}>
          <View style={{backgroundColor:'blue', flex:1}}/>
          <View style={{backgroundColor: 'red', flex:1}}/>
          <Text>Hello world!</Text>
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default ViewBoxesWithColorAndText;
