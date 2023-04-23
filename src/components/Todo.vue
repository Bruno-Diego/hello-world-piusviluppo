<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-card class="mx-auto" max-width="500" tile>
                    <v-list-item-group color="primary">
                        <v-list-item v-for="todo in todos" v-bind:key="todo.id" v-bind:class="{'d-none is-complete':todo.completed}">
                            <TodoItem v-bind:todo="todo" v-on:archiviare="$emit('archiviare', {id: todo.id})" />
                        </v-list-item>
                    </v-list-item-group>
                </v-card>
                <v-row class="my-auto">
                    <h1 class="mx-auto">Completati:</h1>
                </v-row>
                <v-card class="mx-auto" max-width="500" tile>
                    <v-list-item-group color="primary">
                        <v-list-item v-for="todo in todos" v-bind:key="todo.id" v-bind:class="{'d-none is-complete':!todo.completed}">
                            <TaskComplete v-bind:todo="todo" v-on:archiviare="$emit('archiviare', {id: todo.id})" />
                        </v-list-item>
                    </v-list-item-group>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import TodoItem from './TodoItem.vue'
import TaskComplete from './TaskComplete.vue'
export default {
    name: "TodoList",
    components: {
        TodoItem,
        TaskComplete,
    },
    props: ["todos"],
}
</script>
