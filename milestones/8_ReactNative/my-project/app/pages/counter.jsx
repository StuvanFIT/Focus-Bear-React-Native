import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import {useSelector, useDispatch} from "react-redux";
import { increment as incrementAction, decrement as decrementAction, updateIncrement as updateIncrementAction} from "../redux/reducers/counter";

const Counter = () => {

    const count = useSelector(state => state.counter.value);
    const increment = useSelector(state => state.counter.increment);


    const dispatch = useDispatch(); //react hook that sends redux messages and lets redux know what happened


    const handleIncrement = () => dispatch(incrementAction());
    const handleDecrement = () => dispatch(decrementAction());
    const handleUpdateIncrement = newIncrement => dispatch(updateIncrementAction(Number(newIncrement)));



    return (
        <View style={styles.card}>
            
            <Text style={styles.title}>Counter Page</Text>

            <Button title="DECREMENT" onPress={handleDecrement}></Button>
            <Button title="INCREMENT" onPress={handleIncrement}></Button>
            
            <View style={styles.incrementSection}>
                <Text>Current Increment:</Text>
                <TextInput
                    onChangeText={handleUpdateIncrement}
                    value={String(increment)}
                    placeholder=""
                    keyboardType="numeric"
                />
            </View>

            <Text style={styles.title} testID="count-value">{count}</Text>
            
        </View>
    )
}

export default Counter;

const styles = StyleSheet.create({
    card: {
        padding:16,
        borderRadius: 8,
        backgroundColor: "#FBBF6B",
        alignItems: "center",
        margin:20
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        margin: 20,
    },
    incrementSection: {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        marginTop: 10,
        fontWeight: "bold"
    }
})