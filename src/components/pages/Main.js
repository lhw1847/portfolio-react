import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents"
import Footer from "../layout/Footer";
import MainCont from "../includes/MainCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
// function Main(){
//     return(
//         <>
//             <Header />
//             <Contents>
//                 <MainCont />
//             </Contents>
//             <Footer />
//         </>
//     )
// }
class Main extends React.Component {
    state = {
        isLoading: true,
    }
    getSite = () => {
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
            gsap.to(".main__inner > div:nth-child(1)", {
                duration: 0.4,
                opacity: 1,
                y: 0,
                delay: 0.4,
                ease: "expo.out"
            });
            gsap.to(".main__inner > div:nth-child(2)", {
                duration: 0.4,
                opacity: 1,
                y: 0,
                delay: 0.6
            });
            gsap.to(".main__inner > div:nth-child(3)", {
                duration: 0.4,
                opacity: 1,
                y: 0,
                delay: 0.8
            });
            gsap.to(".main__inner > div:nth-child(4)", {
                duration: 0.4,
                opacity: 1,
                y: 0,
                delay: 1.0
            });
        }, 1000)
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading: false});
            document.querySelector("body").style.background = "#000";
            this.getSite();
        }, 3000);
    }
    render(){
        const {isLoading} = this.state;
        console.log(process.env.REACT_APP_API);
        return (
            <>
           {isLoading ? (
               <Loading />
               ) : (
                    <>
                        <Header />
                        <Contents>
                            <MainCont />
                        </Contents>
                        <Footer />
                    </>
               )}
            </>
        )
    }
}
export default Main;