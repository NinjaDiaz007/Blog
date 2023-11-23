let btn_modal = document.getElementById("btn-modal-totem");
let text = document.getElementById("name-totem");
let imgTotem = document.getElementById("img-totem");
let textTotem = document.getElementById("text-totem");

let p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, nota;
let animalTotem = [
	{
		name:"Unicornio",
		img: "./img/unicord.png",
		text: "Personas soñadoras y conectadas con la esencia mágica de la vida. Valorizan la pureza y la búsqueda de la verdad. Buscan la belleza y la simplicidad en todo lo que hacen."
	},
	{
		name: "Pegaso",
		img: "./img/pegasus.png",
		text: "Personas equilibradas y elegantes. Valoran la armonía y la gracia en todas las áreas de la vida. Pueden tener una visión optimista y buscan la conexión con la naturaleza."
	},
	{
		name: "Fénix",
		img: "./img/phoenix.png",
		text: "Individuos creativos y resilientes. Encaran los desafíos con determinación y renacen de las cenizas de las dificultades. Buscan constantemente la renovación y la transformación."
	},
	{
		name: "Esfinge",
		img: "./img/sphinx.png",
		text: "Personas estratégicas y astutas. Tienen una mente analítica y buscan resolver problemas con sabiduría y paciencia. Son observadores y disfrutan de la reflexión."
	},
	{
		name: "kitsune",
		img: "./img/kitsune.png",
		text: "Individuos compasivos y empáticos. Priorizan las relaciones interpersonales, la lealtad y la honestidad. Buscan la paz y la comprensión en sus interacciones."
	},
	{
		name: "Dragón",
		img: "./img/dragon.png",
		text: "Personas poderosas y enérgicas. Tienen una determinación férrea y son líderes naturales. Buscan la fuerza y la sabiduría para enfrentar los desafíos."
	}]

// Funcion Prencipal
function Resultados() {
	// 1a pregunta
    if (document.getElementById('p1-1').checked==true) {p1=20}
    else if (document.getElementById('p1-2').checked==true) {p1=30}
    else if (document.getElementById('p1-3').checked==true) {p1=10}
    else {p1=40}
    	console.log(p1); //listo

    // 2a pregunta
    if (document.getElementById('p2-1').checked==true) {p2=30}
    else if (document.getElementById('p2-2').checked==true) {p2=20}
    else if (document.getElementById('p2-3').checked==true) {p2=10}
    else {p2=40}

    	console.log(p2); //listo
    // 3a pregunta
    if (document.getElementById('p3-1').checked==true) {p3=30}
    else if (document.getElementById('p3-2').checked==true) {p3=20}
    else if (document.getElementById('p3-3').checked==true) {p3=10}
    else {p3=40}
    	console.log(p3); //listo

    // 4a pregunta
    if (document.getElementById('p4-1').checked==true) {p4=30}
    else if (document.getElementById('p4-2').checked==true) {p4=40}
    else if (document.getElementById('p4-3').checked==true) {p4=10}
    else {p4=20}
    	console.log(p4); //listo

    // 5a pregunta
    if (document.getElementById('p5-1').checked==true) {p5=40}
    else if (document.getElementById('p5-2').checked==true) {p5=10}
    else if (document.getElementById('p5-3').checked==true) {p5=30}
    else {p5=20}
    	console.log(p5); //listo

    // 6a pregunta
    if (document.getElementById('p6-1').checked==true) {p6=40}
    else if (document.getElementById('p6-2').checked==true) {p6=30}
    else if (document.getElementById('p6-3').checked==true) {p6=10}
    else {p6=20}
    	console.log(p6); //listo

    // 7a pregunta
    if (document.getElementById('p7-1').checked==true) {p7=30}
    else if (document.getElementById('p7-2').checked==true) {p7=20}
    else if (document.getElementById('p7-3').checked==true) {p7=40}
    else {p7=10}
    	console.log(p7); //listo

    // 8a pregunta
    if (document.getElementById('p8-1').checked==true) {p8=20}
    else if (document.getElementById('p8-2').checked==true) {p8=30}
    else if (document.getElementById('p8-3').checked==true) {p8=10}
    else {p8=40}
    	console.log(p8); //listo

    // 9a pregunta
    if (document.getElementById('p9-1').checked==true) {p9=30}
    else if (document.getElementById('p9-2').checked==true) {p9=40}
    else if (document.getElementById('p9-3').checked==true) {p9=20}
    else {p9=10}
    	console.log(p9); //listos

    // 10a pregunta
    if (document.getElementById('p10-1').checked==true) {p10=30}
    else if (document.getElementById('p10-2').checked==true) {p10=20}
    else if (document.getElementById('p10-3').checked==true) {p10=10}
    else {p10=40}
    	console.log(p10);

    nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10;
    console.log(nota);

    // Condiciones para saber tu totem animal
    // Dragon 100 a 150
    if(nota > 100 && nota <= 150){
    	text.innerText = animalTotem[5].name;
    	textTotem.innerText = animalTotem[5].text;
    	imgTotem.src = animalTotem[5].img;
    	btn_modal.checked = true;
    }// Unicornio 160 a 200
    else if(nota > 150 && nota <= 200){
    	text.innerText = animalTotem[0].name;
    	textTotem.innerText = animalTotem[0].text;
    	imgTotem.src = animalTotem[0].img;
    	btn_modal.checked = true;
    }// Esfinge 210 a 250
    else if(nota > 200 && nota <= 250){
    	text.innerText = animalTotem[3].name;
    	textTotem.innerText = animalTotem[3].text;
    	imgTotem.src = animalTotem[3].img;
    	btn_modal.checked = true;
    }// Pegaso 260 a 300
    else if(nota > 250 && nota <= 300){
    	text.innerText = animalTotem[3].name;
    	textTotem.innerText = animalTotem[3].text;
    	imgTotem.src = animalTotem[3].img;
    	btn_modal.checked = true;
    }// Kitsune 310 a 350
    else if(nota > 25 && nota <= 30){
    	text.innerText = animalTotem[4].name;
    	textTotem.innerText = animalTotem[4].text;
    	imgTotem.src = animalTotem[4].img;
    	btn_modal.checked = true;
    }// Fenix 360 a 400
    else{
    	text.innerText = animalTotem[2].name;
    	textTotem.innerText = animalTotem[2].text;
    	imgTotem.src = animalTotem[2].img;
    	btn_modal.checked = true;
    }
}

function CerrarModal(){
	btn_modal.checked = false;
	window.location = 'index.html'
}