import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
import style from "../styles/style.module.scss";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            temp: [],
            search: "",
            isError: false,
        };
    }

    getData = () => {
        axios
            .get("movies.json")
            .then((response) =>
                this.setState({ movies: response.data, temp: response.data })
            )
            .catch(() => this.setState({ isError: true }));
    };

    componentDidMount() {
        this.getData();
    }

    search = (event) => {
        const q = event.target.value;
        const newMoviesList = [];
        this.setState({ search: q });
        this.state.movies.forEach((movie) => {
            if (
                movie.Title.toLowerCase().includes(q.toLowerCase()) &&
                q !== ""
            ) {
                newMoviesList.push(movie);
            }
        });
        if (newMoviesList.length > 0) {
            this.setState({ movies: newMoviesList });
        } else if (newMoviesList.length === 0) {
            this.setState({ movies: this.state.temp });
        }
    };

    searchByGenre=(event)=>{
        const q = event.target.value;
        this.setState({ movies: this.state.temp });
        const newMoviesList = [];
        this.state.temp.forEach((movie) => {
            if (
                movie.Genre.toLowerCase().includes(q.toLowerCase()) &&
                q !== ""
            ) {
                newMoviesList.push(movie);
            }
        });
        if (newMoviesList.length > 0) {
            this.setState({ movies: newMoviesList });
        } else if (newMoviesList.length === 0) {
            this.setState({ movies: this.state.temp });
        }
    }

    render() {
        const { movies, temp, search, isError } = this.state;
        const genreArray =[];
        const finalGenreArray = [];

        return (
            <div className={style["main-container"]}>
                <div className={style["movies-box"]}>
                    {isError ? (
                        <h3>Error...</h3>
                    ) : (
                        movies.map((movie) => (
                            <Movie
                                key={movie.Id}
                                poster={movie.Poster}
                                title={movie.Title}
                                director={movie.Director}
                                year={movie.Year}
                                genre={movie.Genre}
                            />
                        ))
                    )}
                </div>
                <div className={style["search-section"]}>
                    <input
                        type="text"
                        value={search}
                        onChange={this.search}
                        placeholder="search by movie title..."
                    />
                    <hr />
                    {temp.forEach((movie) => {
                        const genres = movie.Genre.split(",");
                        genres.forEach((genre) => {
                            const genreCollection = genre.trim();
                            genreArray.push(genreCollection);
                        });
                    })}
                    {
                        genreArray.forEach((genre) => {
                            if (!finalGenreArray.includes(genre)) {
                                finalGenreArray.push(genre);
                            }
                        })
                    }
                    {finalGenreArray.map((genre) => (
                        <button
                            key={genre}
                            value={genre}
                            onClick={this.searchByGenre}
                        >
                            {genre}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default Movies;
