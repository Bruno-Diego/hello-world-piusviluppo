<template>
<div>
  <AddTask v-on:add-task="addTask" />
  <TodoList v-bind:todos="todos" v-on:archiviare="archiviareTodo" />
</div>
</template>

<script>
  // import HelloWorld from '../components/HelloWorld'
  import TodoList from '../components/Todo'
  import AddTask from '../components/AddTask'
  export default {
    name: 'ToDoList',

    components: {
      TodoList,
      AddTask,
    },
    data: () => ({
      todos: [
        {
          id: 1,
          login: "Mario",
          title: "Todo 1",
          completed: false,
        },
        {
          id: 2,
          login: "Mario",
          title: "Todo 2",
          completed: true,
        },
        {
          id: 3,
          login: "Mario",
          title: "Todo 3",
          completed: false,
        },
      ]
    }),
    methods: {
      archiviareTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id.id);
      },
      addTask(nuovaTask) {
        this.todos = [...this.todos, nuovaTask]
      }
    }
  }
</script>
