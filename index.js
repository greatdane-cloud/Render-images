// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg",
    "images/AMD.jpg",
    "images/Intel.jpeg",
    "images/Ryzen.png"
]

const container = document.getElementById("container")

function renderImages(){
    let imgsDom = ""
    for (let i = 0; i < imgs.length; i++){
        //container.innerHTML += `<img class = "team-img" src="${imgs[i]}">` for performance reasons its better to 
        imgsDom +=`<img alt="employee in the company" class = "team-img" src="${imgs[i]}">`
    }
    container.innerHTML =imgsDom

}
renderImages()