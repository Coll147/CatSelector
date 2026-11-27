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


            let img_wrapper = document.createElement("div")
            img_wrapper.classList.add("img_wrapper")
                let image = document.createElement("img")
                image.src = cats[i].img
                img_wrapper.append(image)
            div.append(img_wrapper)

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
    const catInfo = document.getElementById("cat_info"); // Elemento padre
    const title = document.getElementById("cat_info__title")
    const specialAbility = document.getElementById("cat_info__special")
    const mainAbility = document.getElementById("cat_info__category")
    const description = document.getElementById("cat_info__description")


    title.textContent = cats[cat].name
    specialAbility.textContent = cats[cat].ability
    
    description.textContent = cats[cat].description
    catInfo.style.backgroundImage = `url('${cats[cat].img}')`
    

    switch (cats[cat].power) {
        case 'velocidad':
            catInfo.style.setProperty("--overlay-color", "rgba(255, 190, 0, 0.45)")
            catInfo.style.setProperty("--title-font", "'Racing Sans One', sans-serif")
            mainAbility.textContent = "⚡ Velocidad"
            break;
        case 'resistencia':
            catInfo.style.setProperty("--overlay-color", "rgba(0, 200, 100, 0.45)")
            catInfo.style.setProperty("--title-font", "'Black Ops One', system-ui")
            mainAbility.textContent = "🛡️ Resistencia"
            break;
        case 'telepatia':
            catInfo.style.setProperty("--overlay-color", "rgba(150, 0, 255, 0.45)")
            catInfo.style.setProperty("--title-font", "'Cinzel Decorative', serif")
            mainAbility.textContent = "🔮 Telepatía"
            break;
        case 'fuerza':
            catInfo.style.setProperty("--overlay-color", "rgba(255, 40, 40, 0.45)")
            catInfo.style.setProperty("--title-font", "'Anton', sans-serif")
            mainAbility.textContent = "💪 Fuerza"
            break;
        case 'ingenio':
            catInfo.style.setProperty("--overlay-color", "rgba(0, 150, 255, 0.45)")
            catInfo.style.setProperty("--title-font", "'Orbitron', sans-serif")
            mainAbility.textContent = "🧠 Ingenio"
            break;
    }


    let selector = document.getElementById("cats_selector")
    selector.value = cats[cat].id
}