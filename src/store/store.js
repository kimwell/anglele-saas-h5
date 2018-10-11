import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'
import VueLocalStorage from 'vue-ls';


Vue.use(VueLocalStorage);
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: undefined,
    base: '',
    authorization: Vue.ls.get('authorization'),
  },
  getters: {
    isLogin: state => {
      return state.user != undefined
    }
  },
  mutations: {
    [types.LOGIN]: (state, payload) => {
      Vue.ls.set('authorization', payload.authorization);
      state.authorization = payload.authorization;
    },
    [types.LOGOUT]: (state) => {
      Vue.ls.remove('authorization');
      state.authorization = '';
      state.user = undefined;
      state.base = '';
    },
    [types.SET_USER_INFO]: (state, payload) => {
      state.user = payload.loginInfo;
      state.base = payload;
    }
  },
  actions: {
    loginOut(context) {
      context.commit(types.LOGOUT);
    }
  }
});
