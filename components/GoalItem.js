import { Text, StyleSheet, Pressable, View } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.itemFrame}>
            <Pressable
                onPress={props.onDeleteItem.bind(this, props.id)}
                //bind()의 두번째 인자는 함수가 호출될 때 자동으로 첫번째 인자로 전달될 값을 미리 정해줌.즉, Pressable이 눌리면 props.onDeleteItem (this) 함수가 호출되고, 자동으로 props.id가 그 함수의 인자로 전달, 여기에서 this는 중요치 않음. null을 사용해도 됨.
                android_ripple={{ color: '#2372CD' }}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalItems}>{props.value}</Text>
            </Pressable>
        </View>
        // button에 스타일을 주는데는 한계가 있으므로 view, text, pressable을 이용해 커스텀해서 사용할 수 있다. 
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    itemFrame: {
        margin: 8,
    },
    goalItems: {
        padding: 8,
        borderRadius: 4,
        backgroundColor: '#4994EC',
        color: 'white',
    },
    pressedItem: {
        opacity: 0.5,

    },
})