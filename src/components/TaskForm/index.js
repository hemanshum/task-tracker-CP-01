import { useState } from 'react';
import uuid from 'react-native-uuid';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export const TaskForm = ({ addTask }) => {
  const [value, setValue] = useState();

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const handleSubmit = () => {
    addTask((tasks) => [
      {
        id: uuid.v4(),
        title: value,
        date: `${day}-${month}-${year}`,
        done: false,
      },
      ...tasks,
    ]);
    setValue('');
  };
  return (
    <View style={styles.container}>
      <Text>Enter Task</Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.textInput}
        placeholder="Task Name"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#E8E8E8',
    padding: 16,
    paddingBottom: 24,
    marginTop: 34,
  },
  textInput: {
    borderWidth: 1,
    padding: 16,
    marginTop: 8,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#050505',
    padding: 16,
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
