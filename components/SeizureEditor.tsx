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
                <View>
                    <Text>edit seizure here</Text>
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
    // image: {
    //     width: 100,
    //     height: 100,
    //     margin: 20,
    // },
    // textInput: {
    //     borderWidth: 1,
    //     borderColor: '#e4d0ff',
    //     backgroundColor: '#e4d0ff',
    //     width: '70%',
    //     marginRight: 8,
    //     padding: 16,
    //     color: '#120438',
    //     borderRadius: 6,
    //   },
    // buttonContainer: {
    //     flexDirection: 'row',
    // },
    // button: {
    //     width: '30%',
    //     marginTop: 16,
    //     marginHorizontal: 8,
    // }
});
