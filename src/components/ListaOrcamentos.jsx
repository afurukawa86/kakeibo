import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

function ListaOrcamentos(props) {
    return (
        <List component="nav" aria-label="mailbox folders">
            {props.orcamentos.map((item, index) => {
                return (
                    <li key={index}>
                        <Divider light />
                        <ListItem button>
                            {item}
                        </ListItem>
                    </li>
                );
            })}
        </List>
    )
}

export default ListaOrcamentos;