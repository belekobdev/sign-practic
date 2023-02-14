
const form = document.querySelector(".form")
const email = document.querySelector(".email-input")
const password = document.querySelector(".password-input")
const tit = document.querySelector(".text")
const btn = document.querySelector(".btn")

let num = 3

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(email.value)
    console.log(password.value)
    if (email.value === "azamat" && password.value === "2006") {
        email.value = ""
        password.value = ""
        tit.innerHTML = "Добро Пожаловать!"
        tit.style.color = "green"
    } else {
        num--
        if (num === 2) {
            email.value = ""
            password.value = ""
            tit.innerHTML = `У вас есть ${num} попытка!`
        } else if (num === 1) {
            email.value = ""
            password.value = ""
            tit.innerHTML = `У вас есть ${num} попытка!`
            tit.style.color = "yellow"
        } else if (num === 0) {
            tit.style.color = "red"
            email.value = ""
            password.value = ""
            tit.innerHTML = "Доступ Закрыт!"
            btn.setAttribute("disabled", "disabled")
        }
    }
})

