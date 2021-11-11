class Requisicao{
   

    constructor(){
        this.requisicao()
    }
    async requisicao(){
        const data = await fetch("https://api-my-site.herokuapp.com/projects",
        {
            method:"GET"
        }).then(response =>{
            return response.json()
        
        });
        
        this.montaSection(data)
    }

    montaSection(data){
        const body = document.getElementById("body")

        data.forEach(element =>{
            const section = document.createElement('section')
            section.classList.add("secao")
    
            this.AddDivForAll(section, element)


            body.appendChild(section)
        })
    }

    async AddDivForAll(section, data){


        const divForAll = document.createElement('div')
        divForAll.classList.add("conteudoS1")
        divForAll.classList.add("conteudoS2")

        section.appendChild(divForAll);

        await this.AddDivFortitleAndImgs(divForAll, data)

    }


    AddDivFortitleAndImgs(divForAll,data){
        const div = document.createElement("div");
        div.classList.add("divImg")

        const h1  = document.createElement("h1");
        h1.textContent = data.name;

        div.appendChild(h1);

        data.imgs.forEach(img => {
            const imagem = document.createElement("img");
            imagem.setAttribute("src", img)
            div.appendChild(imagem);

        });

        const br = document.createElement("br")
        div.appendChild(br);
        divForAll.appendChild(div);
        this.addAboutAndLinkForProject(divForAll,data)
    }

    addAboutAndLinkForProject(divForAll, data){
        const div = document.createElement("div");
        div.classList.add("formatacao")


        data.about.forEach(paragrafo =>{
            const p = document.createElement("p")
            p.textContent = paragrafo;
            div.appendChild(p)
            div.appendChild( document.createElement("br") )
        });

        let cont =0;
        let numerosOrdinais =["Primeiro", "Segundo", "Terceiro", "Quarto", "Quinto", "Sexto"]
        data.linkProject.forEach(link =>{
            const a = document.createElement("a")
            a.textContent = "Acesse: "+numerosOrdinais[cont]+" projeto";
            a.setAttribute("href",link)
            div.appendChild(a)
            div.appendChild( document.createElement("br") )
            cont++;
        })
        div.appendChild( document.createElement("br") )
        div.appendChild( document.createElement("br") )

        divForAll.appendChild(div)
    }
}

new Requisicao();