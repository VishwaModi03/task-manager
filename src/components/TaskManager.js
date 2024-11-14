import React, { Component } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import '../App.css';

class TaskManager extends Component {
  state = {
    tasks: [
      { id: 1, text: "Learn React", completed: false },
      { id: 2, text: "Build a Task Manager", completed: false },
    ],
  };

  addTask = (text) => {
    const newTask = {
      id: this.state.tasks.length + 1,
      text,
      completed: false,
    };
    this.setState({ tasks: [...this.state.tasks, newTask] });
  };

  deleteTask = (id) => {
    this.setState({ tasks: this.state.tasks.filter(task => task.id !== id) });
  };

  toggleCompletion = (id) => {
    this.setState({
      tasks: this.state.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    });
  };

  // Method to count pending tasks
  getPendingTasksCount = () => {
    return this.state.tasks.filter(task => !task.completed).length;
  };

  render() {
    return (
      <div className="app-container">
        <h1>Task Manager</h1>
        <TaskForm addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          toggleCompletion={this.toggleCompletion}
        />
        {this.state.tasks.length === 0 ? (
          <p className="no-tasks">No tasks yet. Add some tasks!</p>
        ) : (
          <p className="pending-tasks">Pending tasks: {this.getPendingTasksCount()}</p>
        )}
      </div>
    );
  }
}

export default TaskManager;
