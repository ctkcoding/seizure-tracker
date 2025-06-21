import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SeizureEditor from './components/SeizureEditor';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false) 
  const [seizures, setSeizures] = useState([]);

  function showSeizureEditorHandler() {
    setModalIsVisible(true);
  }

  function hideSeizureEditorHandler() {
    setModalIsVisible(false);
  }


  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <View style={styles.seizureList}>
          <SeizureEditor
            text='sample text'
            visible={modalIsVisible}
            onCancel={hideSeizureEditorHandler}
          />
          <Text>List seizures here</Text>
        </View>
        <View style={styles.button}>
          <Button
            title='Add a seizure'
            onPress={showSeizureEditorHandler}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
  },
  seizureList: {
    padding: 16,
    flex: 6,
  }
});
