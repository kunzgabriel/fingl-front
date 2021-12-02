<template>
  <div>
    <h1 class="header">Tabelas Contabeis</h1>
    <v-btn class="mr-4" style="float: right;" @click="getTabelaContabil">
      Pesquisar
    </v-btn>
    <v-btn to="/tabelasContabeisNovo" class="mr-4">
      Cadastrar
    </v-btn>
    <v-data-table
      :headers="headers"
      :items="tabelaContabil"
      :items-per-page="10"
      class="elevation-1 mt-5"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon
          medium
          color="error"
          @click="deleteTabelaContabil(item)"
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
  name: 'TabelasContabeis',

  data() {
    return {
      headers: [
        { text: 'Código', value: 'id' },
        { text: 'Descrição', value: 'descricao' },
        { text: 'Conta Crédito', value: 'conta_credito' },
        { text: 'Conta Débito', value: 'conta_debito' },
        { text: '', value: 'actions', sortable: false }
      ]
    }
  },

  computed: {
    ...mapGetters('tabelaContabil', ['tabelaContabil'])
  },

  methods: {
    ...mapActions('tabelaContabil', ['getTabelaContabil', 'deleteTabelaContabil'])
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