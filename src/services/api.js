import axios from 'axios';


// url da api: https://api.themoviedb.org/3/movie/now_playing?api_key=ad9a8d3bd21a15fd110ea79d2e41c8a5&languague=pt-BR

// base da url: https://api.themoviedb.org/3/

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',

    params: {
        api_key: 'ad9a8d3bd21a15fd110ea79d2e41c8a5',
        languege: 'pt-BR',
        page: 1,
    }
});

export default api;