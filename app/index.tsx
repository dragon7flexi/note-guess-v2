import LinkButton from "@/components/LinkButton";
import { Text, StyleSheet, View } from "react-native";

export default function Home() {

    return (
        <View style={styles.homeContainer}>
            <Text style={styles.title}>Hello World</Text>
            <LinkButton href="/lesson">Start</LinkButton>
        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    title: {
        fontFamily: "serif",
        color: "white",
        fontSize: 50
    }
});