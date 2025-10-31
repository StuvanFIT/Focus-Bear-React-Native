import { StyleSheet, Text, View} from "react-native";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {

    return (
        //You can props to the global stack. But you can override this by adding them specifically to each Stack.screen props
        <Stack screenOptions={{
            headerStyle: { backgroundColor: "#ddd"},
            headerTintColor: '#333',
        }}>
            <Stack.Screen name="index" options={{title: 'Home'}} />
            <Stack.Screen name="about" options={{title: 'About'}} />
            <Stack.Screen name="contact" options={{title: 'Contact'}} />
            <Stack.Screen name="animatedView" options={{title: 'Animated'}} />
        </Stack>
    )



}
export default RootLayout;

const styles = StyleSheet.create({

})