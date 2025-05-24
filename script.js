// Datos iniciales de clientes
const defaultClientes = [
  {
    nombre: "Catalina Morales",
    cargo: "Gerente",
    area: "Organización",
    estado: "En línea",
    estadoClass: "bg-gradient-success",
    fecha: "23/04/2018",
    img: "../assets/img/team-1.jpg"
  },
  {
    nombre: "Alexander Gómez",
    cargo: "Programador",
    area: "Desarrollo",
    estado: "Desconectado",
    estadoClass: "bg-gradient-secondary",
    fecha: "11/01/2019",
    img: "../assets/img/team-3.jpg"
  },
  {
    nombre: "Luisa Fernanda García",
    cargo: "Ejecutiva",
    area: "Proyectos",
    estado: "En línea",
    estadoClass: "bg-gradient-success",
    fecha: "19/09/2017",
    img: "../assets/img/team-4.jpg"
  }
];

function getClientes() {
  const data = localStorage.getItem('clientes');
  if (data) {
    return JSON.parse(data);
  } else {
    localStorage.setItem('clientes', JSON.stringify(defaultClientes));
    return defaultClientes;
  }
}

function editarCliente(idx) {
  const clientes = getClientes();
  const cliente = clientes[idx];
  const nuevoNombre = prompt("Editar nombre:", cliente.nombre);
  if (nuevoNombre === null) return; // Cancelado
  const nuevoCargo = prompt("Editar cargo:", cliente.cargo);
  if (nuevoCargo === null) return;
  const nuevoEstado = prompt("Editar estado (En línea/Desconectado):", cliente.estado);
  if (nuevoEstado === null) return;
  // Actualiza los datos
  cliente.nombre = nuevoNombre;
  cliente.cargo = nuevoCargo;
  cliente.estado = nuevoEstado;
  cliente.estadoClass = nuevoEstado === "En línea" ? "bg-gradient-success" : "bg-gradient-secondary";
  localStorage.setItem('clientes', JSON.stringify(clientes));
  renderClientesTabla();
}

function renderClientesTabla() {
  const clientes = getClientes();
  const tbody = document.querySelector('table.table.align-items-center tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  clientes.forEach((cliente, idx) => {
    tbody.innerHTML += `
      <tr>
        <td>
          <div class="d-flex px-2 py-1">
            <div>
              <img src="${cliente.img}" class="avatar avatar-sm me-3" alt="user${idx+1}" />
            </div>
            <div class="d-flex flex-column justify-content-center">
              <h6 class="mb-0 text-sm">${cliente.nombre || ''}</h6>
            </div>
          </div>
        </td>
        <td>
          <p class="text-xs font-weight-bold mb-0">${cliente.cargo}</p>
          <p class="text-xs text-secondary mb-0">${cliente.area}</p>
        </td>
        <td class="align-middle text-center text-sm">
          <span class="badge badge-sm ${cliente.estadoClass}">${cliente.estado}</span>
        </td>
        <td class="align-middle text-center">
          <span class="text-secondary text-xs font-weight-bold">${cliente.fecha}</span>
        </td>
        <td class="align-middle">
          <a href="#" onclick="editarCliente(${idx})" class="text-secondary font-weight-bold text-xs">Editar</a>
        </td>
      </tr>
    `;
  });
}

// Datos iniciales de proyectos
const defaultProyectos = [
  {
    nombre: "Proyecto de Vivienda",
    empleado: "Catalina Morales",
    empleadoImg: "../assets/img/team-1.jpg",
    estado: "En Progreso",
    progreso: 60,
    progresoClass: "bg-gradient-info",
    fechaEntrega: "30/12/2025"
  },
  {
    nombre: "Proyecto de Facturación",
    empleado: "Alexander Gómez",
    empleadoImg: "../assets/img/team-3.jpg",
    estado: "Terminado",
    progreso: 100,
    progresoClass: "bg-gradient-success",
    fechaEntrega: "15/11/2023"
  },
  {
    nombre: "Proyecto de Comercio Electrónico",
    empleado: "Laura Gutierrez",
    empleadoImg: "../assets/img/team-4.jpg",
    estado: "Cancelado",
    progreso: 30,
    progresoClass: "bg-gradient-danger",
    fechaEntrega: "20/10/2024"
  },
  {
    nombre: "Proyecto de Comunicación",
    empleado: "Catalina Morales",
    empleadoImg: "../assets/img/team-1.jpg",
    estado: "Sin Iniciar",
    progreso: 0,
    progresoClass: "bg-gradient-success",
    fechaEntrega: "19/04/2027"
  }
];

function getProyectos() {
  const data = localStorage.getItem('proyectos');
  if (data) {
    return JSON.parse(data);
  } else {
    localStorage.setItem('proyectos', JSON.stringify(defaultProyectos));
    return defaultProyectos;
  }
}

function renderProyectosTabla() {
  const proyectos = getProyectos();
  const tbody = document.querySelector('table.table.align-items-center.justify-content-center tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  proyectos.forEach((proy, idx) => {
    tbody.innerHTML += `
      <tr>
        <td>
          <div class="d-flex px-2">
            <div class="my-auto">
              <h6 class="mb-0 text-sm">${proy.nombre}</h6>
            </div>
          </div>
        </td>
        <td>
          <div class="d-flex px-2 py-1">
            <div>
              <img src="${proy.empleadoImg}" class="avatar avatar-sm me-3" alt="user${idx+1}" />
            </div>
            <div class="d-flex flex-column justify-content-center">
              <h6 class="mb-0 text-sm">${proy.empleado}</h6>
            </div>
          </div>
        </td>
        <td>
          <span class="text-xs font-weight-bold">${proy.estado}</span>
        </td>
        <td class="align-middle text-center">
          <div class="d-flex align-items-center justify-content-center">
            <span class="me-2 text-xs font-weight-bold">${proy.progreso}%</span>
            <div>
              <div class="progress">
                <div class="progress-bar ${proy.progresoClass}" role="progressbar" aria-valuenow="${proy.progreso}" aria-valuemin="0" aria-valuemax="100" style="width: ${proy.progreso}%"></div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <span class="text-secondary text-xs font-weight-bold">${proy.fechaEntrega}</span>
        </td>
        <td class="align-middle">
          <button class="btn btn-link text-secondary mb-0">
            <i class="fa fa-ellipsis-v text-xs"></i>
          </button>
        </td>
      </tr>
    `;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderClientesTabla();
  renderProyectosTabla();
});