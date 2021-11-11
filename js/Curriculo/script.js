

class Requisicao{

    constructor(){
        this.requisicao();
    }

    async requisicao(){
        const data = await fetch("https://api-my-site.herokuapp.com/sobre-mim",
        {
            method:"GET"
        }).then(response =>{
            return response.json()
        
        });
        const sobreMim = data[0];
        const linhaDoTempo = data[1]

        this.addSobreMim(sobreMim)
        this.addLinhaDoTempo(linhaDoTempo)
    }

    addSobreMim(sobreMim){
        const paragrafoSobreMim = document.getElementById('sobreMim')
        paragrafoSobreMim.textContent = sobreMim.about[0]
    }

    addLinhaDoTempo(linhaDoTempo){
        const paragrafoLinhaDoTempo = document.getElementById('linhaDoTempo')
        linhaDoTempo.about.forEach(element => {
            const li = document.createElement('li') 
            li.textContent = element
            paragrafoLinhaDoTempo.appendChild(li)
        });

    }
}

new Requisicao()



