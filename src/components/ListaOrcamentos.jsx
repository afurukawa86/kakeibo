function ListaOrcamentos(props) {
    return (
        <ul>
            {props.orcamentos.map((item, index) => {
                return (
                    <li key={index}>
                        {item}
                    </li>
                );
            })}
        </ul >
    )
}

export default ListaOrcamentos;