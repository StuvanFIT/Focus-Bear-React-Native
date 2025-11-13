import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { Button, Card, Text } from "@rneui/themed";

const Profile = () => {

    return (
        <Card>
            <Card.Title>Steven Kaing</Card.Title>
            <Card.Divider />
            <Text style={{ textAlign: "center", marginBottom: 10 }}>
                Software Engineering Student
            </Text>
            <Button title="Follow" onPress={() => console.log("Followed!")} />
        </Card>
    );
}

export default Profile;

const styles = StyleSheet.create({
})