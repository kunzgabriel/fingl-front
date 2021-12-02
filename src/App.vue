<template>
  <v-app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer
      app
      style="background: #566eae"
      v-model="drawer"
      absolute
    >
      <h1 class="logo">FinGL</h1>
      <v-divider style="margin-top: 25px"></v-divider>
      <v-list
        dense nav
      />
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="goTo(item)"
        >
          <v-list-item-icon>
            <v-icon style="color: white;">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title  style="color: white;">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", component:'Dashboard'},
        { title: "Cadastro de Pessoas", icon: "mdi-account", component: 'Pessoas' },
        { title: "Lançamento de Títulos", icon: "mdi-cash", component: 'Titulos' },
        { title: "Plano de Contas", icon: "mdi-currency-usd", component: 'PlanoContas' },
        { title: "Tabelas Contabeis", icon: "mdi-file-table", component: 'TabelasContabeis' },
        { title: "Relatórios", icon: "mdi-text-box", component: 'Reports' },
      ],
      right: null,
      drawer: true,
    };
  },

  methods: {
    goTo(item) {
      this.$router.push({ name: item.component })
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jura:wght@300&display=swap");

.logo {
  margin-top: 38px;
  font-family: Jura;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 76px;
  text-align: center;
  color: #ffffff;
}
</style>
