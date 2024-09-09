<template>

 <h1>PERSONALISE TON VELO</h1>
<div class="PagePersonnalisation">
 <img src="/public/bikle-modele-R-2024-2-1024x545-2.png" alt="Velo">

    <div class="menuDeroulant">
        
            <select>
                <option value="">--Choisit Ta Roue--</option>
                <option value="Grande">Grande</option>
                <option value="Moyenne">Moyenne</option>
                <option value="Petite">Petite</option>
            </select>

            <select>
                <option value="">--Choisit Ton Cadre--</option>
                <option value="Grande">Grande</option>
                <option value="Moyenne">Moyenne</option>
                <option value="Petite">Petite</option>
            </select>

            <select>
                <option value="">--Choisit Ton Guidon--</option>
                <option value="Grande">Grande</option>
                <option value="Moyenne">Moyenne</option>
                <option value="Petite">Petite</option>
            </select>

            <select>
                <option value="">--Choisit Ta Pedale--</option>
                <option value="Grande">Grande</option>
                <option value="Moyenne">Moyenne</option>
                <option value="Petite">Petite</option>
            </select>
       
    </div>
</div>

    <button class="btn btn-add">METTRE AU PANIER</button>

 
  </template>
  
  <script>

  </script>
  
  
  <style scoped>
  .menuDeroulant
  {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .menuDeroulant select
  {
    background-color: #F4CE14;
    width: 150%;
    border-radius: 2px;
  }
  .PagePersonnalisation
  {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 30vh;
  }
  .btn
  {
    background-color: #379777;
    
  }
  .btn-add
  {
    width: 15%;
    
    position: relative;
    top: -150px;
    right: -1300px;
  }
  </style>