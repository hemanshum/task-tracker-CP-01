import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TaskForm, TaskList } from './src/components';

export default function App() {
  const [tasks, setTask] = useState([]);

  const removeTask = (id) => {
    const updatedTaskList = tasks.filter((task) => task.id !== id);
    setTask(updatedTaskList);
  };

  const taskDone = (id) => {
    const updatedTaskList = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTask(updatedTaskList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Task Tracker</Text>
      <TaskForm addTask={setTask} />
      <TaskList tasks={tasks} removeTask={removeTask} taskDone={taskDone} />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#050505',
  },
  header: {
    marginTop: 38,
    textTransform: 'uppercase',
    fontSize: 24,
    color: 'white',
  },
});
