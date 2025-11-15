import { StyleSheet, Text, View, Image, Button, ScrollView } from "react-native";
import { Link, useRouter } from "expo-router";
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export const CustomText = ({ children }) => <Text>{children}</Text>;

const Home = () => {
    const router = useRouter()
    const imageSize = 200
    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)
    const scaleImage = useSharedValue(imageSize)


    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if (scaleImage.value !== imageSize * 2) {
                //increase the size by double
                scaleImage.value = scaleImage.value * 2
            } else {
                //decrease the size by double
                scaleImage.value = Math.round(scaleImage.value /2)
            }
    });
    

    const drag = Gesture.Pan().onChange((event) => {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
    });


    // --- Combined gestures (you can drag + double tap the same image) ---
    const combinedGesture = Gesture.Simultaneous(drag, doubleTap);

    // --- Animated image style ---
    const imageStyle = useAnimatedStyle(() => {
        return {
        width: withSpring(scaleImage.value),
        height: withSpring(scaleImage.value),
        transform: [
            { translateX: translateX.value },
            { translateY: translateY.value },
        ],
        };
    });

    const handleDeepLink = () => {
        console.log("Deep linking to counter")
        router.push('/pages/counter?value=75')
    }


    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={[styles.card]}>
                <CustomText>Welcome!</CustomText>
                <Text style={styles.title}>Hello Focus Bear User!</Text>

                <Text style={styles.description}>This is the card component</Text>

                <GestureDetector gesture={combinedGesture}>
                    <Animated.Image
                        style={imageStyle}
                        resizeMode={"contain"}
                        source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
                    />
                </GestureDetector>

                <Link href="/pages/about">About Page</Link>
                <Link href="/pages/contact">Contact Page</Link>
                <Link href="/components/animatedView">Animated Page</Link>
                <Link href="/pages/fetch">Fetch Page</Link>
                <Link href="/pages/addition">Sum A n B Page</Link>
                <Link href="/pages/userInteraction">Testing User Interaction</Link>
                <Link href="/pages/counter">Counter Page</Link>
                <Link href="/pages/profile">Profile Page</Link>
                <Link href="/pages/responsive">Responsive Page</Link>

                <Button 
                    title="Open Counter (value=25)" 
                    onPress={handleDeepLink}
                />
            
            </View>
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1, 
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
    },
    card: {
        padding:16,
        borderRadius: 8,
        backgroundColor: "#FBBF6B",
        alignItems: "center",
        margin:20,
        gap:10

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
});