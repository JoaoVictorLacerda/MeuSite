class PrimeiraRequest{
    constructor(){

        const primeiraRequest = new XMLHttpRequest()
        primeiraRequest.open("GET", "https://api-my-site.herokuapp.com/", false);
        primeiraRequest.send()
    }
}

new PrimeiraRequest()