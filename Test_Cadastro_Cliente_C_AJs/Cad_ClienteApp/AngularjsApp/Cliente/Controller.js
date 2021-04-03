// Controller - Cliente:
clienteApp.controller('clienteCtrl', function ($scope, clienteService) {

    //Carregamento de dados na atualização:
    carregarClientes();


    //Metodo carrega todas as propriedades cliente:
    function carregarClientes() {
        var listarClientes = clienteService.getTodosClientes();

        listarClientes.then(function (d) {
            //Ok:
            $scope.Clientes = d.data;
        },
            function () {
                alert("Falha ao listar Clientes!");
            });
    }

    //Metodo de adição de cliente:
    $scope.addCliente = function() {

        var cliente = {
            clienteId: $scope.clienteId,
            nome: $scope.nome,
            cpf: $scope.cpf,
            endereco: $scope.endereco,
            telefone: $scope.telefone,
            observacao: $scope.observacao,
        };

        var addInfos = clienteService.addCliente(cliente);

        addInfos.then(function (d) {
            if (d.data.success === true) {
                carregarClientes();
                alert("Cliente Cadastrado!");

                $scope.limparDados();
            } else { alert("Cadastro não efetuado!"); }
        },
            function () {
                alert("Erro ao efetuar cadastro no DB!");
            });
    }

    //Limpar os dados do corpo de cliente:
    $scope.limparDados = function () {
        $cope.clienteId = "";
        $cope.nome = "";
        $cope.cpf = "";
        $cope.endereco = "";
        $cope.telefone = "";
        $cope.observacao = "";

    }

    //Método para Atualizar Cliente por ID:
    $scope.UpdClientePorCd = function (cliente) {
        $scope.UpdClienteId = cliente.ClienteId;
        $scope.UpdNome = cliente.Nome;
        $scope.UpdCPF = cliente.CPF;
        $scope.UpdEndereco = cliente.Endereco;
        $scope.UpdTelefone = cliente.Telefone;
        $scope.UpdObservacao = cliente.Observacao;
    }

    //Método para resgatar dados para Excluir por iD:
    $scope.DelClienteCd = function (cliente) {
        $scope.UpdClienteId = cliente.ClienteId;
        $scope.UpdNome = cliente.Nome;
    }

    //Método responsavel pela atualização do dados do cliente:
    $scope.UpdCliente = function () {
        var cliente = {
            ClienteId: $scope.UpdClienteId,
            Nome: $scope.UpdNome,
            CPF: $scope.UpdCPF,
            Endereco: $scope.UpdEndereco,
            Telefone: $scope.UpdTelefone,
            Observacao: $scope.UpdObservacao
        };

        var updateInfos = clienteService.UpdCliente(cliente);
        updateInfos.then(function (d) {
            if (d.data.success === true) {
                carregarClientes();

                alert("Cliente Atualizado com Sucesso!");
                $scope.limparDadosUpd();
            } else {
                alert("Atualização não Efetuada!");
            }
        }, function () {
                alert("Erro ao efetuar atualização no DB!");
        });
    }

    //Método responsavel por limpar dados apos atualização:
    $scope.limparDadosUpd = function () {
        $scope.UpdClienteId = '';
        $scope.UpdNome = '';
        $scope.UpdCPF = '';
        $scope.UpdEndereco = '';
        $scope.UpdTelefone = '';
        $scope.UpdObservacao = '';
    }

    //Método respontavel por excluir CLiente pelo Condigo:
    $scope.DelCliente = function (UpdClienteId) {

        var excluirInfos = clienteService.DelCliente($scope.UpdClienteId);
        excluirInfos.then(function (d) {
            if (d.data.success === true) {
                carregarClientes();

                alert("Cliente removido com sucesso!");

                

            } else {
                alert("Cliente não removido!");
            }
        }, function () {
            alert("Ocorreu um erro ao tentar remover o cLiente");
        });
    }
});