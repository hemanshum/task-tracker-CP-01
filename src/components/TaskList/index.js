import { FlatList, StyleSheet, Text, View } from 'react-native';
import TaskCard from '../TaskCard';

export const TaskList = ({ tasks, removeTask, taskDone }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.listTitle}>TaskList</Text>
      <Text style={styles.listSubTitle}>(Press task to mark as done)</Text>
      <FlatList
        style={styles.list}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard task={item} removeTask={removeTask} taskDone={taskDone} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 36,
  },
  listTitle: {
    fontSize: 20,
    color: 'white',
  },
  listSubTitle: {
    fontSize: 11,
    color: 'white',
    fontWeight: '200',
    marginTop: 6,
  },
  list: {
    marginTop: 8,
    borderWidth: 1,
    height: '55%',
  },
});
