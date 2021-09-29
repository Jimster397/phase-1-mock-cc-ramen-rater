const menu = document.getElementById("ramen-menu")
const pictures = document.getElementById("#ramen-menu")
const details = document.getElementById("ramen-detail")
const form = document.getElementById("new-ramen")
const name = document.getElementsByClassName("name")
const resturant = document.getElementsByClassName("resturant")
const image = document.getElementById("image")
const inputValue = document.querySelector("#comment-input")
const BASE_URL = "http://localhost:3000";


form.addEventListener('create', (e) => {
    e.preventDefault()
    buildComment(inputValue.value)
    form.reset()
})
function buildComment(e) {
    const p = document.createElement('p');
    p.textContent = `${e}`;
    document.getElementById('list').appendChild(p);
}

function getRamen(){
fetch(BASE_URL)
.then(resp => resp.json())
.then(ramen => {
ramen.forEach(renderRamen);
})}


function renderRamen(){
    const div = document.createElement('div');
    div.id = `ramen-card${ramen.id}`;
    div.className='card alert-success';
    const header = document.createElement('h3')
    header.textContent = `${ramen.name}`;
    const p = document.createElement('p')
        p.id = `ramen-info-${ramen.id}`
        p.textContent = `
            Resturant: ${ramen.resturant}  
            Image: ${ramen.image} 
            Rating: ${ramen.rating}/ 10 
            Comment: ${ramen.comment}`
        
}

pictures.addEventListener('click', (e) =>{

})


