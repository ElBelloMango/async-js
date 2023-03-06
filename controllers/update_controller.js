import { getCliente, updateCliente } from "../service/client-service.js";

const params = new URL(window.location).searchParams;
const name = document.querySelector("[data-nombre]");
const email = document.querySelector("[data-email]");
const form = document.querySelector("[data-form]");

if (params.get("id") == null) {
    window.location.href = '../screens/error.html'
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    updateCliente(params.get("id"), name.value, email.value).then(()=>{
        window.location.href = "../screens/edicion_concluida.html"
    });
})

getCliente(params.get("id")).then(response => {
    name.value = response['nombre'];
    email.value = response['email'];
})

