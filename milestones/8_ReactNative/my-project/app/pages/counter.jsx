import { Link } from "expo-router";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import {useSelector, useDispatch} from "react-redux";
import { increment as incrementAction, decrement as decrementAction, updateIncrement as updateIncrementAction} from "../redux/reducers/counter";

const Counter = () => {

    const {count, increment} = useSelector(state => ({
        count: state.counter.value,
        increment: state.counter.increment
    }))


    const dispatch = useDispatch(); //react hook that sends redux messages and lets redux know what happened


    const handleIncrement = () => dispatch(incrementAction());
    const handleDecrement = () => dispatch(decrementAction());
    const handleUpdateIncrement = newIncrement => dispatch(updateIncrementAction(Number(newIncrement)));



    return (
        <View style={styles.card}>
            
            <Text style={styles.title}>Counter Page</Text>

            <Button title="DECREMENT" onPress={handleDecrement}></Button>
            <Button title="INCREMENT" onPress={handleIncrement}></Button>
            
            <View>
                <Text>Current Increment:</Text>
                <TextInput
                    onChangeText={handleUpdateIncrement}
                    value={String(increment)}
                    placeholder=""
                    keyboardType="numeric"
                />
            </View>

            <Text style={styles.title}>{count}</Text>
            
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
})