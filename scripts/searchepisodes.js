
var apiData1;
var word;
var i;
var episodeArray = [];
function saveApiData(tempData){
apiData1 = tempData;
//console.log(tempData)
displayAllEpisodes(tempData)

}
function displayAllEpisodes(tempData){
    //console.log(tempData)
    i=0;
    tempData.forEach(tvShow =>{

        if (tvShow.airdate === null) {tvShow.airdate = 'UNKN'}
        const markup = `
        <tr><td id="link${i}" ><a  id="${i}" href=#> ${tvShow.name}</a></td>
        <td class="yearCol"> (Episode Aired: ${tvShow.airdate}</td> </tr>`;
        document.querySelector('table').insertAdjacentHTML('beforeend', markup);
        episodeArray.push(tvShow.name)
        i++
        } )
      
        }



function searchEpisodes(showToGetEpisodes){
    let url = `https://api.tvmaze.com/shows/${showToGetEpisodes}/episodes`;
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data => saveApiData(data))
    .catch(error => console.log(error))
    }
    let show = document.getElementById('')
    searchEpisodes(localStorage.getItem("showID"))
    localStorage.removeItem("showId[1]")



   
    

   