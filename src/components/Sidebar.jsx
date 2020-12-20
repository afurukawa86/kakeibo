import { useState, useEffect } from 'react';
import ListaOrcamentos from './ListaOrcamentos';
import ListaInvestimentos from './ListaInvestimentos';
import OrcamentoService from '../services/OrcamentoService';

function Sidebar() {

    const [orcamentos, setOrcamentos] = useState([]);
    const [investimentos, setInvestimentos] = useState([]);
    const orcamentoService = new OrcamentoService();

    useEffect(() => {
        orcamentoService
            .lista()
            .then(setOrcamentos)
            .catch(erro => console.log(erro));
    }, [orcamentos]);

    function adicionaOrcamento() {
        const orcamento = 'orcamento';
        orcamentoService
            .cadastra(orcamento)
            .then(() => setOrcamentos(prev => [...prev, orcamento]))
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
                                <svg className="cursor-pointer" onClick={adicionaOrcamento} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="1.5rem">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <ListaOrcamentos orcamentos={orcamentos} />
                        </li>
                        <li>
                            <div className="flex flex-row justify-between">
                                <h5>Investimentos</h5>
                                <svg className="cursor-pointer" onClick={adicionaInvestimento} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="1.5rem">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <ul>
                                <ListaInvestimentos investimentos={investimentos} />
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div >
    )
}
export default Sidebar;