const TOTAL_PASOS = 8;

const RUTAS = {
  dieta: "../dieta/index.html"
};

const OBJETIVOS_DISPONIBLES = ["dieta"];

const MENSAJE_OPCION_NO_DISPONIBLE =
  "Por ahora solo está disponible el módulo de Dieta. Ejercicio, IA y Descanso estarán disponibles próximamente.";

const PLANES_POR_MODO = {
  ia: "premium-demo",
  manual: "gratis"
};

const COSTOS_PREMIUM = {
  semanal: "$49 MXN",
  mensual: "$149 MXN",
  anual: "$999 MXN"
};

const estado = {
  objetivo: "",
  modo: "",
  edad: "",
  sexo: "",
  altura: "",
  peso: "",
  actividad: "",
  periodoPremium: ""
};

let pasoActual = 1;

const pasos = document.querySelectorAll(".paso");
const mensajePaso = document.getElementById("mensajePaso");
const subtituloPaso = document.getElementById("subtituloPaso");
const progresoRelleno = document.getElementById("progresoRelleno");
const progresoTexto = document.getElementById("progresoTexto");
const botonAnterior = document.getElementById("botonAnterior");
const botonSiguiente = document.getElementById("botonSiguiente");
const resumenDatos = document.getElementById("resumenDatos");

const edadInput = document.getElementById("edad");
const alturaInput = document.getElementById("altura");
const pesoInput = document.getElementById("peso");

const botonesOpcion = document.querySelectorAll(".opcion-card");

/* MODAL PREMIUM */
const modalPremium = document.getElementById("modalPremium");
const cerrarModalPremium = document.getElementById("cerrarModalPremium");
const cerrarModalPremiumFondo = document.getElementById("cerrarModalPremiumFondo");
const botonContinuarPremium = document.getElementById("botonContinuarPremium");
const botonSeguirManual = document.getElementById("botonSeguirManual");
const mensajePremium = document.getElementById("mensajePremium");
const opcionesSuscripcion = document.querySelectorAll(".opcion-suscripcion");

/* MODAL PAGO */
const modalPagoPremium = document.getElementById("modalPagoPremium");
const cerrarModalPago = document.getElementById("cerrarModalPago");
const cerrarModalPagoFondo = document.getElementById("cerrarModalPagoFondo");
const formularioPagoPremium = document.getElementById("formularioPagoPremium");
const botonCancelarPago = document.getElementById("botonCancelarPago");
const resumenPagoPeriodo = document.getElementById("resumenPagoPeriodo");
const mensajePagoPremium = document.getElementById("mensajePagoPremium");

/* GESTIÓN DE FOCO DE MODALES */
let focoModalPremium = null;
let focoModalPago = null;

const nombreTitularPago = document.getElementById("nombreTitularPago");
const numeroTarjetaPago = document.getElementById("numeroTarjetaPago");
const fechaPago = document.getElementById("fechaPago");
const cvvPago = document.getElementById("cvvPago");

/* =========================================================
   UTILIDADES DE STORAGE
========================================================= */
function obtenerUsuariosConfig() {
  const datos = localStorage.getItem("fitbalance_usuarios_config");
  return datos ? JSON.parse(datos) : {};
}

function guardarUsuariosConfig(config) {
  localStorage.setItem("fitbalance_usuarios_config", JSON.stringify(config));
}

function obtenerCorreoActivo() {
  return (
    localStorage.getItem("correoUsuario") ||
    localStorage.getItem("usuarioPrototipoCorreo") ||
    ""
  ).toLowerCase();
}

function obtenerRutaDestino() {
  return RUTAS[estado.objetivo] || RUTAS.dieta;
}

function esObjetivoDisponible(valor) {
  return OBJETIVOS_DISPONIBLES.includes(valor);
}

function esOpcionDisponible(boton) {
  return boton?.dataset?.disponible !== "false";
}

function bloquearOpcionNoDisponible() {
  mostrarMensaje(MENSAJE_OPCION_NO_DISPONIBLE);
}

function obtenerPlanDesdeModo(modo) {
  return PLANES_POR_MODO[modo] || "gratis";
}

