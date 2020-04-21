


const form = document.querySelector("#meme-form")
const container = document.querySelector("#meme-container")

form.addEventListener("submit", function (event) {
    event.preventDefault()
    const top = document.querySelector("#top-text");
    const bot = document.querySelector("#bottom-text");
    const imgUrl = document.querySelector("#url-text")
    //const URLregex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/

    if (!imgUrl.value) {
        if(!document.querySelector(".alert")){
            const p = document.createElement("p")
            p.innerText = "Please input a picture URL"
            p.style.color = "red"
            p.style.fontsize = "15px"
            p.classList.add("alert")
            form.append(p)
        }
    } else {
        const div = document.createElement("div")
        const deleteDiv = document.createElement("div")
        const deleteBtn = document.createElement("div")

        deleteDiv.classList.add("delete")
        deleteBtn.classList.add("delete-btn")
        deleteBtn.innerText = "X"
        deleteDiv.append(deleteBtn)
        div.classList.add("meme")
        div.append(deleteDiv)
        container.append(div)

        handleImage(div, imgUrl)
        handleText(div, top, bot)

        const elements = document.querySelectorAll("input");
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].type == "text") {
                elements[i].value = "";
            }
        }
        if(document.querySelector(".alert")){
            form.removeChild(document.querySelector(".alert"))
        }
    }
})

container.addEventListener("click", function (event) {
    console.log(event.target.classList)
    if (event.target.classList[0] === "delete-btn")
        event.target.parentElement.parentElement.remove()
})





















const handleImage = (div, image) => {

    div.style.backgroundImage = `url('${image.value}')`
}


const handleText = (div, top, bot) => {

    const topTextDiv = document.createElement("div")
    const botTextDiv = document.createElement("div")
    console.log(top, top.value, bot, bot.value)
    topTextDiv.innerText = top.value.toUpperCase()
    topTextDiv.classList.add("top")
    botTextDiv.innerText = bot.value.toUpperCase()
    botTextDiv.classList.add("bottom")

    div.append(topTextDiv)
    div.append(botTextDiv)
}