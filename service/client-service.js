export const listarClientes = () =>
    fetch("http://localhost:3000/perfil").then((response) => response.json())

export const crearCliente = (nombre, email) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, email, id: uuid.v4() })
    })
}

export const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE"
    });
}

export const getCliente = (id) => fetch(`http://localhost:3000/perfil/${id}`).then((response) => response.json())

export const updateCliente = (id, nombre, email) => fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre, email ,id})
})
    .then(response => {})
    .catch(error => {
        console.log(nombre);
        console.log(email);
        console.error(error);
    });