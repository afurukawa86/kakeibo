import Axios from 'axios';

export async function getCotacao() {
    return Axios
        .get('https://kakeibo.com.br/api/cotacao')
        .then(res => res.data)
}
