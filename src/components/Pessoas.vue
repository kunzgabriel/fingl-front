<template>
  <div>
    <h1 class="header">Pessoas</h1>
    <v-btn @click="getPessoas" class="mr-4" style="float: right;">
      Pesquisar
    </v-btn>
    <v-btn to="/pessoasNovo" class="mr-4">
      Cadastrar
    </v-btn>
    <v-data-table
      :headers="headers"
      :items="pessoas"
      :items-per-page="10"
      class="elevation-1 mt-5"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon
          medium
          color="error"
          @click="deletePessoas(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Pessoas',

  data() {
    return {
      headers: [
        { text: 'Código', value: 'id' },
        { text: 'Nome', value: 'nome' },
        { text: 'Celular', value: 'celular' },
        { text: 'Municipio', value: 'municipio' },
        { text: 'UF', value: 'uf' },
        { text: '', value: 'actions', sortable: false }
      ]
    }
  },

  computed: {
    ...mapGetters('pessoas', ['pessoas'])
  },

  methods: {
    ...mapActions('pessoas', ['getPessoas', 'deletePessoas'])
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