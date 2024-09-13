import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [grid, setGrid] = useState(() =>
    Array(50)
      .fill()
      .map(() => Array(50).fill(false))
  );
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setGrid((currentGrid) => {
          const newGrid = currentGrid.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
              const neighbors = countNeighbors(currentGrid, rowIndex, colIndex);
              if (cell && (neighbors < 2 || neighbors > 3)) {
                return false;
              } else if (!cell && neighbors === 3) {
                return true;
              } else {
                return cell;
              }
            })
          );
          return newGrid;
        });
      }, 100);
    } else if (!running && interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const countNeighbors = (grid, row, col) => {
    let count = 0;
    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    directions.forEach(([dx, dy]) => {
      const newRow = row + dx;
      const newCol = col + dy;
      if (
        newRow >= 0 &&
        newRow < grid.length &&
        newCol >= 0 &&
        newCol < grid[0].length
      ) {
        count += grid[newRow][newCol] ? 1 : 0;
      }
    });
    return count;
  };

  const toggleCell = (row, col) => {
    setGrid((currentGrid) => {
      const newGrid = currentGrid.map((r, rIndex) =>
        r.map((c, cIndex) => (rIndex === row && cIndex === col ? !c : c))
      );
      return newGrid;
    });
  };

  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <button onClick={() => setRunning(!running)}>
        {running ? "Stop" : "Start"}
      </button>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell ? "alive" : "dead"}`}
                onClick={() => toggleCell(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
