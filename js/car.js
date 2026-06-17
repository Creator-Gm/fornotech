    var entregaSelecionada = 'entrega';
    var pagamentoSelecionado = 'dinheiro';

    function selecionarOpcao(tipo) {
      var btnEntrega = document.getElementById('btnEntrega');
      var btnRetirada = document.getElementById('btnRetirada');

      if (tipo === 'entrega') {
        btnEntrega.classList.add('active');
        btnRetirada.classList.remove('active');
        entregaSelecionada = 'entrega';
      } else {
        btnEntrega.classList.remove('active');
        btnRetirada.classList.add('active');
        entregaSelecionada = 'retirada';
      }
    }

    function selecionarPagamento(tipo) {
      var btnDinheiro = document.getElementById('btnDinheiro');
      var btnPix = document.getElementById('btnPix');
      var btnCartao = document.getElementById('btnCartao');

      // desmarca todos
      btnDinheiro.classList.remove('active');
      btnPix.classList.remove('active');
      btnCartao.classList.remove('active');

      if (tipo === 'dinheiro') {
        btnDinheiro.classList.add('active');
        pagamentoSelecionado = 'dinheiro';
      } else if (tipo === 'pix') {
        btnPix.classList.add('active');
        pagamentoSelecionado = 'pix';
      } else {
        btnCartao.classList.add('active');
        pagamentoSelecionado = 'cartao';
      }
    }

    function confirmarPedido() {
      var nome = document.getElementById('nome').value;
      var endereco = document.getElementById('endereco').value;
      var telefone = document.getElementById('telefone').value;

      if (nome === '' || endereco === '' || telefone === '') {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
      }

      var resumo = 'Pedido confirmado!\n\n';
      resumo += 'Nome: ' + nome + '\n';
      resumo += 'Endereço: ' + endereco + '\n';
      resumo += 'Telefone: ' + telefone + '\n';
      resumo += 'Tipo: ' + entregaSelecionada + '\n';
      resumo += 'Pagamento: ' + pagamentoSelecionado + '\n\n';
      resumo += 'Obrigado pela preferência!';

      alert(resumo);

      // Limpa os campos após confirmar (básico)
      document.getElementById('nome').value = '';
      document.getElementById('endereco').value = '';
      document.getElementById('telefone').value = '';
    }

    function voltarParaHome() {
      if (confirm('Deseja voltar para o cardápio?')) {
        window.location.href = 'index.html';
      }
    }

    // Inicializa com valores padrão
    window.onload = function() {
      // Já está com entrega e dinheiro ativos por padrão no HTML
      entregaSelecionada = 'entrega';
      pagamentoSelecionado = 'dinheiro';
    }