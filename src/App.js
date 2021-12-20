//  importing react
import React, { useState } from "react";
//  importing MovieList component
import MovieList from "./Components/MovieList/MovieList";
//  importing NavBar component
import NavBar from "./Components/NavBar/NavBar";
//  importing css
import "./App.css";

const App = () => {
  const [movieList, setmovieList] = useState([
    {
      MovieId: Math.random(),
      MoviePosterSrc:
        "https://cdn.moviefone.com/admin-uploads/posters/spider-man-no-way-home-poster3_1638002991.jpg?d=360x540&q=50",
      MovieName: "spider-man",
      MovieDescription:
      "Don’t miss out on “the best Marvel movie of all time.” #SpiderManNoWayHome is now playing exclusively in movie theaters!",
      MovieRating: 3,
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc:
        "https://m.media-amazon.com/images/M/MV5BYzFmOGFjMjEtNDI4Mi00YTNiLThiNzQtMDU2MWMyOGUxZGY5XkEyXkFqcGdeQXVyMzU5OTE2NTI@._V1_.jpg",
      MovieName: "BurnOut",
      MovieDescription:
        "Parents need to know that Burn Out is a 2018 French film (with English subtitles) about a motorcycle racer trying to turn pro while also, unwillingly, running drug money for a Paris dealer threatening his ex-girlfriend and young child",
      MovieRating: 4,
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc:
        "https://flxt.tmsimg.com/assets/p159790_p_v10_an.jpg",
      MovieName: "tokyo drift",
      MovieDescription:
        "tokyo ffhh jhvbg fhqv dhvchqdsfv vdqhsdfhgv cdgvqddhvsd hgvqdscgv dshqcgvqhgvc shgcvhgsq GFZJH EHDGVGEF SGVZHEFZ HGVZGEVAZEFV FHFGVG EHHGVED ",
      MovieRating: 5,
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc:
      "https://i.pinimg.com/originals/4a/03/2d/4a032d371ccfe0f8199c25105aa801de.jpg",
      MovieName: "harry poter",
      MovieDescription:
        "harry poter yefuygef suyfgsyfhrgdf dfyqdhgvhhjebge badrhqbvh uhsdigfd ddqsliaoziffhvd hhgzfvygfaf ziyefhgvef gvedhheef zehgvhf  fhggvafb f hgvfhbaz hgvz andhbfhv ",
      MovieRating: 4,
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc:
        "https://m.media-amazon.com/images/M/MV5BNzE2ZjQxNjEtNmI2ZS00ZmU0LTg4M2YtYzVhYmRiYWU0YzI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      MovieName: "6 Underground",
      MovieDescription:
        "6 Underground is about an eclectic billionaire (Ryan Reynolds)—it's implied he invented the vibration you feel when you get a text or call—who has faked his own death to go underground and lead a team of similar mercenaries, people who are able to go off the grid to do the jobs that world governments refuse to do.",
      MovieRating: 5,
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc:
        "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
      MovieName: "black panther",
      MovieDescription:
        "black hgzedvh ohfuyerbg rugiuberz ehfuehbuzhgr eugfigabehfbrh rrfgvayibahr rrhfvaiebfaerf ifhgaiuehrbfa ehahefiuaebrf er ruygfaueyfgieauy eruyfgauf g",
      MovieRating: 4,
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      MovieName: "Spenser",
      MovieDescription:
        "Pablo Larraín's Spencer is a haunting reimagining of a tense Christmas holiday in the life of Princess Diana. Now reunited with her boys William (Jack Nielen) and Harry (Freddie Spry), Diana tries to put on a brave face even if she knows her husband Prince Charles (Jack Farthing) is having an affair.",
      MovieRating: 5,
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc:
        "https://fr.web.img6.acsta.net/pictures/19/09/03/12/02/4765874.jpg",
      MovieName: "joker",
      MovieDescription:
        "jekr oihfqh jhdbqhdf bd bdfhhff ssfouyqsh fqvbu fug çfyg iu ygfuy fg fiuygfi ufuiaeyfgiufbihebfiygfi rufgaiufyg euerfg iauf iueg fiueygfiuyegfiueay ieu fguiyeag fiuye fiuyeg fgueg f ugf ue gfiuyg afiuy gefuygafiuyyg rfuyygafiyg eifuygaef ef ",
      MovieRating: 4,
    },
  ]);
  const [filterRating, setfilterRating] = useState(0);
  const [filterName, setfilterName] = useState("");
  const [movie, setMovie] = useState({});
  const pickMovie = (x) => {
    setMovie(x);
  };
  return (
    <>
      <NavBar
        setfilterRating={setfilterRating}
        setfilterName={setfilterName}
        pickMovie={pickMovie}
        setmovieList={setmovieList}
        movieList={movieList}
      />
      <MovieList
        filterRating={filterRating}
        filterName={filterName}
        movieList={movieList}
        movie={movie}
      />
    </>
  );
};

export default App;
