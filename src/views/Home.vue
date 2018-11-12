<template>
  <div class="page">
    <h1>Bienvenidos</h1>
    <br>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item>
        <h3>Maneja tus proyectos</h3>
      </el-carousel-item>
      <el-carousel-item>
        <h3>Controla tus proyectos</h3>
      </el-carousel-item>
      <el-carousel-item>
        <h3>xD</h3>
      </el-carousel-item>
    </el-carousel>
    <br>
    <div style="text-align: center;">
      <router-link to="/register" tag="a">Registrate</router-link>
      <p>o</p>
      <router-link to="/login" tag="a">Inicia Sesión</router-link>
      <p>para empezar.</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    text-align: center;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
