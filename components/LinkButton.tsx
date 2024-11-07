import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Href, useRouter } from "expo-router";

interface LinkButtonProps {
    href: string;
    children: React.ReactNode;
}

export default function LinkButton({ href, children }: LinkButtonProps) {
    const router = useRouter();

    const handlePress = () => {
        router.push(href as Href);
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 50,
        backgroundColor: '#007BFF',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 25,
    },
});
