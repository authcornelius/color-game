import React from 'react';

const ColorBox: React.FC<{ color: string }> = ({ color }) => {
    return (
        <div
            data-testid="colorBox"
            style={{
                width: '200px',
                height: '200px',
                backgroundColor: color,
                margin: '20px auto',
                border: '2px solid #000',
                borderRadius: '8px',
            }}
        />
    );
};

export default ColorBox;