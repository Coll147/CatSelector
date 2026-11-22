import './style.css'
import { cats } from './data';

let container = document.getElementById("card_wrapper")
for (let i = 0; i < cats.length; i++){
    console.log(`${cats[i].id} ${cats[i].name}`)

    let div = document.createElement("div")

        let title = document.createElement("h3")
        title.textContent = cats[i].name
        div.append(title)

        let image = document.createElement("img")
        image.src = cats[i].img
        div.append(image)

    container.append(div)

}
