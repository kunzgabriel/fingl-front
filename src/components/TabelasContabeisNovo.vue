<template>
  <v-container>
    <h1 class="headerNovo">
      Cadastro de Tabela Contábil
    </h1>
    <v-form class="mt-10">
      <v-row>
        <v-col class="col-1">
          <v-text-field
            label="Código"
            v-model="tabelaContabil.id"
            disabled
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Descrição"
            v-model="tabelaContabil.descricao"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-2">
          <v-text-field
            label="Conta Crédito"
            v-model="tabelaContabil.conta_credito"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="col-2">
          <v-text-field
            label="Conta Débito"
            v-model="tabelaContabil.conta_debito"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="success" style="float: right;" @click="setTabelaContabil(tabelaContabil)">Salvar</v-btn>
      <v-btn color="error" style="float: right; margin-right: 10px;">Cancelar</v-btn>
    </v-form>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'TitulosNovo',

  data() {
    return {
      tabelaContabil: {
        id: null,
        descricao: null,
        conta_credito: null,
        conta_debito: null
      },
    }
  },

   methods: {
    ...mapActions('tabelaContabil', ['setTabelaContabil'])
  }
}
</script>

<style>
.headerNovo {
  font-family: Jura;
  font-style: normal;
  font-weight: bolder;
  color: #566eae;
}
</style>