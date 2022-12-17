import React from 'react';
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai';
import { useState } from 'react';

const Question = ({title,info}) => {

    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className='question'>
            <header>
                <h4>{title}</h4>
                <button onClick={()=>setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {
                showInfo && <p>{info}</p>
            }
        </div>
    );
}

export default Question;
