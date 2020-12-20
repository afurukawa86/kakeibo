import ConnectionFactory from './ConnectionFactory';
import OrcamentoDao from '../dao/OrcamentoDao';

class OrcamentoService {

    cadastra(orcamento) {
        return ConnectionFactory
            .getConnection()
            .then(connection => new OrcamentoDao(connection))
            .then(dao => dao.adiciona(orcamento))
            .then(() => console.log('Negociação adicionada com sucesso'))
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível adicionar o orçamento')
            });
    }

    lista() {
        return ConnectionFactory
            .getConnection()
            .then(connection => new OrcamentoDao(connection))
            .then(dao => dao.listaTodos())
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível obter as negociações')
            })
    }

    apaga() {
        return ConnectionFactory
            .getConnection()
            .then(connection => new OrcamentoDao(connection))
            .then(dao => dao.apagaTodos())
            .then(() => 'Negociações apagadas com sucesso')
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível apagar as negociações')
            })
    }
}

export default OrcamentoService;