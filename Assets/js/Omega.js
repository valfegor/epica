let boton = document.getElementById("boton");
let nombre = document.getElementById("nombre");
let album = document.getElementById("album");
let año = document.getElementById("año");
let compositor = document.getElementById("compositor");
let tiempo = document.getElementById("tiempo");

console.log(boton);

boton.onclick = function () {
  ingresardatos();
};

const ingresardatos = function () {
    //inicializamos la variable en donde se va a guardar la cadena del usuario.
  let Nombre = prompt("Ingrese el nombre de la banda Por favor");
  //como el usuario aveces es pendejo se utiliza esto para que la entrada sea en minisculas.
  Nombre = Nombre.toLocaleLowerCase();

  //si nombre esta vacio o por el contrario el usuario cancela el boton o no coloca la opcion correcta
  //Se llama la funcion para que pinte en pantalla lo mismo es decir no continua
  if (Nombre == null || Nombre == "" || Nombre != "epica") {
    validarStorage();
    //retorna y no continua las validaciones
    return alert("Dejo un campo vacio o no es el Nombre de la banda");
  }
  let Album = prompt("ingrese el album por favor");
  Album = Album.toLocaleLowerCase();

  if (Album == null || Album == ""  || Album != "omega") {
    validarStorage();
    return alert("Dejo un campo vacio o verifique que sea el nombre correcto del ALBUM");
  }
  let Año = prompt("ingrese el año por favor");

  if (Año == null || Año == "" || Año!== "2020") {
    validarStorage();
    return alert("Dejo un campo vacio o la fecha no corresponde");
  }
  let Compositor = prompt("ingrese por favor el compositor");
  Compositor= Compositor.toLocaleLowerCase();

  if (Compositor == null || Compositor == "" || Compositor!="mark jansen") {
    validarStorage();
    return alert("Dejo un campo vacio o no es el nombre correcto del compositor");
  }
  let Tiempo = prompt("ingrese el tiempo por favor recuerde debe ir separado de : ");

  if (Tiempo == null || Tiempo == "" || Tiempo !=="4:48") {
    validarStorage();
    return alert("Dejo un campo vacio");
  }
  //si todo lo anterior  se cumple se escribe en pantalla
  nombre.innerHTML="Nombre :" +Nombre;
  album.innerHTML = "Album :" + Album;
  año.innerHTML = "Año :" + Año;
  compositor.innerHTML = "Compositor" + Compositor;
  tiempo.innerHTML = "Tiempo" + Tiempo;
  localStorage.setItem('nombre',Nombre);
  localStorage.setItem('album',Album);
  localStorage.setItem('año',Año);
  localStorage.setItem('compositor',Compositor);
  localStorage.setItem('tiempo',Tiempo);


  

};

//funcion para validar si contiene los datos la BD del navegador

const validarStorage=()=>{
    //si todas las condiciones se cumplen es decir si todos los campos estan llenos
    if(localStorage.getItem('nombre') && localStorage.getItem('album') && localStorage.getItem('año') &&localStorage.getItem('compositor') && localStorage.getItem('tiempo')){
        //va a escribir en cada H2 el nombre que tenga almacenado en la BD del navegador
        nombre.innerHTML="Nombre:" + "" + localStorage.getItem('nombre');
        album.innerHTML="Album:" + localStorage.getItem('album');
        año.innerHTML="Año:" + localStorage.getItem('año');
        compositor.innerHTML="Compositor:" + localStorage.getItem('compositor');
        tiempo.innerHTML="Tiempo:" + localStorage.getItem('tiempo');

    }
    //si ninguno de los anteriores se cumple se escribe en los h2 los siguientes textos
    else{
        nombre.innerHTML="Nombre : Sin nombre";
        album.innerHTML="Album : Sin datitos";
        año.innerHTML = "Año : Sin datos";
        compositor.innerHTML = "Compositor : sin datos";
        tiempo.innerHTML = "Tiempo : sin datos";


    }
}
//se llama la funcion para que realice el proceso de existir los datos en la bd
validarStorage();