function ListaInvestimentos(props) {
    return (
        <ul>
            {props.investimentos.map((item, index) => {
                return (
                    <li key={index}>
                        {item}
                    </li>
                );
            })}
        </ul >
    )
}

export default ListaInvestimentos;