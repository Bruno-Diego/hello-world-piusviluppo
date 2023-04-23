<template>
  <div>
    <v-row class="my-auto">
      <h1 class="mx-auto">Welcome to your to-do list,{{ nomeutenti ? ' ' + nomeutenti : '' }}!</h1>
    </v-row>
    <AddTask v-on:add-task="addTask" />
    <TodoList v-bind:todos="todos" v-on:archiviare="archiviareTodo" />
  </div>
</template>

<script>
  import TodoList from '../components/Todo'
  import AddTask from '../components/AddTask'

  export default {
    name: 'HomeView',

    components: {
      TodoList,
      AddTask,
    },
    data: () => ({
      todos: []
    }),
    created() {
      this.nomeutenti = this.$route.params.nomeutenti
      if (!this.nomeutenti) {
        this.$router.push({ name: 'login' })
      } 
    },
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
