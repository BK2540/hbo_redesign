import {configureStore, createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { MY_API_KEY, TMDB_BASE_URL } from '../utils/constant';
import axios from 'axios';

const initialState = {
    movie: [],
    genresLoaded: false,
    genres: [],
}

export const getGenres = createAsyncThunk("hbo/genres", async()=> {
    const {data: {genres}} = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${MY_API_KEY}`)
    // console.log(genres)
    return genres
});


const arrayOfMovieData = (array, moviesArray, genres) => {
    array.forEach((movie) => {
        const moviesGenres = [];
        movie.genre_ids.forEach((genre) => {
            const name = genres.find(({ id }) => id === genre);
            if (name) moviesGenres.push(name.name);
        });
        if (movie.backdrop_path)
            moviesArray.push({
                id: movie.id,
                name: movie?.original_name ? movie.original_name : movie.original_title, // Corrected the typo here
                image: movie.backdrop_path,
                genres: moviesGenres.slice(0, 2),
            });
    });
};

const getMovieData = async (api, genres, paging = false) => {
    const moviesArray = [];
    for (let i = 1; moviesArray.length < 70 && i < 10; i++) {
        const { data: { results } } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
        arrayOfMovieData(results, moviesArray, genres);
    }
    return moviesArray;
};


//fetch genres
export const fetchMoviesByGenre = createAsyncThunk("hbo/genre", async ({ genre, type }) => {
    const { hbo: { genres } } = store.getState();
    return getMovieData(`${TMDB_BASE_URL}/discover/${type}?api_key=${MY_API_KEY}&with_genres=${genre}`, genres);
  });

  //fetch movie
export const fetchMovies = createAsyncThunk("hbo/trending", async ({ type }, myThunk) => {
    const { hbo: { genres } } = myThunk.getState();
    return getMovieData(`${TMDB_BASE_URL}/trending/${type}/week?api_key=${MY_API_KEY}`, genres, true);
    // console.log(data);
});

const HboSlice = createSlice({
    name: "Hbo",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state, action)=> {
            state.genres = action.payload;
            state.genresLoaded = true
        });
        builder.addCase(fetchMovies.fulfilled, (state, action)=> {
            state.movies = action.payload;
        });
        builder.addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
            state.movies = action.payload;
        });       
    }
});

export const store = configureStore ({
    reducer:{
        hbo: HboSlice.reducer
    }
});