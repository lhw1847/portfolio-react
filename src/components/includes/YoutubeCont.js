import React from 'react'
// import YoutubeSearch from "../includes/YoutubeSearch";
import YoutubeList from "../includes/YoutubeList";

function YouCont(lists) {
  return (
    <section className="youtube__cont">
      <div className="container">
        <div className="youtube__inner">
          {/* <YoutubeSearch /> */}
          
          <YoutubeList lists={lists.lists}/>
        </div>
      </div>
    </section>
  )
}

export default YouCont