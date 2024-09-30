

fetch('https://imdb.iamidiotareyoutoo.com/justwatch?q=1900')
.then(res=>res.json())
.then(data=>{
    document.getElementById('datos2').innerHTML=`
    <h1>Titulos</h1>
    <div id="titulos"></div>

    `
    var titulos=data.description.title
    console.log(titulos)
    titulos.forEach(titu => {
        document.getElementById('tituloss').innerHTML+=`
        <p>${titu}</p>
        `

        
    });


})