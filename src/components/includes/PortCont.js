import React from "react";
//함수형 컨퍼넌트 * 클래스 컴퍼넌트 --> 리액트 훅
function PortInfo({link,title,image,category}){
    return (
            <article className="port__item">
                <figure className="img">
                    <a href={link}><img src={image} alt={title} /></a>
                </figure>
                <div className="text">
                    <h3>{title}</h3>
                    <p>{category}</p>
                </div>
            </article>
    )
}
function PortCont({ports}) {
    return (
        <section className="port__cont">
        <div className="container">
            <div className="port__inner">
                    {ports.map(port => (
                        <PortInfo
                        key= {port.id}
                        link= {port.link}
                        image= {port.image}
                        title= {port.title}
                        category= {port.category}
                        />
                    ))}
            </div>
        </div>
    </section>
    )
}
export default PortCont;