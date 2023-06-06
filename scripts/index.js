// Make eventlistner for newly established element
document.getElementById(`searchDB`).addEventListener("click", () => {
    //Remove all deatail currently displayed
    event.preventDefault();
    window.open('./searchshow.html', '_blank');
} )
// Make eventlistner for newly established element
document.getElementById(`viewEpisodes`).addEventListener("click", () => {
    //Remove all deatail currently displayed
    event.preventDefault();
    window.open('./searchepisodes.html', '_blank');
})
// Make eventlistner for newly established element
document.getElementById(`searchActors`).addEventListener("click", () => {
    //Remove all deatail currently displayed
    event.preventDefault();
    window.open('./searchactors.html', '_blank');
})
