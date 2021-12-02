<template>
  <v-container>
    <h1 class="headerNovo">
      Lançamento de Títulos
    </h1>
    <v-form class="mt-10">
      <v-row>
        <v-col class="col-1">
          <v-text-field
            label="Código"
            v-model="titulos.id"
            disabled
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="col-2">
          <v-select
          :items="tipos"
          label="Tipo do Título"
          v-model="titulos.tipo"
          outlined
          required
        ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-2">
          <v-text-field
            label="Titulo"
            v-model="titulos.titulo"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="col-3">
          <v-select
            :items="optionsTabelaContabil()"
            label="Tabela Contábil"
            v-model="titulos.tabela_contabil"
            outlined
            required
          ></v-select>
        </v-col>
        <v-col class="col-1">
          <v-btn
            class="mt-3"
            icon
            color="green"
            @click="getTabelaContabil"
          >
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </v-col>
        <v-col class="col-3">
          <v-select
            :items="optionsPessoas()"
            label="Pessoa"
            v-model="titulos.pessoa"
            outlined
          ></v-select>
        </v-col>
        <v-col>
          <v-btn
            class="mt-3"
            icon
            color="green"
            @click="getPessoas"
          >
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-2">
          <v-text-field
            label="Emissão"
            v-model="titulos.emissao"
            outlined
            required
          ></v-text-field>
        </v-col>
        <v-col class="col-2">
          <v-text-field
            label="Valor"
            v-model="titulos.valor"
            outlined
            required
          ></v-text-field>
        </v-col>
        <v-col class="col-2">
          <v-text-field
            label="Vencimento"
            v-model="titulos.vencimento"
            outlined
            required
          ></v-text-field>
        </v-col>
        <v-col class="col-2">
          <v-text-field
            label="Valor Pago"
            v-model="titulos.valor_pago"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="col-2">
          <v-text-field
            label="Pagamento"
            v-model="titulos.pagamento"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-2">
          <v-text-field
            label="Desconto"
            v-model="titulos.desconto"
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="col-2">
          <v-text-field
            label="Multa"
            v-model="titulos.multa"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Observação"
            v-model="titulos.observacao"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="success" style="float: right;" @click="setTitulos(titulos)">Salvar</v-btn>
      <v-btn color="error" style="float: right; margin-right: 10px;">Cancelar</v-btn>
    </v-form>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'TitulosNovo',

  data() {
    return {
      tipos: [
        { text: 'a receber', value: 'r' },
        { text: 'a pagar', value: 'p' }
      ],
      titulos: {
        id: null,
        tipo: null,
        tabela_contabil: null,
        titulo: null,
        pessoa: null,
        emissao: null,
        valor: null,
        vencimento: null,
        pagamento: null,
        valor_pago: null,
        observacao: null,
        desconto: null,
        multa: null
      }
    }
  },

  computed: {
    ...mapGetters('pessoas', ['pessoas']),
    ...mapGetters('tabelaContabil', ['tabelaContabil'])
  },

  methods: {
    ...mapActions('titulos', ['setTitulos']),
    ...mapActions('pessoas', ['getPessoas']),
    ...mapActions('tabelaContabil', ['getTabelaContabil']),
    optionsPessoas() {
      const items = [];
      this.pessoas.forEach(p => {
        items.push({
          text: p.nome,
          value: p.id
        })
      });
      return items;
    },
    optionsTabelaContabil() {
      const items = [];
      this.tabelaContabil.forEach(p => {
        items.push({
          text: p.descricao,
          value: p.id
        })
      });
      return items;
    }
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