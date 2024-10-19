import React, { useState } from 'react';
import './guess.css';

export default function GuessNum() {
    const [secretNumber, setSecretNumber] = useState(Math.trunc(Math.random() * 20) + 1);
    const [score, setScore] = useState(20);
    const [highscore, setHighscore] = useState(0);
    const [message, setMessage] = useState('Start guessing...');
    const [userGuess, setUserGuess] = useState('');
    const [gameOver, setGameOver] = useState(false);

    const checkGuess = () => {
        const guess = Number(userGuess);

        if (!guess) {
            setMessage('⛔ No Number ⛔');
        } else if (guess === secretNumber) {
            setMessage('🎉 Correct Number 🎉');
            setGameOver(true);
            document.querySelector('.Guess').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if (score > highscore) {
                setHighscore(score);
            }
        } else {
            const message = guess > secretNumber ? 'Too high' : 'Too low';
            setMessage(message);
            setScore(prevScore => prevScore - 1);
            if (score === 1) {
                setMessage('You Lose');
                setGameOver(true);
            }
        }
        setUserGuess('');
    };

    const resetGame = () => {
        setSecretNumber(Math.trunc(Math.random() * 20) + 1);
        setScore(20);
        setMessage('Start guessing...');
        setGameOver(false);
        document.querySelector('.Guess').style.backgroundColor = '#fff';
        document.querySelector('.number').style.width = '15rem';
    };

    return (
        <div className="Guess">
            <header className='header'>
                <h1 className='H1'>Guess My Number!</h1>
                <p className="between">(Between 1 and 20)</p>
                <button className="btn again" onClick={resetGame}>Again!</button>
                <div className="number">{gameOver ? secretNumber : '?'}</div>
            </header>
            <div className='MAIN'>
                <section className="left">
                    <input
                        type="number"
                        className='try'
                        style={{  }}
                        value={userGuess}
                        onChange={(e) => setUserGuess(e.target.value)}
                        disabled={gameOver}
                    />
                </section>
                    <button className="btn" onClick={checkGuess} disabled={gameOver}>Check!</button>
                <section className="right">
                    <p className="message">{message}</p>
                    <p className="label-score">💯 Score: <span className="score">{score}</span></p>
                    <p className="label-highscore">🥇 Highscore: <span className="highscore">{highscore}</span></p>
                </section>
            </div>
        </div>
    );
}

