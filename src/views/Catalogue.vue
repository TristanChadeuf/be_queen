<script setup>
import{ref,onMounted, computed} from "vue"
import axios from "axios"
const products = ref([]);

onMounted(async()=> {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/product");
  
  products.value=response.data.getProductWithCategory;
  
  } catch (error) {
    console.error(error);
  }
});
console.log(products),



computed(()=>{

  filteredProduct()
    return this.products.filter(velos=>velos.name.includes(this.searchVelo))
  
});



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

<h2>CATEGORIE 1</h2>


   <div>
    <input type="search" placeholder="recherche des velos..." v-model="filteredProduct"/>
    <table>
      <tr>
        <td class="searchBarre" v-for="p in filteredNames" :key="p.id">{{ p.name }}<br/><img :src="p.pic"></td>
      </tr>
    </table>
   </div>
 <div class="AllProduct">
    <div v-for="product in products" class="Produit">
      
          <div>
            <ul class="NomProduitPrix">
            <p>{{ product.name }}</p>
            <p>{{ product.price}}.99</p>
            </ul>
          </div>

          <div>
            <p>{{ product.description }}</p>
            <img src="/public/bikle-modele-R-2024-2-1024x545-2.png" >
          </div>
          <div class="ProduitBouton">
          <button type="button" class="btn btn-warning">AJOUT PANIER</button>
          <button type="button" class="btn btn-secondary">PERSONNALISER</button>
          </div>

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
  box-shadow: 10px 5px 5px #45474B;
  font-family: "MuseoModerno", sans-serif;
  background-color: #379777;
  width: 25%;
  border-radius: 5%;
  margin: 2%;
}
.Produit p
{
  padding: 2%;

}
.Produit img
{
  width: 70%;

}
.NomProduitPrix
{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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
.AllProduct
{
  display: flex;
  flex-direction: row;
 flex-wrap: wrap;
}
.searchBarre
{
  display: flex;
  justify-content: center;
}
</style>