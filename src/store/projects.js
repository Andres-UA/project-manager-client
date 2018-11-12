import router from '../router'
import HTTP from '../http'

export default {
  namespaced: true,
  state: {
    projects: [],
    currentId: '',
    currentProject: {
      name: '',
      responsible: '',
      description: '',
      start_date: '',
      end_date: '',
      state: '',
      tasks: []
    },
    project: {
      name: '',
      responsible: '',
      description: '',
      start_date: '',
      end_date: ''
    },
    registerError: null,
    task: {
      name: '',
      priority: '',
      description: ''
    }
  },
  getters: {},
  mutations: {
    setProject (state, project) {
      state.project = project
    },
    setRegisterError (state, error) {
      state.registerError = error
    },
    setProjects (state, projects) {
      state.projects = projects
    },
    appendProject (state, project) {
      state.projects.push(project)
    },
    setCurrentProject (state, project) {
      state.currentProject = project
    },
    setCurrentId (state, id) {
      state.currentId = id
    },
    setTask (state, task) {
      state.task = task
    },
    appendTask (state, task) {
      state.currentProject.tasks.push(task)
    }
  },
  actions: {
    index ({ commit, state }) {
      return HTTP()
        .get('/projects')
        .then(({ data }) => {
          commit('setProjects', data.projects)
        })
        .catch((err) => {
          commit('setRegisterError', err)
        })
    },
    store ({ commit, state }) {
      return HTTP()
        .post('/projects', {
          name: state.project.name,
          responsible: state.project.responsible,
          description: state.project.description,
          start_date: new Date(state.project.start_date),
          end_date: new Date(state.project.end_date),
          state: 'En Progreso'
        })
        .then(({ data }) => {
          commit('appendProject', data)
          // localStorage.setItem('access_token', data.token)
          router.push('/dashboard')
        })
        .catch((err) => {
          commit('registerError', err.data)
        })
    },
    addTask ({ commit, state }) {
      return HTTP()
        .put(`/projects/${state.currentId}/tasks`, {
          name: state.task.name,
          description: state.task.description,
          priority: state.task.priority
        })
        .then(({ data }) => {
          commit('appendTask', data.task)
        })
        .catch((err) => {
          commit('registerError', err.data)
        })
    },
    show ({ commit, state }) {
      return HTTP()
        .get(`/projects/${state.currentId}`)
        .then(({ data }) => {
          commit('setCurrentProject', data.project)
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
