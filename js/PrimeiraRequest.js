class PrimeiraRequest{
    constructor(){
        fetch("https://api-my-site.herokuapp.com/",
        {
            method:"GET"
        
        }).then(response=>{
            console.log("Aberto")
        })
    }
}

new PrimeiraRequest()