function obtenerNombreInicialDesdeCorreo(correo) {
  if (!correo) return "Usuario";
  const base = correo.split("@")[0] || "usuario";
  return base.charAt(0).toUpperCase() + base.slice(1);
}

function crearUsuarioBase(correo) {
  return {
    onboardingCompletado: false,
    objetivo: "dieta",
    modo: "ia",
    edad: "",
    sexo: "",
    altura: "",
    peso: "",
    actividad: "moderado",
    destinoPreferido: "../dieta/index.html",
    configInicial: {
      objetivo: "dieta",
      modo: "ia",
      edad: "",
      sexo: "",
      altura: "",
      peso: "",
      actividad: "moderado"
    },
    ajustes: {
      cuenta: {
        nombre: obtenerNombreInicialDesdeCorreo(correo),
        correo: correo,
        idioma: "Español",
        zonaHoraria: "GMT-06:00 Ciudad de México"
      },
      notificaciones: {
        dieta: true,
        ejercicio: true,
        descanso: true,
        informes: true,
        novedades: false
      },
      apariencia: {
        tema: "neon"
      },
      privacidad: {
        compartirActividad: true,
        almacenamientoLocal: true
      },
      suscripcion: {
        plan: "gratis",
        periodicidad: ""
      },
      app: {
        version: "1.1.0"
      }
    }
  };
}

/* =========================================================
   MODALES
========================================================= */
function modalPremiumAbierto() {
  return !modalPremium.classList.contains("oculto");
}

function modalPagoAbierto() {
  return !modalPagoPremium.classList.contains("oculto");
}

function abrirModalPremium() {
  focoModalPremium = document.activeElement;
  modalPremium.classList.remove("oculto");
  modalPremium.setAttribute("aria-hidden", "false");
  limpiarMensaje();
  limpiarMensajePremium();

  setTimeout(() => {
    (cerrarModalPremium || botonContinuarPremium)?.focus({ preventScroll: true });
  }, 20);
}

function cerrarModalPremiumFn() {
  modalPremium.classList.add("oculto");
  modalPremium.setAttribute("aria-hidden", "true");
  limpiarMensajePremium();
  restaurarFocoModal(focoModalPremium);
  focoModalPremium = null;
}

function abrirModalPago() {
  if (!estado.periodoPremium) {
    mostrarMensajePremium("Selecciona un tipo de suscripción para continuar.");
    return;
  }

  actualizarResumenPago();
  limpiarMensajePago();

  focoModalPago = document.activeElement;
  modalPagoPremium.classList.remove("oculto");
  modalPagoPremium.setAttribute("aria-hidden", "false");

  setTimeout(() => {
    nombreTitularPago?.focus();
  }, 20);
}

function cerrarModalPagoFn() {
  modalPagoPremium.classList.add("oculto");
  modalPagoPremium.setAttribute("aria-hidden", "true");
  limpiarMensajePago();
  restaurarFocoModal(focoModalPago);
  focoModalPago = null;
}

function cerrarTodosLosModales() {
  cerrarModalPagoFn();
  cerrarModalPremiumFn();
}

function restaurarFocoModal(elemento) {
  if (!elemento || !document.contains(elemento)) return;
  if (!elemento.getClientRects().length) return;
  elemento.focus();
}

function atraparFocoModal(modal, evento) {
  const enfocables = modal.querySelectorAll(
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );

  if (!enfocables.length) return;

  const primero = enfocables[0];
  const ultimo = enfocables[enfocables.length - 1];

  if (!modal.contains(document.activeElement)) {
    evento.preventDefault();
    primero.focus();
    return;
  }

  if (evento.shiftKey && document.activeElement === primero) {
    evento.preventDefault();
    ultimo.focus();
    return;
  }

  if (!evento.shiftKey && document.activeElement === ultimo) {
    evento.preventDefault();
    primero.focus();
  }
}

/* =========================================================
   MENSAJES
========================================================= */
function limpiarMensaje() {
  mensajePaso.textContent = "";
}

function mostrarMensaje(texto) {
  mensajePaso.textContent = texto;
}

function limpiarMensajePremium() {
  if (mensajePremium) mensajePremium.textContent = "";
}

