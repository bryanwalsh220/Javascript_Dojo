import React, { useState } from 'react';

const BirthdayButton = (props) => {
    const { age, onBirthdayClick } = props;

    return (
        <div>
        <button onClick={onBirthdayClick}>Make them Old!</button>
        </div>
    );
}

export default BirthdayButton;