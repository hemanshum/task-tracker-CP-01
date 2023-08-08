import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const TaskCard = ({ task, removeTask, taskDone }) => {
  const handleRemoveTask = () => {
    removeTask(task.id);
  };

  const handleTaskCompleted = () => {
    taskDone(task.id);
  };
  return (
    <TouchableOpacity
      onPress={handleTaskCompleted}
      style={[styles.container, task.done ? styles.taskContainer : null]}
    >
      <Text style={[styles.title, task.done ? styles.taskDone : null]}>
        {task.title}
      </Text>
      <Text style={styles.date}>{task.date}</Text>
      <Feather
        onPress={handleRemoveTask}
        disabled={!task.done}
        name="trash-2"
        size={21}
        color={task.done ? '#F07171' : '#6D6B6B'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: 4,
  },
  title: {
    fontSize: 16,
  },
  taskContainer: {
    backgroundColor: '#CDCDCD',
  },
  taskDone: {
    textDecorationLine: 'line-through',
    color: '#6D6B6B',
  },
  date: {
    fontSize: 11,
    fontWeight: '200',
    color: '#6D6B6B',
  },
});
export default TaskCard;
