import React from 'react';

export const Btn = ({
    id,
    className='',
    text,
    has_effect,
    is_disabled,
    handleClick,
}) => {
    const classes = `btn${has_effect ? ' effect' : ''} ${className}`;
    return (
        <button id={id} className={classes} onClick={handleClick || undefined} disabled={is_disabled}>
            <span>{text}</span>
        </button>
    );
};

export default Btn;
