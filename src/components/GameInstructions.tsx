import React from 'react';

const GameInstructions: React.FC = () => {
    return (
        <div data-testid="gameInstructions">
            <h2>Guess the correct color!</h2>
            <p>Select the color that matches the box above.</p>
        </div>
    );
};

export default GameInstructions;