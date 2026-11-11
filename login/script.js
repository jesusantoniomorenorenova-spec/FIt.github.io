var CONTADOR_ID = Date.now();
function generarId() {
  return "id_" + (CONTADOR_ID++);
}

var DIAS = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

function comida(nombre, tipo, dia, kcal, pro, carb, gras, completa) {
  return {
    id: generarId(),
    diaSemana: dia,
    tipo: tipo,
    nombre: nombre,
    categoria: "Personalizada",
    cantidad: 1,
    unidad: "Porción",
    calorias: kcal,
    proteinas: pro,
    carbohidratos: carb,
    grasas: gras,
    fibra: 0,
    hora: "08:00",
    completada: completa || false
  };
}

function ejercicio(nombre, dia, hora, series, reps, peso, descanso, musculo, tipo, dificultad, completada, duracion) {
  return {
    id: generarId(),
    nombre: nombre,
    diaSemana: dia,
    hora: hora,
    series: series || 3,
    repeticiones: reps || 10,
    peso: peso || 0,
    descanso: descanso || 60,
    duracion: duracion || 0,
    musculoPrincipal: musculo || "Cuerpo completo",
    musculoSecundario: "",
    tipo: tipo || "Peso corporal",
    dificultad: dificultad || "Media",
    completada: completada || false
  };
}

function medida(cuello, hombros, pecho, espalda, biceps_izq, biceps_der, antebrazo_izq, antebrazo_der, cintura, abdomen, cadera, gluteos, muslo_izq, muslo_der, pantorrilla_izq, pantorrilla_der, fecha) {
  return {
    id: generarId(),
    fecha: fecha,
    cuello: cuello,
    hombros: hombros,
    pecho: pecho,
    espalda: espalda,
    biceps_izq: biceps_izq,
    biceps_der: biceps_der,
    antebrazo_izq: antebrazo_izq,
    antebrazo_der: antebrazo_der,
    cintura: cintura,
    abdomen: abdomen,
    cadera: cadera,
    gluteos: gluteos,
    muslo_izq: muslo_izq,
    muslo_der: muslo_der,
    pantorrilla_izq: pantorrilla_izq,
    pantorrilla_der: pantorrilla_der
  };
}

var HOY = new Date();
function ayer() { var d = new Date(HOY); d.setDate(d.getDate() - 1); return d.toISOString().split("T")[0]; }
function anteayer() { var d = new Date(HOY); d.setDate(d.getDate() - 2); return d.toISOString().split("T")[0]; }
function hace3() { var d = new Date(HOY); d.setDate(d.getDate() - 3); return d.toISOString().split("T")[0]; }
function hace7() { var d = new Date(HOY); d.setDate(d.getDate() - 7); return d.toISOString().split("T")[0]; }
function hace14() { var d = new Date(HOY); d.setDate(d.getDate() - 14); return d.toISOString().split("T")[0]; }

