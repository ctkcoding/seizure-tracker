import { StyleSheet, View, Text, Pressable } from "react-native";

interface SeizureItemProps {
    text: string;
}

function SeizureItem(props: SeizureItemProps) {
    return (
        <View >
            <Text>
                {/* TODO - display date/time ONLY */}
                {props.text}
            </Text>
        </View>
    )
};

export default SeizureItem;

const styles = StyleSheet.create({
    seizureItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
    }
});