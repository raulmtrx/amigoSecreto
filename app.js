// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let ha_sorteado = false;


function agregar_amigo() {
    const amigo_insertado = String(document.getElementById("amigo").value); //Nombre colocado en el campo de texto

    if (amigo_insertado != "")
    {
        //Si ya se hizo un sorteo, se reinicia el juego
        if (ha_sorteado)
        {
            const lista_de_amigos = document.getElementById("lista_amigos"); //Lista html donde se almacenan los nombres.
            
            ha_sorteado = false;
            amigos = [];
            lista_de_amigos.removeChild(lista_de_amigos.firstChild);
        }

        //Se agrega el amigo escrito en la lista
        amigos.push(amigo_insertado);
        agregar_texto_a_lista("lista_amigos", amigo_insertado);
        cambiar_texto_de_elemento("amigo", "");
    }else {
        //Se muestra una alerta si no hay ningun nombre en el campo de texto.
        alert("Por favor ingrese un nombre válido");
    }
}

function sortear_amigo() {
    if (!ha_sorteado)
    {
        const amigo_seleccionado = seleccionar_de_array(amigos);
        const lista_de_amigos = document.getElementById("lista_amigos"); //Lista html donde se almacenan los nombres.
        
        //Remueve los elementos de la lista html
        while (lista_de_amigos.firstChild) {
            const primer_elemento = lista_de_amigos.firstChild;

            lista_de_amigos.removeChild(primer_elemento);
        }

        ha_sorteado = true;
        agregar_texto_a_lista("lista_amigos", `El amigo secreto sorteado es: ¡${amigo_seleccionado}!`, true, "rgb(0, 255, 0)");
        cambiar_texto_de_elemento("amigo", "");
    }
}

//Agrega un elemento con un texto deseado a la lista y con un color deseado o generado aleatoriamente si el parametro "color" está vacio
function agregar_texto_a_lista(lista_id, texto, en_negritas, color = "") {
    const lista_html = document.getElementById(lista_id);
    const texto_a_agregar = document.createElement("li"); //Crea un elemento para la lista de html de tipo >li<

    if (!en_negritas)
    {
        texto_a_agregar.innerHTML = texto; //Se coloca el texto al elemento a agregar
    }else {
        texto_a_agregar.innerHTML = `<b>${texto}</b>`; //Se coloca el texto al elemento a agregar en negritas
    }

    if (color != "") {
        //Agrega color deseado al texto
         texto_a_agregar.style.color = color;
    } else { 
        //Agrega color aleatorio al texto
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);

        texto_a_agregar.style.color = `rgb(${red}, ${green}, ${blue})`
    }

    lista_html.append(texto_a_agregar); //Se agrega el elemento creado a la lista de html
}

//Selecciona un index aleatorio de un array
function seleccionar_de_array(array) {
    const seleccionado = Math.floor(Math.random() * array.length);

    console.log(array)

    return array[seleccionado];
}

function cambiar_texto_de_elemento(id, texto) {
    const elemento_html = document.getElementById(id);

    elemento_html.value = texto;
}