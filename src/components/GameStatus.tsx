import React from 'react';

interface GameStatusProps {
    status: string;
}

const GameStatus: React.FC<GameStatusProps> = ({ status }) => {
    return (
        <div data-testid="gameStatus">
            {status}
        </div>
    );
};

export default GameStatus;