import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents"
import Footer from "../layout/Footer";
import ContactCont from "../includes/ContactCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

class Contact extends React.Component {
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
            gsap.to(".text > div:nth-child(1)", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.0
            });
            gsap.to(".text > div:nth-child(2)", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.3
            });
            gsap.to(".text > div:nth-child(3)", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.6
            });
            gsap.to(".desc", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.9
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
            document.querySelector("body").style.background = "#000";
            this.getPorts();
        }, 2000)
    }
    render(){
        const {isLoading, ports} = this.state;
        console.log(ports)
        return (
            <>
           {isLoading ? (
               <Loading />
               ) : (
                <>
                    <Header />
                    <Contents>
                        <ContactCont />
                    </Contents>
                    <Footer />
                </>
               )}
            </>
        )
    }
}
export default Contact;