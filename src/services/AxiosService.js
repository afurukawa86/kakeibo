import Axios from 'axios';

export async function getCotacao() {
    const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/cotacao' : 'https://kakeibo.com.br/api/cotacao'

    return Axios
        .get(baseUrl)
        .then(res => res.data)
}
