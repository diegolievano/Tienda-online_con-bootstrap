var todosP = [{
    "imagen": '<img src="img/1.jpg">',
    "nombre": "Martillo Sencillo",
    "precio": 300,
    "cantidad": 3,
    "agregar": 0,


},
{
    "imagen": '<img src="img/2.jpg">',
    "nombre": "Martillo",
    "precio": 200,
    "cantidad": 2,
    "agregar": 0

},
{
    "imagen": '<img src="img/2.jpg">',
    "nombre": "Martillo de acero",
    "precio": 250,
    "cantidad": 4,
    "agregar": 0
},
{
    "imagen": '<img src="img/4.jpg">',
    "nombre": "Motosierra-Stanley",
    "precio": 400,
    "cantidad": 1,
    "agregar": 0
},
{
    "imagen": '<img src="img/garden-machete.png">',
    "nombre": "Garden-machete",
    "precio": 100,
    "cantidad": 1,
    "agregar": 0
},
{
    "imagen": '<img src="img/MOTOSIERA_de_gasolina_Poda.jpg">',
    "nombre": "Motosierra_de_gasolina_Poda",
    "precio": 500,
    "cantidad": 1,
    "agregar": 0
},
{
    "imagen": '<img src="img/motosierra_STIHL.jpg">',
    "nombre": "Motosierra-STIHL",
    "precio": 300,
    "cantidad": 1,
    "agregar": 0
},
{
    "imagen": '<img src="img/77459434PDM001G.jpg" >',
    "nombre": "Pala-coa-mangoDeMadera",
    "precio": 300,
    "cantidad": 1,
    "agregar": 0
},
{
    "imagen": '<img src="img/DSP-500x500.jpeg">',
    "nombre": "Serrucho-de-poda-plegable",
    "precio": 300,
    "cantidad": 1,
    "agregar": 0
},
{
    "imagen": '<img src="img/farm-machete-1.jpg">',
    "nombre": "Tramontina-machete",
    "precio": 300,
    "cantidad": 1,
    "agregar": 0
}
];

/* funciones del boton */

var subf = 0;
var aux = 0;
var iva = 0;
var tl = 0;

function sub() {
    subf = subf + aux;
}
function ivaf() {
    iva = subf * 0.16;
}
function ttl() {
    ivaf();
    tl = subf + iva;
}

function guardar(producto) {
    alert( "El proucto que se agrego se llama \n" + todosP[producto].nombre);
    
    todosP[producto].agregar = todosP[producto].agregar + 1;



    // subtotal= todosP[producto].agregar*todosP[producto].precio;
    aux = todosP[producto].precio;
    sub();
    ttl();
    document.getElementById("tablacarrito1").innerHTML = '<tbody><td>' + '<img src="img/1.jpg" class="conim">' + '</td><td>' + todosP[producto].nombre + '</td><td>' + todosP[producto].agregar + '</td><td>' + "$" + " " + todosP[producto].precio + '</td><td>' + "$" + " " + subf + '</td><td>' + iva + '</td><td>' + "$" + " " + tl + '</td></tbody>';
 
 }

var subff = 0;
var auxx = 0;
var ivaa = 0;
var tll = 0;

function subb() {
    subff = subff + auxx;
}
function ivaff() {
    ivaa = subff * 0.16;
}
function ttll() {
    ivaff();
    tll = subff + ivaa;
}
function guardar1(producto) {
    alert("El producto que se agrego se llama \n" + todosP[producto].nombre);
    todosP[producto].agregar = todosP[producto].agregar + 1;
    // subtotal= todosP[producto].agregar*todosP[producto].precio;
    auxx = todosP[producto].precio;
    subb();
    ttll();
    document.getElementById("tablacarrito2").innerHTML = '<tbody><td>' + '<img src="img/2.jpg" class="conim">' + '</td><td>' + todosP[producto].nombre + '</td><td>' + todosP[producto].agregar + '</td><td>' + "$" + " " + todosP[producto].precio + '</td><td>' + "$" + " " + subff + '</td><td>' + ivaa + '</td><td>' + "$" + " " + tll + '</td></tbody>';
}
var subfff = 0;
var auxxx = 0;
var ivaaa = 0;
var tlll = 0;

function subbb() {
    subfff = subfff + auxxx;
}
function ivafff() {
    ivaaa = subfff * 0.16;
}
function ttlll() {
    ivafff();
    tlll = subfff + ivaaa;
}
function guardar2(producto) {
    alert("El producto que se agrego se llama \n" + todosP[producto].nombre);
    todosP[producto].agregar = todosP[producto].agregar + 1;
    //subtotal= todosP[producto].agregar*todosP[producto].precio;
    auxxx = todosP[producto].precio;
    subbb();
    ttlll();
    document.getElementById("tablacarrito3").innerHTML = '<tbody><td>' + '<img src="img/2.jpg" class="conim">' + '</td><td>' + todosP[producto].nombre + '</td><td>' + todosP[producto].agregar + '</td><td>' + "$" + " " + todosP[producto].precio + '</td><td>' + "$" + " " + subfff + '</td><td>' + ivaaa + '</td><td>' + "$" + " " + tlll + '</td></tbody>';
}
var subffff = 0;
var auxxxx = 0;
var ivaaaa = 0;
var tllll = 0;

