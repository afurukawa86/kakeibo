import { useState, useEffect } from 'react';
import { getCotacao } from '../services/AxiosService';

function Content() {

    const [cotacao, setCotacao] = useState([]);

    useEffect(() => {
        getCotacao().then(setCotacao);
    }, [cotacao])

    return (
        <div className="flex-1 static overflow-visible max-h-full w-full min-w-0">
            <div className="px-20 pb-16 pt-10">
                {cotacao.map((cot, index) => {
                    return (
                        <p key={index}>
                            Cotação atual do dolar: R${cot.cotacao}
                        </p>
                    );
                })}
            </div>
        </div>
    )
}
export default Content;