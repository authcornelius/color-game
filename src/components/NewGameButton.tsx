import React from 'react';

export interface NewGameButtonProps {
    onClick: () => void;
}

const NewGameButton: React.FC<NewGameButtonProps> = ({ onClick }) => {
    return (
        <button data-testid="newGameButton" onClick={onClick}>
            New Game
        </button>
    );
};

export default NewGameButton;
