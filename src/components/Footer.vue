<script>
export default
{
    name: 'BasDePage'
};
</script>


<template>

    <footer>
        <div class="AllFooter">

                <div class="FooterColumn">
                            <div class="FooterRow">
                                <img src="/public/Vector.png" alt="logo insta">
                                <p>:insta/be-queen.fr</p>
                            </div>

                            <div class="FooterRow">
                                <img src="/public/Vector (1).png" alt="logo facebook">
                                <p>: facebook/be-queen.fr</p>
                            </div>
                </div>
                <div class="FooterColumn">
                            <div class="FooterRow">
                                <img src="/public/Vector (2).png" alt="logo linkedin">
                                <p>: linke/be-queen.fr</p>
                            </div>

                            <div class="FooterRow">
                                <img src="/public/loc.png" alt="logo geo">
                                <p>: local/be-queen.fr</p>
                            </div>
                </div>
               <p>© copyright by be queen team</p> 
               
               <div class="FooterColmun">
                            <div class="FooterRow">
                                    <img src="/public/Vector (3).png" alt="logo geo">
                                    <p>: bequeen@gmail.com</p>
                                </div>
                                <div class="FooterRow">
                                    <img src="/public/Vector (4).png" alt="logo geo">
                                    <p>: 07 08 09 80 70</p>
                                </div>
                </div>
        </div>

    </footer>
</template>
<style>

.AllFooter
{
    background-color: #373737;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 1%;

}
.AllFooter p
{
    color:#F4CE14;
}



.FooterRow
{
    display: flex;
    flex-direction: row;
}
.FooterRow img
{
    width: 25px;
    height: 25px;
}

</style>