
function adicionarComentario() {
    const comentarioText = document.getElementById('novo-comentario').value;
    if (comentarioText.trim() !== "") {
        const comentarioDiv = document.createElement('div');
        comentarioDiv.classList.add('comentario');
        
        const comentarioP = document.createElement('p');
        comentarioP.innerHTML = `<strong>Você:</strong> ${comentarioText}`;
        
        comentarioDiv.appendChild(comentarioP);
        document.querySelector('.comentarios-container').appendChild(comentarioDiv);
        
        document.getElementById('novo-comentario').value = ''; // Limpar o campo de texto
    } else {
        alert('Por favor, escreva um comentário!');
    }
}