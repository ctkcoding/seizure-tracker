import { StyleSheet, View, Text, Pressable } from "react-native";

export interface SeizureItemProps {
    title: string;
    timestamp: Date;
}

function SeizureItem(props: SeizureItemProps) {
    return (
        <View >
            <Text>
                {props.title + ": " + props.timestamp.toDateString()}
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