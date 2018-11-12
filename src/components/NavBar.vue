<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    router
    @select="handleSelect"
  >
    <el-menu-item route="/" index="1">Inicio</el-menu-item>
    <el-menu-item v-if="!isLoggedIn" route="/register" index="2">Registrarse</el-menu-item>
    <el-menu-item v-if="!isLoggedIn" route="/login" index="3">Iniciar Sesión</el-menu-item>
    <el-menu-item v-if="isLoggedIn" route="/dashboard" index="4">Dashboard</el-menu-item>
    <el-submenu v-if="isLoggedIn" index="5">
      <template slot="title">User</template>
      <el-menu-item index>Cerrar Sesión</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
    handleSelect (key, keyPath) {
      if (key === '6') {
        this.logout()
      }
    }
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn'])
  }
}
</script>

<style>
</style>
