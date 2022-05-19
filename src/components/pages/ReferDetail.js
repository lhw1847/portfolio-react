import React from 'react'
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import { gsap } from "gsap";
// import { Link } from "react-router-dom";

function ReferDetailDefinition({Definition}) {

    console.log(Definition)
    const rendering = () => {
      const result = [];
      for (let i = 0; i < Definition.length; i++) {
        result.push(<li key={i}>{Definition[i]}</li>);
      }
      return result;
    };
  
    return rendering();
  }


class ReferDetail extends React.Component {
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined) {
            history.push("/reference");
        }
        this.mainAnimation();
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
            gsap.to(".refer__inner", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.5
            });
        },10)
    }
    render(){
        const {location} = this.props;
        console.log(location.state);

        if(location.state === undefined){
            return <div>잘못된 페이지입니다.</div>
        } else {

            return (
                <>
                     <Header color="light" />
                    <Contents>
                        <section className="refer__cont">
                        <div className="container">
                            <div className="refer__inner">
                            <div className="refer__table">
                                <h3>{location.state.title}</h3>
                                <p>{location.state.desc}</p>
                                <div className="img_table">
                                <div className='img'>
                                    <img src={location.state.image} alt={location.state.title} />
                                </div>
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>특징</th>
                                        <th>설명</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th>요소</th>
                                        <td>{location.state.element}</td>
                                    </tr>
                                    <tr>
                                        <th>닫는 태그</th>
                                        <td>{location.state.tag}</td>
                                    </tr>
                                    <tr>
                                        <th>버전</th>
                                        <td>{location.state.version}</td>
                                    </tr>
                                    <tr>
                                        <th>시각적 표현</th>
                                        <td>{location.state.view}</td>
                                    </tr>
                                    <tr>
                                        <th>사용성</th>
                                        <td>{location.state.use}</td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            <div className='refer__table'>
                                    <table className='table'>
                                        <colgroup>
                                            <col width="10%" />
                                        </colgroup>
                                        <thead>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>출처</th>
                                                <td><a target="_blank" rel="noreferrer" href={location.state.link}>{location.state.link}</a></td>
                                            </tr>
                                            <tr>
                                                <th>정의</th>
                                                <td>
                                                    <ReferDetailDefinition Definition={location.state.Definition}/> 
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>접근성</th>
                                                <td>{location.state.Accessibility}</td>
                                            </tr>
                                            <tr>
                                                <th>관련</th>
                                                <td>{location.state.Related}</td>
                                            </tr>
                                            <tr>
                                                <th>MDN웹문서</th>
                                                <td><a target="_blank" rel="noreferrer" href={location.state.mdn}>{location.state.mdn}</a></td>
                                            </tr>
                                            <tr>
                                                <th>w3c</th>
                                                <td><a target="_blank" rel="noreferrer" href={location.state.w3c}>{location.state.w3c}</a></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        </section>
                    </Contents>
                    <Footer color="light" />
                </>
            )
        }
    }
}

export default ReferDetail;