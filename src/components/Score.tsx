import React from 'react';

const Score: React.FC<{ score: number }> = ({ score }) => {
    return (
        <div data-testid="score">
            Score: {score}
        </div>
    );
};

export default Score;