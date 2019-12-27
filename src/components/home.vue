<template>
    <div class="container">
    <div class="jumbotron">
      <h1 class="text-center">Componentes</h1>
      <div class="row">
        <div class="col-md-4 col-12 card">
          <img
            src="https://www.pikpng.com/pngl/b/150-1505989_file-logo-d3-svg-javascript-logo-vector-png.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title text-center bolder">D3</h5>
            <div class="text-center">
                <router-link class="btn btn-primary" to="/d-3"> Ejemplo </router-link>
            </div>
          </div>
        </div>
        <!-- Chart js -->
        <div class="col-md-4 col-12 card">
          <img
            src="https://miro.medium.com/max/3240/1*yf_9JIerI3yJbuyebXK-LA.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title text-center bolder">Chart Js</h5>
            <div class="text-center">
                <router-link class="btn btn-primary" to="/chart-js"> Ejemplo </router-link>
            </div>
          </div>
        </div>
        <!-- Vega -->
        <div class="col-md-4 col-12 card">
          <h1 class="text-center p-5">VEGA</h1>
          <div class="card-body">
            <h5 class="card-title text-center bolder">Vega</h5>
            <div class="text-center">
                <router-link class="btn btn-primary" to="/vega"> Ejemplo </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    name: 'home'
}
</script>