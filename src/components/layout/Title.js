import React from 'react'

export default function ContTitle(props) {
  return (
    <section className={`cont__title ${props.title[2]}`}>
        <div className="container">
            <h1>
              <strong>{props.title[0]}</strong>
              <em>{props.title[1]}</em>
            </h1>
        </div>
    </section>
  )
}