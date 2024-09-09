<script>
import { RouterLink } from 'vue-router';
export default{
  name:"PageAccueil"
}
</script>

<template>
<header>
<nav class="NavBar">
  <RouterLink to="/"><img id="LogoBeQueen" src="/public/logoBeQueenCut 1.png" alt="Logo Be-Queen"></RouterLink>
  <ul class="NavBar">
    <RouterLink to="/catalogue"><li>CATALOGUE</li></RouterLink>
    <RouterLink to="/Personnalisation"><li>PERSONNALISATION</li></RouterLink>
    <li>CONTACT</li>
    <button @click="store.toggleIsDisplayed()"><img src="/public/bag-check-fill 1.png" alt="cart icon" width="30" height="30" /></button>
    <li><img src="/public/user-solid 1.png" alt=""></li>
</ul>
</nav>
</header>

</template>

<style>

.NavBar ul{
  list-style: none;
}

a{
  text-decoration: none;
  color: white
}
 .NavBar
 {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  background-color: #379777;
  padding-top: 1%;
  text-decoration: none;
  color: white;

 }

#LogoBeQueen
{
  position: relative;
  margin-left: 5%;
  margin-bottom: 5%;
  width: 15vh;
  height: 15vh;
}
.NavBar
{
  font-family: "Montserrat", sans-serif;
 
}


</style>