function mostrarMensajePremium(texto) {
  if (mensajePremium) mensajePremium.textContent = texto;
}

function limpiarMensajePago() {
  if (mensajePagoPremium) mensajePagoPremium.textContent = "";
}

function mostrarMensajePago(texto) {
  if (mensajePagoPremium) mensajePagoPremium.textContent = texto;
}

/* =========================================================
   UI / PASOS
========================================================= */
function actualizarVistaPaso() {
  pasos.forEach((paso) => paso.classList.remove("activo"));

  const pasoVisible = document.querySelector(`.paso[data-step="${pasoActual}"]`);
  if (pasoVisible) {
    pasoVisible.classList.add("activo");
  }

  progresoTexto.textContent = `Paso ${pasoActual} de ${TOTAL_PASOS}`;
  progresoRelleno.style.width = `${(pasoActual / TOTAL_PASOS) * 100}%`;

  botonAnterior.style.visibility = pasoActual === 1 ? "hidden" : "visible";
  botonSiguiente.textContent = pasoActual === TOTAL_PASOS ? "Comenzar" : "Siguiente";

  actualizarSubtitulo();
  limpiarMensaje();

  if (pasoActual === TOTAL_PASOS) {
    llenarResumen();
  }

  enfocarCampoDelPaso();
}

function actualizarSubtitulo() {
  const subtitulos = {
    1: "Selecciona el enfoque principal con el que quieres comenzar",
    2: "Elige si quieres una experiencia guiada o llevar todo manualmente",
    3: "Cuéntanos tu edad",
    4: "Selecciona tu sexo",
    5: "Indica tu altura",
    6: "Indica tu peso actual",
    7: "Selecciona tu nivel de actividad",
    8: "Revisa tu configuración antes de continuar"
  };

  subtituloPaso.textContent = subtitulos[pasoActual] || "Personaliza tu experiencia inicial";
}

function enfocarCampoDelPaso() {
  if (pasoActual === 3) edadInput.focus();
  if (pasoActual === 5) alturaInput.focus();
  if (pasoActual === 6) pesoInput.focus();
}

function seleccionarOpcionVisual(campo, valor) {
  document.querySelectorAll(`.opcion-card[data-field="${campo}"]`).forEach((boton) => {
    boton.classList.remove("seleccionada");

    if (boton.dataset.value === valor) {
      boton.classList.add("seleccionada");
    }
  });
}

function seleccionarOpcionSuscripcion(periodo) {
  estado.periodoPremium = periodo;

  opcionesSuscripcion.forEach((boton) => {
    boton.classList.toggle("seleccionada", boton.dataset.periodo === periodo);
  });

  limpiarMensajePremium();
}

/* =========================================================
   VALIDACIÓN
========================================================= */
function validarPasoActual() {
  limpiarMensaje();

  if (pasoActual === 1) {
    if (!estado.objetivo) {
      mostrarMensaje("Selecciona una opción para continuar.");
      return false;
    }

    if (!esObjetivoDisponible(estado.objetivo)) {
      estado.objetivo = "";
      mostrarMensaje(MENSAJE_OPCION_NO_DISPONIBLE);
      return false;
    }
  }

  if (pasoActual === 2) {
    if (!estado.modo) {
      mostrarMensaje("Selecciona cómo quieres usar la app.");
      return false;
    }
  }

  if (pasoActual === 3) {
    const edad = Number(edadInput.value.trim());
    edadInput.classList.remove("error");

    if (!edadInput.value.trim()) {
      edadInput.classList.add("error");
      mostrarMensaje("Ingresa tu edad.");
      return false;
    }

    if (Number.isNaN(edad) || edad < 10 || edad > 100) {
      edadInput.classList.add("error");
      mostrarMensaje("Ingresa una edad válida entre 10 y 100.");
      return false;
    }

    estado.edad = edad;
  }

  if (pasoActual === 4) {
    if (!estado.sexo) {
      mostrarMensaje("Selecciona una opción para continuar.");
      return false;
    }
  }

  if (pasoActual === 5) {
    const altura = Number(alturaInput.value.trim());
    alturaInput.classList.remove("error");

    if (!alturaInput.value.trim()) {
      alturaInput.classList.add("error");
      mostrarMensaje("Ingresa tu altura.");
      return false;
    }

    if (Number.isNaN(altura) || altura < 100 || altura > 250) {
      alturaInput.classList.add("error");
      mostrarMensaje("Ingresa una altura válida entre 100 y 250 cm.");
      return false;
    }

    estado.altura = altura;
  }

  if (pasoActual === 6) {
    const peso = Number(pesoInput.value.trim());
    pesoInput.classList.remove("error");

    if (!pesoInput.value.trim()) {
      pesoInput.classList.add("error");
      mostrarMensaje("Ingresa tu peso actual.");
      return false;
    }

    if (Number.isNaN(peso) || peso < 25 || peso > 300) {
      pesoInput.classList.add("error");
      mostrarMensaje("Ingresa un peso válido entre 25 y 300 kg.");
      return false;
    }

    estado.peso = peso;
  }

  if (pasoActual === 7) {
    if (!estado.actividad) {
      mostrarMensaje("Selecciona tu nivel de actividad.");
      return false;
    }
  }

  return true;
}

