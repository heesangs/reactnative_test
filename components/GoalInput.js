import { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native'

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
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='your name here'
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button
                title='Add'
                onPress={addGoalHandler}
            />
        </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
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
})