var USUARIO_DEMO = {
  onboardingCompletado: true,
  objetivo: "tonificar",
  modo: "guiado",
  edad: "28",
  sexo: "hombre",
  altura: "178",
  peso: "78",
  actividad: "moderado",
  destinoPreferido: "../menu/index.html",
  configInicial: {
    objetivo: "tonificar",
    modo: "guiado",
    edad: "28",
    sexo: "hombre",
    altura: "178",
    peso: "78",
    actividad: "moderado"
  },
  ajustes: {
    cuenta: {
      nombre: "Demo User",
      correo: "demo@fitbalance.com",
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
      plan: "gratis"
    },
    app: {
      version: "1.1.0"
    }
  },
  modulos: {
    dieta: {
      perfil: {
        edad: "28",
        altura: "178",
        sexo: "hombre",
        pesoInicial: "80",
        pesoActual: "78",
        pesoObjetivo: "72",
        objetivo: "perder_grasa",
        actividad: "Moderado"
      },
      comidas: [
        // Lunes
        comida("Avena con frutas", "desayuno", "lunes", 290, 8, 48, 6),
        comida("Yogur con almendras", "colacion_manana", "lunes", 280, 12, 28, 14),
        comida("Pollo con arroz", "comida", "lunes", 485, 42, 45, 14, true),
        comida("Batido de proteina", "colacion_tarde", "lunes", 250, 30, 15, 5),
        comida("Ensalada de pollo", "cena", "lunes", 320, 35, 12, 15),
        // Martes
        comida("Huevos revueltos", "desayuno", "martes", 380, 20, 28, 22, true),
        comida("Yogur con almendras", "colacion_manana", "martes", 280, 12, 28, 14),
        comida("Filete de salmon", "comida", "martes", 420, 38, 15, 25, true),
        comida("Batido de proteina", "colacion_tarde", "martes", 250, 30, 15, 5),
        comida("Tacos de pollo", "cena", "martes", 380, 28, 35, 14),
        comida("Manzana", "colacion_noche", "martes", 52, 0.3, 14, 0.2),
        // Miércoles
        comida("Avena con frutas", "desayuno", "miercoles", 290, 8, 48, 6, true),
        comida("Platano", "colacion_manana", "miercoles", 89, 1.1, 23, 0.3),
        comida("Pollo con arroz", "comida", "miercoles", 485, 42, 45, 14, true),
        comida("Yogur con almendras", "colacion_tarde", "miercoles", 280, 12, 28, 14),
        comida("Ensalada de pollo", "cena", "miercoles", 320, 35, 12, 15),
        comida("Fresa", "colacion_noche", "miercoles", 32, 0.7, 7.7, 0.3),
        // Jueves
        comida("Huevos revueltos", "desayuno", "jueves", 380, 20, 28, 22),
        comida("Yogur natural", "colacion_manana", "jueves", 120, 6, 9, 6),
        comida("Filete de salmon", "comida", "jueves", 420, 38, 15, 25),
        comida("Batido de proteina", "colacion_tarde", "jueves", 250, 30, 15, 5),
        comida("Tacos de pollo", "cena", "jueves", 380, 28, 35, 14),
        // Viernes
        comida("Avena con frutas", "desayuno", "viernes", 290, 8, 48, 6),
        comida("Platano", "colacion_manana", "viernes", 89, 1.1, 23, 0.3),
        comida("Pollo con arroz", "comida", "viernes", 485, 42, 45, 14),
        comida("Yogur con almendras", "colacion_tarde", "viernes", 280, 12, 28, 14),
        comida("Ensalada de pollo", "cena", "viernes", 320, 35, 12, 15),
        // Sábado
        comida("Huevos revueltos", "desayuno", "sabado", 380, 20, 28, 22),
        comida("Yogur natural", "colacion_manana", "sabado", 120, 6, 9, 6),
        comida("Tacos de pollo", "comida", "sabado", 380, 28, 35, 14),
        comida("Batido de proteina", "colacion_tarde", "sabado", 250, 30, 15, 5),
        comida("Filete de salmon", "cena", "sabado", 420, 38, 15, 25),
        // Domingo
        comida("Avena con frutas", "desayuno", "domingo", 290, 8, 48, 6),
        comida("Platano", "colacion_manana", "domingo", 89, 1.1, 23, 0.3),
        comida("Pollo con arroz", "comida", "domingo", 485, 42, 45, 14),
        comida("Yogur con almendras", "colacion_tarde", "domingo", 280, 12, 28, 14),
        comida("Ensalada de pollo", "cena", "domingo", 320, 35, 12, 15)
      ]
    },
    ejercicio: {
      perfil: {
        edad: "28",
        peso: "78",
        sexo: "hombre",
        objetivo: "tonificar",
        actividad: "moderado",
        experiencia: "intermedio"
      },
      ejercicios: [
        // Lunes - Mañana - Pecho y tríceps
        ejercicio("Press de banca con barra", "lunes", "Mañana", 4, 10, 50, 90, "Pecho", "Fuerza", "Media"),
        ejercicio("Aperturas con mancuernas", "lunes", "Mañana", 3, 12, 16, 60, "Pecho", "Fuerza", "Media"),
        ejercicio("Fondos en paralelas", "lunes", "Mañana", 3, 10, 0, 60, "Pecho", "Peso corporal", "Media"),
        ejercicio("Extensiones de tríceps", "lunes", "Mañana", 3, 12, 14, 45, "Tríceps", "Fuerza", "Media"),
        // Lunes - Tarde - Cardio
        ejercicio("Correr en cinta", "lunes", "Tarde", 1, 1, 0, 0, "Cardio", "Cardio", "Media", false, 1800),
        // Martes - Mañana - Espalda y bíceps
        ejercicio("Dominadas", "martes", "Mañana", 4, 8, 0, 90, "Espalda", "Peso corporal", "Alta"),
        ejercicio("Remo con barra", "martes", "Mañana", 4, 10, 60, 90, "Espalda", "Fuerza", "Media"),
        ejercicio("Curl de bíceps con barra", "martes", "Mañana", 3, 12, 20, 60, "Bíceps", "Fuerza", "Media"),
        ejercicio("Jalón al pecho", "martes", "Mañana", 3, 10, 55, 60, "Espalda", "Fuerza", "Media"),
        // Miércoles - Mañana - Piernas
        ejercicio("Sentadilla con barra", "miercoles", "Mañana", 4, 10, 70, 120, "Piernas", "Fuerza", "Alta"),
        ejercicio("Prensa de piernas", "miercoles", "Mañana", 3, 12, 120, 90, "Piernas", "Fuerza", "Media"),
        ejercicio("Curl femoral", "miercoles", "Mañana", 3, 12, 35, 60, "Piernas", "Fuerza", "Media"),
        ejercicio("Elevación de talones", "miercoles", "Mañana", 4, 15, 30, 45, "Piernas", "Fuerza", "Media"),
        // Jueves - Mañana - Hombros
        ejercicio("Press militar con barra", "jueves", "Mañana", 4, 10, 30, 90, "Hombros", "Fuerza", "Media"),
        ejercicio("Elevaciones laterales", "jueves", "Mañana", 3, 12, 10, 45, "Hombros", "Fuerza", "Media"),
        ejercicio("Elevaciones frontales", "jueves", "Mañana", 3, 12, 10, 45, "Hombros", "Fuerza", "Media"),
        ejercicio("Pájaro", "jueves", "Mañana", 3, 12, 10, 45, "Hombros", "Fuerza", "Media"),
        // Viernes - Mañana - Full body
        ejercicio("Peso muerto", "viernes", "Mañana", 4, 8, 80, 120, "Piernas", "Fuerza", "Alta"),
        ejercicio("Press de banca inclinado", "viernes", "Mañana", 3, 10, 45, 90, "Pecho", "Fuerza", "Media"),
        ejercicio("Remo con mancuerna a 1 mano", "viernes", "Mañana", 3, 10, 25, 60, "Espalda", "Fuerza", "Media"),
        ejercicio("Plancha", "viernes", "Mañana", 3, 1, 0, 30, "Core", "Peso corporal", "Media", false, 45),
        // Sábado - Mañana - Cardio ligero
        ejercicio("Bicicleta estática", "sabado", "Mañana", 1, 1, 0, 0, "Cardio", "Cardio", "Media", false, 2400),
        // Domingo - Descanso
      ]
    },
    descanso: {
      perfil: {
        edad: "28",
        horasObjetivo: 8,
        horaAcostarse: "23:00",
        horaDespertar: "07:00"
      },
      configuracion: {
        sonidoActivado: true,
        sonidoActual: "lluvia",
        volumenSonido: 50,
        vibracion: true,
        alarmaActivada: true,
        horaAlarma: "07:00",
        diasAlarma: ["lunes", "martes", "miercoles", "jueves", "viernes"],
        sonidoAlarma: "default"
      },
      registros: [
        { fecha: hace7(), horaAcostarse: "22:45", horaDespertar: "06:50", horasDormidas: 8.1, calidad: "buena", notas: "" },
        { fecha: hace3(), horaAcostarse: "23:15", horaDespertar: "07:10", horasDormidas: 7.9, calidad: "buena", notas: "" },
        { fecha: anteayer(), horaAcostarse: "22:30", horaDespertar: "06:45", horasDormidas: 8.3, calidad: "excelente", notas: "" },
        { fecha: ayer(), horaAcostarse: "23:30", horaDespertar: "06:30", horasDormidas: 7.0, calidad: "regular", notas: "Me costó dormir" }
      ],
      registroEnCurso: null,
      ultimoEventoTexto: "Sin eventos",
      perfilEditado: true
    },
    medidas: {
      historial: [
        medida(39, 115, 104, 46, 36, 36, 29, 29, 86, 90, 100, 102, 59, 59, 39, 39, hace14()),
        medida(38.5, 116, 105, 46, 36.5, 36.5, 29.5, 29.5, 85, 89, 99, 101, 59.5, 59.5, 39.5, 39.5, hace7()),
        medida(38.2, 117, 106, 46.5, 37, 37, 30, 30, 84, 88, 98, 100, 60, 60, 40, 40, hace3()),
        medida(38, 118, 107, 47, 37.5, 37.5, 30.5, 30.5, 83, 87, 97, 99, 60.5, 60.5, 40.5, 40.5, ayer())
      ]
    }
  }
};


