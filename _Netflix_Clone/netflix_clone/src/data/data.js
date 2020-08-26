const defaultApiKey = "02c7edadc7a8fdb11cf872de884696a9";

export const netflixOriginals = {
    genre: "Netflix Originals",
    fetchUrl: `/discover/tv?api_key=${defaultApiKey}&with_newtworks=123`,
    isNetflixOriginals: true
}

const movieGenres = [
    {
        genre: "Netflix Originals",
        fetchUrl: `/discover/tv?api_key=${defaultApiKey}&with_newtworks=123`,
        isNetflixOriginals: true
    },
    {
        genre: "Trending Now",
        fetchUrl: `/trending/all/week?api_key=${defaultApiKey}&language=en-US`
    },
    {
        genre: "Top Rated",
        fetchUrl: `/movie/top_rated?api_key=${defaultApiKey}&language=en-US`
    },
    {
        genre: "Action Movies",
        fetchUrl: `/discover/tv?api_key=${defaultApiKey}&with_genres=28`
    },
    {
        genre: "Comedy Movies",
        fetchUrl: `/discover/tv?api_key=${defaultApiKey}&with_genres=35`
    },
    {
        genre: "Horror Movies",
        fetchUrl: `/discover/tv?api_key=${defaultApiKey}&with_genres=27`
    },
    {
        genre: "Romance Movies",
        fetchUrl: `/discover/tv?api_key=${defaultApiKey}&with_genres=10749`
    },
    {
        genre: "Documentaries",
        fetchUrl: `/discover/tv?api_key=${defaultApiKey}&with_genres=99`
    },
];

export default movieGenres;