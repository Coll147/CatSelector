import './styles/main.css'
import './styles/cards.css'
import './styles/aside.css'
import { cats } from './data';

// Mount cat list
function loadList() {
    let container = document.getElementById("cat_list")
    let selector = document.getElementById("cats_selector")
    for (let i = 0; i < cats.length; i++){
        console.log(`${cats[i].id} ${cats[i].name}`)

        let div = document.createElement("div")

            div.addEventListener("click", () => {
                loadInfo(i)
            })

            let title = document.createElement("h3")
            title.textContent = cats[i].name
            div.append(title)

            let image = document.createElement("img")
            image.src = cats[i].img
            div.append(image)

        container.append(div)



        let option = document.createElement("option")

        option.textContent = cats[i].name

        option.value = cats[i].id

        selector.append(option)

        selector.addEventListener("change", () => {
            loadInfo(selector.value);
        });
    }
}
loadList()


// Mount aside
function loadInfo(cat) {
    const title = document.getElementById("cat_info__title")
    let selector = document.getElementById("cats_selector")

    title.textContent = cats[cat].name
    selector.value = cats[cat].id

}