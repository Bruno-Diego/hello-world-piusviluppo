<template>
<v-sheet width="300" class="mx-auto">
    <v-form @submit="addTask">
      <v-text-field v-model="title" label="Agiunge una task..."></v-text-field>
      <v-btn type="submit" block class="mt-2" elevated dark large color="primary">Invia</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import * as uuid from 'uuid';

export default {
    name: "AddTask",
    data() {
        return {
            title: ""
        }
    },
    methods: {
        addTask(e) {
            e.preventDefault()
            const newTask = {
                id: uuid.v4(),
                login: "temp",
                title: this.title,
                completed: false
            }
            this.$emit('add-task', newTask)
            this.title = ""
        }
    }
}
</script>
