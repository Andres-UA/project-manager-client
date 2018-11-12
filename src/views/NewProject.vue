<template>
  <div class="page">
    <h1>Nuevo Proyecto</h1>
    <el-form ref="form" :model="form" label-width="200px">
      <el-form-item label="Nombre del proyecto">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Responsable del proyecto">
        <el-input v-model="form.responsible"></el-input>
      </el-form-item>
      <el-form-item label="Descripción del proyecto">
        <el-input type="textarea" v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item label="Duración del proyecto">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="Inicio"
            v-model="form.start_date"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="Finalización"
            v-model="form.end_date"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="onSubmit">Crear</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  data () {
    return {
      form: {
        name: '',
        responsible: '',
        description: '',
        start_date: '',
        end_date: ''
      }
    }
  },
  methods: {
    ...mapMutations('projects', ['setProject']),
    ...mapActions('projects', ['store']),
    onSubmit () {
      if (this.form.name === '' || this.form.responsible === '' || this.form.description === '' || this.form.start_date === '' || this.form.end_date === '') {
        this.$snotify.error('Campos vacios', 'Error')
      } else {
        this.setProject(this.form)
        this.store()
        this.$snotify.success('Proyecto agregado')
      }
    }
  }
}
</script>

<style>
</style>
