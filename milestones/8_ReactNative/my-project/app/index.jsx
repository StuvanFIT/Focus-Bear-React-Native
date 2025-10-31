import { StyleSheet, Text, View, Image} from "react-native";
import { Link } from "expo-router";

const Home = () => {

    return (
        <View style={styles.card}>
            <Text style={styles.title}>Hello Focus Bear User!</Text>

            <Text style={styles.description}>This is the card component</Text>

            <Image
                style={styles.image}
                source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
            />

            <Link href="/about" >About Page</Link>
            <Link href="/contact" >Contact Page</Link>
            <Link href="/animatedView" >Animated Page</Link>
        </View>
    )
}

export default Home;

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

    description: {
        fontSize: 16,
        marginVertical: 8,
    },
    image: {
        width: 150,
        height: 150,
        marginVertical: 20,
        borderRadius: 8

    }
})