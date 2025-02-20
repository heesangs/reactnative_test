import { Text, StyleSheet } from "react-native";

function GoalItem(props) {
    return (
        <Text style={styles.goalItems}>{props.value}</Text>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItems: {
        margin: 8,
        padding: 8,
        borderRadius: 4,
        backgroundColor: '#4994EC',
        color: 'white',
    }
})