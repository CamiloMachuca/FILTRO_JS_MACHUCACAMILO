document.addEventListener('keyup', A=>{
    if (A.target.matches('#busqueda')){
        document.querySelectorAll('.informacion').forEach(nombre=>{
            nombre.textContent.includes(A.target.value)
            console.log(nombre)
            ?nombre.classList.remove("filtrar")
            :nombre.classList.add("filtrar")
        })
    }
})
fetch('https://imdb.iamidiotareyoutoo.com/justwatch?q=1900')
.then(res=>res.json())
.then(data=>{
    console.log(data)
    document.getElementById('datosPeliculas').innerHTML=`
    <b>ID:</b>
    <p>${data.description[0].id}</p>
    <b>Type:</b>
    <p>${data.description[0].type}</p>
    <b>url:</b>
    <p>${data.description[0].url}</p>
    <b>title</b>
    <p>${data.description[0].title}</p>
    <b>year</b>
    <p>${data.description[0].year}</p>
    <b>runtime</b>
    <p>${data.description[0].runtime}</p>
    <div class="contenedorimagenes">
    <img id="imagen" src="${data.description[0].photo_url}" alt="">
    <img id="imagen" src="${data.description[0].backdrops}" alt="">
    </div>
    <div class="mitadContenido">
    <b>TmdbId:</b>
    <p>${data.description[0].tmdbId}</p>
    <b>ImdbId:</b>
    <p>${data.description[0].imdbId}</p>
    <b>JwRating:</b>
    <p>${data.description[0].jwRating}</p>
    <b>TomatoMeter:</b>
    <p>${data.description[0].tomatoMeter}</p>
    <b>TomatoCertifiedFresh</b>
    <p>${data.description[0].tomatoCertifiedFresh}</p>
    <b>offers</b>
    <div id="masOffers"></div>
    </div>
   
    `
    var oooffers=[]
    oooffers=data.description[0].offers
    document.getElementById('masOffers').innerHTML+=''
    oooffers.forEach(ofer => {
        document.getElementById('masOffers').innerHTML+=`
        <p>${ofer}</p>
        `
    });
    

})
fetch('https://imdb.iamidiotareyoutoo.com/justwatch?q=1900')
.then(res=>res.json())
.then(data=>{
    console.log(data)
    document.getElementById('datosPeliculas2').innerHTML=`
    <b>ID:</b>
    <p>${data.description[1].id}</p>
    <b>Type:</b>
    <p>${data.description[1].type}</p>
    <b>url:</b>
    <p>${data.description[1].url}</p>
    <b>title</b>
    <p>${data.description[1].title}</p>
    <b>year</b>
    <p>${data.description[1].year}</p>
    <b>runtime</b>
    <p>${data.description[1].runtime}</p>
    <div class="contenedorimagenes">
    <img id="imagen" src="${data.description[1].photo_url}" alt="">
    <img id="imagen" src="${data.description[1].backdrops}" alt="">
    </div>
    <div class="mitadContenido">
    <b>TmdbId:</b>
    <p>${data.description[1].tmdbId}</p>
    <b>ImdbId:</b>
    <p>${data.description[1].imdbId}</p>
    <b>JwRating:</b>
    <p>${data.description[1].jwRating}</p>
    <b>TomatoMeter:</b>
    <p>${data.description[1].tomatoMeter}</p>
    <b>TomatoCertifiedFresh</b>
    <p>${data.description[1].tomatoCertifiedFresh}</p>
    <b>offers</b>
    <div id="masOffers"></div>
    </div>
   
    `
    var oooffers=[]
    oooffers=data.description[1].offers
    document.getElementById('masOffers').innerHTML+=''
    oooffers.forEach(ofer => {
        document.getElementById('masOffers').innerHTML+=`
        <p>${ofer}</p>
        `
    });
    

})
fetch('https://imdb.iamidiotareyoutoo.com/justwatch?q=1900')
.then(res=>res.json())
.then(data=>{
    console.log(data)
    document.getElementById('datosPeliculas3').innerHTML=`
    <b>ID:</b>
    <p>${data.description[2].id}</p>
    <b>Type:</b>
    <p>${data.description[2].type}</p>
    <b>url:</b>
    <p>${data.description[2].url}</p>
    <b>title</b>
    <p>${data.description[2].title}</p>
    <b>year</b>
    <p>${data.description[2].year}</p>
    <b>runtime</b>
    <p>${data.description[2].runtime}</p>
    <div class="contenedorimagenes">
    <img id="imagen" src="${data.description[2].photo_url}" alt="">
    <img id="imagen" src="${data.description[2].backdrops}" alt="">
    </div>
    <div class="mitadContenido">
    <b>TmdbId:</b>
    <p>${data.description[2].tmdbId}</p>
    <b>ImdbId:</b>
    <p>${data.description[2].imdbId}</p>
    <b>JwRating:</b>
    <p>${data.description[2].jwRating}</p>
    <b>TomatoMeter:</b>
    <p>${data.description[2].tomatoMeter}</p>
    <b>TomatoCertifiedFresh</b>
    <p>${data.description[2].tomatoCertifiedFresh}</p>
    <b>offers</b>
    <div id="masOffers"></div>
    </div>
   
    `
    var oooffers=[]
    oooffers=data.description[2].offers
    document.getElementById('masOffers').innerHTML+=''
    oooffers.forEach(ofer => {
        document.getElementById('masOffers').innerHTML+=`
        <p>${ofer}</p>
        `
    });
    

})
fetch('https://imdb.iamidiotareyoutoo.com/justwatch?q=100')
.then(res=>res.json())
.then(data3=>{

})


fetch('https://imdb.iamidiotareyoutoo.com/justwatch?L=1900')
.then(res=> res.json())
.then(data2=>{
    console.log(data2)
})

