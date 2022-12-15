function getDate() {
    return document.getElementById('dataSearch').value;
}

async function call() {
    let request = '';
    fetch("./secrets.json").then(response => {
        return response.json();
    }).then(async function (myJSON) {
        request = (`https://api.nasa.gov/planetary/apod?date=`) + getDate() + '&api_key=' + ("4FvNMmt2WTHcRMddgo7JPdwpeKVIc2yMQBSuxPIc")
        await (await fetch(response)).json();
    }).then(function (myJSON) {

        //Desc
        p = document.getElementById("description");
        p.innerHTML = myJSON.explanation;

        //Img
        img = document.getElementById("spacePic");
        img.src = myJSON.url;
    })
});
}