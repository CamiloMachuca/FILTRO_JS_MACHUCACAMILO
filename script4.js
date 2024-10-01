document.getElementById("enviar").addEventListener('click',function(){
    const idd =document.getElementById("idBusqueda").value
    mostrarDatos(idd)

   
})
function  mostrarDatos(idd){
    fetch('https://imdb.iamidiotareyoutoo.com/search?q=q')
    .then(Response=>Response.json())
    .then(data=>{
        document.getElementById('datosPeliculas').innerHTML=""
        data.description.forEach(i => {
            
            document.getElementById('datosPeliculas').innerHTML+=`
            <div class="info-data">
            <div class="card">
                            <div class="head">
                                <div>
                                    <b>TITLE:</b>
                                    <p>${i["#TITLE"]}</p>
                                    <b>YEAR:</b>
                                    <p>${i["#YEAR"]}</p>
                                    <b>IMDB_ID:</b>
                                    <p>${i["#IMDB_ID"]}</p>
                                    <b>RANK</b>
                                    <p>${i["#RANK"]}</p>
                                    <b>ACTORS</b>
                                    <p>${i["#ACTORS"]}</p>
                                    <b>AKA</b>
                                    <p>${i["#AKA"]}</p>
                                    <div class="contenedorimagenes">
                                    <img id="imagen" src="${i["#IMG_POSTER"]}" alt="">
                                    </div>
                                    <div class="mitadContenido">
                                    <b>IMDB_URL:</b>
                                    <p>${i["#IMDB_URL"]}</p>
                                    <b>IMDB_IV:</b>
                                    <p>${i["#IMDB_IV"]}</p>
                                    
                                    <div id="masOffers"></div>
                                    </div>
                                    
                                </div>
                                <i class='bx bx-trending-up icon' ></i>
                            </div>
                        </div>
                        </div>
        
        
            `
            
            
           

                
        });
        
    

})
    
}