// Variables globales para usuarios (simulando base de datos)
const validUsers = [
    { username: "admin", password: "1234" },
    { username: "bibliotecario", password: "5678" }
];

// Función de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (validateLogin(username, password)) {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('mainScreen').style.display = 'block';
        document.getElementById('loginError').style.display = 'none';
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
});

// Función para validar el login
function validateLogin(username, password) {
    return validUsers.some(user => user.username === username && user.password === password);
}

// Mostrar gestión de usuarios
function showUserManagement() {
    document.getElementById('mainScreen').style.display = 'none';
    document.getElementById('userManagement').style.display = 'block';
}

// Función para simular agregar usuario
function addUser() {
    alert("Usuario agregado exitosamente.");
}

// Función para simular editar usuario
function editUser() {
    alert("Usuario editado exitosamente.");
}

// Función para simular eliminar usuario
function deleteUser() {
    alert("Usuario eliminado exitosamente.");
}

// Función para listar usuarios
function listUsers() {
    alert("Listado de usuarios: admin, bibliotecario");
}

// Función para ver usuarios
function viewUsers() {
    alert("Visualizando usuarios.");
}

// Función para volver
function goBack() {
    document.getElementById('userManagement').style.display = 'none';
    document.getElementById('mainScreen').style.display = 'block';
}

// Función para cerrar sesión
function logout() {
    document.getElementById('mainScreen').style.display = 'none';
    document.getElementById('loginScreen').style.display = 'block';
}