const CONFIG = {
  redireccionPorDefecto: "../menu/index.html",
  redirigirSiYaHaySesion: false
};

var DESTINOS_VALIDOS = ["../menu/index.html", "../dieta/index.html"];

var CREDENCIALES_DEMO = { correo: "demo@fitbalance.com", password: "demo1234" };

function cargarUsuarioDemoSiNoExiste() {
  var usuarios = obtenerUsuariosConfig();
  var configDemo = usuarios[CREDENCIALES_DEMO.correo];

  if (!configDemo) {
    usuarios[CREDENCIALES_DEMO.correo] = USUARIO_DEMO;
    guardarUsuariosConfig(usuarios);
    return;
  }

  if (DESTINOS_VALIDOS.indexOf(configDemo.destinoPreferido) === -1) {
    configDemo.destinoPreferido = USUARIO_DEMO.destinoPreferido;
    guardarUsuariosConfig(usuarios);
  }
}

cargarUsuarioDemoSiNoExiste();

// Elementos generales
const subtituloAuth = document.getElementById("subtituloAuth");

// Vistas
const vistaLogin = document.getElementById("vistaLogin");
const vistaRegistro = document.getElementById("vistaRegistro");
const vistaRecuperar = document.getElementById("vistaRecuperar");

// Botones de cambio de vista
const abrirRegistro = document.getElementById("abrirRegistro");
const abrirRecuperar = document.getElementById("abrirRecuperar");
const volverLoginDesdeRegistro = document.getElementById("volverLoginDesdeRegistro");
const volverLoginDesdeRecuperar = document.getElementById("volverLoginDesdeRecuperar");

