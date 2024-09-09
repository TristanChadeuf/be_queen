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
<h1>Description</h1>

    <p>{{ productId.name }}</p>

</template>

<style>

</style>