function subbbb() {
    subffff = subffff + auxxxx;
}
function ivaffff() {
    ivaaaa = subffff * 0.16;
}
function ttllll() {
    ivaffff();
    tllll = subffff + ivaaaa;
}
function guardar3(producto) {
    alert("El producto que se agrego se llama \n" + todosP[producto].nombre);
    todosP[producto].agregar = todosP[producto].agregar + 1;
    //subtotal= todosP[producto].agregar*todosP[producto].precio;
    auxxxx = todosP[producto].precio;
    subbbb();
    ttllll();
    document.getElementById("tablacarrito4").innerHTML = '<tbody><td>' + '<img src="img/4.jpg" class="conim">' + '</td><td>' + todosP[producto].nombre + '</td><td>' + todosP[producto].agregar + '</td><td>' + "$" + " " + todosP[producto].precio + '</td><td>' + "$" + " " + subffff + '</td><td>' + ivaaaa + '</td><td>' + "$" + " " + tllll + '</td></tbody>';
}
var subfffff = 0;
var auxxxxx = 0;
var ivaaaaa = 0;
var tlllll = 0;

function subbbbb() {
    subfffff = subfffff + auxxxxx;
}
function ivafffff() {
    ivaaaaa = subfffff * 0.16;
}
function ttlllll() {
    ivafffff();
    tlllll = subfffff + ivaaaaa;
}
function guardar4(producto) {
    alert("El producto que se agrego se llama \n" + todosP[producto].nombre);
    todosP[producto].agregar = todosP[producto].agregar + 1;
    //subtotal= todosP[producto].agregar*todosP[producto].precio;
    auxxxxx = todosP[producto].precio;
    subbbbb();
    ttlllll();
    document.getElementById("tablacarrito5").innerHTML = '<tbody><td>' + '<img src="img/garden-machete.png" class="conim">' + '</td><td>' + todosP[producto].nombre + '</td><td>' + todosP[producto].agregar + '</td><td>' + "$" + " " + todosP[producto].precio + '</td><td>' + "$" + " " + subfffff + '</td><td>' + ivaaaaa + '</td><td>' + "$" + " " + tlllll + '</td></tbody>';
}
var subffffff = 0;
var auxxxxxx = 0;
var ivaaaaaa = 0;
var tllllll = 0;

function subbbbbb() {
    subffffff = subffffff + auxxxxxx;
}
function ivaffffff() {
    ivaaaaaa = subffffff * 0.16;
}
function ttllllll() {
    ivaffffff();
    tllllll = subffffff + ivaaaaaa;
}
function guardar5(producto) {
    alert("El producto que se agrego se llama \n" + todosP[producto].nombre);
    todosP[producto].agregar = todosP[producto].agregar + 1;
    //subtotal= todosP[producto].agregar*todosP[producto].precio;
    auxxxxxx = todosP[producto].precio;
    subbbbbb();
    ttllllll();
    document.getElementById("tablacarrito6").innerHTML = '<tbody><td>' + '<img src="img/MOTOSIERA_de_gasolina_Poda.jpg" class="conim">' + '</td><td>' + todosP[producto].nombre + '</td><td>' + todosP[producto].agregar + '</td><td>' + "$" + " " + todosP[producto].precio + '</td><td>' + "$" + " " + subffffff + '</td><td>' + ivaaaaaa + '</td><td>' + "$" + " " + tllllll + '</td></tbody>';
}
var subfffffff = 0;
var auxxxxxxx = 0;
var ivaaaaaaa = 0;
var tlllllll = 0;

function subbbbbbb() {
    subfffffff = subfffffff + auxxxxxxx;
}
function ivafffffff() {
    ivaaaaaaa = subfffffff * 0.16;
}
function ttlllllll() {
    ivafffffff();
    tlllllll = subfffffff + ivaaaaaaa;
}
function guardar6(producto) {
    alert("El producto que se agrego se llama \n" + todosP[producto].nombre);
    todosP[producto].agregar = todosP[producto].agregar + 1;
    //subtotal= todosP[producto].agregar*todosP[producto].precio;
    auxxxxxxx = todosP[producto].precio;
    subbbbbbb();
    ttlllllll();
    document.getElementById("tablacarrito7").innerHTML = '<tbody><td>' + '<img src="img/motosierra_STIHL.jpg" class="conim">' + '</td><td>' + todosP[producto].nombre + '</td><td>' + todosP[producto].agregar + '</td><td>' + "$" + " " + todosP[producto].precio + '</td><td>' + "$" + " " + subfffffff + '</td><td>' + ivaaaaaaa + '</td><td>' + "$" + " " + tlllllll + '</td></tbody>';
}
var subffffffff = 0;
var auxxxxxxxx = 0;
var ivaaaaaaaa = 0;
var tllllllll = 0;

