import React, { useState } from 'react';
import './Drop.css';

function Drop(props) {
    const [isFocused, setIsFocused] = useState(false);
    const [query, setQuery] = useState('');
    const [currentInput, setCurrentInput] = useState('');

    const suggestionsToDisplay = props.suggestions.filter(item => item.toLowerCase().includes(query.toLowerCase()));

    const focusHandler = e => {
        console.log('FOCUS');
        e.target.classList.add('input-active');
        setIsFocused(cur => !cur);
    };

    const blurHandler = e => {
        e.target.classList.remove('input-active');
        setIsFocused(cur => !cur);
    };

    const changeHanlder = e => {
        setQuery(e.target.value);
        setCurrentInput(e.target.value);
    };

    const keyHandler = e => {
        // enter - 13, up - 38, down -40, left -37, right - 39
        if (e.keyCode === 13 || e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) {
            e.preventDefault();
        }
    };

    return (
        <form className="form" tabIndex={0} onFocus={focusHandler} onBlur={blurHandler}>
            <label className="label">
                Type:
                <input className="input" type="text" onKeyDown={keyHandler} onChange={changeHanlder} value={query} />
                {Boolean(isFocused && query !== '' && suggestionsToDisplay.length) && (
                    <div className="suggestWrap">
                        <ul className="suggestions" tabIndex={0}>
                            {suggestionsToDisplay.map(item => (
                                <li
                                    className={'list-item' + (currentInput === item && ' active')}
                                    onClick={() => setQuery(item)}
                                    // onFocus={() => setQuery(item)}
                                    onMouseOver={() => setCurrentInput(item)}
                                    key={item}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </label>
        </form>
    );
}

export default Drop;