/* =========================================================
   RESUMEN
========================================================= */
function textoPeriodoPremium(periodo) {
  const mapa = {
    semanal: "Semanal",
    mensual: "Mensual",
    anual: "Anual"
  };

  return mapa[periodo] || "-";
}

function obtenerCostoPremium(periodo) {
  return COSTOS_PREMIUM[periodo] || "-";
}

function llenarResumen() {
  const mapaObjetivo = {
    ejercicio: "Ejercicio",
    dieta: "Dieta",
    descanso: "Descanso",
    todo: "Todo"
  };

  const mapaModo = {
    ia: "Con IA (automático)",
    manual: "Modo manual"
  };

  const mapaSexo = {
    masculino: "Masculino",
    femenino: "Femenino"
  };

  const mapaActividad = {
    sedentario: "Sedentario",
    ligero: "Ligero",
    moderado: "Moderado",
    alto: "Alto"
  };

  const mapaPlan = {
    gratis: "Plan Gratis",
    "premium-demo": "Plan Premium Demo"
  };

  const planAsignado = obtenerPlanDesdeModo(estado.modo);

  resumenDatos.innerHTML = `
    <div class="resumen-item">
      <span class="resumen-label">Por dónde empezar</span>
      <span class="resumen-valor">${mapaObjetivo[estado.objetivo] || "-"}</span>
    </div>

    <div class="resumen-item">
      <span class="resumen-label">Modo de uso</span>
      <span class="resumen-valor">${mapaModo[estado.modo] || "-"}</span>
    </div>

    <div class="resumen-item">
      <span class="resumen-label">Plan asignado</span>
      <span class="resumen-valor">${mapaPlan[planAsignado] || "-"}</span>
    </div>

    ${
      estado.modo === "ia"
        ? `
    <div class="resumen-item">
      <span class="resumen-label">Suscripción premium</span>
      <span class="resumen-valor">${textoPeriodoPremium(estado.periodoPremium)}</span>
    </div>
    `
        : ""
    }

    <div class="resumen-item">
      <span class="resumen-label">Edad</span>
      <span class="resumen-valor">${estado.edad || "-"} años</span>
    </div>

    <div class="resumen-item">
      <span class="resumen-label">Sexo</span>
      <span class="resumen-valor">${mapaSexo[estado.sexo] || "-"}</span>
    </div>

    <div class="resumen-item">
      <span class="resumen-label">Altura</span>
      <span class="resumen-valor">${estado.altura || "-"} cm</span>
    </div>

    <div class="resumen-item">
      <span class="resumen-label">Peso actual</span>
      <span class="resumen-valor">${estado.peso || "-"} kg</span>
    </div>

    <div class="resumen-item">
      <span class="resumen-label">Nivel de actividad</span>
      <span class="resumen-valor">${mapaActividad[estado.actividad] || "-"}</span>
    </div>
  `;
}

