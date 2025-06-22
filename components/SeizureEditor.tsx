import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal } from "react-native";
import PressableButton from './PressableButton';
import ButtonGroup, {ButtonData} from './ButtonGroup'

interface SeizureEditorProps {
    text: string;
    visible: boolean;
    onCancel: () => void;
}

function SeizureEditor(props: SeizureEditorProps) {

    const seizureTimes: ButtonData[] = [
        {
            "title": "Under 1min",
            "key": 0,
        },
        {
            "title": "Under 5min",
            "key": 1,
        },
        {
            "title": "Over 5min",
            "key": 2,
        },
    ];

    const seizureActions: ButtonData[] = [
        { 
            "title": "Fell down",
            "key": 0,
        },
        {   
            "title": "Drooled",
            "key": 1,
        },
        {   
            "title": "Lost consciousness",
            "key": 2,
        },
        {   
            "title": "Aura",
            "key": 3,
        },
        {   
            "title": "Tremors",
            "key": 4,
        }

    ];

    const seizureTriggers: ButtonData[] = [
        {   
            "title": "Bad sleep - today",
            "key": 0,
        },
        {   
            "title": "Bad sleep - past 2 days",
            "key": 1,
        },
        {   
            "title": "Meals off schedule",
            "key": 2,
        },
        {   
            "title": "Meds off schedule",
            "key": 3,
        },
        {   
            "title": "Excessive heat - in or out",
            "key": 4,
        },
        {   
            "title": "Agitated/stress",
            "key": 5,
        }
    ];

    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <View style={styles.viewSection}>
                    <Text>Seizure date and time:</Text>
                    {/* TODO - replace with picker */}
                    <TextInput
                        style={styles.textInput}
                        placeholder="Seizure date"
                    />
                    <TextInput
                        placeholder="Seizure time"
                        style={styles.textInput}
                    />
                    <Text>Length of seizure</Text>
                    <View style={styles.buttonContainer}>
                        <ButtonGroup buttons={seizureTimes} exclusive={true}/>
                    </View>
                    <Text>Type of seizure</Text>
                    <View style={styles.buttonContainer}>
                        <ButtonGroup buttons={seizureActions} exclusive={false}/>
                    </View>

                    <Text>Possible triggers</Text>
                    <View style={styles.buttonContainer}>
                        <ButtonGroup buttons={seizureTriggers} exclusive={false}/>
                    </View>

                    <TextInput placeholder="General notes"/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Return" onPress={props.onCancel} color='red'/>
                    <Button title="Save" onPress={props.onCancel} color='green'/>
                    {/* TODO - retrieve selected object from each ButtonGroup */}
                </View>
            </View>            
        </Modal>
    )
};

export default SeizureEditor;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        // backgroundColor: '#311b6b'
      },
    viewSection: {
        justifyContent: 'center',
        alignItems: 'flex-start',  
    },
    // image: {
    //     width: 100,
    //     height: 100,
    //     margin: 20,
    // },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        // backgroundColor: '#e4d0ff',
        width: '80%',
        marginRight: 8,
        padding: 4,
        // color: '#120438',
        borderRadius: 6,
      },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',    // Allow items to wrap to the next line
    },
});
