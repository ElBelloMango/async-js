import { listarClientes } from "../service/client-service.js"
import { eliminarCliente } from "../service/client-service.js";

function crearNuevaLinea(nombre, email, id) {
  const tabla = document.querySelector("[data-table]");
  const linea = document.createElement("tr");
  const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html?id=${id}"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button"
            id = ${id}
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>`;
  linea.innerHTML = contenido;
  const boton = linea.querySelector("button");
  boton.addEventListener("click",(evento)=>{
    eliminarCliente(evento.target.id).then(respuesta=>{
    }).catch(error => console.error(error));
  })
  tabla.appendChild(linea);
}
listarClientes()
  .then((data) => {
    data.forEach((cliente) => crearNuevaLinea(cliente.nombre, cliente.email, cliente.id))
  }).catch(error => console.error(error));
