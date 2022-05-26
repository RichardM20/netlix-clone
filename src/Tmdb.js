const API_KEY = '7160581b76846b12b1db745c85590e15';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFetch = async (endPoint) => {
    const request = await fetch(`${API_BASE}${endPoint}`);
    const json = await request.json();
    return json;
}


export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originals of netflix',
                items: await basicFetch(`/discover/tv?with_network=213&lenguaje=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recommended for you',
                items: await basicFetch(`/trending/all/week?lenguaje=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'top rated',
                title: 'Top rated',
                items: await basicFetch(`/movie/top_rated?lenguaje=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await basicFetch(`/discover/movie?with_genres=35&lenguaje=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&lenguaje=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&lenguaje=en-US&api_key=${API_KEY}`)
            },
        ];
    },
    //----------------------Obtenemos la informacion de un film en especifico y el tipo
    getMovieInfo: async (movieId, type) => {
        let info = {};
        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?lenguaje=en-US&api_key=${API_KEY}`);
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?lenguaje=en-US&api_key=${API_KEY}`);
                    break
                default:
                    info = null
                    break;
            }
            return info;
        }
    }
}