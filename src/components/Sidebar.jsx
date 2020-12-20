import { useState, useEffect } from 'react';
import ListaOrcamentos from './ListaOrcamentos';
import ListaInvestimentos from './ListaInvestimentos';
import OrcamentoService from '../services/OrcamentoService';
import Icon from '@material-ui/core/Icon';

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function Sidebar() {

    const [orcamento, setOrcamento] = useState('');
    const [orcamentos, setOrcamentos] = useState([]);
    const [investimentos, setInvestimentos] = useState([]);
    const orcamentoService = new OrcamentoService();
    const [open, setOpen] = React.useState(false);
    const [incluir, setIncluir] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (props) => {
        setOpen(false);

        if (props.target.innerText == 'INCLUIR') {
            setIncluir(true);
        }
    };

    const handleChange = (props) => {
        setOrcamento(props.target.value);
    };

    useEffect(() => {
        orcamentoService
            .lista()
            .then(setOrcamentos)
            .catch(erro => console.log(erro));
    }, [orcamentos]);

    useEffect(() => {
        if (incluir && orcamento.length > 0) {
            adicionaOrcamento();
            setOrcamento('');
        }
        setIncluir(false);
    }, [incluir]);

    function adicionaOrcamento() {
        orcamentoService
            .lista()
            .then(orcamentosDB => !orcamentosDB.some(orcamentoDB => orcamentoDB == orcamento))
            .then(res => {
                if (res) {
                    orcamentoService
                        .cadastra(orcamento)
                        .then(() => setOrcamentos(prev => [...prev, orcamento]))
                } else {
                    throw new Error('Orçamento já cadastrado');
                }
            })
            .catch(erro => console.log(erro));
    }

    function adicionaInvestimento() {
        setInvestimentos([...investimentos, '1'])
    }

    return (
        <div className="flex-0 static pt-0 overflow-y-visible h-auto block bg-white z-40">
            <div className="top-16 sticky mr-0 h-auto block bg-transparent overflow-y-auto overflow-hidden">
                <div className="block z-10 inset-x-0 absolute pointer-events-none h-12 from-white bg-gradient-to-b"></div>
                <nav className="px-5 pb-14 pt-10 text-sm h-screen-1 overflow-y-auto font-medium">
                    <ul>
                        <li>
                            <div className="flex flex-row justify-between">
                                <h5>Orçamentos</h5>
                                <Icon className="cursor-pointer" onClick={handleClickOpen} color="primary">add_circle</Icon>

                            </div>
                            <ListaOrcamentos orcamentos={orcamentos} />
                        </li>
                        <li>
                            <div className="flex flex-row justify-between">
                                <h5>Investimentos</h5>
                                <Icon className="cursor-pointer" onClick={adicionaInvestimento} color="primary">add_circle</Icon>
                            </div>
                            <ul>
                                <ListaInvestimentos investimentos={investimentos} />
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Novo Orçamento</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Orçamento"
                        type="text"
                        fullWidth
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleClose} color="primary">Incluir</Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}
export default Sidebar;