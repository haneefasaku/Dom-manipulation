//Change the html element h1 using innerHtml

const myH1 = document.getElementById("myH1")
myH1.innerHTML = "Hello Develepers!"

//Remove paragraph using Remove()

const para = document.getElementById("para")
para.remove()

//add paragraph direct javascript using appendchiled

// const newElement = document.createElement("p")
// newElement.innerHTML = "This is new paragraph"
// const body = document.getElementById("body")
// body.appendChild(newElement)

//add paragraph to top position 

const newElement1 = document.createElement("p")
newElement1.innerHTML = "This is a top paragraph"
const body = document.getElementById("body")
body.prepend(newElement1)