import React from 'react';

const numbers = (props) => {
    return (
        <div class="list">
            <p onClick={() => props.pageNumber(1)}>1</p>
            <p onClick={() => props.pageNumber(2)}>2</p>
            <p onClick={() => props.pageNumber(3)}>3</p>
            <p onClick={() => props.pageNumber(4)}>4</p>
            <p onClick={() => props.pageNumber(5)}>5</p>
        </div>
    );
}

export default numbers;