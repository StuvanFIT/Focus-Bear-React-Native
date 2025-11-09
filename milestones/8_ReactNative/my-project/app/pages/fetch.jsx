import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Link } from "expo-router";

const Fetch = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false))
    },[]) //run once on mount

    return (
        <View style={styles.card}>
        

            {loading ? (
                <View style={styles.card}>
                    <ActivityIndicator size={"large"} color={"#000"}/>
                    <Text>Loading Users...</Text>
                </View>

            ): (
                users.map(user => (
                    <Text key={user.id}>{user.name}</Text>
                ))
            )}
        </View>
    )
}

export default Fetch;

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
    loadingContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"

    }
})