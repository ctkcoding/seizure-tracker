import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

interface PressableButtonProps {
    title: string;
    id: number;
    onPress: (selected: number) => void;
    selected: boolean;
}

function PressableButton(props: PressableButtonProps) {
    function handlePress() {
        props.onPress(props.id);
    }

    return(
        <View style={styles.button}>
            <View style={props.selected && styles.selectedItem}>
                <Button
                title={props.title}
                onPress={handlePress}/>
            </View>
        </View>
    )
}

export default PressableButton;

const styles = StyleSheet.create({
    button: {
        padding: 1,
    }, 
    selectedItem: {
        opacity: 0.5
    },
});
