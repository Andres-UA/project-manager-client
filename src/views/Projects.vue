<template>
  <div>
    <h1>Projectos</h1>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-input v-model="filter" class="filterBar" placeholder="Busca un proyecto"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" v-for="project in filterProjects" :key="project._id">
        <el-card class="margin-bottom">
          <div slot="header" class="clearfix">
            <span>{{ project.name }}</span>
            <div
              :class=" new Date() > new Date(project.end_date) ? 'red' : 'green'"
              style="float: right; padding: 3px 5px; color: white; "
              type="text"
            >{{ new Date() > new Date(project.end_date) ? 'Retrasado' : project.state }}</div>
          </div>
          <div class="text item">
            <b>Responsable:</b>
            {{ project.responsible }}
          </div>
          <div class="text item">
            <b>Descripción:</b>
            {{ project.description }}
          </div>
          <div class="text item">
            <b>Fecha Inicio:</b>
            {{ project.start_date | moment }}
          </div>
          <div class="text item">
            <b>Fecha Fin:</b>
            {{ project.end_date | moment }}
          </div>
          <div class="bottom clearfix">
            <el-button type="text" class="button" @click="seeProject(project._id)">Ver Projecto</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import router from '../router'

export default {
  data () {
    return ({
      filter: ''
    })
  },
  computed: {
    ...mapState('projects', ['projects']),
    filterProjects () {
      return this.projects.filter(item => {
        return item.name.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1
      })
    }
  },
  methods: {
    seeProject (id) {
      router.push(`dashboard/show/${id}`)
    }
  }
}
</script>

<style>
  .margin-bottom {
    margin-bottom: 20px;
  }
  .red {
    background-color: brown !important;
  }

  .green {
    background-color: chartreuse !important;
  }

  .filterBar {
    margin-bottom: 20px;
  }
</style>
