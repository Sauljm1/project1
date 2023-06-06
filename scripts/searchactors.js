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
         const markup = `
         <tr><td id="link${i}" ><a  id="${i}" href=#> ${tvShow.person.name}</a></td>
         </td> </tr>`;
         document.querySelector('table').insertAdjacentHTML('beforeend', markup);
 
         // Make eventlistner for newly established element
         document.getElementById(`link${i}`).addEventListener("click", () => {
             //Remove all deatail currently displayed
             event.preventDefault();
             console.log(event.target.id)
             
             //removeDetails()
             // Rep[opulate displayed details with new data]
             //showDetails(apiData, event.target.id)
         
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
         <b>Name: </b> ${tempData[index].person.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
         <b>Gender:</b> ${tempData[index].person.gender} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
         <b>Birth Date:</b> ${tempData[index].person.birhtday}
         </p>`;
         document.getElementById('column3').insertAdjacentHTML('beforeend', markup);
 
         //Add image to detail section
          if (tempData[index].person.image.medium === null){
             markup = `<img class="details" src="./images/searching.jpg" 
             alt="No image Avalable">`;
          }else{
          markup = `<img class="details" src=${tempData[index].person.image.medium} 
          alt=${tempData[index].person.name}>`;
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
     let url = 'https://api.tvmaze.com/search/people?q=' + searchParameter;
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
    