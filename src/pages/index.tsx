import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [maze, setMaze] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);

  const [human, setHuman] = useState({
    x: 4,
    y: 4,
    front: [1, 0],
  });

  const front = [
    //上右下左
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const mazeGeneration_Odd = () => {
    const startCells: number[][] = [];

    for (let x = 0; x < maze.length; x++) {
      for (let y = 0; y < maze[x].length; y++) {
        if (x % 2 === 1 && y % 2 === 1) {
          startCells.push([y, x]);
          const updatedMaze = [...maze];
          updatedMaze[y][x] = 1;
          setMaze(updatedMaze);
        }
      }
    }
    console.log('両方奇数を１にする↓');
    console.table(maze);
    return startCells;
  };

  const generation = () => {
    const startCells = mazeGeneration_Odd();
    const updatedMaze = [...maze];
    for (const startCell of startCells) {
      const [y, x] = startCell;

      // ランダムな方向を選択
      const randomDirectionIndex = Math.floor(Math.random() * 4);
      const randomDirection = front[randomDirectionIndex];
      const [dy, dx] = randomDirection;

      // 選択した方向のセルが迷路の範囲内であれば、そのセルの値を1に変更
      const newX = x + dx;
      const newY = y + dy;
      if (newX >= 0 && newX < maze.length && newY >= 0 && newY < maze[0].length) {
        updatedMaze[newY][newX] = 1;
      }
    }

    setMaze(updatedMaze);
    console.log('迷路盤↓');
    console.table(maze);
    console.log('front');
    console.log(human);
  };

  const leftMove = () => {
    const { x, y, front } = human;
    // const newFront = [front[0] - 1, front[1] - 1];
    // setHuman((prevHuman) => ({
    //   ...prevHuman,
    //   front: newFront,
    // }));
    const nextX = x + front[0];
    const nextY = y + front[1];
    setHuman((prevHuman) => ({
      ...prevHuman,
      x: nextX,
      y: nextY,
    }));
  };

  // const downMove = () => {
  //   const { x, y, front } = human;
  //   const nextX = x + front[0];
  //   const nextY = y + front[1];

  //   setHuman((prevHuman) => ({
  //     ...prevHuman,
  //     x: nextX,
  //     y: nextY,
  //   }));
  // };

  // const rightRotation = () => {
  //   const { front } = human;
  //   const newFront = [front[0] + 1, front[1] + 1];

  //   setHuman((prevHuman) => ({
  //     ...prevHuman,
  //     front: newFront,
  //   }));
  // };

  const moveHuman = () => {
    const { x, y, front } = human;
    const newFront = [front[0] - 1, front[1] - 1];
    setHuman((prevHuman) => ({
      ...prevHuman,
      front: newFront,
    }));
    const nextX = x + front[1];
    const nextY = y + front[0];
    console.log('newFront', newFront);
    console.log('人間の次のX座標', nextX, '人間の次のY座標', nextY);
    const setFront = [front[1], front[0]];
    setHuman((prevHuman) => ({
      ...prevHuman,
      front: setFront,
    }));
    if (
      nextX >= 0 &&
      nextX < maze.length &&
      nextY >= 0 &&
      nextY < maze[0].length &&
      maze[nextY][nextX] === 0
    ) {
      leftMove();
      console.log('leftMove実行');
    }
    console.log(human);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <button className={styles.generationbu} onClick={generation}>
          生成
        </button>
        <button className={styles.humanbu} onClick={moveHuman}>
          探索
        </button>
      </div>
      <div className={styles.maze}>
        {maze.map((row, x) =>
          row.map((cell, y) => (
            <div className={styles.cell} key={`${x}-${y}`}>
              {cell === 1 && <div className={styles.pillar} />}
              {human.x === x && human.y === y && <div className={styles.position} />}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;