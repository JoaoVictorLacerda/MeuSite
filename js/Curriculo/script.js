

class Requisicao{

    constructor(){
        this.requisicao();
    }

    async requisicao(){
        const aboutMe = await fetch("https://api-my-site.herokuapp.com/sobre-mim",
        {
            method:"GET"
        }).then(response =>{
            return response.json()
        
        });
        const sobreMim = aboutMe;
        this.addSobreMim(sobreMim)

        const timeline = await fetch("https://api-my-site.herokuapp.com/timeline",
        {
            method:"GET"
        }).then(response =>{
            return response.json()
        
        });
        const linhaDoTempo = timeline
        this.addLinhaDoTempo(linhaDoTempo)
    }

    addSobreMim(sobreMim){
        const paragrafoSobreMim = document.getElementById('sobreMim')
        paragrafoSobreMim.textContent = sobreMim[0].about
    }

    addLinhaDoTempo(linhaDoTempo){
        const paragrafoLinhaDoTempo = document.getElementById('linhaDoTempo')
        linhaDoTempo[0].timeline.forEach(element => {
            const li = document.createElement('li') 
            li.textContent = element
            paragrafoLinhaDoTempo.appendChild(li)
        });

    }
}

new Requisicao()



