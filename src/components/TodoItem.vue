<template>
<v-list-item-content>
    <v-row class="align-center">
        <v-col cols="2"> 
            <v-row class="text-center mx-3">
                <v-checkbox
                :value="todo.completed"
                @change="$emit('markComplete', {completed: !todo.completed})"
                class=""
                ></v-checkbox>
            </v-row>
        </v-col>
        <v-col cols="8"> 
            <v-list-item-title class="text-left">
                <div v-bind:class="{'is-complete':todo.completed}">
                    <p class="my-auto">
                        {{todo.title}}
                    </p>
                </div>
            </v-list-item-title>
        </v-col>
        <v-col cols="2">
            <v-btn class="del" @click="$emit('archiviare', {id: todo.id} )" fab dark small color="primary">
                <v-icon dark>
                    mdi-delete
                </v-icon>
            </v-btn>
        </v-col>
    </v-row>
</v-list-item-content>

</template>
<script>
    export default {
        name: "TodoItem",
        props: ["todo"],
        methods: {
            markComplete ({completed }) {
                const todo = this.todo
                todo.completed = completed
            }
        },
        created () {
            this.$on('markComplete', this.markComplete)
        }
    }
</script>

<style scoped>
.is-complete {
    text-decoration: line-through;
}
</style>
