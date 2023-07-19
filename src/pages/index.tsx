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
    x: 0,
    y: 0,
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
          startCells.push([x, y]);
          const updatedMaze = [...maze];
          updatedMaze[x][y] = 1;
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
      const [x, y] = startCell;

      // ランダムな方向を選択
      const randomDirectionIndex = Math.floor(Math.random() * 4);
      const randomDirection = front[randomDirectionIndex];
      const [dx, dy] = randomDirection;

      // 選択した方向のセルが迷路の範囲内であれば、そのセルの値を1に変更
      const newX = x + dx;
      const newY = y + dy;
      if (newX >= 0 && newX < maze.length && newY >= 0 && newY < maze[0].length) {
        updatedMaze[newX][newY] = 1;
      }
    }

    setMaze(updatedMaze);
    console.log('迷路盤↓');
    console.table(maze);
  };

  const leftMove = () => {
    const { x, y, front } = human;
    const newX = x + front[1];
    const newY = y - front[0];

    setHuman({ x: newX, y: newY, front: [1, 0] });
  };

  const downMove = () => {
    const { x, y, front } = human;
    const newX = x + front[0];
    const newY = y + front[1];

    setHuman({ x: newX, y: newY, front: [1, 0] });
  };

  const rightRotation = () => {
    const { front } = human;
    const newFront = [front[1], -front[0]];

    setHuman((prevHuman) => ({
      ...prevHuman,
      front: newFront,
    }));
  };

  const moveHuman = () => {
    const { x, y, front } = human;

    // 左手、前方の座標を計算
    const leftHandX = x + front[1];
    const leftHandY = y - front[0];
    const frontX = x + front[0];
    const frontY = y + front[1];

    // 左手が壁でない場合
    if (
      leftHandX >= 0 &&
      leftHandX < maze.length &&
      leftHandY >= 0 &&
      leftHandY < maze[0].length &&
      maze[leftHandX][leftHandY] === 0
    ) {
      leftMove();
      console.log('leftMove');
    }
    // 左手が壁で前が空いている場合
    else if (
      maze[x][y] === 0 &&
      frontX >= 0 &&
      frontX < maze.length &&
      frontY >= 0 &&
      frontY < maze[0].length &&
      maze[frontX][frontY] === 0
    ) {
      downMove();
      console.log('downMove');
    }
    // 左手が壁でかつ前も壁の場合
    else {
      rightRotation();
      console.log('rightRotation');
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
