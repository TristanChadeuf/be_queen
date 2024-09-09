<script>
import { useRoute } from 'vue-router';
import axios from 'axios';
export default {



data()
{
return{
    productId:{},

    }

},

methods: {
    async getProduct(id){
        try{
            const response = await axios.get(`http://127.0.0.1:8000/api/product/${id}`);
            console.log(response)
            this.productId = response.data.getProductById;
     
        } catch (error) {
            console.error(error);
        }
    },

    },

mounted()
{
    this.getProduct(this.$route.params.id)
    console.log(this.productId)
}

  
}


</script>

<template>
<div class="Alldescription">
        <img src="/public/bikle-modele-R-2024-2-1024x545-2.png" alt="modele velo">
       
    <div class="caracteristique">
        <h1>{{ productId.name }}</h1>
        <p>{{ productId.description }}</p>
        <p>{{ productId.price }}€</p>
            <div class="boutonDescription">
                <button class="btn btn-add">AJOUT PANIER</button>
                <RouterLink to="/Personnalisation"><button class="btn btn-custom">PERSONNALISATION</button></RouterLink>
            </div>
    </div>
</div>

 <div class="photoTexte1">
<p>CONSTRUIT PAR DES PASSIONNÉS, POUR DES PASSIONNÉS.
Chez Be Queen, le plaisir de conduite est au centre de nos préoccupations.
Ton futur vélo est aussi cool à rider qu’à regarder.
Aucun compromis sur la qualité de fabrication de notre cadre Annécien en aluminium garanti à vie* pour profiter indéfiniment de ton Bikle.
Profitez également d’un SAV irréprochable, d’une équipe disponible pour répondre à toutes vos questions avant, pendant et après votre achat.
La qualité du produit et la performance de notre SAV font aujourd’hui de Bikle la meilleure marque de vélos électriques du marché.
Retrouvez ici le certificat de conformité CE EN 15194
*Cadre garanti à vie sur son intégrité structurelle dans les conditions normales d’utilisation. Hors peintures et accessoires.</p>
<img src="/public/Group 12 (1).png" alt="photo reunion">
</div>
<div class="photoTexte2">
<img src="/public/velo-ancien-2 1 (2).png">
<p>Notre Histoire
    l'imprimerie depuis les années 1500,
     quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
      Il n'a pas fait que survivre cinq siècles,
       mais s'est aussi adapté à la bureautique informatique,
        sans que son contenu n'en soit modifié.</p>
    </div>
</template>

<style scoped>
  .btn-add {
    background-color: #F4CE14;
  }
  
  .btn-custom {
    background-color: #45474B;
  }
  .decriptionProduit
  {
    display: flex;
    flex-direction: column;
  }
.caracteristique
{
    display: flex;
    flex-direction: column;
}
.boutonDescription
{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 30%;
}
.Alldescription
{
    display: flex;
    flex-direction: row;
    margin: 5%;
    padding: 2%;
}
.photoTexte1
{
    display: flex;
    flex-direction: row;
    margin: 2%;
}
.photoTexte1 p
{
    color: white;
    background-color: #45474B;
    border-radius: 10%;
    padding: 2%;
}
.photoTexte2
{
    display: flex;
    flex-direction: row;
    margin: 2%;
}
.photoTexte2 p
{
    color: white;
    background-color: #45474B;
    border-radius: 10%;
    padding: 2%;
}
</style>