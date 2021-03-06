import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import ScriptCont from "../includes/ScriptCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

class Script extends React.Component {
    state = {
        isLoading: true,
        ports: [],
    }
    mainAnimation = () => {
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
            gsap.to(".script__inner", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.5
            });
        },10)
    }
    getPorts = () => {
        setTimeout(() => {
            console.log("두번째 시작")
            this.setState({isLoading: false});
            this.mainAnimation();
        }, 1600)
    }
    componentDidMount() {
        setTimeout(() => {
            console.log("첫번째 시작")
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background = "#f0eeeb";
            this.getPorts();
        }, 2000)
    }
    render(){
        const {isLoading, ports} = this.state;
        console.log(ports)
        return (
            <>
           {isLoading ? (
               <Loading color="light" />
               ) : (
                <>
                    <Header color="light" />
                    <Contents>
                        <Title title={["Script","book", "light"]}/>
                        <ScriptCont color="light" />
                        <Contact />
                    </Contents>
                    <Footer color="light" />
                </>
               )}
            </>
        )
    }
}
export default Script;