<template>
  <div>
    <h1 class="header">Dashboard</h1>
    <v-row>
      <v-col v-for="card in cards" :key="card.id">
        <v-card>
          <v-card-title>
            {{ card.title }}
          </v-card-title>
          <v-divider/>
          <v-card-text>
            {{ card.text }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',

  data() {
    return {
      cards: [
        { title: 'R$ RECEBIDO NESSE MÊS', text: 'R$ 1562.00' },
      ]
    }
  },
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