/* =========================
   DATOS DE ALIMENTOS Y RECETAS
========================= */

const alimentosBase = [
  { nombre: "Pechuga de pollo", kcal: 165, proteinas: 31, carb: 0, grasas: 3.6, fibra: 0, porcion: 100, unidad: "g", categoria: "Proteína" },
  { nombre: "Huevo entero", kcal: 155, proteinas: 13, carb: 1.1, grasas: 11, fibra: 0, porcion: 100, unidad: "g", categoria: "Proteína" },
  { nombre: "Carne molida de res", kcal: 250, proteinas: 26, carb: 0, grasas: 15, fibra: 0, porcion: 100, unidad: "g", categoria: "Proteína" },
  { nombre: "Salmon", kcal: 208, proteinas: 20, carb: 0, grasas: 13, fibra: 0, porcion: 100, unidad: "g", categoria: "Proteína" },
  { nombre: "Atun en agua", kcal: 116, proteinas: 26, carb: 0, grasas: 1, fibra: 0, porcion: 100, unidad: "g", categoria: "Proteína" },
  { nombre: "Arroz blanco cocido", kcal: 130, proteinas: 2.7, carb: 28, grasas: 0.3, fibra: 0.4, porcion: 100, unidad: "g", categoria: "Carbidrato" },
  { nombre: "Pasta cocida", kcal: 131, proteinas: 5, carb: 25, grasas: 1.1, fibra: 1.2, porcion: 100, unidad: "g", categoria: "Carbidrato" },
  { nombre: "Papa hervida", kcal: 87, proteinas: 1.9, carb: 20, grasas: 0.1, fibra: 1.8, porcion: 100, unidad: "g", categoria: "Carbidrato" },
  { nombre: "Tortilla de maiz", kcal: 218, proteinas: 5.5, carb: 45, grasas: 2.8, fibra: 5.2, porcion: 100, unidad: "g", categoria: "Carbidrato" },
  { nombre: "Aguacate", kcal: 160, proteinas: 2, carb: 9, grasas: 15, fibra: 7, porcion: 100, unidad: "g", categoria: "Grasa" },
  { nombre: "Almendras", kcal: 579, proteinas: 21, carb: 22, grasas: 50, fibra: 12.5, porcion: 100, unidad: "g", categoria: "Grasa" },
  { nombre: "Platano", kcal: 89, proteinas: 1.1, carb: 23, grasas: 0.3, fibra: 2.6, porcion: 100, unidad: "g", categoria: "Fruta" },
  { nombre: "Manzana", kcal: 52, proteinas: 0.3, carb: 14, grasas: 0.2, fibra: 2.4, porcion: 100, unidad: "g", categoria: "Fruta" },
  { nombre: "Fresa", kcal: 32, proteinas: 0.7, carb: 7.7, grasas: 0.3, fibra: 2, porcion: 100, unidad: "g", categoria: "Fruta" },
  { nombre: "Brocoli", kcal: 34, proteinas: 2.8, carb: 7, grasas: 0.4, fibra: 2.6, porcion: 100, unidad: "g", categoria: "Verdura" },
  { nombre: "Espinaca", kcal: 23, proteinas: 2.9, carb: 3.6, grasas: 0.4, fibra: 2.2, porcion: 100, unidad: "g", categoria: "Verdura" },
  { nombre: "Zanahoria", kcal: 41, proteinas: 0.9, carb: 10, grasas: 0.2, fibra: 2.8, porcion: 100, unidad: "g", categoria: "Verdura" },
  { nombre: "Leche descremada", kcal: 34, proteinas: 3.4, carb: 5, grasas: 0.1, fibra: 0, porcion: 100, unidad: "ml", categoria: "Bebida" },
  { nombre: "Yogur natural", kcal: 61, proteinas: 3.5, carb: 4.7, grasas: 3.3, fibra: 0, porcion: 100, unidad: "g", categoria: "Lacteo" },
  { nombre: "Frijoles negros", kcal: 132, proteinas: 8.9, carb: 24, grasas: 0.5, fibra: 8.7, porcion: 100, unidad: "g", categoria: "Legumbre" }
];

const recetasBase = [
  { nombre: "Pollo con arroz", kcal: 485, proteinas: 42, carb: 45, grasas: 14, fibra: 2, porciones: 1, tipo: "comida", ingredientes: ["150g Pechuga de pollo", "100g Arroz blanco cocido", "10ml Aceite de oliva"], pasos: ["Cocina el pollo a la plancha", "Calienta el arroz", "Sirve juntos"] },
  { nombre: "Huevos revueltos", kcal: 380, proteinas: 20, carb: 28, grasas: 22, fibra: 3, porciones: 1, tipo: "desayuno", ingredientes: ["2 Huevo entero", "1 Toastada pan integral", "10g Mantequilla"], pasos: ["Bate los huevos", "Cocina a fuego medio", "Tosta el pan"] },
  { nombre: "Ensalada de pollo", kcal: 320, proteinas: 35, carb: 12, grasas: 15, fibra: 4, porciones: 1, tipo: "comida", ingredientes: ["150g Pechuga de pollo", "50g Lechuga", "30g Tomate", "15ml Aceite de oliva"], pasos: ["Cocina y corta el pollo", "Lava las verduras", "Mezcla y aliña"] },
  { nombre: "Avena con frutas", kcal: 290, proteinas: 8, carb: 48, grasas: 6, fibra: 7, porciones: 1, tipo: "desayuno", ingredientes: ["40g Avena cocida", "100ml Leche descremada", "50g Platano"], pasos: ["Cocina la avena", "Añade las frutas", "Sirve frio o caliente"] },
  { nombre: "Filete de salmon", kcal: 420, proteinas: 38, carb: 15, grasas: 25, fibra: 5, porciones: 1, tipo: "comida", ingredientes: ["150g Salmon", "80g Brocoli", "15ml Aceite de oliva"], pasos: ["Sazona el salmon", "Cocina a la plancha", "Cocina las verduras al vapor"] },
  { nombre: "Tacos de pollo", kcal: 380, proteinas: 28, carb: 35, grasas: 14, fibra: 4, porciones: 2, tipo: "comida", ingredientes: ["200g Pechuga de pollo", "2 Tortilla de maiz", "30g Queso cottage"], pasos: ["Cocina el pollo", "Calienta las tortillas", "Arma los tacos"] },
  { nombre: "Yogur con almendras", kcal: 280, proteinas: 12, carb: 28, grasas: 14, fibra: 3, porciones: 1, tipo: "colacion_manana", ingredientes: ["150g Yogur natural", "20g Almendras", "10g Miel"], pasos: ["Vierte el yogurt", "Añade las almendras", "Rocía la miel"] },
  { nombre: "Batido de proteina", kcal: 250, proteinas: 30, carb: 15, fibras: 5, fibra: 2, porciones: 1, tipo: "colacion_tarde", ingredientes: ["200ml Leche descremada", "1 scoop proteina", "50g Platano"], pasos: ["Vierte la leche", "Añade la proteina y platano", "Licua hasta que quede suave"] }
];

function buscarAlimentos(termino) {
  if (!termino || termino.length < 2) return [];
  const term = termino.toLowerCase().trim();
  return alimentosBase.filter(a => a.nombre.toLowerCase().includes(term) || a.categoria.toLowerCase().includes(term)).slice(0, 10);
}

function buscarRecetas(termino) {
  if (!termino || termino.length < 2) return [];
  const term = termino.toLowerCase().trim();
  return recetasBase.filter(r => r.nombre.toLowerCase().includes(term)).slice(0, 5);
}

function buscarTodo(termino) {
  const alimentos = buscarAlimentos(termino).map(a => ({ ...a, tipo: 'alimento' }));
  const recetas = buscarRecetas(termino).map(r => ({ ...r, tipo: 'receta' }));
  return { alimentos, recetas };
}

function obtenerAlimentoPorNombre(nombre) {
  return alimentosBase.find(a => a.nombre.toLowerCase() === nombre.toLowerCase());
}

function obtenerRecetaPorNombre(nombre) {
  return recetasBase.find(r => r.nombre.toLowerCase() === nombre.toLowerCase());
}

/* =========================================
   FITBALANCE - DIETA
   Corregido y sincronizado con sistema global por usuario
========================================= */

const STORAGE = {
  usuarios: "fitbalance_usuarios_config",
  sesionActiva: "sesionActiva",
  correoUsuario: "correoUsuario",
  proveedorLogin: "proveedorLogin",
  modoGlobal: "modoAparienciaFitBalance"
};

/* =========================================
   VALIDAR SESIÓN
========================================= */
function obtenerCorreoSesion() {
  return (localStorage.getItem(STORAGE.correoUsuario) || "").trim().toLowerCase();
}

function haySesionValida() {
  return localStorage.getItem(STORAGE.sesionActiva) === "si" && obtenerCorreoSesion() !== "";
}

if (!haySesionValida()) {
  window.location.href = "../login/index.html";
}

/* =========================================
   ELEMENTOS DEL DOM
========================================= */
const textoNombreUsuario = document.getElementById("textoNombreUsuario");
const textoUsuarioActivo = document.getElementById("textoUsuarioActivo");
const botonCerrarSesion = document.getElementById("botonCerrarSesion");

const formularioComida = document.getElementById("formularioComida");
const tipoComida = document.getElementById("tipoComida");
const diaSemanaComida = document.getElementById("diaSemanaComida");
const horaComida = document.getElementById("horaComida");
const nombreComida = document.getElementById("nombreComida");
const caloriasComida = document.getElementById("caloriasComida");
const categoriaComida = document.getElementById("categoriaComida");
const proteinasComida = document.getElementById("proteinasComida");
const carbohidratosComida = document.getElementById("carbohidratosComida");
const grasasComida = document.getElementById("grasasComida");
const fibraComida = document.getElementById("fibraComida");
const cantidadComida = document.getElementById("cantidadComida");
const unidadComida = document.getElementById("unidadComida");
const mensajeFormularioComida = document.getElementById("mensajeFormularioComida");
const botonGuardarComida = document.getElementById("botonGuardarComida");
const botonCancelarEdicionComida = document.getElementById("botonCancelarEdicionComida");

const cuerpoTablaComidas = document.getElementById("cuerpoTablaComidas");
const botonLimpiarRegistro = document.getElementById("botonLimpiarRegistro");
const botonFiltrarHoy = document.getElementById("botonFiltrarHoy");
const contenedorAlimentosSeguimiento = document.getElementById("contenedorAlimentosSeguimiento");

const textoCaloriasConsumidas = document.getElementById("textoCaloriasConsumidas");
const textoProteinasConsumidas = document.getElementById("textoProteinasConsumidas");
const textoMetaCalorias = document.getElementById("textoMetaCalorias");
const textoMetaProteinas = document.getElementById("textoMetaProteinas");
const textoCarbohidratosMacro = document.getElementById("textoCarbohidratosMacro");
const textoProteinasMacro = document.getElementById("textoProteinasMacro");
const textoGrasasMacro = document.getElementById("textoGrasasMacro");
const textoFibraMacro = document.getElementById("textoFibraMacro");
const barraCarbohidratos = document.getElementById("barraCarbohidratos");
const barraProteinas = document.getElementById("barraProteinas");
const barraGrasas = document.getElementById("barraGrasas");
const barraFibra = document.getElementById("barraFibra");
const textoDiaResumen = document.getElementById("textoDiaResumen");
const resumenFaltanteHoy = document.getElementById("resumenFaltanteHoy");

const listaLunes = document.getElementById("listaLunes");
const listaMartes = document.getElementById("listaMartes");
const listaMiercoles = document.getElementById("listaMiercoles");
const listaJueves = document.getElementById("listaJueves");
const listaViernes = document.getElementById("listaViernes");
const listaSabado = document.getElementById("listaSabado");
const listaDomingo = document.getElementById("listaDomingo");

const botonGenerarDietaPerfil = document.getElementById("botonGenerarDietaPerfil");
const botonImprimirRegistro = document.getElementById("botonImprimirRegistro");
const botonCompartirRegistro = document.getElementById("botonCompartirRegistro");
const mensajeGeneracionDieta = document.getElementById("mensajeGeneracionDieta");

/* PERFIL NUTRICIONAL */
const botonEditarPerfilNutricional = document.getElementById("botonEditarPerfilNutricional");
const botonCancelarEdicionPerfil = document.getElementById("botonCancelarEdicionPerfil");
const vistaPerfilNutricional = document.getElementById("vistaPerfilNutricional");
const formularioPerfilNutricional = document.getElementById("formularioPerfilNutricional");
const mensajePerfilNutricional = document.getElementById("mensajePerfilNutricional");

const textoEdadPerfil = document.getElementById("textoEdadPerfil");
const textoAlturaPerfil = document.getElementById("textoAlturaPerfil");
const textoSexoPerfil = document.getElementById("textoSexoPerfil");
const textoPesoInicialPerfil = document.getElementById("textoPesoInicialPerfil");
const textoPesoActualPerfil = document.getElementById("textoPesoActualPerfil");
const textoPesoObjetivoPerfil = document.getElementById("textoPesoObjetivoPerfil");
const textoObjetivoPerfil = document.getElementById("textoObjetivoPerfil");
const textoActividadPerfil = document.getElementById("textoActividadPerfil");

const inputEdadPerfil = document.getElementById("inputEdadPerfil");
const inputAlturaPerfil = document.getElementById("inputAlturaPerfil");
const inputSexoPerfil = document.getElementById("inputSexoPerfil");
const inputPesoInicialPerfil = document.getElementById("inputPesoInicialPerfil");
const inputPesoActualPerfil = document.getElementById("inputPesoActualPerfil");
const inputPesoObjetivoPerfil = document.getElementById("inputPesoObjetivoPerfil");
const inputObjetivoPerfil = document.getElementById("inputObjetivoPerfil");
const inputActividadPerfil = document.getElementById("inputActividadPerfil");

const arcoProgresoObjetivo = document.getElementById("arcoProgresoObjetivo");
const textoPorcentajeObjetivo = document.getElementById("textoPorcentajeObjetivo");
const textoResumenObjetivo = document.getElementById("textoResumenObjetivo");
const textoExtremoIzquierdoMedidor = document.getElementById("textoExtremoIzquierdoMedidor");
const textoExtremoDerechoMedidor = document.getElementById("textoExtremoDerechoMedidor");

/* =========================================
   DATOS GLOBALES
========================================= */
const correoUsuarioActual = obtenerCorreoSesion();
let usuariosConfig = obtenerUsuariosConfig();
let usuarioActual = null;

