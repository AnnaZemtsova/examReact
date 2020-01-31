import React, { useState } from 'react';

export default () => {
    const [fruits] = useState(['Banana', 'Orange', 'Apple'])
    const [selectedColorIdx, setColorIndx] = useState(null)

    return fruits.map((fruit, idx) => <p onClick={() => setColorIndx(idx)}
        className={selectedColorIdx === idx ? 'coral' : 'black'} key={`fruit-${idx}`}>{fruit}</p>)
}

