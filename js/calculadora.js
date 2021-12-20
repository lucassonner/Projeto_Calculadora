//Função que recebe o valor do botao clicado
function botoes(valor) {
	if(valor == "*" || valor == "-" || valor == "+" || valor == "/") {//Verifica se o valor que entrou é um operador
		if (valor == document.display.resultado.value.substr(-1)) {//Verifica se o operador é igual a última posição da string
			return;
		}
		//Verifica se a última posição da string é um operador, no caso do operador não ser igual ao anterior
		if(document.display.resultado.value.substr(-1) == "*" || document.display.resultado.value.substr(-1) == "-" 
			|| document.display.resultado.value.substr(-1) == "+" || document.display.resultado.value.substr(-1) == "/"){
			document.display.resultado.value = document.display.resultado.value.substr(0, document.display.resultado.value.length - 1);
			//A string recebe todo o valor dela menos a última posição
		}
	}
	//A string recebe a concatenação dos valores digitados no display
	document.display.resultado.value = document.display.resultado.value + valor;
}

//Função para limpar o display
function limpar() {
	 document.display.resultado.value = '';
}

//Função para apagar um ou mais caracteres display
function apagar() {
	 var apagar = document.display.resultado.value; // Variável 'apagar' recebe a string digitada no display
	 document.display.resultado.value = apagar.substring(0, apagar.length - 1);
	 //O display recebe o valor da variável - 1 caractere
}

//Calcular o resultado do string digitado no display
function calculaTotal(){
	var display = document.display.resultado.value;//Variável 'display' recebe o valor digitado no input
	var total = display.split(/\b/);//Variável 'total' converte a string do input em array
	
		//Verifica se existe casa decimal 
		for(var i = 0; i < total.length; i++) {
			if(total[i] == ".") {
				total[i-1] = total[i-1] + total[i] + total[i+1];
				total.splice(i,2);//Remove os índices já lidos do array 
				i--;//Volta a posição anterior do array, um vez que o array muda de tamanho com as exclusões
			}
		}

		//Priorizando o cálculo da multiplicação ou divisão
		for (var i = 0; i < total.length; i++) {
			if(total[i] == '*') {
				total[i-1] = total[i-1] * total[i+1];
				total.splice(i,2);//Remove os índices já lidos do array 
				i--;//Volta a posição anterior do array, um vez que o array muda de tamanho com as exclusões
			} 
			if(total[i] == '/') {
				total[i-1] = total[i-1] / total[i+1];
				total.splice(i,2);//Remove os índices já lidos do array
				i--;//Volta a posição anterior do array, um vez que o array muda de tamanho com as exclusões
			} 
		}
		
		//Realizando o cálculo da subtração
		for(var i = 0; i < total.length; i++) {		
			if(total[i] == '-') {
				total[i-1] = total[i-1] - total[i+1];
				total.splice(i,2); //Remove os índices já lidos do array
				i--;//Volta a posição anterior do array, um vez que o array muda de tamanho com as exclusões
			}
		}

		//Realizando o cálculo da soma
		for(var i = 0; i < total.length; i++) {
			if(total[i] == "+") {
				total[i-1] = parseFloat(total[i-1]) + parseFloat(total[i+1]); //Transforma a string em número inteiro
				total.splice(i,2);//Remove os índices já lidos do array
				i--;//Volta a posição anterior do array, um vez que o array muda de tamanho com as exclusões
			}	
		}

		//Mostra o resultado do cálculo da string
		document.display.resultado.value = document.display.resultado.value + ' = ' + total;
}