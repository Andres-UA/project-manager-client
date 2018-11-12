<template>
  <div class="page">
    <el-alert v-if="getSuccess" title="Ya puedes iniciar sesión" type="success" show-icon></el-alert>
    <h1>Iniciar Sesión</h1>
    <el-form ref="form" :model="form" label-width="200px">
      <el-form-item label="Email">
        <el-input v-model="form.email" type="email"></el-input>
      </el-form-item>
      <el-form-item label="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Iniciar Sesión</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters('auth', ['getSuccess'])
  },
  methods: {
    ...mapMutations('auth', ['setLoginUser']),
    ...mapActions('auth', ['login']),
    onSubmit () {
      if (this.form.email === '' || this.form.password === '') {
        this.$snotify.error('Campos vacios.', 'Error')
      } else {
        this.setLoginUser(this.form)
        this.login()
      }
    }
  }
}
</script>

<style>
</style>
