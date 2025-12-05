document.addEventListener("DOMContentLoaded", () => {

    // 1) TOMAR BOTONES DEL HTML
    const btnPropina = document.getElementById("btnPropina");
    const btnRefrescar = document.getElementById("btnRefrescar");
    const boleta = document.getElementById("boleta");
    const textoBoleta = document.getElementById("textoBoleta");

    // 2) FUNCION PARA CALCULAR PROPINA
    function calcularPropina(monto, porcentaje) {
        return monto * (porcentaje / 100);
    }

    // 3) EVENTO BOTÓN PROPINA
    btnPropina.addEventListener("click", () => {
        let montoCuenta = parseFloat(prompt("Ingresa el monto de la cuenta:"));
        let porcentajePropina = parseFloat(prompt("Ingresa el porcentaje de propina:"));

        if (isNaN(montoCuenta) || isNaN(porcentajePropina)) {
            alert("Debes ingresar números válidos.");
            return;
        }

        const montoPropina = calcularPropina(montoCuenta, porcentajePropina);
        const totalPagar = montoCuenta + montoPropina;

        // Mostrar en consola
        console.log("--- Boleta ---");
        console.log("Monto de la cuenta: $" + montoCuenta);
        console.log("Propina (" + porcentajePropina + "%): $" + montoPropina.toFixed(2));
        console.log("Total a pagar: $" + totalPagar.toFixed(2));

        // Mostrar en HTML
        textoBoleta.innerHTML = `
            Monto de la cuenta: $${montoCuenta} <br>
            Propina (${porcentajePropina}%): $${montoPropina.toFixed(2)} <br>
            <strong>Total a pagar: $${totalPagar.toFixed(2)}</strong>
        `;

        boleta.style.display = "block";
    });


    // 4) EVENTO BOTÓN REFRESCAR 
    btnRefrescar.addEventListener("click", () => {
        textoBoleta.innerHTML = "";
        boleta.style.display = "none";
        console.clear();
    });

});
