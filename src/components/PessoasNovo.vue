<template>
  <v-container>
    <h1 class="headerNovo">
      Cadastro de Pessoas
    </h1>
    <v-form class="mt-10">
      <v-row>
        <v-col class="col-1">
          <v-text-field
            label="Código"
            v-model="pessoas.id"
            disabled
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="col-1">
          <v-checkbox
            label="Cliente"
            v-model="pessoas.cliente"
          ></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox
            label="Fornecedor"
            v-model="pessoas.fornecedor"
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Nome"
            v-model="pessoas.nome"
            outlined
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="CPF/CNPJ"
            v-model="pessoas.cpfcnpj"
            outlined
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Celular"
            v-model="pessoas.celular"
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Telefone"
            v-model="pessoas.telefone"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Data de nascimento"
            v-model="pessoas.dataNascimento"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="col-9">
          <v-text-field
            label="E-mail"
            v-model="pessoas.email"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-2">
          <v-text-field
            label="CEP"
            v-model="pessoas.cep"
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-btn
            class="mt-3"
            icon
            color="green"
            @click="getCep(pessoas.cep)"
          >
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </v-col>
        <v-col class="col-8">
          <v-text-field
            label="Município"
            v-model="pessoas.municipio"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="col-1">
          <v-text-field
            label="UF"
            v-model="pessoas.uf"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-10">
          <v-text-field
            label="Endereço"
            v-model="pessoas.endereco"
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Número"
            v-model="pessoas.numero"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Bairro"
            v-model="pessoas.bairro"
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Complemento"
            v-model="pessoas.complemento"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="success" style="float: right;" @click="setPessoas(pessoas)">Salvar</v-btn>
      <v-btn color="error" style="float: right; margin-right: 10px;" to="/pessoas">Cancelar</v-btn>
    </v-form>
  </v-container>
</template>
<script>
import Axios from 'axios';
import { mapActions } from 'vuex';
export default {
  name: 'PessoasNovo',

  data() {
    return {
      pessoas: {
        id: null,
        nome: null,
        cpfcnpj: null,
        data_nascimento: null,
        telefone: null,
        celular: null,
        email: null,
        endereco: null,
        bairro: null,
        numero: null,
        complemento: null,
        cep: null,
        municipio: null,
        uf: null,
        cliente: false,
        fornecedor: false
      }
    }
  },

  methods: {
    async getCep(v) {
      const cep = v.replace(/[^0-9,.]+/g, "");
      const url = `https://viacep.com.br/ws/${cep}/json`;
      let result = await Axios.get(url).then();
      this.pessoas.endereco = result.data.logradouro;
      this.pessoas.bairro = result.data.bairro;
      this.pessoas.complemento = result.data.complemento;
      this.pessoas.municipio = result.data.localidade;
      this.pessoas.uf = result.data.uf;
    },
    ...mapActions('pessoas', ['setPessoas'])
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