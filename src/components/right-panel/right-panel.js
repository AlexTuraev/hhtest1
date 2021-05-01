import React, {useState, useEffect} from 'react';

import './right-panel.scss';

const RightPanel = () =>{
    const [currTimeStr, setCurrTimeStr] = useState('');

/* 
            Представление часы, минуты, сек в формате 01 : 01: 01.
            Добавление впереди '0', если отображаемые данные < 9
*/
    const formatCountToString = (count) =>{
        return ( (count <= 9) ? `0${count}` : count.toString() );
    }

    useEffect(()=>{
        const idInterval = setInterval(()=>{
            const date = (new Date);
            const str = [
                formatCountToString(date.getHours()),
                formatCountToString(date.getMinutes()),
                formatCountToString(date.getSeconds())
            ].join(' : ');
        
            setCurrTimeStr(str);
        }, 1000);

        return () => clearInterval(idInterval);
    }, [currTimeStr]);

    return (
        <section className='right-panel'>
            <div className='right-panel__block'>
                <h1>
                    {currTimeStr}
                </h1>
            </div>
        </section>
    );
}

export default RightPanel;