// Formulario login
const formularioLogin = document.getElementById("formularioLogin");
const correoLogin = document.getElementById("correoLogin");
const contrasenaLogin = document.getElementById("contrasenaLogin");
const recordarSesion = document.getElementById("recordarSesion");
const mensajeLogin = document.getElementById("mensajeLogin");

// Formulario registro
const formularioRegistro = document.getElementById("formularioRegistro");
const nombreRegistro = document.getElementById("nombreRegistro");
const correoRegistro = document.getElementById("correoRegistro");
const contrasenaRegistro = document.getElementById("contrasenaRegistro");
const confirmarRegistro = document.getElementById("confirmarRegistro");
const mensajeRegistro = document.getElementById("mensajeRegistro");

// Formulario recuperar
const formularioRecuperar = document.getElementById("formularioRecuperar");
const correoRecuperar = document.getElementById("correoRecuperar");
const mensajeRecuperar = document.getElementById("mensajeRecuperar");

// Botones sociales
const botonesSociales = document.querySelectorAll(".boton-social");

// =========================
// UTILIDADES GENERALES
// =========================
function esCorreoValido(correo) {
  const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expresion.test(correo);
}

function mostrarMensaje(elemento, texto, tipo) {
  elemento.textContent = texto;
  elemento.classList.remove("es-error", "es-exito", "es-info");
  if (tipo) {
    elemento.classList.add(tipo);
  }
}

