const usuarios = {
        usuario1: { contrasena: 'contrasena1', saldo: 1000 },
        usuario2: { contrasena: 'contrasena2', saldo: 1500 },
        usuario3: { contrasena: 'contrasena3', saldo: 2000 }
    };

    let usuarioActual = null;

    function iniciarSesion() {
        const usuarioInput = document.getElementById('usuario').value;
        const contrasenaInput = document.getElementById('contrasena').value;

        if (usuarios[usuarioInput] && usuarios[usuarioInput].contrasena === contrasenaInput) {
            usuarioActual = usuarioInput;
            mostrarResultado(`Bienvenido, ${usuarioActual}.`);
        } else {
            mostrarResultado('Credenciales incorrectas. Inténtelo de nuevo.');
        }
    }

    function consultarSaldo() {
        if (usuarioActual) {
            const saldo = usuarios[usuarioActual].saldo;
            mostrarResultado(`Saldo disponible: $${saldo}`);
        } else {
            mostrarResultado('Inicie sesión para consultar saldo.');
        }
    }

    function ingresarMonto() {
        if (usuarioActual) {
            const monto = parseFloat(prompt('Ingrese el monto a depositar (entre $10 y $990):'));
            const saldoActual = usuarios[usuarioActual].saldo;

            if (!isNaN(monto) && monto >= 10 && monto <= 990) {
                if (saldoActual + monto <= 990) {
                    usuarios[usuarioActual].saldo += monto;
                    mostrarResultado(`Se ha ingresado $${monto} a su cuenta.`);
                } else {
                    mostrarResultado('El saldo máximo permitido es $990. Ingrese un monto menor.');
                }
            } else {
                mostrarResultado('Ingrese un monto válido (entre $10 y $990).');
            }
        } else {
            mostrarResultado('Inicie sesión para ingresar monto.');
        }
    }
    function retirarMonto() {
        if (usuarioActual) {
            const monto = parseFloat(prompt('Ingrese el monto a retirar:'));
            if (!isNaN(monto) && monto > 0 && monto <= usuarios[usuarioActual].saldo) {
                usuarios[usuarioActual].saldo -= monto;
                mostrarResultado(`Se ha retirado $${monto} de su cuenta.`);
            } else {
                mostrarResultado('Monto no válido o insuficiente saldo.');
            }
        } else {
            mostrarResultado('Inicie sesión para retirar monto.');
        }
    }

    function mostrarResultado(mensaje) {
        document.getElementById('resultado').innerText = mensaje;
    }