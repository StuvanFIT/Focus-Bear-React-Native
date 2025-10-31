import { StyleSheet, Text, View } from "react-native";

const Contact = () => {

    return (
        <View style={styles.card}>
            <Text style={styles.title}>Contact Page</Text>
        </View>
    )
}

export default Contact;

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