function limpiarMensaje(elemento) {
  elemento.textContent = "";
  elemento.classList.remove("es-error", "es-exito", "es-info");
}

function limpiarEstadoCampo(campo) {
  campo.classList.remove("error", "correcto");
}

function marcarError(campo) {
  campo.classList.remove("correcto");
  campo.classList.add("error");
}

function marcarCorrecto(campo) {
  campo.classList.remove("error");
  campo.classList.add("correcto");
}

function limpiarCampos(...campos) {
  campos.forEach((campo) => limpiarEstadoCampo(campo));
}

function mostrarVista(nombreVista) {
  vistaLogin.classList.add("oculto");
  vistaRegistro.classList.add("oculto");
  vistaRecuperar.classList.add("oculto");

  vistaLogin.classList.remove("activa");
  vistaRegistro.classList.remove("activa");
  vistaRecuperar.classList.remove("activa");

  if (nombreVista === "login") {
    vistaLogin.classList.remove("oculto");
    vistaLogin.classList.add("activa");
    subtituloAuth.textContent = "Inicia sesión para continuar con tu progreso";
    correoLogin.focus();
  }

  if (nombreVista === "registro") {
    vistaRegistro.classList.remove("oculto");
    vistaRegistro.classList.add("activa");
    subtituloAuth.textContent = "Crea tu cuenta para comenzar con tu progreso";
    nombreRegistro.focus();
  }

  if (nombreVista === "recuperar") {
    vistaRecuperar.classList.remove("oculto");
    vistaRecuperar.classList.add("activa");
    subtituloAuth.textContent = "Recupera tu acceso de forma rápida";
    correoRecuperar.focus();
  }
}


// =========================
// CONFIGURACIÓN POR USUARIO
// =========================
function obtenerUsuariosConfig() {
  const datos = localStorage.getItem("fitbalance_usuarios_config");
  return datos ? JSON.parse(datos) : {};
}

function guardarUsuariosConfig(config) {
  localStorage.setItem("fitbalance_usuarios_config", JSON.stringify(config));
}

function obtenerConfigUsuario(correo) {
  if (!correo) return null;
  const usuarios = obtenerUsuariosConfig();
  return usuarios[correo] || null;
}

function limpiarConfigUsuario(correo) {
  if (!correo) return;
  const usuarios = obtenerUsuariosConfig();

  if (usuarios[correo]) {
    delete usuarios[correo];
    guardarUsuariosConfig(usuarios);
  }
}

function guardarSesionPrototipo(correo, proveedor = "correo") {
  localStorage.setItem("sesionActiva", "si");
  localStorage.setItem("correoUsuario", correo);
  localStorage.setItem("proveedorLogin", proveedor);

  if (recordarSesion && recordarSesion.checked) {
    localStorage.setItem("recordarme", "si");
  } else {
    localStorage.removeItem("recordarme");
  }
}

