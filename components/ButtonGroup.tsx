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

    function updateSelected(buttonKey: number) {
        // if exclusive
        // set all false
        // then set this true
        if (props.exclusive) {
            setSelectedButtons([buttonKey]);
            for (const button of buttons) {
                button.selected = false;
                if (button.key == buttonKey) {
                    button.selected = true;
                }
            }
        } else {
        // if non exclusive
        // check if already set. delete from list
        // otherwise add to list
            console.log("updating non exclusive buttons");
            if (selectedButtons.includes(buttonKey)) {
                selectedButtons.splice(selectedButtons.indexOf(buttonKey), 1);
            } else {
                selectedButtons.push(buttonKey);
            }
            let indexOfCurrent :number = buttons.indexOf(props.buttons[buttonKey]);
            buttons[indexOfCurrent].selected = !buttons[indexOfCurrent].selected;
            console.warn("selected: " + buttons[indexOfCurrent].selected);
            
            // this is a bad practice! how do I extract just the one button to work on?
            
            console.log(selectedButtons);
        }
        // todo - send data back to parent!!
        // props.selected = selectedButtons;
    }
    
    return(
        <View style={styles.buttonContainer}>
            {buttons.map((button) => {
                return (
                    <PressableButton
                        title={button.title}
                        id={button.key}
                        key={button.key}
                        onPress={updateSelected}
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