function actualizarResumenPago() {
  resumenPagoPeriodo.innerHTML = `
    <div class="resumen-pago-linea">
      <span>Plan seleccionado</span>
      <strong>Premium</strong>
    </div>
    <div class="resumen-pago-linea">
      <span>Tipo de suscripción</span>
      <strong>${textoPeriodoPremium(estado.periodoPremium)}</strong>
    </div>
    <div class="resumen-pago-linea">
      <span>Costo</span>
      <strong>${obtenerCostoPremium(estado.periodoPremium)}</strong>
    </div>
    <div class="resumen-pago-linea">
      <span>Estado</span>
      <strong>Prototipo / solo diseño</strong>
    </div>
  `;
}

/* =========================================================
   GUARDADO POR USUARIO
========================================================= */
function guardarOnboardingPorUsuario() {
  const correoActivo = obtenerCorreoActivo();

  if (!correoActivo) {
    mostrarMensaje("No se encontró un usuario activo. Vuelve a iniciar sesión.");
    return false;
  }

  const usuarios = obtenerUsuariosConfig();
  const usuarioBase = usuarios[correoActivo] || crearUsuarioBase(correoActivo);
  const destino = obtenerRutaDestino();
  const planAsignado = obtenerPlanDesdeModo(estado.modo);

  usuarios[correoActivo] = {
    ...usuarioBase,
    onboardingCompletado: true,
    objetivo: estado.objetivo,
    modo: estado.modo,
    edad: estado.edad,
    sexo: estado.sexo,
    altura: estado.altura,
    peso: estado.peso,
    actividad: estado.actividad,
    destinoPreferido: destino,
    configInicial: {
      objetivo: estado.objetivo,
      modo: estado.modo,
      edad: estado.edad,
      sexo: estado.sexo,
      altura: estado.altura,
      peso: estado.peso,
      actividad: estado.actividad
    },
    ajustes: {
      ...usuarioBase.ajustes,
      cuenta: {
        ...(usuarioBase.ajustes?.cuenta || {}),
        correo: correoActivo
      },
      suscripcion: {
        ...(usuarioBase.ajustes?.suscripcion || {}),
        plan: planAsignado,
        periodicidad: estado.modo === "ia" ? estado.periodoPremium : ""
      }
    }
  };

  guardarUsuariosConfig(usuarios);
  return true;
}

function terminarOnboarding() {
  const guardadoOk = guardarOnboardingPorUsuario();

  if (!guardadoOk) {
    return;
  }

  const destino = obtenerRutaDestino();
  window.location.href = destino;
}

/* =========================================================
   NAVEGACIÓN
========================================================= */
function avanzarPaso() {
  const esValido = validarPasoActual();

  if (!esValido) {
    return;
  }

  if (pasoActual < TOTAL_PASOS) {
    pasoActual += 1;
    actualizarVistaPaso();
    return;
  }

  terminarOnboarding();
}

function regresarPaso() {
  if (pasoActual > 1) {
    pasoActual -= 1;
    actualizarVistaPaso();
  }
}

/* =========================================================
   SELECCIÓN DE MODO
========================================================= */
function seleccionarModoPremiumFinal() {
  estado.modo = "ia";
  seleccionarOpcionVisual("modo", "ia");
  cerrarTodosLosModales();
  limpiarMensaje();
}

function seleccionarModoManualDesdeModal() {
  estado.modo = "manual";
  seleccionarOpcionVisual("modo", "manual");
  cerrarTodosLosModales();
  limpiarMensaje();
}

/* =========================================================
   EVENTOS OPCIONES
========================================================= */
botonesOpcion.forEach((boton) => {
  boton.addEventListener("click", () => {
    const campo = boton.dataset.field;
    const valor = boton.dataset.value;

    if (!campo || !valor) return;

    if (!esOpcionDisponible(boton)) {
      bloquearOpcionNoDisponible();
      return;
    }

    if (campo === "modo" && valor === "ia") {
      abrirModalPremium();
      return;
    }

    estado[campo] = valor;
    seleccionarOpcionVisual(campo, valor);
    limpiarMensaje();
  });
});

opcionesSuscripcion.forEach((boton) => {
  boton.addEventListener("click", function () {
    seleccionarOpcionSuscripcion(this.dataset.periodo);
  });
});

edadInput.addEventListener("input", () => {
  edadInput.classList.remove("error");
  estado.edad = edadInput.value.trim();
  limpiarMensaje();
});

