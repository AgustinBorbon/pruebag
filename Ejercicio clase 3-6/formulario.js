document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    const campos = ['nombreCompleto', 'email', 'contraseña', 'repetirContraseña', 'edad', 'telefono', 'direccion', 'ciudad', 'codigoPostal', 'dni'];

    campos.forEach(campo => {
        const input = document.getElementById(campo);
        input.addEventListener('blur', () => validarCampo(campo));
        input.addEventListener('focus', () => limpiarError(campo));
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let formValido = true;
        let errores = [];

        campos.forEach(campo => {
            if (!validarCampo(campo)) {
                formValido = false;
                errores.push(document.getElementById('error' + capitalize(campo)).textContent);
            }
        });

        if (formValido) {
            alert('Formulario enviado con éxito:\n' + campos.map(campo => `${campo}: ${document.getElementById(campo).value}`).join('\n'));
        } else {
            alert('Errores en el formulario:\n' + errores.join('\n'));
        }
    });

    function mostrarError(campo, mensaje) {
        const errorDiv = document.getElementById('error' + capitalize(campo));
        errorDiv.textContent = mensaje;
    }

    function limpiarError(campo) {
        const errorDiv = document.getElementById('error' + capitalize(campo));
        errorDiv.textContent = '';
    }

    function validarCampo(campo) {
        const valor = document.getElementById(campo).value;
        let esValido = true;
        switch (campo) {
            case 'nombreCompleto':
                esValido = valor.length > 6 && valor.includes(' ');
                if (!esValido) mostrarError(campo, 'El nombre completo debe tener más de 6 letras y al menos un espacio.');
                break;
            case 'email':
                esValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
                if (!esValido) mostrarError(campo, 'El email no tiene un formato válido.');
                break;
            case 'contraseña':
                esValido = valor.length >= 8 && /\d/.test(valor) && /[a-zA-Z]/.test(valor);
                if (!esValido) mostrarError(campo, 'La contraseña debe tener al menos 8 caracteres, formados por letras y números.');
                break;
            case 'repetirContraseña':
                esValido = valor === document.getElementById('contraseña').value;
                if (!esValido) mostrarError(campo, 'Las contraseñas no coinciden.');
                break;
            case 'edad':
                esValido = Number.isInteger(parseInt(valor)) && parseInt(valor) >= 18;
                if (!esValido) mostrarError(campo, 'La edad debe ser un número entero mayor o igual a 18.');
                break;
            case 'telefono':
                esValido = /^\d{7,}$/.test(valor);
                if (!esValido) mostrarError(campo, 'El teléfono debe tener al menos 7 dígitos y no contener espacios, guiones ni paréntesis.');
                break;
            case 'direccion':
                esValido = valor.length >= 5 && /\d/.test(valor) && /\s/.test(valor);
                if (!esValido) mostrarError(campo, 'La dirección debe tener al menos 5 caracteres, con letras, números y un espacio en el medio.');
                break;
            case 'ciudad':
                esValido = valor.length >= 3;
                if (!esValido) mostrarError(campo, 'La ciudad debe tener al menos 3 caracteres.');
                break;
            case 'codigoPostal':
                esValido = valor.length >= 3;
                if (!esValido) mostrarError(campo, 'El código postal debe tener al menos 3 caracteres.');
                break;
            case 'dni':
                esValido = /^\d{7,8}$/.test(valor);
                if (!esValido) mostrarError(campo, 'El DNI debe ser un número de 7 u 8 dígitos.');
                break;
        }
        return esValido;
    }

    function capitalize(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
});