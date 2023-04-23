<template>
   <v-app >
      <v-main>
         <v-container fluid>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>{{isRegister ? stateObj.register.name : stateObj.login.name}}</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                     <form ref="form" @submit.prevent="isRegister ? register() : login()">
                            <v-text-field
                              v-model="nomeutenti"
                              name="nomeutenti"
                              label="Nome utenti"
                              type="text"
                              placeholder="Il suo nome"
                              required
                           ></v-text-field>
                           <div class="green--text"> {{successMessage}}</div>
                           <v-btn type="submit" class="mt-4" color="primary" value="log in">{{isRegister ? stateObj.register.name : stateObj.login.name}}</v-btn>
                           <div class="grey--text mt-4" v-on:click="isRegister = !isRegister;">
                              <a>
                                 {{toggleMessage}}
                              </a>
                           </div>
                      </form>
                     </v-card-text>
                  </v-card>
               </v-flex>
            </v-layout>
            <v-row class="my-8">
               <p class="mx-auto">Messaggio per gli utenti: Questo sito web è stato creato per scopi didattici e come test di applicazione per PiuSviluppo.</p>
            </v-row>   
         </v-container>
      </v-main>
   </v-app>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      nomeutenti: "",
      isRegister: false,
      successMessage: "",
      stateObj: {
         register :{
            name: 'Crea un account',
            message: 'Hai già un account? Accedi.'
         },
         login : {
            name: 'Accedi',
            message: 'Crea un account'
         }
      }
    };
  },
  methods: {
    login() {
      const { nomeutenti } = this;
      console.log(nomeutenti + " logged in")
      this.$router.replace({ name: "HomeView", params:{ nomeutenti: nomeutenti } });
    },
    register() {
      this.isRegister = false;
      this.successMessage = "";
      this.$refs.form.reset();
      this.successMessage = "Registro completato, accedi ao sito con suo login!"

    }
  },
      computed: {
       toggleMessage : function() { 
          return this.isRegister ? this.stateObj.register.message : this.stateObj.login.message }
    }
};
</script>