function obtenerDestinoPostLogin(correo) {
  const configUsuario = obtenerConfigUsuario(correo);
  const destino =
    configUsuario && configUsuario.onboardingCompletado
      ? configUsuario.destinoPreferido
      : "";

  if (DESTINOS_VALIDOS.indexOf(destino) !== -1) {
    return destino;
  }

  return CONFIG.redireccionPorDefecto;
}

function irDespuesDelLogin(correo) {
  const destino = obtenerDestinoPostLogin(correo);

  setTimeout(() => {
    window.location.href = destino;
  }, 700);
}

// Si ya hay sesión iniciada y quieres mandarlo directo
if (CONFIG.redirigirSiYaHaySesion && localStorage.getItem("sesionActiva") === "si") {
  const correoActual = localStorage.getItem("correoUsuario");
  window.location.href = obtenerDestinoPostLogin(correoActual);
}

// =========================
// NAVEGACIÓN ENTRE VISTAS
// =========================
abrirRegistro.addEventListener("click", () => {
  limpiarMensaje(mensajeLogin);
  mostrarVista("registro");
});

abrirRecuperar.addEventListener("click", () => {
  limpiarMensaje(mensajeLogin);
  correoRecuperar.value = correoLogin.value.trim();
  mostrarVista("recuperar");
});

volverLoginDesdeRegistro.addEventListener("click", () => {
  limpiarMensaje(mensajeRegistro);
  mostrarVista("login");
});

volverLoginDesdeRecuperar.addEventListener("click", () => {
  limpiarMensaje(mensajeRecuperar);
  mostrarVista("login");
});

// =========================
// LOGIN
// =========================
formularioLogin.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const correo = correoLogin.value.trim().toLowerCase();
  const contrasena = contrasenaLogin.value.trim();

  limpiarCampos(correoLogin, contrasenaLogin);
  limpiarMensaje(mensajeLogin);

  let hayError = false;

  if (correo === "") {
    marcarError(correoLogin);
    hayError = true;
  } else if (!esCorreoValido(correo)) {
    marcarError(correoLogin);
    mostrarMensaje(mensajeLogin, "Ingresa un correo válido.", "es-error");
    hayError = true;
  } else {
    marcarCorrecto(correoLogin);
  }

  if (contrasena === "") {
    marcarError(contrasenaLogin);
    hayError = true;
  } else if (contrasena.length < 6) {
    marcarError(contrasenaLogin);
    mostrarMensaje(mensajeLogin, "La contraseña debe tener al menos 6 caracteres.", "es-error");
    hayError = true;
  } else {
    marcarCorrecto(contrasenaLogin);
  }

  if (correo === "" || contrasena === "") {
    mostrarMensaje(mensajeLogin, "Completa todos los campos.", "es-error");
    return;
  }

  if (hayError) {
    return;
  }

  // Demo: cargar datos demo si es el usuario demo
  if (correo === CREDENCIALES_DEMO.correo && contrasena === CREDENCIALES_DEMO.password) {
    cargarUsuarioDemoSiNoExiste();
  }

  guardarSesionPrototipo(correo, "correo");
  mostrarMensaje(mensajeLogin, "Entrando...", "es-exito");
  irDespuesDelLogin(correo);
});

