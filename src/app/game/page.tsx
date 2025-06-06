'use client'; 

import React, { useState, useEffect, useCallback } from 'react'; // Adicionado useCallback



interface Attempt {
  guess: string;
  bulls: number;
  cows: number;
}

const GAME_LENGTH = 4; 
const MAX_ATTEMPTS = 10; 

export default function GamePage() {
  const [secret, setSecret] = useState<string>('');
  const [guess, setGuess] = useState<string>('');
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  
  const generateSecret = useCallback(() => { 
    const digits = '0123456789'; 
    let newSecret = '';
    while (newSecret.length < GAME_LENGTH) {
      const char = digits[Math.floor(Math.random() * digits.length)];
      if (!newSecret.includes(char)) { 
        newSecret += char;
      }
    }
    return newSecret;
  }, []); 

  
  const startNewGame = useCallback(() => { 
    setSecret(generateSecret());
    setGuess('');
    setAttempts([]);
    setGameOver(false);
    setGameWon(false);
    setMessage('');
  }, [generateSecret]); 

 
  useEffect(() => {
    startNewGame();
  }, [startNewGame]); 

  
  const checkGuess = useCallback((currentGuess: string, currentSecret: string) => { // Envolvido em useCallback
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < GAME_LENGTH; i++) {
      if (currentGuess[i] === currentSecret[i]) {
        bulls++; 
      } else if (currentSecret.includes(currentGuess[i])) {
        cows++; 
      }
    }
    return { bulls, cows };
  }, []); 

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (gameOver) return;

    
    if (guess.length !== GAME_LENGTH || !/^\d+$/.test(guess) || new Set(guess).size !== GAME_LENGTH) {
      setMessage(`Please enter a unique ${GAME_LENGTH}-digit number.`);
      return;
    }

    const { bulls, cows } = checkGuess(guess, secret);
    const newAttempt: Attempt = { guess, bulls, cows };

    const updatedAttempts = [newAttempt, ...attempts]; 
    setAttempts(updatedAttempts);
    setGuess(''); // Limpa o input

    if (bulls === GAME_LENGTH) {
      setMessage(`Congratulations! You guessed the secret number ${secret} in ${updatedAttempts.length} attempts!`);
      setGameWon(true);
      setGameOver(true);
    } else if (updatedAttempts.length >= MAX_ATTEMPTS) {
      setMessage(`Game Over! You ran out of attempts. The secret number was ${secret}.`);
      setGameOver(true);
    } else {
      setMessage(''); 
    }
  };

  const handleShowSecret = () => {
    alert(`The secret number is: ${secret}`);
  };

  return (
    <section className="text-white py-8">
      <div className="container mx-auto px-8 max-w-xl">
        <h2 className="text-3xl font-bold mb-6 font-mono text-center">Jogo da Senha (Bulls and Cows)</h2>
        <p className="text-center text-zinc-400 mb-8">Guess the {GAME_LENGTH}-digit secret number. Digits are unique.</p>

        {message && (
          <div className={`p-3 rounded-md text-center mb-4 ${gameWon ? 'bg-green-600' : gameOver ? 'bg-red-600' : 'bg-blue-600'}`}>
            {message}
          </div>
        )}

        {!gameOver ? (
          <form onSubmit={handleSubmit} className="mb-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              maxLength={GAME_LENGTH}
              pattern="\d*"
              inputMode="numeric"
              className="p-3 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-xl w-full sm:w-auto"
              placeholder={`Enter ${GAME_LENGTH} digits`}
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 w-full sm:w-auto"
            >
              Guess ({MAX_ATTEMPTS - attempts.length} left)
            </button>
          </form>
        ) : (
          <div className="flex justify-center mb-6">
            <button
              onClick={startNewGame}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200"
            >
              Play Again
            </button>
          </div>
        )}

        <div className="flex justify-center mb-6">
          <button
            onClick={handleShowSecret}
            className="bg-zinc-700 hover:bg-zinc-600 text-zinc-200 font-bold py-2 px-4 rounded-md transition-colors duration-200"
          >
            Show Secret
          </button>
        </div>

        {attempts.length > 0 && (
          <div className="bg-zinc-800 p-6 rounded-md shadow-lg">
            <h3 className="text-xl font-bold mb-4 font-mono text-center">Attempts History</h3>
            <ul className="space-y-3">
              {attempts.map((attempt, index) => (
                <li key={index} className="flex justify-between items-center text-lg p-2 rounded-md bg-zinc-700">
                  <span className="font-semibold text-blue-300">Attempt {attempts.length - index}:</span>
                  <span className="font-bold text-xl">{attempt.guess}</span>
                  <span>Bulls: <span className="text-green-400 font-bold">{attempt.bulls}</span></span>
                  <span>Cows: <span className="text-yellow-400 font-bold">{attempt.cows}</span></span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}