let soloMostrarHoy = true;
let comidas = [];
let idComidaEnEdicion = null;

let perfilNutricional = null;

/* =========================================
   STORAGE / USUARIO
========================================= */
function parseJSONSeguro(valor, porDefecto) {
  try {
    return valor ? JSON.parse(valor) : porDefecto;
  } catch (error) {
    return porDefecto;
  }
}

function obtenerUsuariosConfig() {
  return parseJSONSeguro(localStorage.getItem(STORAGE.usuarios), {});
}

function guardarUsuariosConfig(config) {
  localStorage.setItem(STORAGE.usuarios, JSON.stringify(config));
}

function capitalizarTexto(texto) {
  if (!texto) return "Usuario";
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function obtenerNombreInicialDesdeCorreo(correo) {
  if (!correo) return "Usuario";
  const base = correo.split("@")[0] || "usuario";
  return capitalizarTexto(base.replace(/[._-]+/g, " "));
}

function crearPerfilNutricionalBase() {
  return {
    edad: "",
    altura: "",
    sexo: "",
    pesoInicial: "",
    pesoActual: "",
    pesoObjetivo: "",
    objetivo: "",
    actividad: "Sedentario"
  };
}

function crearModuloDietaBase() {
  return {
    perfil: crearPerfilNutricionalBase(),
    comidas: []
  };
}

function crearUsuarioBase(correo) {
  return {
    onboardingCompletado: false,
    objetivo: "todo",
    modo: "manual",
    edad: "",
    sexo: "",
    altura: "",
    peso: "",
    actividad: "moderado",
    destinoPreferido: "../ia/index.html",
    configInicial: {
      objetivo: "todo",
      modo: "manual",
      edad: "",
      sexo: "",
      altura: "",
      peso: "",
      actividad: "moderado"
    },
    ajustes: {
      cuenta: {
        nombre: obtenerNombreInicialDesdeCorreo(correo),
        correo,
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
      dieta: crearModuloDietaBase()
    }
  };
}

function normalizarUsuario(correo, usuario) {
  const base = crearUsuarioBase(correo);
  const u = usuario || {};
  const moduloBase = crearModuloDietaBase();
  const moduloGuardado = u.modulos?.dieta || {};

  const edadGlobal = u.edad ?? u.configInicial?.edad ?? base.edad ?? moduloBase.perfil.edad;
  const alturaGlobal = u.altura ?? u.configInicial?.altura ?? base.altura ?? moduloBase.perfil.altura;
  const sexoGlobal = u.sexo ?? u.configInicial?.sexo ?? base.sexo ?? moduloBase.perfil.sexo;
  const pesoGlobal = u.peso ?? u.configInicial?.peso ?? base.peso ?? moduloBase.perfil.pesoActual;

  return {
    ...base,
    ...u,
    ajustes: {
      ...base.ajustes,
      ...(u.ajustes || {}),
      cuenta: {
        ...base.ajustes.cuenta,
        ...(u.ajustes?.cuenta || {}),
        correo: u.ajustes?.cuenta?.correo || correo
      },
      notificaciones: {
        ...base.ajustes.notificaciones,
        ...(u.ajustes?.notificaciones || {})
      },
      apariencia: {
        ...base.ajustes.apariencia,
        ...(u.ajustes?.apariencia || {})
      },
      privacidad: {
        ...base.ajustes.privacidad,
        ...(u.ajustes?.privacidad || {})
      },
      suscripcion: {
        ...base.ajustes.suscripcion,
        ...(u.ajustes?.suscripcion || {})
      },
      app: {
        ...base.ajustes.app,
        ...(u.ajustes?.app || {})
      }
    },
    modulos: {
      ...base.modulos,
      ...(u.modulos || {}),
      dieta: {
        ...moduloBase,
        ...moduloGuardado,
        perfil: {
          ...moduloBase.perfil,
          ...(moduloGuardado.perfil || {}),
          edad: moduloGuardado.perfil?.edad ?? edadGlobal ?? moduloBase.perfil.edad,
          altura: moduloGuardado.perfil?.altura ?? alturaGlobal ?? moduloBase.perfil.altura,
          sexo: moduloGuardado.perfil?.sexo ?? sexoGlobal ?? moduloBase.perfil.sexo,
          pesoInicial: moduloGuardado.perfil?.pesoInicial ?? pesoGlobal ?? moduloBase.perfil.pesoInicial,
          pesoActual: moduloGuardado.perfil?.pesoActual ?? pesoGlobal ?? moduloBase.perfil.pesoActual
        },
        comidas: Array.isArray(moduloGuardado.comidas) ? moduloGuardado.comidas : []
      }
    }
  };
}

function aplicarTema(tema) {
  document.documentElement.classList.remove("modo-oscuro", "modo-neon");
  document.body.classList.remove("modo-oscuro", "modo-neon");

  if (tema === "oscuro") {
    document.documentElement.classList.add("modo-oscuro");
    document.body.classList.add("modo-oscuro");
  } else if (tema === "neon") {
    document.documentElement.classList.add("modo-neon");
    document.body.classList.add("modo-neon");
  }

  localStorage.setItem(STORAGE.modoGlobal, tema);
}

function actualizarTarjetaUsuario() {
  if (textoNombreUsuario) {
    textoNombreUsuario.textContent = usuarioActual?.ajustes?.cuenta?.nombre || "Usuario";
  }

  if (textoUsuarioActivo) {
    textoUsuarioActivo.textContent = usuarioActual?.ajustes?.cuenta?.correo || correoUsuarioActual;
  }

  actualizarAvatarSidebar();
  actualizarEtiquetaPlanSidebar();
  actualizarPanelMas();
}

function persistirUsuarioActual() {
  if (!usuarioActual) return;

  usuarioActual.modulos = usuarioActual.modulos || {};
  usuarioActual.modulos.dieta = {
    perfil: { ...perfilNutricional },
    comidas: [...comidas]
  };

  usuariosConfig = obtenerUsuariosConfig();
  const usuarioAnterior = usuariosConfig[correoUsuarioActual] || {};

  usuarioActual.modulos = {
    ...(usuarioAnterior.modulos || {}),
    ...(usuarioActual.modulos || {})
  };

  usuariosConfig[correoUsuarioActual] = usuarioActual;
  guardarUsuariosConfig(usuariosConfig);
}

function migrarDatosViejosSiExisten() {
  const perfilViejo = parseJSONSeguro(localStorage.getItem("perfilNutricionalDieta"), null);
  const comidasViejas = parseJSONSeguro(localStorage.getItem("comidasDieta"), null);

  const moduloActual = usuarioActual.modulos?.dieta || crearModuloDietaBase();
  const noHayPerfilModulo = !moduloActual.perfil || Object.keys(moduloActual.perfil).length === 0;
  const noHayComidasModulo = !Array.isArray(moduloActual.comidas) || moduloActual.comidas.length === 0;

  let huboMigracion = false;

  if (perfilViejo && noHayPerfilModulo) {
    usuarioActual.modulos.dieta.perfil = {
      ...crearPerfilNutricionalBase(),
      ...perfilViejo
    };
    huboMigracion = true;
  }

  if (Array.isArray(comidasViejas) && noHayComidasModulo) {
    usuarioActual.modulos.dieta.comidas = comidasViejas;
    huboMigracion = true;
  }

  if (huboMigracion) {
    localStorage.removeItem("perfilNutricionalDieta");
    localStorage.removeItem("comidasDieta");
  }
}

function sincronizarPerfilNutricionalConGlobal() {
  if (!usuarioActual || !perfilNutricional) return;

  if (usuarioActual.edad !== "" && usuarioActual.edad !== null && usuarioActual.edad !== undefined) {
    perfilNutricional.edad = Number(usuarioActual.edad) || perfilNutricional.edad;
  } else if (usuarioActual.configInicial?.edad) {
    perfilNutricional.edad = Number(usuarioActual.configInicial.edad) || perfilNutricional.edad;
  }

  if (usuarioActual.altura !== "" && usuarioActual.altura !== null && usuarioActual.altura !== undefined) {
    perfilNutricional.altura = Number(usuarioActual.altura) || perfilNutricional.altura;
  } else if (usuarioActual.configInicial?.altura) {
    perfilNutricional.altura = Number(usuarioActual.configInicial.altura) || perfilNutricional.altura;
  }

  if (usuarioActual.sexo) {
    perfilNutricional.sexo =
      String(usuarioActual.sexo).toLowerCase() === "masculino"
        ? "Hombre"
        : String(usuarioActual.sexo).toLowerCase() === "femenino"
          ? "Mujer"
          : usuarioActual.sexo;
  } else if (usuarioActual.configInicial?.sexo) {
    perfilNutricional.sexo =
      String(usuarioActual.configInicial.sexo).toLowerCase() === "masculino"
        ? "Hombre"
        : String(usuarioActual.configInicial.sexo).toLowerCase() === "femenino"
          ? "Mujer"
          : usuarioActual.configInicial.sexo;
  }

  if (usuarioActual.peso !== "" && usuarioActual.peso !== null && usuarioActual.peso !== undefined) {
    const pesoNumero = Number(usuarioActual.peso);
    if (!Number.isNaN(pesoNumero) && pesoNumero > 0) {
      if (perfilNutricional.pesoInicial === "" || Number.isNaN(Number(perfilNutricional.pesoInicial))) {
        perfilNutricional.pesoInicial = pesoNumero;
      }
      if (perfilNutricional.pesoActual === "" || Number.isNaN(Number(perfilNutricional.pesoActual))) {
        perfilNutricional.pesoActual = pesoNumero;
      }
    }
  } else if (usuarioActual.configInicial?.peso) {
    const pesoNumero = Number(usuarioActual.configInicial.peso);
    if (!Number.isNaN(pesoNumero) && pesoNumero > 0) {
      if (perfilNutricional.pesoInicial === "" || Number.isNaN(Number(perfilNutricional.pesoInicial))) {
        perfilNutricional.pesoInicial = pesoNumero;
      }
      if (perfilNutricional.pesoActual === "" || Number.isNaN(Number(perfilNutricional.pesoActual))) {
        perfilNutricional.pesoActual = pesoNumero;
      }
    }
  }

  // ✅ Sincronizar nivel / actividad general con dieta
  if (usuarioActual.actividad) {
    perfilNutricional.actividad = normalizarActividad(usuarioActual.actividad);
  } else if (usuarioActual.configInicial?.actividad) {
    perfilNutricional.actividad = normalizarActividad(usuarioActual.configInicial.actividad);
  } else if (!perfilNutricional.actividad) {
    perfilNutricional.actividad = "Sedentario";
  }
}

function recargarEstadoUsuarioDesdeStorage() {
  usuariosConfig = obtenerUsuariosConfig();

  if (!usuariosConfig[correoUsuarioActual]) return;

  usuarioActual = normalizarUsuario(correoUsuarioActual, usuariosConfig[correoUsuarioActual]);
  cargarPerfilNutricional();
  cargarComidas();

  aplicarTema(
    usuarioActual?.ajustes?.apariencia?.tema ||
      localStorage.getItem(STORAGE.modoGlobal) ||
      "neon"
  );

  actualizarAvatarSidebar();
  actualizarNombreYCorreoSidebar();
  actualizarEtiquetaPlanSidebar();

  renderizarTodo();
  mostrarVistaNormalPerfil();
  activarModoAgregarComida();
}

function actualizarAvatarSidebar() {
  const img = document.getElementById("imagenAvatarSidebar");
  const contenedor = document.querySelector(".tarjeta-perfil .contenedor-avatar");
  if (!img || !contenedor) return;
  const placeholder = contenedor.querySelector(".avatar-relleno");
  if (!placeholder) return;
  const avatar = usuarioActual?.ajustes?.cuenta?.avatar;
  if (avatar) {
    img.src = avatar;
    img.classList.remove("oculto");
    placeholder.classList.add("oculto");
  } else {
    img.classList.add("oculto");
    placeholder.classList.remove("oculto");
  }
}

function actualizarNombreYCorreoSidebar() {
  const nombre = document.getElementById("textoNombreUsuario");
  const correo = document.getElementById("textoUsuarioActivo") || document.getElementById("textoUsuarioActivoLateral");
  if (nombre) nombre.textContent = usuarioActual?.ajustes?.cuenta?.nombre || "Usuario";
  if (correo) correo.textContent = usuarioActual?.ajustes?.cuenta?.correo || "usuario@ejemplo.com";
}

function actualizarEtiquetaPlanSidebar() {
  const etiqueta = document.getElementById("etiquetaPlanUsuario");
  if (!etiqueta) return;
  const esPremium = usuarioActual?.ajustes?.suscripcion?.plan === "premium-demo";
  etiqueta.textContent = esPremium ? "Plan Premium" : "Plan Gratis";
}

function actualizarPanelMas() {
  const nombre = usuarioActual?.ajustes?.cuenta?.nombre || "Usuario";
  const correo = usuarioActual?.ajustes?.cuenta?.correo || correoUsuarioActual || "Sin sesión";
  const esPremium = usuarioActual?.ajustes?.suscripcion?.plan === "premium-demo";
  const avatar = usuarioActual?.ajustes?.cuenta?.avatar;

  const nombrePanel = document.getElementById("nombrePanelMas");
  const correoPanel = document.getElementById("correoPanelMas");
  const planPanel = document.getElementById("planPanelMas");
  const avatarPanel = document.getElementById("avatarPanelMas");

  if (nombrePanel) nombrePanel.textContent = nombre;
  if (correoPanel) correoPanel.textContent = correo;
  if (planPanel) planPanel.textContent = esPremium ? "Plan Premium" : "Plan Gratis";

  if (avatarPanel) {
    if (avatar) {
      avatarPanel.textContent = "";
      avatarPanel.style.backgroundImage = `url("${avatar}")`;
      avatarPanel.classList.add("con-avatar");
    } else {
      avatarPanel.style.backgroundImage = "";
      avatarPanel.textContent = String(nombre).trim().charAt(0).toUpperCase() || "F";
      avatarPanel.classList.remove("con-avatar");
    }
  }
}

window.addEventListener("storage", function (evento) {
  if (evento.key === STORAGE.usuarios || evento.key === STORAGE.modoGlobal) {
    recargarEstadoUsuarioDesdeStorage();
  }
});

window.addEventListener("focus", function () {
  recargarEstadoUsuarioDesdeStorage();
});

/* =========================================
   UTILIDADES GENERALES
========================================= */
function obtenerHoraActual() {
  const fecha = new Date();
  let horas = fecha.getHours();
  let minutos = fecha.getMinutes();

  if (horas < 10) horas = "0" + horas;
  if (minutos < 10) minutos = "0" + minutos;

  return `${horas}:${minutos}`;
}

function obtenerDiaActualClave() {
  const indiceDia = new Date().getDay();

  const mapa = {
    0: "domingo",
    1: "lunes",
    2: "martes",
    3: "miercoles",
    4: "jueves",
    5: "viernes",
    6: "sabado"
  };

  return mapa[indiceDia];
}

function convertirTipoATexto(tipo) {
  const nombres = {
    desayuno: "Desayuno",
    colacion_manana: "Media mañana",
    comida: "Comida",
    colacion_tarde: "Merienda",
    cena: "Cena",
    colacion_noche: "Snack noche"
  };

  return nombres[tipo] || tipo;
}

function convertirDiaATexto(dia) {
  const dias = {
    lunes: "Lunes",
    martes: "Martes",
    miercoles: "Miércoles",
    jueves: "Jueves",
    viernes: "Viernes",
    sabado: "Sábado",
    domingo: "Domingo"
  };

  return dias[dia] || dia;
}

function calcularPorcentaje(valor, meta) {
  if (meta <= 0) return 0;
  return Math.max(0, Math.min(100, (Number(valor) / Number(meta)) * 100));
}

function crearTextoVacio(texto) {
  const parrafo = document.createElement("p");
  parrafo.className = "texto-vacio-semanal";
  parrafo.textContent = texto;
  return parrafo;
}

function ordenarComidas(lista) {
  const ordenDias = {
    lunes: 1,
    martes: 2,
    miercoles: 3,
    jueves: 4,
    viernes: 5,
    sabado: 6,
    domingo: 7
  };

  const ordenTipo = {
    desayuno: 1,
    colacion_manana: 2,
    comida: 3,
    colacion_tarde: 4,
    cena: 5,
    colacion_noche: 6
  };

  return [...lista].sort((a, b) => {
    const diaA = ordenDias[a.diaSemana] || 99;
    const diaB = ordenDias[b.diaSemana] || 99;

    if (diaA !== diaB) {
      return diaA - diaB;
    }

    const tipoA = ordenTipo[a.tipo] || 99;
    const tipoB = ordenTipo[b.tipo] || 99;

    if (tipoA !== tipoB) {
      return tipoA - tipoB;
    }

    return String(a.hora || "").localeCompare(String(b.hora || ""));
  });
}

function mostrarMensajeGeneracion(texto, color = "#64748b", tiempo = 2500) {
  if (!mensajeGeneracionDieta) return;

  mensajeGeneracionDieta.textContent = texto;
  mensajeGeneracionDieta.style.color = color;

  setTimeout(() => {
    if (mensajeGeneracionDieta.textContent === texto) {
      mensajeGeneracionDieta.textContent = "";
    }
  }, tiempo);
}

function mostrarMensajePerfil(texto, color = "#64748b", tiempo = 2200) {
  if (!mensajePerfilNutricional) return;

  mensajePerfilNutricional.textContent = texto;
  mensajePerfilNutricional.style.color = color;

  setTimeout(() => {
    if (mensajePerfilNutricional.textContent === texto) {
      mensajePerfilNutricional.textContent = "";
    }
  }, tiempo);
}

function mostrarMensajeFormularioComida(texto, color = "#64748b", tiempo = 2200) {
  if (!mensajeFormularioComida) return;

  mensajeFormularioComida.textContent = texto;
  mensajeFormularioComida.style.color = color;

  setTimeout(() => {
    if (mensajeFormularioComida.textContent === texto) {
      mensajeFormularioComida.textContent = "";
    }
  }, tiempo);
}

function redondearNumero(valor) {
  return Math.max(0, Math.round(valor));
}

function normalizarActividad(valor) {
  const texto = String(valor || "").trim().toLowerCase();

  const mapa = {
    sedentario: "Sedentario",
    ligero: "Ligero",
    moderado: "Moderado",
    alto: "Alto"
  };

  return mapa[texto] || "Sedentario";
}

function formatearNumero(valor, decimales = 1) {
  const numero = Number(valor);

  if (Number.isNaN(numero)) return "0";

  return numero.toFixed(decimales).replace(/\.0$/, "");
}

function escaparHTML(texto) {
  return String(texto || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function generarIdUnico() {
  if (window.crypto && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return "id-" + Date.now() + "-" + Math.floor(Math.random() * 100000);
}

function normalizarComida(comida) {
  return {
    id: comida.id || generarIdUnico(),
    diaSemana: comida.diaSemana || "lunes",
    tipo: comida.tipo || "desayuno",
    nombre: comida.nombre || "Sin nombre",
    categoria: comida.categoria || "Proteína",
    cantidad: Number(comida.cantidad) || 0,
    unidad: comida.unidad || "Porción",
    calorias: Number(comida.calorias) || 0,
    proteinas: Number(comida.proteinas) || 0,
    carbohidratos: Number(comida.carbohidratos) || 0,
    grasas: Number(comida.grasas) || 0,
    fibra: Number(comida.fibra) || 0,
    hora: comida.hora || "00:00",
    completada: Boolean(comida.completada)
  };
}

/* =========================================
   META BASE SEGÚN PERFIL
========================================= */
function calcularMetasBaseSegunPerfil() {
  const perfil = perfilNutricional || {};

  const edad = Number(perfil.edad) || 24;
  const altura = Number(perfil.altura) || 170;
  const peso = Number(perfil.pesoActual || perfil.pesoInicial) || 70;
  const sexo = perfil.sexo || "Hombre";
  const objetivo = perfil.objetivo || "Mantenimiento";
  const actividad = normalizarActividad(perfil.actividad);

  const factoresActividad = {
    Sedentario: 1.2,
    Ligero: 1.37,
    Moderado: 1.55,
    Alto: 1.7
  };

  let caloriasBase =
    sexo === "Mujer"
      ? 10 * peso + 6.25 * altura - 5 * edad - 161
      : 10 * peso + 6.25 * altura - 5 * edad + 5;

  caloriasBase *= factoresActividad[actividad] || 1.2;

  if (objetivo === "Pérdida de peso") {
    caloriasBase -= 400;
  } else if (objetivo === "Ganancia muscular") {
    caloriasBase += 300;
  }

  caloriasBase = Math.round(Math.max(caloriasBase, 1200));

  let proteinas = 0;
  let grasas = 0;

  if (objetivo === "Pérdida de peso") {
    proteinas = peso * 2.2;
    grasas = peso * 0.8;
  } else if (objetivo === "Ganancia muscular") {
    proteinas = peso * 2.0;
    grasas = peso * 0.9;
  } else {
    proteinas = peso * 1.8;
    grasas = peso * 0.9;
  }

  grasas = Math.max(grasas, peso * 0.6);

  proteinas = Math.round(proteinas);
  grasas = Math.round(grasas);

  const caloriasProteina = proteinas * 4;
  const caloriasGrasa = grasas * 9;

  const caloriasRestantes = Math.max(
    caloriasBase - caloriasProteina - caloriasGrasa,
    0
  );

  const carbohidratos = Math.round(caloriasRestantes / 4);
  const fibra = Math.round((caloriasBase / 1000) * 12);

  return {
    calorias: caloriasBase,
    proteinas,
    carbohidratos,
    grasas,
    fibra
  };
}

/* =========================================
   PLANTILLAS DE DIETA SEGÚN OBJETIVO
========================================= */
const horasPorTipo = {
  desayuno: "07:30",
  colacion_manana: "10:30",
  comida: "14:00",
  colacion_tarde: "17:30",
  cena: "20:30",
  colacion_noche: "22:00"
};

const distribucionComidas = {
  desayuno: 0.25,
  colacion_manana: 0.10,
  comida: 0.32,
  colacion_tarde: 0.08,
  cena: 0.20,
  colacion_noche: 0.05
};

const catalogoDieta = {
  "Pérdida de peso": {
    desayuno: [
      { nombre: "Huevos con avena y fruta", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Yogur griego con frutos rojos y avena", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Omelette con espinaca y tostadas integrales", categoria: "Proteína", cantidad: 1, unidad: "Porción" }
    ],
    colacion_manana: [
      { nombre: "Manzana con nueces", categoria: "Fruta", cantidad: 1, unidad: "Porción" },
      { nombre: "Yogur natural con chía", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Pepino con limón y almendras", categoria: "Verdura", cantidad: 1, unidad: "Porción" }
    ],
    comida: [
      { nombre: "Pechuga con arroz y verduras", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Carne magra con papa y ensalada", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Pescado con quinoa y verduras", categoria: "Proteína", cantidad: 1, unidad: "Porción" }
    ],
    colacion_tarde: [
      { nombre: "Queso cottage con fruta", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Palitos de zanahoria con hummus", categoria: "Verdura", cantidad: 1, unidad: "Porción" },
      { nombre: "Atún con galletas integrales", categoria: "Proteína", cantidad: 1, unidad: "Porción" }
    ],
    cena: [
      { nombre: "Salmón con ensalada", categoria: "Grasa saludable", cantidad: 1, unidad: "Porción" },
      { nombre: "Pollo con verduras salteadas", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Tostadas de atún con aguacate", categoria: "Proteína", cantidad: 1, unidad: "Porción" }
    ],
    colacion_noche: [
      { nombre: "Leche descremada", categoria: "Bebida", cantidad: 1, unidad: "Porción" },
      { nombre: "Yogur ligero", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Gelatina light con nuez", categoria: "Bebida", cantidad: 1, unidad: "Porción" }
    ]
  },

  "Ganancia muscular": {
    desayuno: [
      { nombre: "Avena con plátano, crema de cacahuate y huevos", categoria: "Carbohidrato", cantidad: 1, unidad: "Porción" },
      { nombre: "Hot cakes de avena con yogur y fruta", categoria: "Carbohidrato", cantidad: 1, unidad: "Porción" },
      { nombre: "Bagel integral con huevo y queso", categoria: "Carbohidrato", cantidad: 1, unidad: "Porción" }
    ],
    colacion_manana: [
      { nombre: "Sándwich de pavo", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Yogur con granola", categoria: "Carbohidrato", cantidad: 1, unidad: "Porción" },
      { nombre: "Plátano con mantequilla de cacahuate", categoria: "Carbohidrato", cantidad: 1, unidad: "Porción" }
    ],
    comida: [
      { nombre: "Pollo con pasta y verduras", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Carne con arroz y frijoles", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Pescado con papa y ensalada", categoria: "Proteína", cantidad: 1, unidad: "Porción" }
    ],
    colacion_tarde: [
      { nombre: "Batido de leche, avena y fruta", categoria: "Bebida", cantidad: 1, unidad: "Porción" },
      { nombre: "Tortitas de arroz con atún", categoria: "Carbohidrato", cantidad: 1, unidad: "Porción" },
      { nombre: "Queso cottage con miel y fruta", categoria: "Proteína", cantidad: 1, unidad: "Porción" }
    ],
    cena: [
      { nombre: "Tacos de carne con guacamole", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Pechuga con quinoa y verduras", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Salmón con arroz", categoria: "Grasa saludable", cantidad: 1, unidad: "Porción" }
    ],
    colacion_noche: [
      { nombre: "Yogur griego con nueces", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Leche con avena", categoria: "Bebida", cantidad: 1, unidad: "Porción" },
      { nombre: "Requesón con fruta", categoria: "Proteína", cantidad: 1, unidad: "Porción" }
    ]
  },

  "Mantenimiento": {
    desayuno: [
      { nombre: "Avena con fruta y yogur", categoria: "Carbohidrato", cantidad: 1, unidad: "Porción" },
      { nombre: "Huevos con pan integral", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Yogur con granola y fruta", categoria: "Proteína", cantidad: 1, unidad: "Porción" }
    ],
    colacion_manana: [
      { nombre: "Fruta con semillas", categoria: "Fruta", cantidad: 1, unidad: "Porción" },
      { nombre: "Yogur natural", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Nueces y manzana", categoria: "Grasa saludable", cantidad: 1, unidad: "Porción" }
    ],
    comida: [
      { nombre: "Pollo con arroz y ensalada", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Carne con verduras y tortilla", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Pescado con quinoa", categoria: "Proteína", cantidad: 1, unidad: "Porción" }
    ],
    colacion_tarde: [
      { nombre: "Palitos de verdura con hummus", categoria: "Verdura", cantidad: 1, unidad: "Porción" },
      { nombre: "Queso panela con galletas", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Fruta con yogur", categoria: "Fruta", cantidad: 1, unidad: "Porción" }
    ],
    cena: [
      { nombre: "Tostadas de atún", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Ensalada con pollo", categoria: "Verdura", cantidad: 1, unidad: "Porción" },
      { nombre: "Sándwich integral de pavo", categoria: "Carbohidrato", cantidad: 1, unidad: "Porción" }
    ],
    colacion_noche: [
      { nombre: "Leche o bebida ligera", categoria: "Bebida", cantidad: 1, unidad: "Porción" },
      { nombre: "Yogur pequeño", categoria: "Proteína", cantidad: 1, unidad: "Porción" },
      { nombre: "Fruta ligera", categoria: "Fruta", cantidad: 1, unidad: "Porción" }
    ]
  }
};

/* =========================================
   PERFIL NUTRICIONAL - CARGAR / GUARDAR
========================================= */
function cargarPerfilNutricional() {
  const modulo = usuarioActual?.modulos?.dieta || crearModuloDietaBase();
  perfilNutricional = {
    ...crearPerfilNutricionalBase(),
    ...(modulo.perfil || {})
  };

  sincronizarPerfilNutricionalConGlobal();
}

function guardarPerfilNutricional() {
  if (perfilNutricional.edad !== "") {
    usuarioActual.edad = perfilNutricional.edad;
  }

  if (perfilNutricional.altura !== "") {
    usuarioActual.altura = perfilNutricional.altura;
  }

  if (perfilNutricional.sexo !== "") {
    usuarioActual.sexo =
      perfilNutricional.sexo === "Hombre"
        ? "masculino"
        : perfilNutricional.sexo === "Mujer"
          ? "femenino"
          : perfilNutricional.sexo;
  }

  if (perfilNutricional.pesoActual !== "") {
    usuarioActual.peso = perfilNutricional.pesoActual;
  } else if (perfilNutricional.pesoInicial !== "") {
    usuarioActual.peso = perfilNutricional.pesoInicial;
  }

  // ✅ Guardar también actividad / nivel general
  if (perfilNutricional.actividad !== "") {
    usuarioActual.actividad = String(perfilNutricional.actividad).toLowerCase();
  }

  usuarioActual.configInicial = {
    ...(usuarioActual.configInicial || {}),
    edad: perfilNutricional.edad !== "" ? perfilNutricional.edad : usuarioActual.configInicial?.edad || "",
    altura: perfilNutricional.altura !== "" ? perfilNutricional.altura : usuarioActual.configInicial?.altura || "",
    sexo: perfilNutricional.sexo !== "" ? usuarioActual.sexo : usuarioActual.configInicial?.sexo || "",
    peso:
      perfilNutricional.pesoActual !== ""
        ? perfilNutricional.pesoActual
        : perfilNutricional.pesoInicial !== ""
          ? perfilNutricional.pesoInicial
          : usuarioActual.configInicial?.peso || "",
    actividad:
      perfilNutricional.actividad !== ""
        ? String(perfilNutricional.actividad).toLowerCase()
        : usuarioActual.configInicial?.actividad || ""
  };

  persistirUsuarioActual();
}
/* =========================================
   PERFIL NUTRICIONAL - MOSTRAR / OCULTAR
========================================= */
function mostrarVistaNormalPerfil() {
  if (vistaPerfilNutricional) vistaPerfilNutricional.classList.remove("oculto");
  if (formularioPerfilNutricional) formularioPerfilNutricional.classList.add("oculto");
  if (mensajePerfilNutricional) mensajePerfilNutricional.textContent = "";
}

function mostrarFormularioPerfil() {
  if (vistaPerfilNutricional) vistaPerfilNutricional.classList.add("oculto");
  if (formularioPerfilNutricional) formularioPerfilNutricional.classList.remove("oculto");

  llenarFormularioPerfil();
}

function llenarFormularioPerfil() {
  if (!inputEdadPerfil) return;

  inputEdadPerfil.value = perfilNutricional.edad || "";
  inputAlturaPerfil.value = perfilNutricional.altura || "";
  inputSexoPerfil.value = perfilNutricional.sexo || "Hombre";
  inputPesoInicialPerfil.value = perfilNutricional.pesoInicial || "";
  inputPesoActualPerfil.value = perfilNutricional.pesoActual || "";
  inputPesoObjetivoPerfil.value = perfilNutricional.pesoObjetivo || "";
  inputObjetivoPerfil.value = perfilNutricional.objetivo || "Pérdida de peso";
  inputActividadPerfil.value = normalizarActividad(perfilNutricional.actividad);
}

function validarPerfilNutricional(datos) {
  if (
    datos.edad <= 0 ||
    datos.altura <= 0 ||
    datos.pesoInicial <= 0 ||
    datos.pesoActual <= 0 ||
    datos.pesoObjetivo <= 0
  ) {
    return "Todos los números deben ser mayores a 0.";
  }

  if (datos.sexo.trim() === "") {
    return "Selecciona un sexo.";
  }

  if (datos.objetivo.trim() === "") {
    return "Selecciona un objetivo.";
  }

  if (datos.actividad.trim() === "") {
    return "Selecciona un nivel de actividad.";
  }

  return "";
}

/* =========================================
   PERFIL NUTRICIONAL - RENDER
========================================= */
function renderizarPerfilNutricional() {
  if (!textoEdadPerfil) return;

  textoEdadPerfil.textContent =
    perfilNutricional.edad !== "" ? `${perfilNutricional.edad} años` : "—";

  textoAlturaPerfil.textContent =
    perfilNutricional.altura !== "" ? `${perfilNutricional.altura} cm` : "—";

  textoSexoPerfil.textContent = perfilNutricional.sexo || "—";

  textoPesoInicialPerfil.textContent =
    perfilNutricional.pesoInicial !== "" ? `${formatearNumero(perfilNutricional.pesoInicial)} kg` : "—";

  textoPesoActualPerfil.textContent =
    perfilNutricional.pesoActual !== "" ? `${formatearNumero(perfilNutricional.pesoActual)} kg` : "—";

  textoPesoObjetivoPerfil.textContent =
    perfilNutricional.pesoObjetivo !== "" ? `${formatearNumero(perfilNutricional.pesoObjetivo)} kg` : "—";

  textoObjetivoPerfil.textContent = perfilNutricional.objetivo || "—";
  textoActividadPerfil.textContent = normalizarActividad(perfilNutricional.actividad);

  renderizarMedidorObjetivo();
}

function renderizarMedidorObjetivo() {
  if (!arcoProgresoObjetivo) return;

  const pesoInicial = Number(perfilNutricional.pesoInicial);
  const pesoActual = Number(perfilNutricional.pesoActual);
  const pesoObjetivo = Number(perfilNutricional.pesoObjetivo);

  let avance = 0;
  let metaTotal = 0;
  let porcentaje = 0;

  if (!Number.isNaN(pesoInicial) && !Number.isNaN(pesoActual) && !Number.isNaN(pesoObjetivo)) {
    if (pesoObjetivo < pesoInicial) {
      metaTotal = pesoInicial - pesoObjetivo;
      avance = pesoInicial - pesoActual;
    } else if (pesoObjetivo > pesoInicial) {
      metaTotal = pesoObjetivo - pesoInicial;
      avance = pesoActual - pesoInicial;
    } else {
      metaTotal = 0;
      avance = 0;
      porcentaje = pesoActual === pesoObjetivo ? 100 : 0;
    }

    avance = Math.max(0, avance);

    if (metaTotal > 0) {
      porcentaje = (avance / metaTotal) * 100;
    }

    porcentaje = Math.max(0, Math.min(100, porcentaje));
  }

  if (textoPorcentajeObjetivo) {
    textoPorcentajeObjetivo.innerHTML = `${Math.round(porcentaje)}<span>%</span>`;
  }

  if (textoResumenObjetivo) {
    textoResumenObjetivo.textContent = `${formatearNumero(avance)} / ${formatearNumero(metaTotal)} kg`;
  }

  if (textoExtremoIzquierdoMedidor) {
    textoExtremoIzquierdoMedidor.textContent =
      !Number.isNaN(pesoInicial) && pesoInicial > 0 ? `${formatearNumero(pesoInicial)} kg` : "0 kg";
  }

  if (textoExtremoDerechoMedidor) {
    textoExtremoDerechoMedidor.textContent =
      !Number.isNaN(pesoObjetivo) && pesoObjetivo > 0 ? `${formatearNumero(pesoObjetivo)} kg` : "0 kg";
  }

  const longitudArco = arcoProgresoObjetivo.getTotalLength();
  arcoProgresoObjetivo.style.strokeDasharray = longitudArco;
  arcoProgresoObjetivo.style.strokeDashoffset =
    longitudArco - (longitudArco * porcentaje) / 100;
}

/* =========================================
   PERFIL NUTRICIONAL - EVENTOS
========================================= */
if (botonEditarPerfilNutricional) {
  botonEditarPerfilNutricional.addEventListener("click", function () {
    mostrarFormularioPerfil();
  });
}

if (botonCancelarEdicionPerfil) {
  botonCancelarEdicionPerfil.addEventListener("click", function () {
    mostrarVistaNormalPerfil();
  });
}

if (formularioPerfilNutricional) {
  formularioPerfilNutricional.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nuevosDatos = {
      edad: Number(inputEdadPerfil.value),
      altura: Number(inputAlturaPerfil.value),
      sexo: inputSexoPerfil.value,
      pesoInicial: Number(inputPesoInicialPerfil.value),
      pesoActual: Number(inputPesoActualPerfil.value),
      pesoObjetivo: Number(inputPesoObjetivoPerfil.value),
      objetivo: inputObjetivoPerfil.value,
      actividad: normalizarActividad(inputActividadPerfil.value)
    };

    const error = validarPerfilNutricional(nuevosDatos);

    if (error !== "") {
      mostrarMensajePerfil(error, "#ef4444");
      return;
    }

    perfilNutricional = nuevosDatos;
    guardarPerfilNutricional();
    renderizarPerfilNutricional();
    renderizarResumen();

    mostrarMensajePerfil("Perfil actualizado correctamente.", "#10b981", 1200);

    setTimeout(function () {
      mostrarVistaNormalPerfil();
    }, 500);
  });
}

function iniciarPerfilNutricional() {
  cargarPerfilNutricional();
  renderizarPerfilNutricional();
  mostrarVistaNormalPerfil();
}

/* =========================================
   COMIDAS - CARGAR / GUARDAR
========================================= */
function guardarComidas() {
  persistirUsuarioActual();
}

function cargarComidas() {
  const modulo = usuarioActual?.modulos?.dieta || crearModuloDietaBase();
  const lista = Array.isArray(modulo.comidas) ? modulo.comidas : [];
  comidas = lista.map(normalizarComida);
}

/* =========================================
   FORMULARIO DE COMIDA - APOYO
========================================= */
function activarModoAgregarComida() {
  idComidaEnEdicion = null;

  if (formularioComida) {
    formularioComida.reset();
  }

  if (diaSemanaComida) {
    diaSemanaComida.value = obtenerDiaActualClave();
  }

  if (horaComida) {
    horaComida.value = obtenerHoraActual();
  }

  if (botonGuardarComida) {
    botonGuardarComida.textContent = "Añadir alimento";
  }

  if (botonCancelarEdicionComida) {
    botonCancelarEdicionComida.classList.add("oculto");
  }

  if (mensajeFormularioComida) {
    mensajeFormularioComida.textContent = "";
  }
}

function cargarComidaEnFormulario(id) {
  const comida = comidas.find((item) => String(item.id) === String(id));

  if (!comida) return;

  idComidaEnEdicion = comida.id;

  diaSemanaComida.value = comida.diaSemana;
  tipoComida.value = comida.tipo;
  horaComida.value = comida.hora || obtenerHoraActual();
  nombreComida.value = comida.nombre;
  categoriaComida.value = comida.categoria;
  cantidadComida.value = comida.cantidad;
  unidadComida.value = comida.unidad;
  caloriasComida.value = comida.calorias;
  proteinasComida.value = comida.proteinas;
  carbohidratosComida.value = comida.carbohidratos;
  grasasComida.value = comida.grasas;
  fibraComida.value = comida.fibra;

  if (botonGuardarComida) {
    botonGuardarComida.textContent = "Guardar cambios";
  }

  if (botonCancelarEdicionComida) {
    botonCancelarEdicionComida.classList.remove("oculto");
  }

  mostrarMensajeFormularioComida("Editando alimento seleccionado.", "#6d28d9", 3000);

  irASeccion("secRegistroDieta");

  const tarjetaFormulario = formularioComida?.closest(".tarjeta-registro-comida");
  if (tarjetaFormulario) {
    tarjetaFormulario.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

function duplicarComida(id) {
  const comidaOriginal = comidas.find((item) => String(item.id) === String(id));

  if (!comidaOriginal) return;

  const comidaDuplicada = normalizarComida({
    ...comidaOriginal,
    id: generarIdUnico(),
    completada: false
  });

  comidas.push(comidaDuplicada);
  guardarComidas();
  renderizarTodo();

  mostrarMensajeGeneracion("Comida duplicada correctamente.", "#10b981", 1800);
}

/* =========================================
   GENERAR DIETA SEGÚN PERFIL
========================================= */
function obtenerDiasSemana() {
  return ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
}

function obtenerTiposComidaOrdenados() {
  return ["desayuno", "colacion_manana", "comida", "colacion_tarde", "cena", "colacion_noche"];
}

function obtenerIndiceDia(dia) {
  return obtenerDiasSemana().indexOf(dia);
}

function seleccionarPlantillaComida(objetivo, tipo, indiceDia) {
  const objetivoSeguro = catalogoDieta[objetivo] ? objetivo : "Mantenimiento";
  const lista = catalogoDieta[objetivoSeguro][tipo];
  return lista[indiceDia % lista.length];
}

function calcularMetasDelDiaVariadas(indiceDia) {
  const metasBase = calcularMetasBaseSegunPerfil();

  const factorPorDia = [0.98, 1.00, 1.02, 1.00, 1.03, 0.97, 0.95];
  const factor = factorPorDia[indiceDia] || 1;

  return {
    calorias: redondearNumero(metasBase.calorias * factor),
    proteinas: redondearNumero(metasBase.proteinas * factor),
    carbohidratos: redondearNumero(metasBase.carbohidratos * factor),
    grasas: redondearNumero(metasBase.grasas * factor),
    fibra: redondearNumero(metasBase.fibra * factor)
  };
}

function construirComidasDeUnDia(diaSemana, indiceDia) {
  const objetivo = perfilNutricional.objetivo || "Mantenimiento";
  const metasDia = calcularMetasDelDiaVariadas(indiceDia);
  const tipos = obtenerTiposComidaOrdenados();

  let acumuladoCalorias = 0;
  let acumuladoProteinas = 0;
  let acumuladoCarbohidratos = 0;
  let acumuladoGrasas = 0;
  let acumuladoFibra = 0;

  const comidasDia = [];

  tipos.forEach((tipo, indiceTipo) => {
    const plantilla = seleccionarPlantillaComida(objetivo, tipo, indiceDia + indiceTipo);
    const esUltima = indiceTipo === tipos.length - 1;
    const proporcion = distribucionComidas[tipo] || 0.1;

    let calorias = 0;
    let proteinas = 0;
    let carbohidratos = 0;
    let grasas = 0;
    let fibra = 0;

    if (!esUltima) {
      calorias = redondearNumero(metasDia.calorias * proporcion);
      proteinas = redondearNumero(metasDia.proteinas * proporcion);
      carbohidratos = redondearNumero(metasDia.carbohidratos * proporcion);
      grasas = redondearNumero(metasDia.grasas * proporcion);
      fibra = redondearNumero(metasDia.fibra * proporcion);
    } else {
      calorias = Math.max(metasDia.calorias - acumuladoCalorias, 0);
      proteinas = Math.max(metasDia.proteinas - acumuladoProteinas, 0);
      carbohidratos = Math.max(metasDia.carbohidratos - acumuladoCarbohidratos, 0);
      grasas = Math.max(metasDia.grasas - acumuladoGrasas, 0);
      fibra = Math.max(metasDia.fibra - acumuladoFibra, 0);
    }

    acumuladoCalorias += calorias;
    acumuladoProteinas += proteinas;
    acumuladoCarbohidratos += carbohidratos;
    acumuladoGrasas += grasas;
    acumuladoFibra += fibra;

    comidasDia.push(normalizarComida({
      id: generarIdUnico(),
      diaSemana: diaSemana,
      tipo: tipo,
      nombre: plantilla.nombre,
      categoria: plantilla.categoria,
      cantidad: plantilla.cantidad,
      unidad: plantilla.unidad,
      calorias: calorias,
      proteinas: proteinas,
      carbohidratos: carbohidratos,
      grasas: grasas,
      fibra: fibra,
      hora: horasPorTipo[tipo] || "12:00",
      completada: false
    }));
  });

  return comidasDia;
}

function generarDietaSemanalSegunPerfil() {
  const dias = obtenerDiasSemana();
  const nuevaLista = [];

  dias.forEach((dia, indiceDia) => {
    const comidasDia = construirComidasDeUnDia(dia, indiceDia);
    nuevaLista.push(...comidasDia);
  });

  comidas = nuevaLista.map(normalizarComida);
  guardarComidas();
  renderizarTodo();

  mostrarMensajeGeneracion("Dieta semanal generada según tu perfil y objetivo.", "#10b981");
}

function regenerarPlanDeUnDia(diaSemana) {
  const indiceDia = obtenerIndiceDia(diaSemana);

  if (indiceDia === -1) {
    mostrarMensajeGeneracion("Selecciona un día válido para regenerar.", "#ef4444");
    return;
  }

  const nuevasComidas = construirComidasDeUnDia(diaSemana, indiceDia).map(normalizarComida);

  comidas = comidas.filter((comida) => comida.diaSemana !== diaSemana);
  comidas.push(...nuevasComidas);

  guardarComidas();
  renderizarTodo();

  mostrarMensajeGeneracion(`Se regeneró el plan de ${convertirDiaATexto(diaSemana)} correctamente.`, "#10b981");
}

function duplicarPlanEntreDias(diaOrigen, diaDestino) {
  if (diaOrigen === diaDestino) {
    mostrarMensajeGeneracion("El día de origen y el día destino deben ser diferentes.", "#ef4444");
    return;
  }

  const comidasOrigen = ordenarComidas(
    comidas.filter((comida) => comida.diaSemana === diaOrigen)
  );

  if (comidasOrigen.length === 0) {
    mostrarMensajeGeneracion(`No hay comidas en ${convertirDiaATexto(diaOrigen)} para duplicar.`, "#ef4444");
    return;
  }

  const comidasDuplicadas = comidasOrigen.map((comida) =>
    normalizarComida({
      ...comida,
      id: generarIdUnico(),
      diaSemana: diaDestino,
      completada: false
    })
  );

  comidas = comidas.filter((comida) => comida.diaSemana !== diaDestino);
  comidas.push(...comidasDuplicadas);

  guardarComidas();
  renderizarTodo();

  mostrarMensajeGeneracion(
    `Se duplicó el plan de ${convertirDiaATexto(diaOrigen)} hacia ${convertirDiaATexto(diaDestino)}.`,
    "#10b981"
  );
}

if (botonGenerarDietaPerfil) {
  botonGenerarDietaPerfil.addEventListener("click", function () {
    const perfilIncompleto =
      perfilNutricional.edad === "" ||
      perfilNutricional.altura === "" ||
      perfilNutricional.sexo === "" ||
      perfilNutricional.pesoInicial === "" ||
      perfilNutricional.pesoActual === "" ||
      perfilNutricional.pesoObjetivo === "" ||
      perfilNutricional.objetivo === "";

    if (perfilIncompleto) {
      mostrarMensajeGeneracion(
        "Completa primero tu perfil nutricional para generar una dieta según tu objetivo.",
        "#ef4444",
        3000
      );
      irASeccion('secPerfilDieta');
      mostrarFormularioPerfil();
      return;
    }

    const yaHayComidas = comidas.length > 0;

    if (yaHayComidas) {
      const reemplazar = window.confirm(
        "Esto reemplazará el registro actual por una nueva dieta según tu perfil. ¿Continuar?"
      );

      if (!reemplazar) {
        return;
      }
    }

    generarDietaSemanalSegunPerfil();
  });
}

/* =========================================
   AGREGAR / EDITAR COMIDA
========================================= */
function agregarComida(evento) {
  evento.preventDefault();

  const diaSemana = diaSemanaComida.value;
  const tipo = tipoComida.value;
  const hora = horaComida.value;
  const nombre = nombreComida.value.trim();
  const categoria = categoriaComida.value;
  const cantidad = Number(cantidadComida.value);
  const unidad = unidadComida.value;
  const calorias = Number(caloriasComida.value);
  const proteinas = Number(proteinasComida.value);
  const carbohidratos = Number(carbohidratosComida.value);
  const grasas = Number(grasasComida.value);
  const fibra = Number(fibraComida.value);

  if (
    hora === "" ||
    nombre === "" ||
    Number.isNaN(cantidad) ||
    cantidad <= 0 ||
    Number.isNaN(calorias) ||
    Number.isNaN(proteinas) ||
    Number.isNaN(carbohidratos) ||
    Number.isNaN(grasas) ||
    Number.isNaN(fibra) ||
    calorias < 0 ||
    proteinas < 0 ||
    carbohidratos < 0 ||
    grasas < 0 ||
    fibra < 0
  ) {
    mostrarMensajeFormularioComida("Completa bien los datos del alimento.", "#ef4444");
    return;
  }

  const datosComida = {
    diaSemana,
    tipo,
    hora,
    nombre,
    categoria,
    cantidad,
    unidad,
    calorias,
    proteinas,
    carbohidratos,
    grasas,
    fibra
  };

  if (idComidaEnEdicion !== null) {
    comidas = comidas.map((comida) => {
      if (String(comida.id) === String(idComidaEnEdicion)) {
        return normalizarComida({
          ...comida,
          ...datosComida
        });
      }

      return comida;
    });

    guardarComidas();
    renderizarTodo();
    activarModoAgregarComida();
    mostrarMensajeFormularioComida("Alimento actualizado correctamente.", "#10b981");
    return;
  }

  const nuevaComida = normalizarComida({
    id: generarIdUnico(),
    ...datosComida,
    completada: false
  });

  comidas.push(nuevaComida);
  guardarComidas();
  renderizarTodo();

  activarModoAgregarComida();
  mostrarMensajeFormularioComida("Alimento agregado correctamente.", "#10b981");
}

/* =========================================
   CAMBIAR ESTADO / ELIMINAR
========================================= */
function cambiarEstadoComida(id) {
  comidas = comidas.map((comida) => {
    if (String(comida.id) === String(id)) {
      return {
        ...comida,
        completada: !comida.completada
      };
    }

    return comida;
  });

  guardarComidas();
  renderizarTodo();
}

function eliminarComida(id) {
  comidas = comidas.filter((comida) => String(comida.id) !== String(id));

  if (String(idComidaEnEdicion) === String(id)) {
    activarModoAgregarComida();
  }

  guardarComidas();
  renderizarTodo();
}

/* =========================================
   TABLA
========================================= */
function renderizarTabla() {
  if (!cuerpoTablaComidas) return;

  cuerpoTablaComidas.innerHTML = "";

  const diaActual = obtenerDiaActualClave();
  const listaBase = soloMostrarHoy
    ? comidas.filter((comida) => comida.diaSemana === diaActual)
    : comidas;

  const listaOrdenada = ordenarComidas(listaBase);

  if (listaOrdenada.length === 0) {
    const fila = document.createElement("tr");
    fila.innerHTML = `<td colspan="14">No hay comidas registradas.</td>`;
    cuerpoTablaComidas.appendChild(fila);
    renderizarComidasMovil([]);
    return;
  }

  listaOrdenada.forEach((comida) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${escaparHTML(comida.nombre)}</td>
      <td>${convertirDiaATexto(comida.diaSemana)}</td>
      <td><span class="etiqueta-tipo">${convertirTipoATexto(comida.tipo)}</span></td>
      <td>${escaparHTML(comida.categoria)}</td>
      <td>${formatearNumero(comida.cantidad)}</td>
      <td>${escaparHTML(comida.unidad)}</td>
      <td>${formatearNumero(comida.calorias)} kcal</td>
      <td>${formatearNumero(comida.proteinas)} g</td>
      <td>${formatearNumero(comida.carbohidratos)} g</td>
      <td>${formatearNumero(comida.grasas)} g</td>
      <td>${formatearNumero(comida.fibra)} g</td>
      <td>${escaparHTML(comida.hora)}</td>
      <td>
        <span class="etiqueta-estado-tabla ${comida.completada ? "hecha" : "pendiente"}">
          ${comida.completada ? "Hecha" : "Pendiente"}
        </span>
      </td>
      <td>
        <div class="acciones-tabla">
          <button class="boton-tabla boton-marcar-tabla" data-id-marcar="${comida.id}">
            ${comida.completada ? "Pendiente" : "Hecha"}
          </button>
          <button class="boton-tabla boton-editar-tabla" data-id-editar="${comida.id}">
            Editar
          </button>
          <button class="boton-tabla boton-duplicar-tabla" data-id-duplicar="${comida.id}">
            Duplicar
          </button>
          <button class="boton-tabla boton-eliminar-tabla" data-id-eliminar="${comida.id}">
            Eliminar
          </button>
          <span class="espacio-boton-lupa"></span>
          ${recetasBase?.some(r => comida.nombre.toLowerCase().includes(r.nombre.toLowerCase())) ? `<button class="boton-tabla boton-lupa-tabla" data-id-ver="${comida.id}" title="Ver en catálogo">🔍</button>` : ''}
        </div>
      </td>
    `;

    cuerpoTablaComidas.appendChild(fila);
  });

  enlazarAccionesRegistro(cuerpoTablaComidas);
  renderizarComidasMovil(listaOrdenada);
}

function enlazarAccionesRegistro(contenedor) {
  contenedor.querySelectorAll("[data-id-editar]").forEach((boton) => {
    boton.addEventListener("click", function () {
      const id = this.getAttribute("data-id-editar");
      cargarComidaEnFormulario(id);
    });
  });

  contenedor.querySelectorAll("[data-id-duplicar]").forEach((boton) => {
    boton.addEventListener("click", function () {
      const id = this.getAttribute("data-id-duplicar");
      duplicarComida(id);
    });
  });

  contenedor.querySelectorAll("[data-id-marcar]").forEach((boton) => {
    boton.addEventListener("click", function () {
      const id = this.getAttribute("data-id-marcar");
      cambiarEstadoComida(id);
    });
  });

  contenedor.querySelectorAll("[data-id-eliminar]").forEach((boton) => {
    boton.addEventListener("click", function () {
      const id = this.getAttribute("data-id-eliminar");
      const comida = comidas.find(c => String(c.id) === String(id));
      const nombreComida = comida?.nombre || 'esta comida';
      if (confirm(`¿Estás seguro de eliminar "${nombreComida}"?`)) {
        eliminarComida(id);
      }
    });
  });

  contenedor.querySelectorAll("[data-id-ver]").forEach((boton) => {
    boton.addEventListener("click", function () {
      const id = this.getAttribute("data-id-ver");
      const comida = comidas.find(c => String(c.id) === String(id));
      if (!comida) return;

      const receta = recetasBase?.find(r => comida.nombre.toLowerCase().includes(r.nombre.toLowerCase()));
      if (receta) {
        irASeccion('secBuscarDieta');
        setTimeout(() => mostrarDetalleReceta(receta, id), 300);
      } else {
        cargarComidaEnFormulario(id);
      }
    });
  });
}

function renderizarComidasMovil(lista) {
  const contenedor = document.getElementById("listaComidasMovil");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  if (!lista || lista.length === 0) {
    const vacio = document.createElement("p");
    vacio.className = "comida-movil-vacio";
    vacio.textContent = "No hay comidas registradas.";
    contenedor.appendChild(vacio);
    return;
  }

  lista.forEach((comida) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = `comida-movil${comida.completada ? " hecha" : ""}`;

    const tieneReceta = recetasBase?.some(r => comida.nombre.toLowerCase().includes(r.nombre.toLowerCase()));

    tarjeta.innerHTML = `
      <div class="comida-movil-cabecera">
        <div class="comida-movil-titulo">
          <p class="comida-movil-nombre">${escaparHTML(comida.nombre)}</p>
          <p class="comida-movil-meta">${convertirDiaATexto(comida.diaSemana)} · ${convertirTipoATexto(comida.tipo)} · ${escaparHTML(comida.hora)}</p>
        </div>
        <span class="etiqueta-estado-tabla ${comida.completada ? "hecha" : "pendiente"}">
          ${comida.completada ? "Hecha" : "Pendiente"}
        </span>
      </div>

      <div class="comida-movil-macros">
        <span><strong>${formatearNumero(comida.calorias)}</strong> kcal</span>
        <span><strong>${formatearNumero(comida.proteinas)}</strong> P</span>
        <span><strong>${formatearNumero(comida.carbohidratos)}</strong> C</span>
        <span><strong>${formatearNumero(comida.grasas)}</strong> G</span>
        <span><strong>${formatearNumero(comida.fibra)}</strong> F</span>
      </div>

      <p class="comida-movil-detalle">${escaparHTML(comida.categoria)} · ${formatearNumero(comida.cantidad)} ${escaparHTML(comida.unidad)}</p>

      <div class="comida-movil-acciones">
        <button class="boton-tabla boton-marcar-tabla" data-id-marcar="${comida.id}" type="button">
          ${comida.completada ? "Pendiente" : "Hecha"}
        </button>
        <button class="boton-tabla boton-editar-tabla" data-id-editar="${comida.id}" type="button">Editar</button>
        <button class="boton-tabla boton-duplicar-tabla" data-id-duplicar="${comida.id}" type="button">Duplicar</button>
        <button class="boton-tabla boton-eliminar-tabla" data-id-eliminar="${comida.id}" type="button">Eliminar</button>
        ${tieneReceta ? `<button class="boton-tabla boton-lupa-tabla" data-id-ver="${comida.id}" type="button" aria-label="Ver ${escaparHTML(comida.nombre)} en el catálogo">🔍</button>` : ""}
      </div>
    `;

    contenedor.appendChild(tarjeta);
  });

  enlazarAccionesRegistro(contenedor);
}

/* =========================================
   PLAN SEMANAL
========================================= */
function renderizarPlanSemanal() {
  if (!listaLunes) return;

  listaLunes.innerHTML = "";
  listaMartes.innerHTML = "";
  listaMiercoles.innerHTML = "";
  listaJueves.innerHTML = "";
  listaViernes.innerHTML = "";
  listaSabado.innerHTML = "";
  listaDomingo.innerHTML = "";

  const grupos = {
    lunes: [],
    martes: [],
    miercoles: [],
    jueves: [],
    viernes: [],
    sabado: [],
    domingo: []
  };

  comidas.forEach((comida) => {
    if (grupos[comida.diaSemana]) {
      grupos[comida.diaSemana].push(comida);
    }
  });

  insertarComidasSemanales(listaLunes, ordenarComidas(grupos.lunes));
  insertarComidasSemanales(listaMartes, ordenarComidas(grupos.martes));
  insertarComidasSemanales(listaMiercoles, ordenarComidas(grupos.miercoles));
  insertarComidasSemanales(listaJueves, ordenarComidas(grupos.jueves));
  insertarComidasSemanales(listaViernes, ordenarComidas(grupos.viernes));
  insertarComidasSemanales(listaSabado, ordenarComidas(grupos.sabado));
  insertarComidasSemanales(listaDomingo, ordenarComidas(grupos.domingo));
}

function insertarComidasSemanales(contenedor, lista) {
  if (!contenedor) return;

  if (lista.length === 0) {
    contenedor.appendChild(crearTextoVacio("Sin comidas programadas"));
    return;
  }

  lista.forEach((comida) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-comida-semanal";

    tarjeta.innerHTML = `
      <div class="encabezado-comida-semanal">
        <span class="etiqueta-tipo-comida">${convertirTipoATexto(comida.tipo)}</span>
        <span class="estado-comida ${comida.completada ? "estado-hecha" : "estado-pendiente"}">
          ${comida.completada ? "Hecha" : "Pendiente"}
        </span>
      </div>

      <div class="nombre-comida-semanal">${escaparHTML(comida.nombre)}</div>

      <p class="info-comida-semanal"><strong>Categoría:</strong> ${escaparHTML(comida.categoria)}</p>
      <p class="info-comida-semanal"><strong>Cantidad:</strong> ${formatearNumero(comida.cantidad)} ${escaparHTML(comida.unidad)}</p>
      <p class="info-comida-semanal"><strong>Kcal:</strong> ${formatearNumero(comida.calorias)}</p>
      <p class="info-comida-semanal"><strong>Macros:</strong> P ${formatearNumero(comida.proteinas)}g · C ${formatearNumero(comida.carbohidratos)}g · G ${formatearNumero(comida.grasas)}g · F ${formatearNumero(comida.fibra)}g</p>
      <p class="info-comida-semanal"><strong>Hora registrada:</strong> ${escaparHTML(comida.hora)}</p>

      <div class="acciones-comida-semanal">
        <button class="boton-marcar-comida" data-id-marcar="${comida.id}">
          ${comida.completada ? "Marcar pendiente" : "Marcar hecha"}
        </button>
        <button class="boton-editar-comida" data-id-editar="${comida.id}">
          Editar
        </button>
      </div>

      <div class="acciones-comida-semanal">
        <button class="boton-duplicar-semanal" data-id-duplicar="${comida.id}">
          Duplicar
        </button>
        <button class="boton-eliminar-semanal" data-id-eliminar="${comida.id}">
          Eliminar
        </button>
      </div>
    `;

    contenedor.appendChild(tarjeta);
  });

  contenedor.querySelectorAll("[data-id-editar]").forEach((boton) => {
    boton.addEventListener("click", function () {
      const id = this.getAttribute("data-id-editar");
      cargarComidaEnFormulario(id);
    });
  });

  contenedor.querySelectorAll("[data-id-duplicar]").forEach((boton) => {
    boton.addEventListener("click", function () {
      const id = this.getAttribute("data-id-duplicar");
      duplicarComida(id);
    });
  });

  contenedor.querySelectorAll("[data-id-marcar]").forEach((boton) => {
    boton.addEventListener("click", function () {
      const id = this.getAttribute("data-id-marcar");
      cambiarEstadoComida(id);
    });
  });

  contenedor.querySelectorAll("[data-id-eliminar]").forEach((boton) => {
    boton.addEventListener("click", function () {
      const id = this.getAttribute("data-id-eliminar");
      eliminarComida(id);
    });
  });
}

/* =========================================
   RESUMEN DE HOY
========================================= */
function renderizarResumen() {
  const diaActual = obtenerDiaActualClave();

  const comidasHechasHoy = comidas.filter(
    (comida) => comida.diaSemana === diaActual && comida.completada
  );

  const metaBase = calcularMetasBaseSegunPerfil();

  const metaCalorias = metaBase.calorias;
  const metaProteinas = metaBase.proteinas;
  const metaCarbohidratos = metaBase.carbohidratos;
  const metaGrasas = metaBase.grasas;
  const metaFibra = metaBase.fibra;

  const consumidoCalorias = comidasHechasHoy.reduce((total, comida) => total + Number(comida.calorias || 0), 0);
  const consumidoProteinas = comidasHechasHoy.reduce((total, comida) => total + Number(comida.proteinas || 0), 0);
  const consumidoCarbohidratos = comidasHechasHoy.reduce((total, comida) => total + Number(comida.carbohidratos || 0), 0);
  const consumidoGrasas = comidasHechasHoy.reduce((total, comida) => total + Number(comida.grasas || 0), 0);
  const consumidoFibra = comidasHechasHoy.reduce((total, comida) => total + Number(comida.fibra || 0), 0);

  const faltanteCalorias = Math.max(metaCalorias - consumidoCalorias, 0);
  const faltanteProteinas = Math.max(metaProteinas - consumidoProteinas, 0);
  const faltanteCarbohidratos = Math.max(metaCarbohidratos - consumidoCarbohidratos, 0);
  const faltanteGrasas = Math.max(metaGrasas - consumidoGrasas, 0);
  const faltanteFibra = Math.max(metaFibra - consumidoFibra, 0);

  if (textoCaloriasConsumidas) {
    textoCaloriasConsumidas.textContent = formatearNumero(consumidoCalorias);
  }

  if (textoProteinasConsumidas) {
    textoProteinasConsumidas.textContent = formatearNumero(consumidoProteinas);
  }

  if (textoMetaCalorias) {
    textoMetaCalorias.textContent = `/ ${formatearNumero(metaCalorias)} kcal`;
  }

  if (textoMetaProteinas) {
    textoMetaProteinas.textContent = `/ ${formatearNumero(metaProteinas)} g`;
  }

  if (textoCarbohidratosMacro) {
    textoCarbohidratosMacro.textContent = `${formatearNumero(consumidoCarbohidratos)} g / ${formatearNumero(metaCarbohidratos)} g`;
  }

  if (textoProteinasMacro) {
    textoProteinasMacro.textContent = `${formatearNumero(consumidoProteinas)} g / ${formatearNumero(metaProteinas)} g`;
  }

  if (textoGrasasMacro) {
    textoGrasasMacro.textContent = `${formatearNumero(consumidoGrasas)} g / ${formatearNumero(metaGrasas)} g`;
  }

  if (textoFibraMacro) {
    textoFibraMacro.textContent = `${formatearNumero(consumidoFibra)} g / ${formatearNumero(metaFibra)} g`;
  }

  if (barraCarbohidratos) {
    barraCarbohidratos.style.width = `${calcularPorcentaje(consumidoCarbohidratos, metaCarbohidratos)}%`;
  }

  if (barraProteinas) {
    barraProteinas.style.width = `${calcularPorcentaje(consumidoProteinas, metaProteinas)}%`;
  }

  if (barraGrasas) {
    barraGrasas.style.width = `${calcularPorcentaje(consumidoGrasas, metaGrasas)}%`;
  }

  if (barraFibra) {
    barraFibra.style.width = `${calcularPorcentaje(consumidoFibra, metaFibra)}%`;
  }

  if (textoDiaResumen) {
    textoDiaResumen.textContent =
      `Meta diaria estimada según tu perfil nutricional y tu objetivo (${perfilNutricional.objetivo || "Mantenimiento"}).`;
  }

  if (resumenFaltanteHoy) {
    resumenFaltanteHoy.innerHTML = `
      <div class="fila-faltante-hoy"><strong>Te falta por completar hoy:</strong></div>
      <div class="fila-faltante-hoy">Calorías: <strong>${formatearNumero(faltanteCalorias)} kcal</strong></div>
      <div class="fila-faltante-hoy">Proteínas: <strong>${formatearNumero(faltanteProteinas)} g</strong></div>
      <div class="fila-faltante-hoy">Carbohidratos: <strong>${formatearNumero(faltanteCarbohidratos)} g</strong></div>
      <div class="fila-faltante-hoy">Grasas: <strong>${formatearNumero(faltanteGrasas)} g</strong></div>
      <div class="fila-faltante-hoy">Fibra: <strong>${formatearNumero(faltanteFibra)} g</strong></div>
    `;
  }
}

/* =========================================
   IMPRIMIR REGISTRO EN PDF
========================================= */
async function imprimirPDF(blob, nombreArchivo) {
  const url = URL.createObjectURL(blob);
  const iframe = document.createElement("iframe");
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";
  iframe.src = url;
  iframe.onload = function () {
    try {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    } catch (error) {
      console.log("No se pudo imprimir el PDF.", error);
      descargarBlobComoArchivo(blob, nombreArchivo);
    }
  };
  document.body.appendChild(iframe);
  setTimeout(function () {
    URL.revokeObjectURL(url);
    iframe.remove();
  }, 60000);
}

if (botonImprimirRegistro) {
  botonImprimirRegistro.addEventListener("click", async function () {
    let textoOriginal = botonImprimirRegistro.textContent;

    try {
      botonImprimirRegistro.disabled = true;
      botonImprimirRegistro.textContent = "Generando PDF...";
      const blobPDF = await generarBlobPDFRegistro();
      const nombreArchivo = generarNombreArchivoRegistro();
      await imprimirPDF(blobPDF, nombreArchivo);
      mostrarMensajeGeneracion("PDF listo para imprimir.", "#10b981");
    } catch (error) {
      console.log("No se pudo imprimir el registro.", error);
      mostrarMensajeGeneracion("No se pudo generar o imprimir el PDF.", "#ef4444");
    } finally {
      botonImprimirRegistro.disabled = false;
      botonImprimirRegistro.textContent = textoOriginal;
    }
  });
}

/* =========================================
   PDF DEL REGISTRO
========================================= */
function obtenerDiasSemanaPDF() {
  return ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
}

function generarNombreArchivoRegistro() {
  const fecha = new Date();
  const anio = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, "0");
  const dia = String(fecha.getDate()).padStart(2, "0");

  return `registro-comidas-fitbalance-${anio}-${mes}-${dia}.pdf`;
}

function descargarBlobComoArchivo(blob, nombreArchivo) {
  const url = URL.createObjectURL(blob);
  const enlace = document.createElement("a");

  enlace.href = url;
  enlace.download = nombreArchivo;
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);
}

function convertirComidaALineasPDF(comida) {
  return [
    `${convertirTipoATexto(comida.tipo)} - ${comida.nombre}`,
    `Cat: ${comida.categoria}`,
    `Cant: ${formatearNumero(comida.cantidad)} ${comida.unidad} | Kcal: ${formatearNumero(comida.calorias)}`,
    `P ${formatearNumero(comida.proteinas)}g | C ${formatearNumero(comida.carbohidratos)}g | G ${formatearNumero(comida.grasas)}g | F ${formatearNumero(comida.fibra)}g`,
    `Hora: ${comida.hora}`
  ];
}

async function generarBlobPDFRegistro() {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    throw new Error("jsPDF no está cargado.");
  }

  const { jsPDF } = window.jspdf;

  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "letter"
  });

  const dias = obtenerDiasSemanaPDF();

  const anchoPagina = pdf.internal.pageSize.getWidth();
  const altoPagina = pdf.internal.pageSize.getHeight();

  const margen = 8;
  const anchoTabla = anchoPagina - margen * 2;
  const anchoColumna = anchoTabla / 7;

  const yTitulo = 10;
  const ySubtitulo = 16;
  const yTabla = 24;
  const altoEncabezado = 8;
  const yContenidoInicio = yTabla + altoEncabezado + 3;
  const yContenidoMax = altoPagina - 8;

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(14);
  pdf.text("Registro de comidas - FitBalance", margen, yTitulo);

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(9);
  pdf.text(`Generado: ${new Date().toLocaleDateString("es-MX")}`, margen, ySubtitulo);

  dias.forEach((dia, indice) => {
    const x = margen + indice * anchoColumna;

    pdf.setDrawColor(0, 0, 0);
    pdf.rect(x, yTabla, anchoColumna, altoEncabezado);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(8);
    pdf.text(
      convertirDiaATexto(dia),
      x + anchoColumna / 2,
      yTabla + 5.2,
      { align: "center" }
    );
  });

  const sobrantes = [];

  dias.forEach((dia, indice) => {
    const x = margen + indice * anchoColumna;
    const comidasDia = ordenarComidas(
      comidas.filter((comida) => comida.diaSemana === dia)
    );

    pdf.rect(x, yTabla + altoEncabezado, anchoColumna, yContenidoMax - (yTabla + altoEncabezado));

    let yActual = yContenidoInicio;

    if (comidasDia.length === 0) {
      pdf.setFont("helvetica", "italic");
      pdf.setFontSize(7);
      pdf.text("Sin comidas", x + 2, yActual);
      return;
    }

    comidasDia.forEach((comida) => {
      const lineasBase = convertirComidaALineasPDF(comida);

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(6.5);

      let lineasAjustadas = [];

      lineasBase.forEach((linea, indiceLinea) => {
        const anchoDisponible = anchoColumna - 4;
        const partes = pdf.splitTextToSize(linea, anchoDisponible);
        lineasAjustadas.push(...partes);

        if (indiceLinea === 0) {
          lineasAjustadas.push("");
        }
      });

      while (lineasAjustadas.length > 0 && lineasAjustadas[lineasAjustadas.length - 1] === "") {
        lineasAjustadas.pop();
      }

      const altoBloque = lineasAjustadas.length * 2.8 + 2;

      if (yActual + altoBloque > yContenidoMax - 2) {
        sobrantes.push({
          dia,
          comida
        });
        return;
      }

      const primeraLinea = pdf.splitTextToSize(lineasBase[0], anchoColumna - 4);
      pdf.setFont("helvetica", "bold");
      pdf.text(primeraLinea, x + 2, yActual);

      let yTexto = yActual + primeraLinea.length * 2.8 + 0.6;

      pdf.setFont("helvetica", "normal");
      const resto = lineasBase.slice(1);

      resto.forEach((linea) => {
        const partes = pdf.splitTextToSize(linea, anchoColumna - 4);
        pdf.text(partes, x + 2, yTexto);
        yTexto += partes.length * 2.8;
      });

      yActual = yTexto + 1;
      pdf.setDrawColor(180, 180, 180);
      pdf.line(x + 1.5, yActual, x + anchoColumna - 1.5, yActual);
      yActual += 2.2;
    });
  });

  if (sobrantes.length > 0) {
    const agrupados = {};

    sobrantes.forEach((item) => {
      if (!agrupados[item.dia]) {
        agrupados[item.dia] = [];
      }
      agrupados[item.dia].push(item.comida);
    });

    pdf.addPage("letter", "portrait");

    let y = 12;

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.text("Continuación del registro de comidas", 10, y);
    y += 8;

    Object.keys(agrupados).forEach((dia) => {
      const lista = agrupados[dia];

      if (y > 260) {
        pdf.addPage("letter", "portrait");
        y = 12;
      }

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(11);
      pdf.text(convertirDiaATexto(dia), 10, y);
      y += 6;

      lista.forEach((comida) => {
        if (y > 270) {
          pdf.addPage("letter", "portrait");
          y = 12;
        }

        const lineas = convertirComidaALineasPDF(comida);

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(9);
        const primera = pdf.splitTextToSize(lineas[0], 185);
        pdf.text(primera, 12, y);
        y += primera.length * 4;

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(8);

        lineas.slice(1).forEach((linea) => {
          const partes = pdf.splitTextToSize(linea, 185);
          pdf.text(partes, 12, y);
          y += partes.length * 3.6;
        });

        y += 3;
      });

      y += 4;
    });
  }

  return pdf.output("blob");
}

/* =========================================
   COMPARTIR REGISTRO EN PDF
========================================= */
if (botonCompartirRegistro) {
  botonCompartirRegistro.addEventListener("click", async function () {
    const textoOriginalBoton = botonCompartirRegistro.textContent;

    try {
      botonCompartirRegistro.disabled = true;
      botonCompartirRegistro.textContent = "Generando PDF...";

      const blobPDF = await generarBlobPDFRegistro();
      const nombreArchivo = generarNombreArchivoRegistro();
      const archivoPDF = new File([blobPDF], nombreArchivo, {
        type: "application/pdf"
      });

      if (navigator.canShare && navigator.canShare({ files: [archivoPDF] }) && navigator.share) {
        await navigator.share({
          title: "Registro de comidas",
          text: "Te comparto mi registro de comidas en PDF.",
          files: [archivoPDF]
        });

        mostrarMensajeGeneracion("PDF compartido correctamente.", "#10b981");
      } else {
        descargarBlobComoArchivo(blobPDF, nombreArchivo);
        mostrarMensajeGeneracion("Tu navegador no soporta compartir PDF directamente. Se descargó el archivo.", "#10b981");
      }
    } catch (error) {
      console.log("No se pudo compartir el PDF.", error);
      mostrarMensajeGeneracion("No se pudo generar o compartir el PDF.", "#ef4444");
    } finally {
      botonCompartirRegistro.disabled = false;
      botonCompartirRegistro.textContent = textoOriginalBoton;
    }
  });
}

/* =========================================
   FILTRO TABLA
========================================= */
if (botonFiltrarHoy) {
  botonFiltrarHoy.addEventListener("click", function () {
    soloMostrarHoy = !soloMostrarHoy;

    if (soloMostrarHoy) {
      botonFiltrarHoy.textContent = "Mostrar todas";
    } else {
      botonFiltrarHoy.textContent = "Mostrar solo hoy";
    }

    renderizarTabla();
  });
}

/* =========================================
   LIMPIAR REGISTRO
========================================= */
if (botonLimpiarRegistro) {
  botonLimpiarRegistro.addEventListener("click", function () {
    const confirmar = window.confirm(
      "Esto eliminará todo el registro y el plan semanal actual. ¿Deseas continuar?"
    );

    if (!confirmar) return;

    comidas = [];
    guardarComidas();
    activarModoAgregarComida();
    renderizarTodo();

    mostrarMensajeGeneracion("Se limpió el plan y el registro de comidas.", "#ef4444", 2200);
  });
}

/* =========================================
   RENDER GENERAL
========================================= */
function renderizarTodo() {
  renderizarTabla();
  renderizarResumen();
  renderizarPerfilNutricional();
  actualizarTarjetaUsuario();
  cargarSeguimientoDieta();
}

/* =========================================
   SEGUIMIENTO DE DIETA (checklist del día)
========================================= */
function cargarSeguimientoDieta() {
  if (!contenedorAlimentosSeguimiento) return;

  const diaActual = obtenerDiaActualClave();
  const comidasHoy = comidas.filter(function (c) {
    return c.diaSemana === diaActual;
  });

  if (comidasHoy.length === 0) {
    contenedorAlimentosSeguimiento.innerHTML = '<p class="sin-datos-msg">No tienes alimentos registrados para hoy.</p>';
    return;
  }

  const grupos = {};
  comidasHoy.forEach(function (c) {
    const tipo = c.tipo || "comida";
    if (!grupos[tipo]) grupos[tipo] = [];
    grupos[tipo].push(c);
  });

  const ordenTipos = ["desayuno", "colacion_manana", "comida", "colacion_tarde", "cena", "colacion_noche"];
  const etiquetas = {
    desayuno: "Desayuno",
    colacion_manana: "Media mañana",
    comida: "Comida",
    colacion_tarde: "Merienda",
    cena: "Cena",
    colacion_noche: "Snack noche"
  };

  let html = "";
  ordenTipos.forEach(function (tipo) {
    if (!grupos[tipo]) return;
    html += '<div class="grupo-alimentos">';
    html += '<h4 class="titulo-grupo-alimentos">' + (etiquetas[tipo] || tipo) + '</h4>';
    html += '<div class="lista-alimentos">';
    grupos[tipo].forEach(function (comida) {
      const hecha = comida.completada;
      html += '<div class="alimento-item ' + (hecha ? 'hecho' : 'pendiente') + '">';
      html += '<span class="alimento-nombre">' + escaparHTML(comida.nombre) + '</span>';
      html += '<button class="boton-alimento-seguimiento ' + (hecha ? 'hecho' : 'pendiente') + '" data-id-alimento="' + comida.id + '">' + (hecha ? 'Hecho' : 'Pendiente') + '</button>';
      html += '</div>';
    });
    html += '</div></div>';
  });

  contenedorAlimentosSeguimiento.innerHTML = html;

  contenedorAlimentosSeguimiento.querySelectorAll("[data-id-alimento]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      cambiarEstadoComida(this.getAttribute("data-id-alimento"));
    });
  });
}

/* =========================================
   EVENTOS PRINCIPALES
========================================= */
if (formularioComida) {
  formularioComida.addEventListener("submit", agregarComida);
}

if (botonCancelarEdicionComida) {
  botonCancelarEdicionComida.addEventListener("click", function () {
    activarModoAgregarComida();
    if (mensajeFormularioComida) {
      mensajeFormularioComida.textContent = "";
    }
  });
}

if (botonCerrarSesion) {
  botonCerrarSesion.addEventListener("click", function () {
    localStorage.removeItem(STORAGE.sesionActiva);
    localStorage.removeItem(STORAGE.correoUsuario);
    localStorage.removeItem(STORAGE.proveedorLogin);
    window.location.href = "../login/index.html";
  });
}

/* =========================================
   INICIO
========================================= */
function iniciarFormularioConDiaActual() {
  activarModoAgregarComida();
}

function iniciarAplicacion() {
  usuariosConfig = obtenerUsuariosConfig();

  if (!usuariosConfig[correoUsuarioActual]) {
    usuariosConfig[correoUsuarioActual] = crearUsuarioBase(correoUsuarioActual);
    guardarUsuariosConfig(usuariosConfig);
  }

  usuarioActual = normalizarUsuario(correoUsuarioActual, usuariosConfig[correoUsuarioActual]);
  migrarDatosViejosSiExisten();
  usuarioActual = normalizarUsuario(correoUsuarioActual, usuarioActual);

  aplicarTema(
    usuarioActual?.ajustes?.apariencia?.tema ||
      localStorage.getItem(STORAGE.modoGlobal) ||
      "neon"
  );

  cargarPerfilNutricional();
  cargarComidas();

  persistirUsuarioActual();
  actualizarTarjetaUsuario();
  iniciarFormularioConDiaActual();
  iniciarPerfilNutricional();
  renderizarTodo();
  inicializarBuscadorAlimentos();
  inicializarBotonesNavegacion();

  document.querySelectorAll('.contenido-principal.cargando').forEach(el => {
    el.classList.remove('cargando');
  });
}

/* =========================
   BUSCADOR DE ALIMENTOS
========================= */
let inputBuscadorAlimentos;
let resultadosBusqueda;
let vistaDetalleReceta;
let timeoutBusqueda;

function inicializarBuscadorAlimentos() {
  inputBuscadorAlimentos = document.getElementById('buscadorAlimentos');
  resultadosBusqueda = document.getElementById('resultadosBusqueda');
  vistaDetalleReceta = document.getElementById('vistaDetalleReceta');

  if (!inputBuscadorAlimentos || !resultadosBusqueda || !vistaDetalleReceta) return;

  let ignorandoBlur = false;

  inputBuscadorAlimentos.addEventListener('input', function() {
    clearTimeout(timeoutBusqueda);
    const termino = this.value.trim();
    if (termino.length < 2) {
      resultadosBusqueda.classList.add('oculto');
      resultadosBusqueda.innerHTML = '';
      return;
    }
    timeoutBusqueda = setTimeout(() => buscarYRenderizar(termino), 250);
  });

  inputBuscadorAlimentos.addEventListener('focus', function() {
    if (inputBuscadorAlimentos.value.trim().length >= 2) {
      resultadosBusqueda.classList.remove('oculto');
    }
  });

  resultadosBusqueda.addEventListener('mousedown', function(e) {
    e.preventDefault();
    ignorandoBlur = true;
  });

  inputBuscadorAlimentos.addEventListener('blur', function() {
    setTimeout(() => {
      if (!ignorandoBlur) {
        resultadosBusqueda.classList.add('oculto');
      }
      ignorandoBlur = false;
    }, 200);
  });
}

function buscarYRenderizar(termino) {
  if (typeof buscarTodo !== 'function') return;
  const resultados = buscarTodo(termino);
  renderizarResultadosBusqueda(resultados);
}

function renderizarResultadosBusqueda(resultados) {
  if (!resultadosBusqueda) return;
  const { alimentos, recetas } = resultados;

  if (alimentos.length === 0 && recetas.length === 0) {
    resultadosBusqueda.innerHTML = '<div class="item-resultado-alimento" style="cursor:default;"><span class="nombre-item-alimento" style="color:var(--texto-suave)">No se encontraron resultados</span></div>';
    resultadosBusqueda.classList.remove('oculto');
    return;
  }

  let html = '';
  if (recetas.length > 0) {
    html += '<div class="seccion-resultados"><p class="titulo-seccion-resultados">Recetas</p></div>';
    recetas.forEach(receta => {
      html += `<div class="item-resultado-alimento" data-tipo="receta" data-nombre="${escaparHTML(receta.nombre)}">
        <span class="icono-item-alimento">🍽️</span>
        <span class="nombre-item-alimento">${escaparHTML(receta.nombre)}</span>
        <span class="categoria-item-alimento">Receta</span>
        <span class="kcal-item-alimento">${receta.kcal} kcal</span>
      </div>`;
    });
  }

  if (alimentos.length > 0) {
    html += '<div class="seccion-resultados"><p class="titulo-seccion-resultados">Alimentos</p></div>';
    alimentos.forEach(alimento => {
      html += `<div class="item-resultado-alimento" data-tipo="alimento" data-nombre="${escaparHTML(alimento.nombre)}">
        <span class="icono-item-alimento">🍗</span>
        <span class="nombre-item-alimento">${escaparHTML(alimento.nombre)}</span>
        <span class="categoria-item-alimento">${escaparHTML(alimento.categoria)}</span>
        <span class="kcal-item-alimento">${alimento.kcal} kcal</span>
      </div>`;
    });
  }

  resultadosBusqueda.innerHTML = html;
  resultadosBusqueda.classList.remove('oculto');

  resultadosBusqueda.querySelectorAll('.item-resultado-alimento').forEach(item => {
    item.addEventListener('click', function() {
      const tipo = this.getAttribute('data-tipo');
      const nombre = this.getAttribute('data-nombre');
      if (tipo === 'receta') seleccionarReceta(nombre);
      else seleccionarAlimento(nombre);
    });
  });
}

function seleccionarAlimento(nombre) {
  const alimento = obtenerAlimentoPorNombre(nombre);
  if (!alimento) return;

  inputBuscadorAlimentos.value = '';
  resultadosBusqueda.classList.add('oculto');
  resultadosBusqueda.innerHTML = '';

  if (document.getElementById('nombreComida')) document.getElementById('nombreComida').value = alimento.nombre;
  if (document.getElementById('caloriasComida')) document.getElementById('caloriasComida').value = alimento.kcal;
  if (document.getElementById('proteinasComida')) document.getElementById('proteinasComida').value = alimento.proteinas;
  if (document.getElementById('carbohidratosComida')) document.getElementById('carbohidratosComida').value = alimento.carb;
  if (document.getElementById('grasasComida')) document.getElementById('grasasComida').value = alimento.grasas;
  if (document.getElementById('fibraComida')) document.getElementById('fibraComida').value = alimento.fibra || 0;
  if (document.getElementById('cantidadComida')) document.getElementById('cantidadComida').value = alimento.porcion;
  if (document.getElementById('unidadComida')) document.getElementById('unidadComida').value = alimento.unidad;
  if (document.getElementById('categoriaComida')) document.getElementById('categoriaComida').value = alimento.categoria || 'Proteína';

  const formulario = document.getElementById('formularioComida');
  irASeccion('secRegistroDieta');
  if (formulario) formulario.scrollIntoView({ behavior: 'smooth' });
}

function seleccionarReceta(nombre) {
  if (!nombre) return;

  const receta = recetasBase?.find(r => r.nombre.toLowerCase().includes(nombre.toLowerCase()));
  if (!receta) {
    const recetaExacta = recetasBase?.find(r => r.nombre.toLowerCase() === nombre.toLowerCase());
    if (recetaExacta) {
      mostrarDetalleReceta(recetaExacta);
      return;
    }
    return;
  }

  mostrarDetalleReceta(receta);
}

function mostrarDetalleReceta(receta, idComida = null) {
  inputBuscadorAlimentos.value = '';
  if (resultadosBusqueda) {
    resultadosBusqueda.classList.add('oculto');
    resultadosBusqueda.innerHTML = '';
  }

  if (!vistaDetalleReceta) return;

  const esEdicion = idComida !== null;
  const textoBotonPrincipal = esEdicion ? 'Editar' : 'Añadir a mi día';
  const claseBotonPrincipal = esEdicion ? 'boton-primario' : 'boton-primario';

  vistaDetalleReceta.innerHTML = `
    <article class="tarjeta-resultado-receta">
      <div class="encabezado-resultado-receta">
        <div>
          <h3 class="titulo-resultado-receta">${receta.nombre}</h3>
          <p class="subtitulo-resultado-receta">Receta - ${receta.porciones} porción${receta.porciones > 1 ? 'es' : ''}</p>
        </div>
        <div class="badge-resultado-receta">🍽️ Receta</div>
      </div>
      <div class="cuerpo-resultado-receta">
        <div class="resumen-macros-receta">
          <div class="macro-item-receta"><strong>${receta.kcal}</strong><span>Kcal</span></div>
          <div class="macro-item-receta"><strong>${receta.proteinas}g</strong><span>Proteínas</span></div>
          <div class="macro-item-receta"><strong>${receta.carb}g</strong><span>Carbos</span></div>
          <div class="macro-item-receta"><strong>${receta.grasas}g</strong><span>Grasas</span></div>
        </div>
        <div class="seccion-receta">
          <h4 class="titulo-seccion-receta">Ingredientes</h4>
          <div class="lista-ingredientes-receta">
            ${receta.ingredientes.map(ing => `<div class="item-ingrediente-receta"><span class="punto-ingrediente"></span><span>${ing}</span></div>`).join('')}
          </div>
        </div>
        <div class="seccion-receta">
          <h4 class="titulo-seccion-receta">Pasos</h4>
          <div class="lista-pasos-receta">
            ${receta.pasos.map((paso, i) => `<div class="item-paso-receta"><span class="numero-paso-receta">${i + 1}</span><span>${paso}</span></div>`).join('')}
          </div>
        </div>
        <div class="seccion-youtube-receta">
          <a href="https://youtube.com/search?q=${encodeURIComponent(receta.nombre + ' receta')}" target="_blank" class="boton-youtube-receta">
            🎥 Ver en YouTube
          </a>
        </div>
        <div class="acciones-resultado-receta">
          <button type="button" class="boton-secundario boton-agregar-receta" id="botonCerrarDetalle">Cerrar</button>
          <button type="button" class="${claseBotonPrincipal} boton-agregar-receta" id="botonAgregarReceta">${textoBotonPrincipal}</button>
        </div>
      </div>
    </article>
  `;

  vistaDetalleReceta.classList.remove('oculto');
  vistaDetalleReceta.scrollIntoView({ behavior: 'smooth', block: 'start' });

  vistaDetalleReceta.querySelector('#botonCerrarDetalle')?.addEventListener('click', () => {
    vistaDetalleReceta.classList.add('oculto');
    vistaDetalleReceta.innerHTML = '';
  });

  vistaDetalleReceta.querySelector('#botonAgregarReceta')?.addEventListener('click', () => {
    if (esEdicion) {
      vistaDetalleReceta.classList.add('oculto');
      vistaDetalleReceta.innerHTML = '';
      cargarComidaEnFormulario(idComida);
      return;
    }
    agregarRecetaAlFormulario(receta);
  });
}

function agregarRecetaAlFormulario(receta) {
  if (document.getElementById('nombreComida')) document.getElementById('nombreComida').value = receta.nombre;
  if (document.getElementById('caloriasComida')) document.getElementById('caloriasComida').value = receta.kcal;
  if (document.getElementById('proteinasComida')) document.getElementById('proteinasComida').value = receta.proteinas;
  if (document.getElementById('carbohidratosComida')) document.getElementById('carbohidratosComida').value = receta.carb;
  if (document.getElementById('grasasComida')) document.getElementById('grasasComida').value = receta.grasas;
  if (document.getElementById('fibraComida')) document.getElementById('fibraComida').value = receta.fibra || 0;
  if (document.getElementById('cantidadComida')) document.getElementById('cantidadComida').value = receta.porciones || 1;
  if (document.getElementById('unidadComida')) document.getElementById('unidadComida').value = 'porción';
  if (document.getElementById('categoriaComida')) document.getElementById('categoriaComida').value = 'Receta';

  vistaDetalleReceta.classList.add('oculto');
  vistaDetalleReceta.innerHTML = '';

  const formulario = document.getElementById('formularioComida');
  if (formulario) formulario.scrollIntoView({ behavior: 'smooth' });
}

function renderizarDetalleReceta(receta) {
  if (!vistaDetalleReceta) return;

  vistaDetalleReceta.innerHTML = `
    <article class="tarjeta-resultado-receta">
      <div class="encabezado-resultado-receta">
        <div>
          <h3 class="titulo-resultado-receta">${escaparHTML(receta.nombre)}</h3>
          <p class="subtitulo-resultado-receta">Receta - ${receta.porciones} porción${receta.porciones > 1 ? 'es' : ''}</p>
        </div>
        <div class="badge-resultado-receta">🍽️ Receta</div>
      </div>
      <div class="cuerpo-resultado-receta">
        <div class="resumen-macros-receta">
          <div class="macro-item-receta"><strong>${receta.kcal}</strong><span>Kcal</span></div>
          <div class="macro-item-receta"><strong>${receta.proteinas}g</strong><span>Proteínas</span></div>
          <div class="macro-item-receta"><strong>${receta.carb}g</strong><span>Carbos</span></div>
          <div class="macro-item-receta"><strong>${receta.grasas}g</strong><span>Grasas</span></div>
        </div>
        <div class="seccion-receta">
          <h4 class="titulo-seccion-receta">Ingredientes</h4>
          <div class="lista-ingredientes-receta">
            ${receta.ingredientes.map(ing => `<div class="item-ingrediente-receta"><span class="punto-ingrediente"></span><span>${escaparHTML(ing)}</span></div>`).join('')}
          </div>
        </div>
        <div class="seccion-receta">
          <h4 class="titulo-seccion-receta">Pasos</h4>
          <div class="lista-pasos-receta">
            ${receta.pasos.map((paso, i) => `<div class="item-paso-receta"><span class="numero-paso-receta">${i + 1}</span><span>${escaparHTML(paso)}</span></div>`).join('')}
          </div>
        </div>
        <div class="acciones-resultado-receta">
          <button type="button" class="boton-secundario boton-agregar-receta" id="botonCerrarDetalle">Cerrar</button>
          <button type="button" class="boton-primario boton-agregar-receta" data-receta="${escaparHTML(receta.nombre)}" id="botonAgregarReceta">Agregar a mi día</button>
        </div>
      </div>
    </article>
  `;

  vistaDetalleReceta.classList.remove('oculto');

  vistaDetalleReceta.querySelector('#botonCerrarDetalle')?.addEventListener('click', () => {
    vistaDetalleReceta.classList.add('oculto');
    vistaDetalleReceta.innerHTML = '';
  });

  vistaDetalleReceta.querySelector('#botonAgregarReceta')?.addEventListener('click', function() {
    agregarRecetaADia(this.getAttribute('data-receta'));
  });
}

function agregarRecetaADia(nombreReceta) {
  const receta = obtenerRecetaPorNombre(nombreReceta);
  if (!receta) return;

  const diaSemana = diaSemanaComida?.value || obtenerDiaActualClave();
  const tipo = tipoComida?.value || 'comida';
  const ahora = new Date();
  const hora = `${String(ahora.getHours()).padStart(2, '0')}:${String(ahora.getMinutes()).padStart(2, '0')}`;
  const nombre = receta.nombre;
  const categoria = 'Receta';
  const cantidad = receta.porciones || 1;
  const unidad = 'porción';
  const calorias = Number(receta.kcal) || 0;
  const proteinas = Number(receta.proteinas) || 0;
  const carbohidratos = Number(receta.carb) || 0;
  const grasas = Number(receta.grasas) || 0;
  const fibra = Number(receta.fibra) || 0;

  const nuevaComida = normalizarComida({
    id: generarIdUnico(),
    diaSemana,
    tipo,
    hora,
    nombre,
    categoria,
    cantidad,
    unidad,
    calorias,
    proteinas,
    carbohidratos,
    grasas,
    fibra,
    completada: false
  });

  comidas.push(nuevaComida);
  guardarComidas();
  renderizarTodo();

  vistaDetalleReceta.classList.add('oculto');
  vistaDetalleReceta.innerHTML = '';

  irASeccion('secTablaDieta');

  mostrarMensajeFormularioComida(`"${nombre}" agregado a tu registro`, '#10b981');
}

/* =========================
   BOTONES DE NAVEGACIÓN
========================= */
function inicializarBotonesNavegacion() {
  // Botón "Buscar alimento" en título
  document.getElementById('botonIrABuscar')?.addEventListener('click', function() {
    irASeccion('secBuscarDieta', { foco: 'buscadorAlimentos' });
  });

  // Lupa en formulario
  document.getElementById('botonLupaBuscador')?.addEventListener('click', function() {
    const nombre = document.getElementById('nombreComida').value;
    if (nombre && nombre.trim()) {
      const receta = obtenerRecetaPorNombre(nombre.trim());
      if (receta) {
        renderizarDetalleReceta(receta);
        vistaDetalleReceta?.scrollIntoView({ behavior: 'smooth' });
      } else {
        const buscador = document.getElementById('buscadorAlimentos');
        if (buscador) {
          irASeccion('secBuscarDieta', { foco: 'buscadorAlimentos' });
          buscador.value = nombre.trim();
          buscador.dispatchEvent(new Event('input'));
        }
      }
    } else {
      irASeccion('secBuscarDieta', { foco: 'buscadorAlimentos' });
    }
  });

  const botonToggleGestion = document.getElementById('botonToggleGestionPlan');
  const barraGestion = document.getElementById('barraGestionPlan');

  if (botonToggleGestion && barraGestion) {
    botonToggleGestion.addEventListener('click', function () {
      const abierto = barraGestion.classList.toggle('abierto');
      botonToggleGestion.setAttribute('aria-expanded', String(!!abierto));
      botonToggleGestion.textContent = abierto ? 'Ocultar opciones' : 'Opciones: regenerar o duplicar';
    });
  }
}

// Agregar botón YouTube a la vista de detalle
function agregarBotonYouTube(receta) {
  if (!vistaDetalleReceta) return;
  
  const acciones = vistaDetalleReceta.querySelector('.acciones-resultado-receta');
  if (!acciones) return;

  const botonYT = document.createElement('button');
  botonYT.type = 'button';
  botonYT.className = 'boton-secundario boton-youtube-receta';
  botonYT.innerHTML = '🎥 Ver en YouTube';
  botonYT.style.background = '#ff0000';
  botonYT.style.color = 'white';
  botonYT.addEventListener('click', function() {
    window.open('https://youtube.com/search?q=' + encodeURIComponent(receta.nombre + ' receta'), '_blank');
  });

  acciones.insertBefore(botonYT, acciones.firstChild);
}

// Modificar renderizarDetalleReceta para incluir botón YouTube
const renderizarDetalleRecetaOriginal = renderizarDetalleReceta;
function renderizarDetalleReceta(receta) {
  renderizarDetalleRecetaOriginal(receta);
  setTimeout(() => agregarBotonYouTube(receta), 10);
}

/* =========================================
   MÓVIL TIPO APP: mostrar una sección sola
========================================= */
const SECCIONES_PAGINA = ["secSeguimientoDieta", "secPerfilDieta", "secRegistroDieta", "secHoyDieta", "secTablaDieta", "secBuscarDieta"];

function actualizarNavegacionActiva(id) {
  document.querySelectorAll("[data-seccion]").forEach(function (boton) {
    const activo = boton.getAttribute("data-seccion") === id;
    boton.classList.toggle("activo", activo);
    if (activo) boton.setAttribute("aria-current", "page");
    else boton.removeAttribute("aria-current");
  });
}

function cerrarPanelesMoviles() {
  document.querySelector(".aplicacion")?.classList.remove("sidebar-abierta");
  document.getElementById("panelMas")?.classList.remove("abierto");
  document.getElementById("panelMas")?.setAttribute("aria-hidden", "true");
  document.getElementById("botonHamburguesa")?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-abierto");
}

function mostrarSeccionPagina(id, desplazar) {
  const esMovil = window.matchMedia("(max-width: 768px)").matches;
  const debeDesplazar = desplazar !== false;
  cerrarPanelesMoviles();

  if (!esMovil) {
    SECCIONES_PAGINA.forEach(function (sid) {
      const el = document.getElementById(sid);
      if (el) el.style.display = "";
    });
    const cuadricula = document.querySelector(".cuadricula-superior");
    if (cuadricula) cuadricula.style.display = "";
    actualizarNavegacionActiva(id);
    if (debeDesplazar) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return;
  }

  SECCIONES_PAGINA.forEach(function (sid) {
    const el = document.getElementById(sid);
    if (el) el.style.display = (sid === id) ? "" : "none";
  });

  const cuadricula = document.querySelector(".cuadricula-superior");
  const seccionActiva = document.getElementById(id);
  if (cuadricula) {
    cuadricula.style.display = (seccionActiva && cuadricula.contains(seccionActiva)) ? "" : "none";
  }

  const detalle = document.getElementById("vistaDetalleReceta");
  if (detalle && id !== "secBuscarDieta") {
    detalle.classList.add("oculto");
    detalle.innerHTML = "";
  }

  actualizarNavegacionActiva(id);

  const principal = document.getElementById("contenidoPrincipal");
  if (principal) principal.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: debeDesplazar ? "smooth" : "auto" });
}

function irASeccion(id, opciones) {
  const esMovil = window.matchMedia("(max-width: 768px)").matches;
  if (esMovil) {
    mostrarSeccionPagina(id);
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (opciones && opciones.foco) {
    setTimeout(function () {
      document.getElementById(opciones.foco)?.focus();
    }, 320);
  }
}

window.mostrarSeccionPagina = mostrarSeccionPagina;
window.irASeccion = irASeccion;

mostrarSeccionPagina("secSeguimientoDieta", false);

window.addEventListener("resize", function () {
  if (!window.matchMedia("(max-width: 768px)").matches) {
    SECCIONES_PAGINA.forEach(function (sid) {
      const el = document.getElementById(sid);
      if (el) el.style.display = "";
    });
    const cuadricula = document.querySelector(".cuadricula-superior");
    if (cuadricula) cuadricula.style.display = "";
    document.getElementById("vistaDetalleReceta")?.classList.remove("oculto");
  } else {
    const activo = document.querySelector("[data-seccion].activo");
    mostrarSeccionPagina(activo?.getAttribute("data-seccion") || "secSeguimientoDieta", false);
  }
});

iniciarAplicacion();