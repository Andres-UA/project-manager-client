<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="14" :offset="5">
        <el-card>
          <el-container>
            <el-header>
              <NavBar></NavBar>
            </el-header>
            <el-main>
              <transition
                name="router-anim"
                enter-active-class="animated bounceInRight"
                leave-active-class="animated bounceOutUp"
              >
                <router-view/>
              </transition>
            </el-main>
            <el-footer>
              <hr>
              <p>Project Manager - por Andrés U. & Steven M.</p>
            </el-footer>
          </el-container>
        </el-card>
      </el-col>
    </el-row>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css');
  #app {
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
      Arial, sans-serif;
  }
  .pages {
    position: fixed;
    width: inherit;
  }
</style>
