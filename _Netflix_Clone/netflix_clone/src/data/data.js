const defaultApiKey = "02c7edadc7a8fdb11cf872de884696a9";

export const netflixOriginals = {
    genre: "Netflix Originals",
    fetchUrl: `/discover/tv?api_key=${defaultApiKey}&with_newtworks=123`,
    isNetflixOriginals: true
}

export const fallBackUrls = [
    {
        name: "The 100",
        url: "https://www.youtube.com/watch?v=aDrsItJ_HU4&t=1s"
    },
    {
        name: "Lucifer",
        url: "https://www.youtube.com/watch?v=3mTh2joPPj8"
    },
    {
        name: "Late Show with David Letterman",
        url: "https://www.youtube.com/watch?v=ctBVhyZxXYY"
    },
    {
        name: "American Dad!",
        url: "https://www.youtube.com/watch?v=apr31MFjg08"
    },
    {
        name: "The Flash",
        url: "https://www.youtube.com/watch?v=Yj0l7iGKh8g"
    },
    {
        name: "Lovecraft Country",
        url: "https://www.youtube.com/watch?v=dvamPJp17Ds"
    },
    {
        name: "Grey's Anatomy",
        url: "https://www.youtube.com/watch?v=q1pcpgREQ5c"
    },
    {
        name: "NCIS",
        url: "https://www.youtube.com/watch?v=fRfpzhmQGFY"
    },
    {
        name: "Criminal Minds",
        url: "https://www.youtube.com/watch?v=NTYxiJBbEZk"
    },
    {
        name: "Riverdale",
        url: "https://www.youtube.com/watch?v=HxtLlByaYTc"
    },
    {
        name: "JoJo's Bizarre Adventure",
        url: "https://www.youtube.com/watch?v=fvSKmPdD2a4"
    },
    {
        name: "Hawaii Five-0",
        url: "https://www.youtube.com/watch?v=gRrIL9Moba4"
    },
    {
        name: "Marvel's Daredevil",
        url: "https://www.youtube.com/watch?v=n83s6NO1NE0"
    },
    {
        name: "Ash vs Evil Dead",
        url: "https://www.youtube.com/watch?v=MdZUN8jdY-g"
    },
    {
        name: "Avatar: The Last Airbender",
        url: "https://www.youtube.com/watch?v=7OvjiVEhbSk"
    },
]

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