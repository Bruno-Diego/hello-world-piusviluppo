<template>
  <v-app-bar
      app
      color="secondary"
      dark
    >
      <v-app-bar-nav-icon disabled>
        <v-icon x-large>
          mdi-checkbox-marked-circle-auto-outline
        </v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title disabled>PiuSviluppo TaskList</v-toolbar-title>

      <v-spacer></v-spacer>


      <v-btn class="d-none d-md-flex" href="/" text>
        Home
      </v-btn>
      <v-btn class="d-none d-md-flex" href="/api" text>
        Proggetto 2 (API)
      </v-btn>

      <v-menu
      left
      bottom
      class="z-24"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            class="d-flex d-md-none"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-btn class="d-flex d-md-none" href="/" text>
                Home
              </v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn class="d-flex d-md-none" href="/" text>
                Proggetto 2 (API)
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>