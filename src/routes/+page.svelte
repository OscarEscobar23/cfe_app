<script>
    import { register, login, logout } from '../services/auth-service.js';

    // Para registrar un nuevo usuario
    async function handleRegister() {
        try {
            const data = await register('Nombre', 'correo@example.com', 'contraseña123');
            console.log('Datos de registro:', data);
        } catch (error) {
            console.error('Error de registro:', error);
        }
    }

    // Para iniciar sesión
    async function handleLogin() {
        try {
            const data = await login('correo@example.com', 'contraseña123');
            console.log('Datos de inicio de sesión:', data);
        } catch (error) {
            console.error('Error de inicio de sesión:', error);
        }
    }

    // Para cerrar sesión
    async function handleLogout() {
        try {
            const data = await logout();
            console.log('Desconexión exitosa:', data);
        } catch (error) {
            console.error('Error al desconectar:', error);
        }
    }

</script>

<button on:click={handleRegister}>Registrar</button>
<button on:click={handleLogin}>Iniciar Sesión</button>
<button on:click={handleLogout}>Cerrar Sesión</button>