// =========================
// REGISTRO
// =========================
formularioRegistro.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = nombreRegistro.value.trim();
  const correo = correoRegistro.value.trim().toLowerCase();
  const contrasena = contrasenaRegistro.value.trim();
  const confirmar = confirmarRegistro.value.trim();

  limpiarCampos(nombreRegistro, correoRegistro, contrasenaRegistro, confirmarRegistro);
  limpiarMensaje(mensajeRegistro);

  let hayError = false;

  if (nombre === "") {
    marcarError(nombreRegistro);
    hayError = true;
  } else {
    marcarCorrecto(nombreRegistro);
  }

  if (correo === "") {
    marcarError(correoRegistro);
    hayError = true;
  } else if (!esCorreoValido(correo)) {
    marcarError(correoRegistro);
    mostrarMensaje(mensajeRegistro, "Ingresa un correo válido.", "es-error");
    hayError = true;
  } else {
    marcarCorrecto(correoRegistro);
  }

  if (contrasena === "") {
    marcarError(contrasenaRegistro);
    hayError = true;
  } else if (contrasena.length < 6) {
    marcarError(contrasenaRegistro);
    mostrarMensaje(mensajeRegistro, "La contraseña debe tener al menos 6 caracteres.", "es-error");
    hayError = true;
  } else {
    marcarCorrecto(contrasenaRegistro);
  }

  if (confirmar === "") {
    marcarError(confirmarRegistro);
    hayError = true;
  } else if (confirmar !== contrasena) {
    marcarError(confirmarRegistro);
    mostrarMensaje(mensajeRegistro, "Las contraseñas no coinciden.", "es-error");
    hayError = true;
  } else {
    marcarCorrecto(confirmarRegistro);
  }

  if (nombre === "" || correo === "" || contrasena === "" || confirmar === "") {
    mostrarMensaje(mensajeRegistro, "Completa todos los campos.", "es-error");
    return;
  }

  if (hayError) {
    return;
  }

  // Guardado visual/prototipo
  localStorage.setItem("usuarioPrototipoNombre", nombre);
  localStorage.setItem("usuarioPrototipoCorreo", correo);

  // MUY IMPORTANTE:
  // si este correo se "registra" de nuevo, se reinicia SU onboarding
  limpiarConfigUsuario(correo);

  mostrarMensaje(
    mensajeRegistro,
    "Cuenta creada correctamente. Ahora inicia sesión para configurar tu app.",
    "es-exito"
  );

  setTimeout(() => {
    correoLogin.value = correo;
    contrasenaLogin.value = "";
    limpiarCampos(correoLogin, contrasenaLogin);
    limpiarMensaje(mensajeLogin);
    mostrarVista("login");
  }, 900);
});

// =========================
// RECUPERAR CONTRASEÑA
// =========================
formularioRecuperar.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const correo = correoRecuperar.value.trim().toLowerCase();

  limpiarCampos(correoRecuperar);
  limpiarMensaje(mensajeRecuperar);

  if (correo === "") {
    marcarError(correoRecuperar);
    mostrarMensaje(mensajeRecuperar, "Ingresa tu correo.", "es-error");
    return;
  }

  if (!esCorreoValido(correo)) {
    marcarError(correoRecuperar);
    mostrarMensaje(mensajeRecuperar, "Ingresa un correo válido.", "es-error");
    return;
  }

  marcarCorrecto(correoRecuperar);
  mostrarMensaje(
    mensajeRecuperar,
    "En un sistema real te enviaríamos un enlace de recuperación. Prototipo listo.",
    "es-info"
  );
});

// =========================
// LOGIN SOCIAL DE PROTOTIPO
// =========================
botonesSociales.forEach((boton) => {
  boton.addEventListener("click", function () {
    const proveedor = boton.dataset.provider || "Social";
    const correoSimulado = `${proveedor.toLowerCase()}@fitbalance.demo`;

    limpiarMensaje(mensajeLogin);
    mostrarMensaje(mensajeLogin, `Entrando con ${proveedor}...`, "es-info");

    guardarSesionPrototipo(correoSimulado, proveedor);
    irDespuesDelLogin(correoSimulado);
  });
});

// =========================
// LIMPIAR ERRORES AL ESCRIBIR
// =========================
[
  correoLogin,
  contrasenaLogin,
  nombreRegistro,
  correoRegistro,
  contrasenaRegistro,
  confirmarRegistro,
  correoRecuperar
].forEach((campo) => {
  campo.addEventListener("input", () => {
    limpiarEstadoCampo(campo);
  });
});