import router from '../router'
import HTTP from '../http'

export default {
  namespaced: true,
  state: {
    registerUser: {
      name: '',
      email: '',
      password: ''
    },
    registerError: null,
    loginUser: {
      email: '',
      password: ''
    },
    loginError: null,
    token: null,
    user: null,
    success: false
  },
  getters: {
    isLoggedIn (state) {
      return !!state.token
    },
    getUser (state) {
      return state.user ? state.user : {}
    },
    getSuccess (state) {
      return state.success
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setUser (state, user) {
      state.user = user
    },
    setRegisterUser (state, user) {
      state.registerUser = user
    },
    setRegisterError (state, error) {
      state.registerError = error
    },
    setLoginUser (state, user) {
      state.loginUser = user
    },
    setLoginError (state, error) {
      state.loginError = error
    },
    setSuccess (state, success) {
      state.success = success
    }
  },
  actions: {
    register ({ commit, state }) {
      return HTTP()
        .post('/auth/register', {
          fullName: state.registerUser.name,
          email: state.registerUser.email,
          password: state.registerUser.password
        })
        .then(({ data }) => {
          commit('setSuccess', true)
          router.push('/login')
        })
        .catch((err) => {
          commit('setRegisterError', err)
        })
    },
    login ({ commit, state }) {
      return HTTP()
        .post('/auth/authenticate', {
          email: state.loginUser.email,
          password: state.loginUser.password
        })
        .then(({ data }) => {
          commit('setSuccess', false)
          commit('setToken', data.token)
          // localStorage.setItem('access_token', data.token)
          router.push('/dashboard')
        })
        .catch((err) => {
          commit('setLoginError', err.data)
        })
    },
    getUser ({ commit }) {
      return HTTP()
        .post('/auth/user')
        .then(({ data }) => {
          console.log(data)
          commit('setUser', data)
        })
        .catch(() => {
          commit('setLoginError', 'Errores al loguearse')
        })
    },
    logout ({ commit }) {
      commit('setToken', null)
      router.push('/login')
    }
  }
}
