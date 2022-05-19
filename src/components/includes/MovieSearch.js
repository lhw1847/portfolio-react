import React, { useRef } from 'react';
function MovieSearch({ onSearch }) {
    const inputRef = useRef();
    const hanDleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }
    const onKeyPress = (event) => {
        if(event.key === "Enter"){
            hanDleSearch();
        }
    }
    const onClick = () => {
        hanDleSearch();
    }
    return (
    <div className="youtube__search container">
        <h2>검색하기</h2>
        <input
            ref={inputRef}
            type="search"
            placeholder='검색하세요!'
            onKeyPress={onKeyPress}/>
        <button
            type="submit"
            onClick={onClick}>
            검색
        </button>
    </div>
    )
    }
export default MovieSearch;