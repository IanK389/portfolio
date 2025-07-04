/* Script para o site de portfólio
  Este script adiciona funcionalidades interativas ao portfólio, como validação de formulário,
  exibição de detalhes de projetos e modo escuro. */

/* Função para validar o formulário de contato */
function validarFormulario() {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return false;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValido.test(email)) {
    alert('Digite um e-mail válido.');
    return false;
  }

  alert('Mensagem enviada com sucesso!');
  return true;
}

/* Adiciona o evento de clique a todos os projetos para mostrar/ocultar detalhes */
function mostrarDetalhes(elemento) {
  const detalhes = elemento.querySelector('.detalhes');
  detalhes.style.display = detalhes.style.display === 'block' ? 'none' : 'block';
}

/* Seleciona o botão de modo escuro e adiciona o evento de clique para alternar o modo escuro */
const btnModoEscuro = document.getElementById('modoEscuroBtn');

/* Adiciona o evento de clique ao botão de modo escuro */
btnModoEscuro.addEventListener('click', () => {
  document.body.classList.toggle('modo-escuro');
  localStorage.setItem('modoEscuro', document.body.classList.contains('modo-escuro'));
});

/* Verifica o estado do modo escuro ao carregar a página */
window.addEventListener('load', () => {
  if (localStorage.getItem('modoEscuro') === 'true') {
    document.body.classList.add('modo-escuro');
  }
});
