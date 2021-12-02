<template>
  <v-container>
    <h1 class="headerNovo">
      Cadastro de Planos de Conta
    </h1>
    <v-form class="mt-10">
      <v-row>
        <v-col class="col-1">
          <v-text-field
            label="Código"
            v-model="contas.id"
            disabled
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-4">
          <v-text-field
            label="Descrição"
            v-model="contas.descricao"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="col-2">
          <v-text-field
            label="Saldo"
            v-model="contas.saldo"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="success" style="float: right;" @click="setContas(contas)">Salvar</v-btn>
      <v-btn color="error" style="float: right; margin-right: 10px;">Cancelar</v-btn>
    </v-form>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'PlanoContasNovo',

  data() {
    return {
      contas: {
        descricao: null,
        saldo: null
      }
    }
  },

   methods: {
    ...mapActions('contas', ['setContas'])
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