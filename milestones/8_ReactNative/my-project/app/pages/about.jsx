import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const About = () => {

    console.log("This is the about page")

    return (
        <View style={styles.card}>
            <Text style={styles.title}>About Page</Text>
        </View>
    )
}

export default About;

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