function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function toggleSistema() {
    const sistemaSection = document.getElementById('sistema');
    if (sistemaSection.style.display === 'none' || sistemaSection.style.display === '') {
        sistemaSection.style.display = 'block';
    } else {
        sistemaSection.style.display = 'none';
    }
}

function mostrarTablas() {
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    if (usuario === 'admin' && contrasena === 'admin123') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('tablas').style.display = 'block';
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
    return false;
}

function consultar(tabla) {
    fetch(`consultar.php?tabla=${tabla}`)
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
}

function eliminar(tabla) {
    const id = prompt('Ingrese el ID a eliminar:');
    fetch('eliminar.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `tabla=${tabla}&id=${id}`
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
}

function actualizar(tabla) {
    const id = prompt('Ingrese el ID a actualizar:');
    const nombre = prompt('Ingrese el nuevo nombre:');
    fetch('actualizar.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `tabla=${tabla}&id=${id}&nombre=${nombre}`
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
}

function insertar(tabla) {
    const nombre = prompt('Ingrese el nombre:');
    fetch('insertar.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `tabla=${tabla}&nombre=${nombre}`
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
}
