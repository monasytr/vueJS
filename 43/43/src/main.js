import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  //hash vs history
  mode: 'history' //zeby hashy w urlu nie bylo
});

//Filtry

Vue.filter('snipped', function(value){
  return value.slice(0,100) + '...';
});

new Vue({
  el: '#app',
  render: h => h(App),
  router : router // tutaj
})