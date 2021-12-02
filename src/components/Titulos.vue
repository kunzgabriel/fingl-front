<template>
  <div>
    <h1 class="header">Titulos</h1>
    <v-btn class="mr-4" style="float: right;" @click="getTitulos">
      Pesquisar
    </v-btn>
    <v-btn to="/titulosNovo" class="mr-4">
      Cadastrar
    </v-btn>
    <v-data-table
      :headers="headers"
      :items="titulos"
      :items-per-page="10"
      class="elevation-1 mt-5"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon
          medium
          color="error"
          @click="deleteTitulos(item)"
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
  name: 'Titulos',

  data() {
    return {
      headers: [
        { text: 'Titulo', value: 'titulo' },
        { text: 'Emissão', value: 'emissao' },
        { text: 'Valor', value: 'valor' },
        { text: 'Vencimento', value: 'vencimento' },
        { text: '', value: 'actions', sortable: false}
      ],
    }
  },

  computed: {
    ...mapGetters('titulos', ['titulos'])
  },

  methods: {
    ...mapActions('titulos', ['getTitulos', 'deleteTitulos'])
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