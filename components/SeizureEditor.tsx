import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

interface SeizureEditorProps {
    text: string;
    visible: boolean;
    onCancel: () => void;
}

function SeizureEditor(props: SeizureEditorProps) {
    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <View style={styles.viewSection}>
                    <Text>edit seizure below:</Text>
                    <TextInput // todo - handle as form
                        style={styles.textInput}
                        placeholder="Seizure date"
                        // onChangeText={goalInputHandler}
                        // value={enteredGoalText} 
                    />
                    <TextInput
                        placeholder="Seizure time"
                        style={styles.textInput}
                    />
                    {/* button based booleans */}
                    {/* <Text>Experience flags</Text> */}
                    <Text>Length of seizure</Text>
                    <View style={styles.buttonContainer}>
                        <Button title="Under 1min"/>
                        <Button title="Under 5min"/>
                        <Button title="Over 5min"/>
                    </View>

                    <Text>Type of seizure</Text>
                    <View style={styles.buttonContainer}>
                        <Button title="Fell down"/>
                        <Button title="Drooled"/>
                        <Button title="Lost consciousness"/>
                        <Button title="Aura"/>
                        <Button title="Tremors"/>
                    </View>

                    <Text>Trigger flags</Text>
                    <View style={styles.buttonContainer}>
                        <Button title="Bad sleep - today"/>
                        <Button title="Bad sleep - last 2 days"/>
                        <Button title="Meals off schedule"/>
                        <Button title="Meds off schedule"/>
                        <Button title="Excessive heat - in or out"/>
                        <Button title="Agitated/stress"/>
                    </View>

                    <TextInput placeholder="General notes"/>
                </View>
                <View>
                    <Button title="Return" onPress={props.onCancel}/>
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
    // button: {
    //     width: '30%',
    //     marginTop: 16,
    //     marginHorizontal: 8,
    // }
});
