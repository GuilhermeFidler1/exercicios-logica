// sq2 - ex 13
// Verifique Votação: Peça ao usuario para inserir sua idade e verifique se ele é elegivel para votar(idade de 16 anos).

let idade = prompt("Qual a sua idade?")
if(idade >=16){
    alert("Você é elegivel para votar")
}else{
    alert("Você não é elegivel para votar")
}
if(idade > 99){
    alert("Você ainda está vivo para votar?")
}