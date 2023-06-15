$(document).ready(function() {
  // Adicionar ícones aos botões
  $(".remover").html("<i class='fas fa-trash'></i>");

  // Função de validação do nome usando jQuery
  function validarNome() {
    var nome = $("#nome").val();
    if (nome.length < 3) {
      $("#nomeErro").text("O nome deve ter no mínimo 3 caracteres");
    } else {
      $("#nomeErro").text("");
    }
  }

  // Função de validação do email usando jQuery
  function validarEmail() {
    var email = $("#email").val();
    if (email.length === 0) {
      $("#emailErro").text("O email é obrigatório");
    } else {
      $("#emailErro").text("");
    }
  }

  // Função de validação da senha usando jQuery
  function validarSenha() {
    var senha = $("#senha").val();
    if (senha.length < 6) {
      $("#senhaErro").text("A senha deve ter no mínimo 6 caracteres");
    } else {
      $("#senhaErro").text("");
    }
  }

  // Vincular eventos usando jQuery
  $("#nome").on("keyup", validarNome);
  $("#email").on("keyup", validarEmail);
  $("#senha").on("keyup", validarSenha);
});

function cadastrarUsuario() {
  var nome = $("#nome").val();
  var email = $("#email").val();
  var senha = $("#senha").val();

  if (nome.length < 3 || email.length === 0 || senha.length < 6) {
    console.log("Preencha todos os campos corretamente");
    return;
  }

  var usuario = {
    nome: nome,
    email: email,
    senha: senha
  };

  adicionarUsuarioLista(usuario);
  limparFormulario();

  console.log("Usuário cadastrado com sucesso");
}

function adicionarUsuarioLista(usuario) {
  var listaUsuarios = $("#usuarios");
  var itemLista = $("<li></li>");
  itemLista.html(`<span class="nome">${usuario.nome}</span> - <span class="email">${usuario.email}</span> <button class="remover" onclick="removerUsuario(this)">Remover</button>`);
  listaUsuarios.append(itemLista);

  // Adicionar ícone ao botão de remover
  itemLista.find(".remover").html("<i class='fas fa-trash'></i>");

  console.log("Usuário adicionado à lista: ", usuario);
}

function limparFormulario() {
  $("#nome").val("");
  $("#email").val("");
  $("#senha").val("");
}

function removerUsuario(botao) {
  $(botao).parent().remove();
  console.log("Usuário removido da lista");
}

function carregarDados() {
  adicionarUsuarioLista({ nome: "Exemplo 1", email: "exemplo1@gmail.com", senha: "123456" });
  adicionarUsuarioLista({ nome: "Exemplo 2", email: "exemplo2@gmail.com", senha: "abcdef" });
}
