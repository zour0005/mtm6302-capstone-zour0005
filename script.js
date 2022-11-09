let searchButton = document.querySelector(#search")

searchButton.addEventListListener("click", ()=>{
    consple.log("clicked")
    sendApiRequest()   
})

    async function sedApiRequest(){
    let API_KEY = "4FvNMmt2WTHcRMddgo7JPdwpeKVIc2yMQBSuxPIc"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY=${API_KEY}`);
        console.log(response)
        let data = await response.json()
        console.log(data)    
    }
}

function useApiData(data){
    document.querySelector("#content").innerHTML += data.explanation
    document.querySelector("#content").innerHTML += `<img src="${data.url}">`
}