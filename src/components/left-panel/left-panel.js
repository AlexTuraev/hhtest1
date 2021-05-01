import React, {useState} from 'react';
//import { SwiperSlide } from 'swiper/react';

import './left-panel.scss';

const LeftPanel = () =>{
    const [textValue, setTextValue] = useState('');
    const [prevTextValue, setPrevTextValue] = useState(''); // для того, чтобы вернуть предыдующие записи в обычную форму без обертки каждого символа в span
    const [texts, setTexts] = useState([]);
    const [keyId, setKeyId] = useState(0);

    const handlerChangeTextArea =(e) =>{
        setTextValue(e.target.value);
    }

/* 
        оборочиваем каждый символ text в span, получаем массив [span, span,...] 
*/
    const transformText = (text) =>{
        return text.split('')
            .map((char, index) =>{
                return (
                    <span key={`span-text+${keyId}+${index}`} className='left-panel__text--animation'>
                        {char}
                    </span>
                );
            } )
    }
    
    const addNewRecordToTexts = (text) =>{
        const newTextValue = transformText(text);
        setTexts([
            ...texts.slice(0, -1),
            prevTextValue,
            <li className='left-panel__li' key={`text${keyId}`}>
                <p>{newTextValue}</p>
            </li>
        ]);

        setPrevTextValue(
            <li className='left-panel__li' key={`text${keyId+1}`}>
                <p>{text}</p>
            </li>
        );
        setKeyId(keyId+2);
    }

    const handlerClickSend = () =>{
        if (textValue === '') return;
        addNewRecordToTexts(textValue);
    }

    return(
        <section className='left-panel'>
            <header className='left-panel__header'>
                <textarea className='left-panel__textarea' onChange={handlerChangeTextArea} />
                <button onClick={handlerClickSend} className='left-panel__send-btn'>Send</button>
            </header>

            <div className='left-panel__texts-block'>
                <ul className='left-panel__ul'>
                    {texts}
                </ul>
            </div>
        </section>
    );
}

export default LeftPanel;