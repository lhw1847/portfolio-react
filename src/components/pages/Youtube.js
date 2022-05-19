import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents"
import ContTitle from "../layout/Title";
import YoutubeSearch from "../includes/YoutubeSearch";
// import YoutubeCont from "../includes/YoutubeCont";
import ContContact from "../layout/Contact";
import Footer from "../layout/Footer";
import YoutubeList from "../includes/YoutubeList";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

function Youtube() {
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
            
            fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&q=${query}&key=${process.env.REACT_APP_API}`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));
    }
    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&q=MNET-KPOP&key=${process.env.REACT_APP_API}`, requestOptions)
        .then(response => response.json())
        .then(result => setVideos(result.items))
        .catch(error => console.log('error', error));
        mainAnimation();
    }, []);

  return (
    <>
    <Loading color={"light"} />
      <Header color={"light"} />
      <Contents>
          <ContTitle title={["youtebe", "reference", "light"]}/>
          <section className="youtube__cont light">
            <div className="container">
                <div className="youtube__inner">
                  <YoutubeSearch onSearch={search} />
                   {/* <YoutubeCont lists={lists} /> */}
                  <YoutubeList videos={videos} />
                </div>
            </div>
          </section>
          <ContContact />
      </Contents>
      <Footer color={"light"} />
    </>
  )
}

export default Youtube;
