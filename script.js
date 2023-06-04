function encriptar() {
  var input = document.getElementById('inputText').value;
  var output = '';

  for (var i = 0; i < input.length; i++) {
    var char = input.charAt(i);

    output += encriptarLetra(char);
    content.style.display = 'none';
    btnCopy.style.display = 'block';
  }

  document.getElementById('outputText').textContent = output;
}

function encriptarLetra(char) {
  var letrasEncriptadas = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };

  if (letrasEncriptadas.hasOwnProperty(char)) {
    return letrasEncriptadas[char];
  } else {
    return char;
  }
}

function desencriptar() {
  var input = document.getElementById('inputText').value;
  var output = '';

  var words = input.split(' ');
  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    output += desencriptarLetra(word) + ' ';
    content.style.display = 'none';
    btnCopy.style.display = 'block';
  }

  document.getElementById('outputText').textContent = output.trim();
}

function desencriptarLetra(char) {
  var letrasDesencriptadas = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };

  for (var key in letrasDesencriptadas) {
    if (char.includes(key)) {
      char = char.replace(key, letrasDesencriptadas[key]);
    }
  }

  return char;
}

function copiarTexto() {
  var outputText = document.getElementById('outputText');
  
  // Crear un elemento de texto temporal
  var tempInput = document.createElement('textarea');
  tempInput.value = outputText.textContent;

  // Agregar el elemento de texto temporal al documento
  document.body.appendChild(tempInput);

  // Seleccionar y copiar el texto
  tempInput.select();
  document.execCommand('copy');

  // Eliminar el elemento de texto temporal
  document.body.removeChild(tempInput);
}
