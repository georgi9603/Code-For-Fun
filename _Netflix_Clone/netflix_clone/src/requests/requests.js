const defaultApiKey = "02c7edadc7a8fdb11cf872de884696a9";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${defaultApiKey}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${defaultApiKey}&with_newtworks=123`,
    fetchTopRated: `/movie/top_rated?api_key=${defaultApiKey}&language=en-US`,
    fetchActionMovies: `/discover/tv?api_key=${defaultApiKey}&with_genres=28`,
    fetchComedyMovies: `/discover/tv?api_key=${defaultApiKey}&with_genres=35`,
    fetchHorrorMovies: `/discover/tv?api_key=${defaultApiKey}&with_genres=27`,
    fetchRomanceMovies: `/discover/tv?api_key=${defaultApiKey}&with_genres=10749`,
    fetchDocumentartyMovies: `/discover/tv?api_key=${defaultApiKey}&with_genres=99`,
};

export default requests;