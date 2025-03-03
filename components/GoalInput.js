import { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal, Image } from 'react-native'

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
    }


    return (
        <Modal
            visible={props.visible}
            animationType='slide'
        >
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/logo.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='your name here'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonStyle}>
                        <Button title='Add' onPress={addGoalHandler} />
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button title='cancle' onPress={props.endModal}
                        //버튼에는 바로 스타일이 먹히지 않으므로 View로 한번 감싼 후에 스타일을 줘야한다.
                        />

                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#62A7F9',
    },
    textInput: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 16,
        color: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    buttonStyle: {
        width: 100,
        marginHorizontal: 8,
    },
    image: {
        width: 50,
        height: 50,
        margin: 24,
    }
})