const productos = [
    {id:1, nombre:"Juego De Mesa Oca Matic", precio:40 , imagen:"imagens1.webp"},
    {id:2, nombre:"Juego de mesa Memotest Infantil Ruibal",precio:30,imagen:"imagens2.webp"},
    {id:3, nombre:"Rompecabezas Tapimovil Avengers ", precio:40,imagen:"imagens3.webp"},
    {id:4, nombre:"Nuevo Rompecabezas Educa", precio:60 ,imagen:"imagens4.webp"},
    {id:5, nombre:"Super Taller De Pequeños Artesanos",precio:40 , imagen:"imagens5.webp"},
    {id:6, nombre:"Pizarra Mágica", precio:30, imagen:"imagens6.webp"},
    {id:7, nombre:"Juego De Masas", precio:45 , imagen:"imagens7.webp"},
    {id:8, nombre:"Arenas Mágicas Vehiculos", precio:50 , imagen:"imagens8.webp"},
    {id:9, nombre:"Crayola Mesa De Actividades Pinta Y Dibuja", precio:40 , imagen:"imagens9.webp"},
    {id:10, nombre:"Bloques Para Armar Rasti",precio:45,imagen:"imagens10.webp"},
    {id:11, nombre:"Ladrillos Bloques Rasti ", precio:35,imagen:"imagens11.webp"},
    {id:12, nombre:"Bloques Para Armar Rasti Kit", precio:60 ,imagen:"imagens12.webp"},
    {id:13, nombre:"Bloques Para Armar Blocky Futbol ",precio:40 , imagen:"imagens13.webp"},
    {id:15, nombre:"Bloques Blocky Dinosaurios", precio:30 , imagen:"imagens15.webp"},
    {id:16, nombre:"Bloques Grandes Blokoco Balde", precio:60 ,imagen:"imagens16.webp"},
    {id:17, nombre:"Bloques Para Construir",precio:40 , imagen:"imagens17.webp"},
    {id:18, nombre:"Bloques Rasti Construccion De Autos Y Camiones", precio:30, imagen:"imagens18.webp"},
  ];
  
  const guardarProductosLS = (productos) => {
    localStorage.setItem("productos" , JSON.stringify(productos));
  }
  
  const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
  }
  
  guardarProductosLS(productos);