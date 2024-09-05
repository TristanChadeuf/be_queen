<script>
export default{
  name:"PageAccueil"
}
</script>

<template>
<header>
<nav class="NavBar">
  <RouterLink to="/"><img id="LogoBeQueen" src="/public/logoBeQueenCut 1.png" alt="Logo Be-Queen"></RouterLink>
  <ul class="NavBar">
    <RouterLink  style="text-decoration: none; color: inherit;" to="/catalogue"><li>CATALOGUE</li></RouterLink>
    <li>PERSONNALISATION</li>
    <li>CONTACT</li>
    <li><img src="/public/bag-check-fill 1.png" alt=""></li>
    <li><img src="/public/user-solid 1.png" alt=""></li>
</ul>
</nav>
</header>

</template>

<style>

.NavBar ul{
  list-style: none;
}

 .NavBar
 {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  background-color: #379777;
  padding-top: 1%;

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