<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-card class="mx-auto" max-width="500" tile>
                    <v-list-item-group color="primary">
                        <v-list-item v-for="todo in todos" v-bind:key="todo.id"
                        >
                            <TodoItem v-bind:todo="todo" v-on:archiviare="$emit('archiviare', {id: todo.id})" />
                        </v-list-item>
                    </v-list-item-group>
                </v-card>
                <!-- <div v-bind:key="todo.id" v-for="todo in todos">
                    <TodoItem v-bind:todo="todo" />
                </div> -->
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import TodoItem from './TodoItem.vue'
export default {
    name: "TodoList",
    components: {
        TodoItem,
    },
    props: ["todos"],
}
</script>
