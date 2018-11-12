<template>
  <div>
    <br>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Nombre: {{ currentProject.name }}</span>
        <el-button
          style="float: right; padding: 3px 5px"
          type="primary"
          @click="dialogTaskVisible = true"
        >Nueva Tarea</el-button>
      </div>
      <div class="text item">
        <b>Responsable:</b>
        {{ currentProject.responsible }}
      </div>
      <div class="text item">
        <b>Descripción:</b>
        {{ currentProject.description }}
      </div>
      <div class="text item">
        <b>Fecha Inicio:</b>
        {{ currentProject.start_date }}
      </div>
      <div class="text item">
        <b>Fecha Fin:</b>
        {{ currentProject.end_date }}
      </div>
      <div class="text item">
        <b>Estado:</b>
        {{ currentProject.state }}
      </div>
    </el-card>
    <br>
    <h4>Listado de Tareas</h4>
    <el-row :gutter="20">
      <el-col :span="6" v-for="task in currentProject.tasks" :key="task._id">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>{{ task.name }}</span>
            <div style="float: right; padding: 3px 0" type="text">{{ task.priority }}</div>
          </div>
          <div class="text item">{{ task.description }}</div>
        </el-card>
      </el-col>
    </el-row>
    <!-- Form -->
    <el-dialog title="Agregar Tarea" :visible.sync="dialogTaskVisible">
      <el-form :model="task">
        <el-form-item label="Nombre">
          <el-input v-model="task.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Description">
          <el-input v-model="task.description" type="textarea" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Prioridad">
          <el-input-number v-model="task.priority" :min="1" :max="10"></el-input-number>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogTaskVisible = false">Cancelar</el-button>
        <el-button type="primary" @click="onSubmit">Confirmar</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'
import router from '../router'

export default {
  mounted () {
    if (this.isLoggedIn) {
      const id = this.$route.params.id
      this.setCurrentId(id)
      this.show()
    } else {
      return router.push('/login')
    }
  },
  data () {
    return ({
      dialogTaskVisible: false,
      task: {
        name: '',
        description: '',
        priority: ''
      }
    })
  },
  computed: {
    ...mapState('projects', ['currentProject']),
    ...mapGetters('auth', ['isLoggedIn'])
  },
  methods: {
    ...mapActions('projects', ['show', 'addTask']),
    ...mapMutations('projects', ['setCurrentId', 'setTask']),
    onSubmit () {
      if (this.task.name === '' || this.task.description === '' || this.task.priority === '') {
        this.$snotify.error('Campos vacios', 'Error')
      } else {
        this.setTask(this.task)
        this.addTask()
        this.dialogTaskVisible = false
        this.task = {
          name: '',
          description: '',
          priority: ''
        }
        this.$snotify.success('Tarea agregada')
      }
    }
  }
}
</script>

<style scoped>
  .box-card {
    margin-bottom: 20px;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: '';
  }
  .clearfix:after {
    clear: both;
  }
</style>