alturaInput.addEventListener("input", () => {
  alturaInput.classList.remove("error");
  estado.altura = alturaInput.value.trim();
  limpiarMensaje();
});

pesoInput.addEventListener("input", () => {
  pesoInput.classList.remove("error");
  estado.peso = pesoInput.value.trim();
  limpiarMensaje();
});

botonSiguiente.addEventListener("click", avanzarPaso);
botonAnterior.addEventListener("click", regresarPaso);

/* =========================================================
   EVENTOS MODAL PREMIUM
========================================================= */
cerrarModalPremium?.addEventListener("click", cerrarModalPremiumFn);
cerrarModalPremiumFondo?.addEventListener("click", cerrarModalPremiumFn);

botonContinuarPremium?.addEventListener("click", function () {
  if (!estado.periodoPremium) {
    mostrarMensajePremium("Selecciona un tipo de suscripción para continuar.");
    return;
  }

  abrirModalPago();
});

botonSeguirManual?.addEventListener("click", seleccionarModoManualDesdeModal);

/* =========================================================
   EVENTOS MODAL PAGO
========================================================= */
cerrarModalPago?.addEventListener("click", cerrarModalPagoFn);
cerrarModalPagoFondo?.addEventListener("click", cerrarModalPagoFn);
botonCancelarPago?.addEventListener("click", cerrarModalPagoFn);

formularioPagoPremium?.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (!nombreTitularPago.value.trim()) {
    mostrarMensajePago("Ingresa el nombre del titular.");
    nombreTitularPago.focus();
    return;
  }

  if (!numeroTarjetaPago.value.trim()) {
    mostrarMensajePago("Ingresa el número de tarjeta.");
    numeroTarjetaPago.focus();
    return;
  }

  if (!fechaPago.value.trim()) {
    mostrarMensajePago("Ingresa la fecha de vencimiento.");
    fechaPago.focus();
    return;
  }

  if (!cvvPago.value.trim()) {
    mostrarMensajePago("Ingresa el CVV.");
    cvvPago.focus();
    return;
  }

  limpiarMensajePago();
  seleccionarModoPremiumFinal();
});

/* =========================================================
   TECLADO
========================================================= */
document.addEventListener("keydown", function (evento) {
  const tecla = evento.key;
  const elementoActivo = document.activeElement;
  const tagActivo = elementoActivo?.tagName || "";
  const esBotonOpcion = elementoActivo?.classList?.contains("opcion-card");
  const esBotonSuscripcion = elementoActivo?.classList?.contains("opcion-suscripcion");

  if (tecla === "Tab") {
    if (modalPagoAbierto()) {
      atraparFocoModal(modalPagoPremium, evento);
      return;
    }

    if (modalPremiumAbierto()) {
      atraparFocoModal(modalPremium, evento);
      return;
    }
  }

  if (tecla === "Escape") {
    evento.preventDefault();

    if (modalPagoAbierto()) {
      cerrarModalPagoFn();
      return;
    }

    if (modalPremiumAbierto()) {
      cerrarModalPremiumFn();
      return;
    }

    regresarPaso();
    return;
  }

  if (tecla === "Enter") {
    if (modalPagoAbierto()) {
      return;
    }

    if (modalPremiumAbierto()) {
      if (esBotonSuscripcion) {
        evento.preventDefault();
        seleccionarOpcionSuscripcion(elementoActivo.dataset.periodo);
      }
      return;
    }

    if (esBotonOpcion) {
      evento.preventDefault();

      const campo = elementoActivo.dataset.field;
      const valor = elementoActivo.dataset.value;

      if (!esOpcionDisponible(elementoActivo)) {
        bloquearOpcionNoDisponible();
        return;
      }

      if (campo === "modo" && valor === "ia") {
        abrirModalPremium();
        return;
      }

      if (campo && valor) {
        estado[campo] = valor;
        seleccionarOpcionVisual(campo, valor);
        limpiarMensaje();
      }

      avanzarPaso();
      return;
    }

    if (tagActivo === "BUTTON") {
      return;
    }

    evento.preventDefault();
    avanzarPaso();
  }
});

actualizarVistaPaso();