clienteApp.service('clienteService', function ($http) {

    //Serviço de Listagem: READ
    this.getTodosClientes = function () {

        return $http.get('/cliente/GetCliente');
    }

    //Serviço de Adição: CREATE
    this.addCliente = function (cliente) {

        var request = $http({
            method: 'post',
            url: '/cliente/AddCliente',
            data: cliente
        });

        return request;
    }

    //Serviço de Atualização: UPDATE
    this.UpdCliente = function (cliente) {

        var requestAtualizado = $http({
            method: 'post',
            url: '/cliente/UpdCliente',
            data: cliente
        });

        return requestAtualizado;
    }

    //Serviço excluir cliente por ID: DELETE
    this.DelCliente = function (UpdClienteId) {

        return $http.post('/cliente/DelCliente/' + UpdClienteId);
    }


})