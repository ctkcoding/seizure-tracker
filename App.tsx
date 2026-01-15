import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SeizureEditor from './components/SeizureEditor';
import SeizureItem, { SeizureItemProps } from './components/SeizureItem';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showSeizureEditorHandler() {
    setModalIsVisible(true);
  }

  function hideSeizureEditorHandler() {
    setModalIsVisible(false);
  }


  // new Date(2023, 09, 28, 22, 24, 00, 00)

  // todo - rethink props export when I start using DB
  const dummySeizures: SeizureItemProps[] = [
      {
          "title": "Oldest",
          "timestamp": new Date(2023, 9, 28, 22, 24, 0, 0),
      },
      {
          "title": "Middle",
          "timestamp": new Date(2024, 2, 3, 10, 0, 0, 0),
      },
      {
          "title": "Latest",
          "timestamp": new Date(2025, 10, 11, 11, 0, 0, 0),
      },
  ];


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
          {/* todo - list objects like in editor/buttons */}
          <View>
            {dummySeizures.map((seizure) => {
                return (
                    <SeizureItem
                        title={seizure.title}
                        timestamp={seizure.timestamp}
                        key={seizure.timestamp.getTime()}
                    />
                );
            })}
        </View>

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
