/**
 * PROYECTO: Cajero Automático Profesional - ISIL
 * INTEGRANTES Y ROLES:
 * 1. José Fernando López Vilca           - MÓDULO 1: Módulo de Arquitectura y Enlace (DOM)
 * 2. Ines Rosario Carrasco Garrido       - MÓDULO 2: Módulo de Reglas de Negocio y Seguridad
 * 3. Yudhe Marcelo Sullca Mera           - MÓDULO 3: Módulo de Gestión de Datos y Auditoría
 * 4. D’Alessandro John Casas Iturrizaga  - MÓDULO 4: Módulo de Lógica Matemática (Algoritmo)
 * 5. Hansel Kevin Ortiz Alfaro           - MÓDULO 5: Módulo de Experiencia de Usuario (Salida)
 */

// --- MÓDULO 2: SEGURIDAD (Validación de PIN) ---
function validarPin() {
    const pinIngresado = document.getElementById('pinInput').value;
    const loginScreen = document.getElementById('login-screen');
    const atmScreen = document.getElementById('atm-screen');
    const errorDiv = document.getElementById('error-pin');

    // PIN Secreto solicitado: 7799
    if (pinIngresado === "7799") {
        // [Módulo 3: Marcelo] Registro de acceso exitoso
        console.log("%c[Acceso Autorizado]", "color: #00FFFF; font-weight: bold;");
        
        // Cambio de pantallas
        loginScreen.style.display = "none";
        atmScreen.style.display = "block";
        errorDiv.innerHTML = "";
    } else {
        errorDiv.innerHTML = `<div class="error-msg">PIN INCORRECTO</div>`;
        document.getElementById('pinInput').value = "";
    }
}

// --- FUNCIONALIDAD EXTRA: CONSULTA DE SALDO ---
function verSaldoCajero() {
    const areaResultado = document.getElementById('resultado-operacion');
    
    // Mostramos el mensaje de saldo inagotable solicitado
    areaResultado.innerHTML = `
        <div class="info-msg">
            ESTADO DE CUENTA: <br>
            <span style="font-size: 1.5rem;">INAGOTABLE</span>
        </div>
    `;
    
    // [Módulo 3: Marcelo] Log de consulta
    console.info("Consulta de estado de cuenta realizada.");
}

// --- MÓDULO 4 & 5: PROCESO DE RETIRO Y VOUCHER ---
function procesarRetiro() {
    const input = document.getElementById('montoInput');
    const areaResultado = document.getElementById('resultado-operacion');
    let monto = parseInt(input.value);

    // [Módulo 2: Validación]
    // Si el monto es inválido (ej: 255), muestra el mensaje específico
    if (isNaN(monto) || monto <= 0 || monto % 10 !== 0) {
        areaResultado.innerHTML = `<div class="error-msg">solicitar monto valido</div>`;
        return;
    }

    // [Módulo 4: Algoritmo de Billetes]
    let temp = monto;
    let b100 = Math.floor(temp / 100); temp %= 100;
    let b50 = Math.floor(temp / 50); temp %= 50;
    let b20 = Math.floor(temp / 20); temp %= 20;
    let b10 = Math.floor(temp / 10);

    // [Módulo 3: Marcelo - Sincronización GitHub]
    console.log(`%c[Sync-GitHub] Transacción: S/.${monto} enviada al repositorio.`, "color: cyan;");

    // [Módulo 5: Interfaz - Voucher Estilo Clásico]
    let voucherHTML = `
        <div class="ticket">
            <strong>VOUCHER BANCO ISIL</strong><br>
            --------------------------<br>
            MONTO RETIRADO: S/.${monto}<br>
            --------------------------<br>
            ${b100 > 0 ? `- Billetes 100: ${b100}<br>` : ''}
            ${b50 > 0  ? `- Billetes 50: ${b50}<br>` : ''}
            ${b20 > 0  ? `- Billetes 20: ${b20}<br>` : ''}
            ${b10 > 0  ? `- Billetes 10: ${b10}<br>` : ''}
            --------------------------<br>
            ¡OPERACIÓN EXITOSA!
        </div>
    `;
    areaResultado.innerHTML = voucherHTML;
}

// --- FUNCIONES DE CIERRE Y LIMPIEZA ---
function cerrarSesion() {
    // Recarga la página para bloquear el sistema y volver al PIN
    location.reload();
}

function limpiar() {
    document.getElementById('montoInput').value = "";
    document.getElementById('resultado-operacion').innerHTML = "";
    console.clear();
}