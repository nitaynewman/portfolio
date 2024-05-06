import React, { useState } from 'react';
import './pig.css';

const PigGameComponent = () => {
  const [scores, setScores] = useState([0, 0]);
  const [activePlayer, setActivePlayer] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [playing, setPlaying] = useState(true);

  const init = () => {
    setScores([0, 0]);
    setActivePlayer(0);
    setCurrentScore(0);
    setPlaying(true);
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.dice').classList.add('hidden');
  };

  const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = '0';
    setCurrentScore(0);
    setActivePlayer(activePlayer === 0 ? 1 : 0);
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
  };

  const rollDice = () => {
    if (playing) {
      const dice = Math.trunc(Math.random() * 6) + 1;
      const diceEl = document.querySelector('.dice');
      diceEl.classList.remove('hidden');
      diceEl.src = `/img/dice-${dice}.png`;

      if (dice !== 1) {
        setCurrentScore(currentScore + dice);
        document.getElementById(`current--${activePlayer}`).textContent = currentScore + dice;
      } else {
        switchPlayer();
      }
    }
  };

  const hold = () => {
    if (playing) {
      scores[activePlayer] += currentScore;
      setScores([...scores]);

      document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

      if (scores[activePlayer] >= 100) {
        setPlaying(false);
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector('.dice').classList.add('hidden');
      } else {
        switchPlayer();
      }
    }
  };

  return (
    <main className='pig'>
      <section className={`player player--0 ${activePlayer === 0 ? 'player--active' : ''}`}>
        <h2 className="name" id="name--0">Player 1</h2>
        <p className="score" id="score--0">{scores[0]}</p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--0">0</p>
        </div>
      </section>
      <section className={`player player--1 ${activePlayer === 1 ? 'player--active' : ''}`}>
        <h2 className="name" id="name--1">Player 2</h2>
        <p className="score" id="score--1">{scores[1]}</p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--1">0</p>
        </div>
      </section>

      <img src="/img/dice-5.png" alt="Playing dice" className="dice hidden" />
      <button className="BTN BTN--new" onClick={init}>🔄 New game</button>
      <button className="BTN BTN--roll" onClick={rollDice}>🎲 Roll dice</button>
      <button className="BTN BTN--hold" onClick={hold}>📥 Hold</button>
    </main>
  );
};

export default PigGameComponent;
