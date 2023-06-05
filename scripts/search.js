//let document = 'index.html';

// document.addEventListener('DOMContentLoaded', function () {
//     var form = document.getElementById('form1')
//     form.addEventListener('submit', function (e) {
//         e.preventDefault()
//     })
// })

var database;
function displayAll(temp){
    console.log(temp)
    database = temp
    database.forEach(tvShow =>{
        const markup = `<tr><td class="titleCol" >${tvShow.show.name}</td>
        <td class="yearCol"> (${tvShow.show.premiered.substring(0,4)} - 
        ${tvShow.show.ended.substring(0,4)})</td> </tr>`;
        document.querySelector('table').insertAdjacentHTML('beforeend', markup);
        })
        showDetails(temp)
    }
    function showDetails(temp){
        console.log(temp)
        let markup = `<p align=justify style="background-color:#02f3e5;
        border-radius:4px;
        font-size:16px;
        padding:15px;
        margin:5px;">
        <b>Show Name: </b> ${database[0].show.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <b>Show Premired:</b> ${database[0].show.premiered} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <b>Show Ended:</b> ${database[0].show.ended}
        </p>`;
        document.getElementById('column3').insertAdjacentHTML('beforeend', markup);
        markup = `<p align=justify style="background-color:#02f3e5;
        border-radius:4px;
        font-size:16px;
        padding:15px;
        margin:5px;"><b>
        Show Summary: ${database[0].show.summary.slice(3)}</b>
        </p>`;
        document.getElementById('column3').insertAdjacentHTML('beforeend', markup);
        markup = `<p align=justify style="background-color:#02f3e5;
        border-radius:4px;
        font-size:16px;
        padding:15px;
        margin:5px;"><b>
        Show Network: ${database[0].show.network.name}</b>
        </p>`;
        document.getElementById('column3').insertAdjacentHTML('beforeend', markup);
        markup = `<img src=${database[0].show.image.medium} 
                   alt=${database[0].show.name}>`;
        document.getElementById('column3').insertAdjacentHTML('beforeend', markup);
        
    }

//function search(){
 //   event.preventDefault();
 //   searchShows(document.getElementById("searchInput").value)
//}

function searchShows(searchParameter){
    let url = 'https://api.tvmaze.com/search/shows?q=' + searchParameter;
fetch(url)
.then(response => response.json())
 .then(data => displayAll(data))
 .catch(error => console.log(error))
}

searchShows('Happy Days')





  
