import LinkButton from "@/components/LinkButton";
import { wrongCntsState } from "@/state/atom";
import { View, Text, FlatList } from "react-native";
import { useRecoilValue } from "recoil";

export default function ResultContent() {
    const wrongCnts = useRecoilValue(wrongCntsState);

    return (
        <View>
            <Text>Result Content</Text>
            <FlatList
                data={wrongCnts}
                keyExtractor={(item, index) => index.toString()} // インデックスをキーに変換
                renderItem={({ item, index }) => (               // itemは値、indexはインデックス
                    <View style={{ padding: 10 }}>
                        <Text>Question {index + 1}: {item} wrong answers</Text>
                    </View>
                )}
            />
            <LinkButton href="/">TOP</LinkButton>
        </View>
    );
}
