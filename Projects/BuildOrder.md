# Build Order for a 2D Platformer Game

## Table of Contents

- [Separate Concerns with Custom Hooks](#separate-concerns-with-custom-hooks)
- [Manage Game State with Context](#manage-game-state-with-context)
- [Optimize Performance with useMemo and useCallback](#optimize-performance-with-usememo-and-usecallback)
- [Handle Animations with useRef and useEffect](#handle-animations-with-useref-and-useeffect)
- [Use Reducers for Complex State Logic](#use-reducers-for-complex-state-logic)

## Separate Concerns with Custom Hooks

Create custom hooks to encapsulate specific game logic. This helps keep your components clean and focused on rendering.

```javascript
// usePlayer.js
import { useState, useEffect } from 'react';

const usePlayer = (initialPosition) => {
  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Update position based on key press
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return [position, setPosition];
};

export default usePlayer;
```

## Manage Game State with Context

Use React Context to manage global game state, such as score, level, and player health. This avoids prop drilling and makes state management more efficient.

```javascript
// GameContext.js
import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);

  return (
    <GameContext.Provider value={{ score, setScore, level, setLevel }}>
      {children}
    </GameContext.Provider>
  );
};
```

## Optimize Performance with useMemo and useCallback

Use useMemo and useCallback to memoize expensive calculations and functions, reducing unnecessary re-renders.

```javascript
import { useMemo, useCallback } from 'react';

const useGameLogic = (dependencies) => {
  const expensiveCalculation = useMemo(() => {
    // Perform expensive calculation
  }, [dependencies]);

  const memoizedCallback = useCallback(() => {
    // Perform some action
  }, [dependencies]);

  return { expensiveCalculation, memoizedCallback };
};
```

## Handle Animations with useRef and useEffect

Use useRef to manage references to DOM elements and useEffect to handle animations.

```javascript
import { useRef, useEffect } from 'react';

const useAnimation = () => {
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const animate = (time) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      // Update animation based on deltaTime
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return requestRef;
};
```

## Use Reducers for Complex State Logic

For more complex state logic, consider using useReducer instead of useState.

```javascript
import { useReducer } from 'react';

const initialState = { score: 0, level: 1 };

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_SCORE':
      return { ...state, score: state.score + action.payload };
    case 'NEXT_LEVEL':
      return { ...state, level: state.level + 1 };
    default:
      return state;
  }
};

const useGameReducer = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  return [state, dispatch];
};
```
