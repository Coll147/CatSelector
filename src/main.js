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
    const catInfo = document.getElementById("cat_info");
    const title = document.getElementById("cat_info__title")
    let selector = document.getElementById("cats_selector")

    title.textContent = cats[cat].name
    selector.value = cats[cat].id

    switch (cats[cat].power) {
        case 'velocidad':
            catInfo.style.setProperty("--overlay-color", "rgba(255, 190, 0, 0.45)");
            catInfo.style.setProperty("--title-font", "'Racing Sans One', sans-serif");
            break;
        case 'resistencia':
            catInfo.style.setProperty("--overlay-color", "rgba(0, 200, 100, 0.45)");
            catInfo.style.setProperty("--title-font", "'Black Ops One', system-ui");
            break;
        case 'telepatia':
            catInfo.style.setProperty("--overlay-color", "rgba(150, 0, 255, 0.45)");
            catInfo.style.setProperty("--title-font", "'Cinzel Decorative', serif");
            break;
        case 'fuerza':
            catInfo.style.setProperty("--overlay-color", "rgba(255, 40, 40, 0.45)");
            catInfo.style.setProperty("--title-font", "'Anton', sans-serif");
            break;
        case 'ingenio':
            catInfo.style.setProperty("--overlay-color", "rgba(0, 150, 255, 0.45)");
            catInfo.style.setProperty("--title-font", "'Orbitron', sans-serif");
            break;
    }

}