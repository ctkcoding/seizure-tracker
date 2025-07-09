import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import PressableButton from './PressableButton';

export interface ButtonData {
    key: number;
    title: string;
    selected?: boolean;
}

interface ButtonGroupProps {
    buttons: ButtonData[];
    selected?: number[];
    exclusive: boolean;
}

function ButtonGroup(props: ButtonGroupProps) {
    const [selectedButtons, setSelectedButtons] = useState<number[]>([]);

    // how can i avoid duplicating props
    let buttons = props.buttons;

    function updateExclusive(buttonKey: number) {
        // if exclusive
        // set all false
        // then set this true
        setSelectedButtons([buttonKey]);
        for (const button of buttons) {
            if (button.key == buttonKey) {
                button.selected = true;
            } else {
                button.selected = false;
            }
        }
    }
    
    function updateInclusive(buttonKey: number) {
        // if non exclusive
        // check if already set. delete from list
        // otherwise add to list
        if (selectedButtons.includes(buttonKey)) {
            setSelectedButtons(
                selectedButtons.filter(b => b !== buttonKey)
            )
        } else {
            setSelectedButtons([
                ...selectedButtons,
                buttonKey]);
        }

        for (const button of buttons) {
            if (button.key == buttonKey) {
                button.selected = button.selected ? false : true;
            }
        }
    }
    
    return(
        <View style={styles.buttonContainer}>
            {buttons.map((button) => {
                return (
                    <PressableButton
                        title={button.title}
                        id={button.key}
                        key={button.key}
                        onPress={props.exclusive ? updateExclusive : updateInclusive}
                        selected={button.selected ? button.selected : false}
                    />
                );
            })}
        </View>
    );
}

export default ButtonGroup;

const styles = StyleSheet.create({

buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',    // Allow items to wrap to the next line
},
});
