<template>
  <div class="page">
    <h1>Dashboard</h1>
    <el-row type="flex" class="row-bg">
      <el-col :span="6" v-if="isCreating">
        <el-button type="primary" @click="seeProjects">Ver Proyectos</el-button>
      </el-col>
      <el-col :span="6" v-if="!isCreating">
        <el-button type="success" @click="newProject">Nuevo proyecto</el-button>
      </el-col>
    </el-row>
    <transition
      name="router-anim"
      enter-active-class="animated bounceInRight"
      leave-active-class="animated bounceOutUp"
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import router from '../router'

export default {
  mounted () {
    if (this.isLoggedIn) {
      this.index()
    } else {
      return router.push('/login')
    }
  },
  data () {
    return ({
      creating: false
    })
  },
  computed: {
    ...mapState('projects', ['projects']),
    ...mapGetters('auth', ['isLoggedIn']),
    isCreating () {
      return this.creating
    }
  },
  methods: {
    ...mapActions('projects', ['index']),
    newProject () {
      this.creating = true
      router.push('/dashboard/new')
    },
    seeProjects () {
      this.creating = false
      router.push('/dashboard')
    }
  }
}
</script>

<style>
</style>
