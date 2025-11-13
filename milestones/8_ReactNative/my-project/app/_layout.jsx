import { StyleSheet, Text, View} from "react-native";
import { Slot, Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../app/redux/store";

const RootLayout = () => {

    return (
        <Provider store={store}>
            
            <Stack screenOptions={{
                headerStyle: { backgroundColor: "#ddd"},
                headerTintColor: '#333',
            }}>
                <Stack.Screen name="index" options={{title: 'Home'}} />
                <Stack.Screen name="pages/about" options={{title: 'About'}} />
                <Stack.Screen name="pages/contact" options={{title: 'Contact'}} />
                <Stack.Screen name="components/animatedView" options={{title: 'Animated'}} />
                <Stack.Screen name="pages/fetch" options={{title: 'Fetch'}} />
                <Stack.Screen name="pages/addition" options={{title: 'Addition'}} />
                <Stack.Screen name="pages/userInteraction" options={{title: 'Testing User Interaction'}} />
                <Stack.Screen name="pages/counter" options={{title: 'Counter'}} />
                <Stack.Screen name="pages/profile" options={{title: 'Profile'}} />
                <Stack.Screen name="pages/responsive" options={{title: 'Responsive'}} />
            </Stack>
        </Provider>
    )



}
export default RootLayout;

const styles = StyleSheet.create({

})