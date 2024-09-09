<script>
import ProductVue from '../components/catalogue.vue';

export default {
  components: {
    ProductVue
  },
  data() {
    return {


    }
  },
}
</script>
<template>



    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/public/sunset-5033708_1280 1.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/public/bike-1505039_1280 1.png" class="d-block w-100 " alt="...">
    </div>
    <div class="carousel-item">
      <img src="/public/cycles-4254752_1280 1.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



  <ProductVue />

</template>

<style scoped>
main {
  padding: 90px;
}

.image {
  width: 100%;
  height: 70vh;
  background-image: url('../../public/logo/bike-1505039_1280\ 1.png');
  background-size: contain;
}

h1 {
  position: absolute;
  top: 60%;
  font-size: 10rem;
  z-index: 1;
  color: var(--secondary);
  font-family: "MuseoModerno", sans-serif;
  font-weight: 500;

}

.footer-product {
  border-top: 5px solid var(--primary);
  margin: 6%;
  padding: 5rem 5rem 0 5rem;
}

.img1 {
  width: 100%;
  height: 75vh;
  align-content: center;
  background-image: url('../../public/image/Réparer-son-be-queen.png');
  background-repeat: no-repeat;
  background-size: contain;

  background-position: center;
  margin-bottom: 30px;
}

.img2 {
  width: 100%;
  height: 75vh;
  border-radius: 15px;
  background-image: url('../../public/image/nos-parcoure.png');
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;


}
</style>