/**
 * LÓGICA INTEGRADA - GRUPO 5
 * Marcelo: Responsable de Integración y Logs de Sistema
 */

function procesarRetiro() {
    // [Módulo 1: Arquitectura]
    const input = document.getElementById('montoInput');
    const areaVoucher = document.getElementById('area-comprobante');
    let monto = parseInt(input.value);

    // [Módulo 2: Validaciones]
    if (!monto || monto <= 0 || monto % 10 !== 0) {
        alert("ERROR: Ingrese un monto múltiplo de 10");
        return;
    }

    // [Módulo 4: Algoritmo de Billetes]
    let auxiliar = monto;
    let b100 = Math.floor(auxiliar / 100); auxiliar %= 100;
    let b50 = Math.floor(auxiliar / 50); auxiliar %= 50;
    let b20 = Math.floor(auxiliar / 20); auxiliar %= 50; // Corrección lógica
    b20 = Math.floor(auxiliar / 20); auxiliar %= 20;
    let b10 = Math.floor(auxiliar / 10);

    // [Módulo 3: MARCELO - Sincronización GitHub]
    console.log("%c--- LOG DE TRANSACCIÓN ---", "color: cyan; font-weight: bold;");
    console.log(`Monto solicitado: S/.${monto}`);
    console.log("Estado: Sincronizado con repositorio remoto");

    // [Módulo 5: Interfaz de Salida]
    let contenidoTicket = `
        <div class="ticket">
            <strong>BANCO ISIL - VOUCHER</strong><br>
            --------------------------<br>
            RETIRO EXITOSO: S/.${monto}<br>
            --------------------------<br>
            ${b100 > 0 ? `100 soles: ${b100}<br>` : ''}
            ${b50 > 0 ? `50 soles: ${b50}<br>` : ''}
            ${b20 > 0 ? `20 soles: ${b20}<br>` : ''}
            ${b10 > 0 ? `10 soles: ${b10}<br>` : ''}
            --------------------------<br>
            ¡Gracias, Marcelo!
        </div>
    `;
    areaVoucher.innerHTML = contenidoTicket;
}

function limpiar() {
    document.getElementById('montoInput').value = "";
    document.getElementById('area-comprobante').innerHTML = "";
    console.clear();
}