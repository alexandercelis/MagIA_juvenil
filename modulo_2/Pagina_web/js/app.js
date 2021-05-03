const seccionesPag = new fullpage("#fullpage", {
    autoScrolling: true, // Se activa el scroll.
    fitToSection: true, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
    fitToSectionDelay: 0, // Delay antes de acomodar la seccion automaticamente.
    easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
    scrollingSpeed: 1300, // Velocidad del scroll. Valores: en milisegundos.
    css3: true, // Si usara CSS3 o javascript.
    easingcss3: 'ease-out', // Curva de velocidad del efecto.
    loopBottom: TextTrackCueList, // Regresa a la primera seccion siempre y cuando se ya haya llegado a la ultima sección y el ususario siga scrolleando.
    // ──────────────────────────────────────────────────
    //   :::::: Barra de navegación
    // ──────────────────────────────────────────────────
    navigation: true, // Muesta la barra de navegación.
    menu: '#menu', // Menu de navegación.
    anchors: ['.header1', '.header2', '.header3', '.header4', '.header5'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
    navigationTooltips: ['pag1', 'pag2', 'pag3', 'pag4', 'pag5'], // Tooltips que mostrara por cada boton.
    showActiveTooltip: false, // Mostrar tooltip activa.
    // ──────────────────────────────────────────────────
    //   :::::: Secciones
    // ──────────────────────────────────────────────────
    verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.
    // ──────────────────────────────────────────────────
    //   :::::: Slides
    // ──────────────────────────────────────────────────
    controlArrows: false, // Flechas del slide
    slidesNavigation: false, // Indicadores del slide
});