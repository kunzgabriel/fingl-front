import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../components/Dashboard.vue';
import Titulos from '../components/Titulos.vue';
import TitulosNovo from '../components/TitulosNovo.vue';
import Pessoas from '../components/Pessoas.vue';
import PessoasNovo from '../components/PessoasNovo.vue';
import PlanoContas from '../components/PlanoContas.vue';
import PlanoContasNovo from '../components/PlanoContasNovo.vue';
import TabelasContabeis from '../components/TabelasContabeis.vue';
import TabelasContabeisNovo from '../components/TabelasContabeisNovo.vue';
import Reports from '../components/Reports.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/titulos', name: 'Titulos', component: Titulos },
  { path: '/titulosNovo', name: 'TitulosNovo', component: TitulosNovo },
  { path: '/pessoas', name: 'Pessoas', component: Pessoas },
  { path: '/pessoasNovo', name: 'PessoasNovo', component: PessoasNovo },
  { path: '/planoContas', name: 'PlanoContas', component: PlanoContas },
  { path: '/planoContasNovo', name: 'PlanoContasNovo', component: PlanoContasNovo },
  { path: '/tabelasContabeis', name: 'TabelasContabeis', component: TabelasContabeis },
  { path: '/tabelasContabeisNovo', name: 'TabelasContabeisNovo', component: TabelasContabeisNovo },
  { path: '/reports', name: 'Reports', component: Reports },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
