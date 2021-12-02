<template>
  <div>
    <h1 class="header">Plano de Contas</h1>
    <v-btn class="mr-4" style="float: right;" @click="getContas">
      Pesquisar
    </v-btn>
    <v-btn to="/planoContasNovo" class="mr-4">
      Cadastrar
    </v-btn>
    <v-data-table
      :headers="headers"
      :items="contas"
      :items-per-page="10"
      class="elevation-1 mt-5"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon
          medium
          color="error"
          @click="deleteContas(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'PlanoContas',

  data() {
    return {
      headers: [
        { text: 'Código', value: 'id' },
        { text: 'Descrição', value: 'descricao' },
        { text: 'Saldo', value: 'saldo' },
        { text: '', value: 'actions', sortable: false}
      ]
    }
  },

  computed: {
    ...mapGetters('contas', ['contas'])
  },

  methods: {
    ...mapActions('contas', ['getContas', 'deleteContas'])
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jura:wght@300&display=swap");

.header {
  margin-left: 25px;
  font-family: Jura;
  font-style: normal;
  font-weight: bolder;
  font-size: 64px;
  color: #566eae;
}
</style>