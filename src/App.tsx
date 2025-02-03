import React, { useState } from 'react';
import ColorBox from './components/ColorBox';
import ColorOption from './components/ColorOption';
import GameInstructions from './components/GameInstructions';
import GameStatus from './components/GameStatus';
import Score from './components/Score';
import NewGameButton from './components/NewGameButton';
import './App.css';

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

interface NewGameButtonProps {
    onClick: () => void;
}

const App = () => {
    const [targetColor, setTargetColor] = useState<string>('');
    const [score, setScore] = useState<number>(0);
    const [gameStatus, setGameStatus] = useState<string>('');
    
    const generateNewColor = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setTargetColor(randomColor);
        setGameStatus('');
    };

    const handleColorGuess = (color: string) => {
        if (color === targetColor) {
            setScore(score + 1);
            setGameStatus('Correct!');
        } else {
            setGameStatus('Wrong! Try again.');
        }
    };

    const handleNewGame = () => {
        setScore(0);
        generateNewColor();
    };

    React.useEffect(() => {
        generateNewColor();
    }, []);

    return (
        <div className="App">
            <GameInstructions />
            <ColorBox color={targetColor} />
            <div className="color-options">
                {colors.map((color) => (
                    <ColorOption key={color} color={color} onClick={() => handleColorGuess(color)} />
                ))}
            </div>
            <GameStatus status={gameStatus} />
            <Score score={score} />

            <NewGameButton 
                onClick={handleNewGame}
            />
        </div>
    );
};

export default App;