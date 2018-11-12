<template>
  <div class="page">
    <h1>Register</h1>
    <el-form ref="form" :model="form" label-width="200px">
      <el-form-item label="Nombre">
        <el-input v-model="form.name" type="text"></el-input>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="form.email" type="email"></el-input>
      </el-form-item>
      <el-form-item label="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Registrarse</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapMutations('auth', ['setRegisterUser']),
    ...mapActions('auth', ['register']),
    onSubmit () {
      if (this.form.name === '' || this.form.email === '' || this.form.password === '') {
        this.$snotify.error('Campos vacios.', 'Error')
      } else {
        this.setRegisterUser(this.form)
        this.register()
      }
    }
  }
}
</script>

<style>
</style>
