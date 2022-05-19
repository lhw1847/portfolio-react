import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents"
import ContTitle from "../layout/Title";
import ContContact from "../layout/Contact";
import Footer from "../layout/Footer";
import Loading from "../basics/Loading"
import MovieList from "../includes/MovieList";
import MovieSearch from "../includes/MovieSearch";
import { gsap } from "gsap";

function Movie() {
    const [videos, setVideos] = useState([]);

            
            const mainAnimation = () => {
                document.getElementById("loading").classList.remove("loading__active");
                document.querySelector("body").style.background = "#f0eeeb";
                setTimeout(() => {
                    gsap.to("#header", {
                        duration: 0.8,
                        top: 0,
                    });
                    gsap.to("#footer", {
                        duration: 0.8,
                        bottom: 0,
                        delay: 0.2
                    });
                    gsap.to(".cont__title strong", {
                        duration: 0.5,
                        y: 0,
                        opacity: 1,
                        delay: 1.0
                    });
                    gsap.to(".cont__title em", {
                        duration: 0.5,
                        y: 0,
                        opacity: 1,
                        delay: 1.3
                    });
                    gsap.to(".youtube__inner", {
                        duration: 0.5,
                        y: 0,
                        opacity: 1,
                        delay: 1.5
                    });
                },10)
            }

    const search = (query) => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
            
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE}&query=${query}&language=ko`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.results))
            .catch(error => console.log('error', error));
    }
    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE}&query=disney&language=ko`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.results))
            .catch(error => console.log('error', error));
            mainAnimation();
    }, []);

  return (
    <>
        <Loading color={"light"} />
        <Header color={"light"} />
        <Contents>
            <ContTitle title={["youtebe", "reference", "light"]} />
            <section className="movie__cont">
        <div className="container">
            <div className="movie__inner">
                <MovieSearch onSearch={search} />
                <MovieList videos={videos}/>
            </div>
        </div>
    </section>
            <ContContact />
        </Contents>
        <Footer color={"light"} />
    </>
  )
}

export default Movie;