function subbbbbbbb() {
    subffffffff = subffffffff + auxxxxxxxx;
}
function ivaffffffff() {
    ivaaaaaaaa = subffffffff * 0.16;
}
function ttllllllll() {
    ivaffffffff();
    tllllllll = subffffffff + ivaaaaaaaa;
}
function guardar7(producto) {
    alert("El producto que se agrego se llama \n" + todosP[producto].nombre);
    todosP[producto].agregar = todosP[producto].agregar + 1;
    //subtotal= todosP[producto].agregar*todosP[producto].precio;
    auxxxxxxxx = todosP[producto].precio;
    subbbbbbbb();
    ttllllllll();
    document.getElementById("tablacarrito8").innerHTML = '<tbody><td>' + '<img src="img/77459434PDM001G.jpg" class="conim" >' + '</td><td>' + todosP[producto].nombre + '</td><td>' + todosP[producto].agregar + '</td><td>' + "$" + " " + todosP[producto].precio + '</td><td>' + "$" + " " + subffffffff + '</td><td>' + ivaaaaaaaa + '</td><td>' + "$" + " " + tllllllll + '</td></tbody>';
}
var subfffffffff = 0;
var auxxxxxxxxx = 0;
var ivaaaaaaaaa = 0;
var tlllllllll = 0;

function subbbbbbbbb() {
    subfffffffff = subfffffffff + auxxxxxxxxx;
}
function ivafffffffff() {
    ivaaaaaaaaa = subfffffffff * 0.16;
}
function ttlllllllll() {
    ivafffffffff();
    tlllllllll = subfffffffff + ivaaaaaaaaa;
}

/*$(".guardar").click(function (e) {
    let producto = $(this).attr("producto");
    guardar(producto);
});*/

function guardar8(producto) {
    alert("El producto que se agrego se llama \n" + todosP[producto].nombre);
    todosP[producto].agregar = todosP[producto].agregar + 1;
    //subtotal= todosP[producto].agregar*todosP[producto].precio;
    auxxxxxxxxx = todosP[producto].precio;
    subbbbbbbbb();
    ttlllllllll();
    document.getElementById("tablacarrito9").innerHTML = '<tr><td>' + '<img src="img/DSP-500x500.jpeg" class="conim">' + '</td><td>' + todosP[producto].nombre + '</td><td>' + todosP[producto].agregar + '</td><td>' + "$" + " " + todosP[producto].precio + '</td><td>' + "$" + " " + subfffffffff + '</td><td>' + ivaaaaaaaaa + '</td><td>' + "$" + " " + tlllllllll + '</td></tr>';


    //$("#tablacarrito").append('<tr><td>' + '<img src="img/DSP-500x500.jpeg">' + '</td><td>' + todosP[producto].nombre + '</td><td>' + todosP[producto].agregar + '</td><td>' + "$" + " " + todosP[producto].precio + '</td><td>' + "$" + " " + subfffffffff + '</td><td>' + ivaaaaaaaaa + '</td><td>' + "$" + " " + tlllllllll + '</td></tr>');
}
var subffffffffff = 0;
var auxxxxxxxxxx = 0;
var ivaaaaaaaaaa = 0;
var tllllllllll = 0;

function subbbbbbbbbb() {
    subffffffffff = subffffffffff + auxxxxxxxxxx;
}
function ivaffffffffff() {
    ivaaaaaaaaaa = subffffffffff * 0.16;
}
function ttllllllllll() {
    ivaffffffffff();
    tllllllllll = subffffffffff + ivaaaaaaaaaa;
}
function guardar9(producto) {
    alert("El producto que se agrego se llama \n" + todosP[producto].nombre);
    todosP[producto].agregar = todosP[producto].agregar + 1;
    //subtotal= todosP[producto].agregar*todosP[producto].precio;
    auxxxxxxxxxx = todosP[producto].precio;
    subbbbbbbbbb();
    ttllllllllll();
    document.getElementById("tablacarrito10").innerHTML = '<tbody><td>' + '<img src="img/farm-machete-1.jpg" class="conim">' + '</td><td>' + todosP[producto].nombre + '</td><td>' + todosP[producto].agregar + '</td><td>' + "$" + " " + todosP[producto].precio + '</td><td>' + "$" + " " + subffffffffff + '</td><td>' + ivaaaaaaaaaa + '</td><td>' + "$" + " " + tllllllllll + '</td></tbody>';
}

TotalP = 0;
function calc() {

    TotalP = tl + tll + tlll + tllll + tlllll + tllllll + tlllllll + tllllllll + tlllllllll + tllllllllll;
    document.getElementById("Tp").innerHTML = '<tbody><td>' + "$" + " " + TotalP + '</td></tbody>';
    console.log(TotalP);
}