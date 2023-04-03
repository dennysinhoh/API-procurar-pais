document.getElementById('card').style.setProperty('display','none','important')

function procurar(){ 
    document.getElementById('card').style.setProperty('display','block   ','important')   
    let pais = document.getElementById('pais').value
    let finalurl = `https://restcountries.com/v3.1/name/${pais}?fullText=true`  // url da (API) desejada
    console.log(finalurl)
    fetch(finalurl)                  // fetch usado para puxar (API) 
        .then(function(renponse){   
            return renponse.json()
        })
        .then(function(data){                            //(.then)  manipular o arvivo json
            // console.log(data[0])
            // console.log(data[0].population)
            // console.log(data[0].capital[0])
            // console.log(data[0].continents[0])
            
            let bandeira = document.getElementById('bandeira')
            let nome = document.getElementById('nome')
            let capital = document.getElementById('capital')
            let populacao = document.getElementById('populacao')
            let continente = document.getElementById('continente')

            nome.innerHTML = pais
            capital.innerHTML = data[0].capital[0]     // nome do objeto desejado dentro da api exemplo: continents,population 
            continente.innerHTML = data[0].continents[0]
            populacao.innerHTML = data[0].population
            bandeira.src = data[0].flags.svg         //trocar imagem pelo src (flags.svg)= defele bandeira
        })

}