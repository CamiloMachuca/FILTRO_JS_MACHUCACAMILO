document.getElementById("enviar").addEventListener('click',function(){
    const idd =document.getElementById("idBusqueda").value
    mostrarDatos(idd)

   
})
function  mostrarDatos(idd){
    fetch('https://imdb.iamidiotareyoutoo.com/justwatch?q='+idd)
    .then(Response=>Response.json())
    .then(data=>{
        document.getElementById('datosPeliculas').innerHTML=""
        data.description.forEach(i => {
            document.getElementById('datosPeliculas').innerHTML+=`
            <div class="info-data">
            <div class="card">
                            <div class="head">
                                <div>
                                    <b>ID:</b>
                                    <p>${i.id}</p>
                                    <b>Type:</b>
                                    <p>${i.type}</p>
                                    <b>url:</b>
                                    <p>${i.url}</p>
                                    <b>title</b>
                                    <p>${i.title}</p>
                                    <b>year</b>
                                    <p>${i.year}</p>
                                    <b>runtime</b>
                                    <p>${i.runtime}</p>
                                    <div class="contenedorimagenes">
                                    <img id="imagen" src="${i.photo_url}" alt="">
                                    <img id="imagen" src="${i.backdrops}" alt="">
                                    </div>
                                    <div class="mitadContenido">
                                    <b>TmdbId:</b>
                                    <p>${i.tmdbId}</p>
                                    <b>ImdbId:</b>
                                    <p>${i.imdbId}</p>
                                    <b>JwRating:</b>
                                    <p>${i.jwRating}</p>
                                    <b>TomatoMeter:</b>
                                    <p>${i.tomatoMeter}</p>
                                    <b>TomatoCertifiedFresh</b>
                                    <p>${i.tomatoCertifiedFresh}</p>
                                    <b>offers</b>
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
