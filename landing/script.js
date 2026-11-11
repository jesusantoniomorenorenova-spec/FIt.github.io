(function () {
  "use strict";

  var CLAVE_OPINIONES = "opinionesFitBalance_v1";
  var CLAVE_CONTADORES = "contadoresOpinionesFitBalance_v1";

  var OPINIONES_INICIALES = [
    {
      id: "opinion-saul",
      nombre: "Saul Garcia",
      calificacion: 5,
      fecha: "2026-09-15",
      texto:
        "Excelente aplicación. FitBalance me permite llevar un control organizado de mi alimentación, ejercicio y descanso sin usar tres apps distintas. La información se presenta de manera clara y resulta muy útil para conseguir mi progreso."
    },
    {
      id: "opinion-brandom",
      nombre: "Brandom Cueto",
      calificacion: 5,
      fecha: "2026-09-15",
      texto:
        "Me gusta que toda la información se encuentre conectada dentro de la misma aplicación, lo que permite llevar un registro más preciso de comidas, ejercicios, horas de descanso y medidas corporales sin utilizar diferentes herramientas."
    }
  ];

  var CONTADORES_INICIALES = { "5": 37, "4": 8, "3": 2, "2": 0, "1": 1 };

  function leerJSON(clave, respaldo) {
    try {
      var guardado = localStorage.getItem(clave);
      if (!guardado) return respaldo;
      var datos = JSON.parse(guardado);
      return datos || respaldo;
    } catch (error) {
      return respaldo;
    }
  }

  function guardarJSON(clave, valor) {
    try {
      localStorage.setItem(clave, JSON.stringify(valor));
    } catch (error) {
      /* Almacenamiento no disponible */
    }
  }

  function normalizarContadores(datos) {
    var contadores = {};
    for (var i = 1; i <= 5; i++) {
      var valor = datos ? parseInt(datos[String(i)], 10) : 0;
      contadores[String(i)] = isNaN(valor) || valor < 0 ? 0 : valor;
    }
    return contadores;
  }

  var opiniones = leerJSON(CLAVE_OPINIONES, null);
  if (!Array.isArray(opiniones) || opiniones.length === 0) {
    opiniones = OPINIONES_INICIALES.slice();
    guardarJSON(CLAVE_OPINIONES, opiniones);
  }

  var contadoresGuardados = leerJSON(CLAVE_CONTADORES, null);
  var contadores = normalizarContadores(contadoresGuardados || CONTADORES_INICIALES);
  if (!contadoresGuardados) {
    guardarJSON(CLAVE_CONTADORES, contadores);
  }

  var listaOpiniones = document.getElementById("listaOpiniones");
  var promedioEl = document.getElementById("promedioOpiniones");
  var totalEl = document.getElementById("totalOpiniones");
  var estrellasPromedio = document.getElementById("estrellasPromedio");
  var formularioOpinion = document.getElementById("formularioOpinion");
  var mensajeOpinion = document.getElementById("mensajeOpinion");
  var formularioContacto = document.getElementById("formularioContacto");
  var mensajeContactoFormulario = document.getElementById("mensajeContactoFormulario");
  var cabecera = document.getElementById("cabeceraSitio");
  var botonMenu = document.getElementById("botonMenu");
  var fondoMenu = document.getElementById("fondoMenu");
  var toast = document.getElementById("toast");
  var temporizadorToast = null;

  function mostrarToast(mensaje) {
    if (!toast) return;
    toast.textContent = mensaje;
    toast.classList.add("visible");
    clearTimeout(temporizadorToast);
    temporizadorToast = setTimeout(function () {
      toast.classList.remove("visible");
    }, 3800);
  }

  function mostrarMensaje(elemento, texto, exito) {
    if (!elemento) return;
    elemento.textContent = texto;
    elemento.classList.toggle("es-exito", Boolean(exito));
  }

  function marcarCampo(campo, invalido) {
    if (!campo) return;
    campo.classList.toggle("campo-invalido", Boolean(invalido));
    if (invalido) {
      campo.setAttribute("aria-invalid", "true");
    } else {
      campo.removeAttribute("aria-invalid");
    }
  }

  function correoValido(valor) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim());
  }

  function obtenerIniciales(nombre) {
    var partes = String(nombre).trim().split(/\s+/).filter(Boolean);
    if (partes.length === 0) return "FB";
    var iniciales = partes[0].charAt(0);
    if (partes.length > 1) {
      iniciales += partes[partes.length - 1].charAt(0);
    }
    return iniciales.toUpperCase();
  }

  function formatearFecha(fecha) {
    var texto = String(fecha);
    var valor = texto.length === 10 ? texto + "T12:00:00" : texto;
    var date = new Date(valor);
    if (isNaN(date.getTime())) return texto;
    return new Intl.DateTimeFormat("es-MX", {
      day: "numeric",
      month: "short",
      year: "numeric"
    })
      .format(date)
      .replace(".", "");
  }

  function crearTarjetaOpinion(opinion) {
    var articulo = document.createElement("article");
    articulo.className = "tarjeta-opinion";

    var avatar = document.createElement("span");
    avatar.className = "avatar-opinion";
    avatar.setAttribute("aria-hidden", "true");
    avatar.textContent = obtenerIniciales(opinion.nombre);

    var contenido = document.createElement("div");
    contenido.className = "contenido-opinion";

    var cabeceraOpinion = document.createElement("div");
    cabeceraOpinion.className = "cabecera-opinion";

    var nombre = document.createElement("h4");
    nombre.textContent = opinion.nombre;

    var calificacion = Math.max(1, Math.min(5, parseInt(opinion.calificacion, 10) || 5));
    var estrellas = document.createElement("span");
    estrellas.className = "estrellas-opinion";
    estrellas.setAttribute("aria-label", calificacion + " de 5 estrellas");
    estrellas.textContent =
      "★★★★★".slice(0, calificacion) + "☆☆☆☆☆".slice(0, 5 - calificacion);

    var fecha = document.createElement("time");
    fecha.dateTime = opinion.fecha;
    fecha.textContent = formatearFecha(opinion.fecha);

    var texto = document.createElement("p");
    texto.textContent = opinion.texto;

    cabeceraOpinion.appendChild(nombre);
    cabeceraOpinion.appendChild(estrellas);
    cabeceraOpinion.appendChild(fecha);
    contenido.appendChild(cabeceraOpinion);
    contenido.appendChild(texto);
    articulo.appendChild(avatar);
    articulo.appendChild(contenido);

    return articulo;
  }

  function renderizarOpiniones() {
    if (!listaOpiniones) return;
    listaOpiniones.textContent = "";

    if (opiniones.length === 0) {
      var vacio = document.createElement("p");
      vacio.className = "opiniones-vacio";
      vacio.textContent = "Aún no hay opiniones. ¡Sé la primera persona en compartir la tuya!";
      listaOpiniones.appendChild(vacio);
      return;
    }

    opiniones.forEach(function (opinion) {
      listaOpiniones.appendChild(crearTarjetaOpinion(opinion));
    });
  }

  function calcularResumen() {
    var total = 0;
    var suma = 0;
    for (var i = 1; i <= 5; i++) {
      total += contadores[String(i)];
      suma += contadores[String(i)] * i;
    }
    return {
      total: total,
      promedio: total > 0 ? suma / total : 0
    };
  }

  function renderizarResumen() {
    var resumen = calcularResumen();

    if (promedioEl) {
      promedioEl.textContent = resumen.promedio.toFixed(1);
    }

    if (totalEl) {
      totalEl.textContent =
        resumen.total + (resumen.total === 1 ? " opinión" : " opiniones");
    }

    if (estrellasPromedio) {
      estrellasPromedio.style.setProperty(
        "--porcentaje",
        (resumen.promedio / 5) * 100 + "%"
      );
    }

    for (var i = 1; i <= 5; i++) {
      var conteo = document.querySelector('[data-conteo="' + i + '"]');
      var barra = document.querySelector('[data-barra="' + i + '"]');
      var cantidad = contadores[String(i)];

      if (conteo) conteo.textContent = cantidad;
      if (barra) {
        barra.style.width =
          (resumen.total > 0 ? (cantidad / resumen.total) * 100 : 0) + "%";
      }
    }
  }

  if (formularioOpinion) {
    formularioOpinion.addEventListener("submit", function (evento) {
      evento.preventDefault();

      var nombre = document.getElementById("nombreOpinion");
      var correo = document.getElementById("correoOpinion");
      var texto = document.getElementById("textoOpinion");
      var calificacion = formularioOpinion.querySelector(
        'input[name="calificacion"]:checked'
      );
      var errores = [];

      if (!nombre.value.trim() || nombre.value.trim().length < 2) {
        errores.push("Escribe tu nombre.");
        marcarCampo(nombre, true);
      } else {
        marcarCampo(nombre, false);
      }

      if (!correoValido(correo.value)) {
        errores.push("Ingresa un correo electrónico válido.");
        marcarCampo(correo, true);
      } else {
        marcarCampo(correo, false);
      }

      if (!calificacion) {
        errores.push("Selecciona una calificación de 1 a 5 estrellas.");
      }

      if (texto.value.trim().length < 10) {
        errores.push("Cuéntanos un poco más (mínimo 10 caracteres).");
        marcarCampo(texto, true);
      } else {
        marcarCampo(texto, false);
      }

      if (errores.length > 0) {
        mostrarMensaje(mensajeOpinion, errores[0], false);
        return;
      }

      var valor = parseInt(calificacion.value, 10);

      opiniones.unshift({
        id: "opinion-" + Date.now(),
        nombre: nombre.value.trim(),
        calificacion: valor,
        fecha: new Date().toISOString(),
        texto: texto.value.trim()
      });
      contadores[String(valor)] += 1;

      guardarJSON(CLAVE_OPINIONES, opiniones);
      guardarJSON(CLAVE_CONTADORES, contadores);

      formularioOpinion.reset();
      [nombre, correo, texto].forEach(function (campo) {
        marcarCampo(campo, false);
      });

      renderizarOpiniones();
      renderizarResumen();
      mostrarMensaje(
        mensajeOpinion,
        "¡Gracias por tu opinión! Ya forma parte de FitBalance.",
        true
      );
      mostrarToast("¡Gracias por compartir tu opinión!");
    });
  }

  if (formularioContacto) {
    formularioContacto.addEventListener("submit", function (evento) {
      evento.preventDefault();

      var nombre = document.getElementById("nombreContacto");
      var correo = document.getElementById("correoContacto");
      var asunto = document.getElementById("asuntoContacto");
      var mensaje = document.getElementById("mensajeContacto");
      var errores = [];

      if (nombre.value.trim().length < 2) {
        errores.push("Escribe tu nombre completo.");
        marcarCampo(nombre, true);
      } else {
        marcarCampo(nombre, false);
      }

      if (!correoValido(correo.value)) {
        errores.push("Ingresa un correo electrónico válido.");
        marcarCampo(correo, true);
      } else {
        marcarCampo(correo, false);
      }

      if (!asunto.value) {
        errores.push("Selecciona un asunto.");
        marcarCampo(asunto, true);
      } else {
        marcarCampo(asunto, false);
      }

      if (mensaje.value.trim().length < 10) {
        errores.push("Escribe un mensaje de al menos 10 caracteres.");
        marcarCampo(mensaje, true);
      } else {
        marcarCampo(mensaje, false);
      }

      if (errores.length > 0) {
        mostrarMensaje(mensajeContactoFormulario, errores[0], false);
        return;
      }

      formularioContacto.reset();
      [nombre, correo, asunto, mensaje].forEach(function (campo) {
        marcarCampo(campo, false);
      });

      mostrarMensaje(
        mensajeContactoFormulario,
        "Mensaje enviado. Te responderemos lo antes posible.",
        true
      );
      mostrarToast("¡Mensaje enviado! Gracias por escribirnos.");
    });
  }

  function actualizarCabecera() {
    if (!cabecera) return;
    cabecera.classList.toggle("con-desplazamiento", window.scrollY > 8);
  }

  window.addEventListener("scroll", actualizarCabecera, { passive: true });
  actualizarCabecera();

  function cerrarMenu() {
    if (!cabecera) return;
    cabecera.classList.remove("menu-abierto");
    document.body.classList.remove("menu-abierto");
    if (botonMenu) {
      botonMenu.setAttribute("aria-expanded", "false");
      botonMenu.setAttribute("aria-label", "Abrir menú");
    }
  }

  if (botonMenu) {
    botonMenu.addEventListener("click", function () {
      var abierto = cabecera.classList.toggle("menu-abierto");
      document.body.classList.toggle("menu-abierto", abierto);
      botonMenu.setAttribute("aria-expanded", String(abierto));
      botonMenu.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    });
  }

  if (fondoMenu) {
    fondoMenu.addEventListener("click", cerrarMenu);
  }

  Array.prototype.forEach.call(document.querySelectorAll(".nav-enlace"), function (enlace) {
    enlace.addEventListener("click", cerrarMenu);
  });

  document.addEventListener("keydown", function (evento) {
    if (evento.key !== "Escape") return;
    var estabaAbierto = cabecera && cabecera.classList.contains("menu-abierto");
    cerrarMenu();
    if (estabaAbierto && botonMenu) botonMenu.focus();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) cerrarMenu();
  });

  var secciones = [
    "inicio",
    "caracteristicas",
    "vista-previa",
    "opiniones",
    "preguntas",
    "contacto"
  ];
  var enlacesNav = {};

  Array.prototype.forEach.call(document.querySelectorAll(".nav-enlace"), function (enlace) {
    var destino = enlace.getAttribute("href");
    if (destino && destino.charAt(0) === "#") {
      enlacesNav[destino.slice(1)] = enlace;
    }
  });

  function marcarActivo(id) {
    Object.keys(enlacesNav).forEach(function (clave) {
      var activo = clave === id;
      enlacesNav[clave].classList.toggle("activo", activo);
      if (activo) {
        enlacesNav[clave].setAttribute("aria-current", "location");
      } else {
        enlacesNav[clave].removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window) {
    var observadorSecciones = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            marcarActivo(entrada.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    secciones.forEach(function (id) {
      var seccion = document.getElementById(id);
      if (seccion) observadorSecciones.observe(seccion);
    });
  }

  var nombresPlataforma = {
    iOS: "iOS",
    Android: "Android",
    Web: "la web"
  };

  Array.prototype.forEach.call(document.querySelectorAll("[data-descarga]"), function (boton) {
    boton.addEventListener("click", function () {
      var plataforma = boton.getAttribute("data-descarga");
      mostrarToast(
        "La versión para " +
          (nombresPlataforma[plataforma] || plataforma) +
          " estará disponible muy pronto. ¡Gracias por tu interés!"
      );
    });
  });

  Array.prototype.forEach.call(document.querySelectorAll("[data-red]"), function (boton) {
    boton.addEventListener("click", function () {
      mostrarToast(
        "Nuestro perfil de " +
          boton.getAttribute("data-red") +
          " estará disponible pronto."
      );
    });
  });

  var anio = document.getElementById("anioActual");
  if (anio) {
    anio.textContent = new Date().getFullYear();
  }

  renderizarOpiniones();
  renderizarResumen();
})();
