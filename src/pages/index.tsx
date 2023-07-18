import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [maze, setMaze] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const front = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const mazeGeneration = () => {
    for (let x = 0; x < maze.length; x++) {
      for (let y = 0; y < maze[x].length; y++) {
        if (x % 2 === 1 && y % 2 === 1) {
          const updatedMaze = [...maze];
          updatedMaze[x][y] = 1;
          setMaze(updatedMaze);
          console.table(maze);
        }
      }
    }

    const startCells = [];
    for (let i = 0; i < maze.length; i++) {
      for (let j = 0; j < maze[i].length; j++) {
        if (maze[i][j] === 1) {
          startCells.push([i, j]);
        }
      }
    }
    const randomStartCell = startCells[Math.floor(Math.random() * startCells.length)];
    const randomDirection = front[Math.floor(Math.random() * front.length)];

    // 選んだセルの周囲のセルを計算
    const x = randomStartCell[0] + randomDirection[0];
    const y = randomStartCell[1] + randomDirection[1];

    // そのセルが範囲内であれば、そのセルの値を1に変更
    if (x >= 0 && x < maze.length && y >= 0 && y < maze[0].length) {
      const newMaze = [...maze];
      newMaze[x][y] = 1;
      setMaze(newMaze);
    }
  };

  // const generation = () => {
  //   for (let x = 0; x < maze.length; x++) {
  //     for (let y = 0; y < maze[x].length; y++) {
  //       if (x % 2 === 1 && y % 2 === 1) {
  //         const updatedMaze = [...maze];
  //         updatedMaze[x][y] = 1;
  //         setMaze(updatedMaze);
  //         console.table(maze);
  //       }
  //     }
  //   }
  // };

  return (
    <div className={styles.container}>
      {['生成'].map((v) => (
        <li onClick={mazeGeneration} key={v}>
          {v}
        </li>
      ))}

      <div className={styles.maze}>
        {maze.map((row, x) =>
          row.map((cell, y) => (
            <div className={styles.cell} key={`${x}-${y}`}>
              {cell === 1 && <div className={styles.pillar} />}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
