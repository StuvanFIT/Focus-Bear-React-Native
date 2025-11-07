import { Button, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

const UserInteraction = () => {

    const [count, setCount] = useState(0);

    const handlePress = () => {
        setCount(count + 1)
    }

    return (

        <View style={styles.card}>
             <Link href="/" style={styles.title}>GO BACK TO HOME</Link>

            <Text style={styles.title}>UserInteraction Page</Text>

            <Button title="PRESS THIS BUTTON!!!" onPress={handlePress} color="#000"></Button>

            <Text>Button pressed {count} times!</Text>
        </View>
    )
}

export default UserInteraction;

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
    button: {
        padding: 8,
        borderStyle:"solid", 
        borderColor: "#000",
    }
})