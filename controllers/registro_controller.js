import { crearCliente } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    crearCliente(nombre, email).then(respuesta => {
        window.location.href = "./registro_completado.html"
    }).catch(error => console.error(error));
});