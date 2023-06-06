function search(){
   event.preventDefault();
   searchShows(document.getElementById("searchInput").value)
}
var apiData
var word
var i

function saveApiData(tempData){
apiData = tempData;
displayAll(tempData)
}

function displayAll(tempData){
    //console.log(tempData)
    i=0;
    tempData.forEach(tvShow =>{

        if (tvShow.show.premiered === null) {tvShow.show.premiered = 'UNKN'}
        if (tvShow.show.ended === null) {tvShow.show.ended = 'UNKN'}
        const markup = `
        <tr><td id="link${i}" ><a  id="${i}" href=#> ${tvShow.show.name}</a></td>
        <td class="yearCol"> (${tvShow.show.premiered.substring(0,4)} - 
        ${tvShow.show.ended.substring(0,4)})</td> </tr>`;
        document.querySelector('table').insertAdjacentHTML('beforeend', markup);

        // Make eventlistner for newly established element
        document.getElementById(`link${i}`).addEventListener("click", () => {
            //Remove all deatail currently displayed
            event.preventDefault();
            console.log(event.target.id)
            localStorage.setItem("showID", apiData[event.target.id].show.id);
            let vv = i
            removeDetails()
            // Rep[opulate displayed details with new data]
            showDetails(apiData, event.target.id)
        
        } )
        i++
        })

        showDetails(tempData, 0)
    }
    function showDetails(tempData, index){
        
        let markup = `<p class="details" align=justify style="background-color:#02f3e5;
        border-radius:4px;
        font-size:16px;
        padding:15px;
        margin:5px;">
        <b>Show Name: </b> ${tempData[index].show.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <b>Show Premired:</b> ${tempData[index].show.premiered} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <b>Show Ended:</b> ${tempData[index].show.ended}
        </p>`;
        if (tempData[index].show.summary === null) {tempData[index].show.summary = `<p>No Summary Available`}
        document.getElementById('column3').insertAdjacentHTML('beforeend', markup);
        markup = `<p class="details align=justify style="background-color:#02f3e5;
        border-radius:4px;
        font-size:16px;
        padding:15px;
        margin:5px;"><b>
        Show Summary:</b> ${tempData[index].show.summary.slice(3)}
        </p>`;
        //Add "Network" to details section
        if (tempData[index].show.network === null) {
            document.getElementById('column3').insertAdjacentHTML('beforeend', markup);
            markup = `<p class="details" align=justify style="background-color:#02f3e5;
            border-radius:4px;
            font-size:16px;
            padding:15px;
            margin:5px;"><b>
            Show Network:</b> Network Not Available
            </p>`;
        } else{
        document.getElementById('column3').insertAdjacentHTML('beforeend', markup);
        markup = `<p class="details" align=justify style="background-color:#02f3e5;
        border-radius:4px;
        font-size:16px;
        padding:15px;
        margin:5px;"><b>
        Show Network:</b> ${tempData[index].show.network.name}
        </p>`;}
        //if (tempData[index].show.image.medium === null) {tempData[index].show.image.medium = `./images/searching.jpg`}
        document.getElementById('column3').insertAdjacentHTML('beforeend', markup);

        //Add image to detail section
         if (tempData[index].show.image.medium === null){
            markup = `<img class="details" src="./images/searching.jpg" 
            alt="No image Avalable">`;
         }else{
         markup = `<img class="details" src=${tempData[index].show.image.medium} 
         alt=${tempData[index].show.name}>`;
         }
        document.getElementById('column3').insertAdjacentHTML('beforeend', markup);
        
    }
    function removeSearch(){
        element = document.querySelector('table');
        //element.removeChild(element.firstElementChild)
        while (element.firstChild) {
            element.removeChild(element.firstChild);
    }
}

    function removeDetails(){
        element = document.getElementById('column3');
        //element.removeChild(element.firstElementChild)
        while (element.firstChild) {
            element.removeChild(element.firstChild);
    }
}



function searchShows(searchParameter){
    removeSearch()
    removeDetails()
    let url = 'https://api.tvmaze.com/search/shows?q=' + searchParameter;
    fetch(url)
    .then(response => response.json())
    .then(data => saveApiData(data))
    .catch(error => console.log(error))
    }

    //searchShows("Batman")

     // Make eventlistner for newly established element
     document.getElementById(`submit`).addEventListener("click", () => {
        //Remove all deatail currently displayed
        event.preventDefault();
        removeSearch()
        removeDetails()
        let newSearch = document.getElementById(`input`).value
        console.log(newSearch)
        console.log('Done')
        searchShows(newSearch)
        
    
    } )
   