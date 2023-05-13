const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("keydown", function(event){
    if(event.code == "Enter"){
        search();
    }
});
function search(){
    const input = searchInput.value;
    window.location.href = "https://www.google.com/search?q=" + input + "&oq=" + input + "&aqs=chrome..69i57j46i433i512j0i131i433i512j0i131i433i650j46i131i199i433i465i512j0i512j46i131i199i433i465i512j46i512j0i512l2.1198j0j7&sourceid=chrome&ie=UTF-8"
}