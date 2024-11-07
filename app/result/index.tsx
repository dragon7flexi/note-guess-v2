import { View } from "react-native";
import ResultContent from "./ResultContent";
import { RecoilRoot } from "recoil";

export default function ResultHome() {
    return (
        <RecoilRoot>
            <View>
                <ResultContent />
            </View>
        </RecoilRoot>
    );
}