<script>
export default{
  
  data() {
    return {
      catalogue: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchCatalogue() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/product"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch catalogue data.");
        }
        const data = await response.json();
        this.catalogue = data.list; 
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
  async mounted() {
    await this.fetchCatalogue();
  },
};

</script>

<template>
 

  <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
     
      <img src=" /public/bike-1505039_1280 1.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/public/sunset-5033708_1280 1.png" class="d-block w-100 " alt="...">
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

<div class="TitreCatalogue">
  <h1>Nos Vélos</h1>
</div>

<div>
    <div v-if="loading">requête en cours </div>
    <div v-if="error" class="error">{{ error }}</div>
    <ul v-if="!loading && !error"></ul>
</div> 

<h2>CATEGORIE 1</h2>

<div v-for="(catalogue, index) in cities" :key="index" class="Produit">
  
    <div class="NomProduitPrix">
      <p :key="index">{{ catalogue.name }}</p>
      <p :key="index">{{ catalogue.price }}</p>
    </div>
    <div>
      <p :key="index">{{ catalogue.description }}</p>
      <img src="/public/bikle-modele-R-2024-2-1024x545-2.png" >
    </div>
    <div class="ProduitBouton">
    <button type="button" class="btn btn-warning">AJOUT PANIER</button>
    <button type="button" class="btn btn-secondary">PERSONNALISER</button>
    </div>

</div>


</template>

<style>

.TitreCatalogue h1
{
  color: #F4CE14 ;
  font-family: "MuseoModerno", sans-serif;
  font-size: 4rem;
  position: absolute;
  top:750px;
}
.Produit
{
  background-color: #379777;
  width: 35%;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  margin: 2%;
}
.Produit p
{
  padding: 2%;

}
.NomProduitPrix
{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #F4CE14;
  font-size: 2rem;
}
.ProduitBouton
{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 1%;
  margin-bottom: 1%;
}
</style>