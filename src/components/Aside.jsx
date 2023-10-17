import React from 'react';

const Aside = () => {
    return (
        <div style={{width: '25%'}}>
            <h2>Filter</h2>
            <div>
                <ul style={{listStyle: 'none', display: 'flex', gap: '1rem', alignItems: 'center', flexDirection: 'column'}}>
                    <li>
                        <input type='number' placeholder='Price' min='1' max={'1000'}></input>
                    </li>
                    <li>
                        <input type='color' placeholder='color'></input>
                    </li>
                    <li>
                        <select>
                            <option value='default' selected disabled>Size</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                            <option>Extra Large</option>
                            <option>Extra Small</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Aside;