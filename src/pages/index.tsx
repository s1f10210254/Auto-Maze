import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [maze, setMaze] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  // console.log('xy確認', maze[1][3]);

  const [human, setHuman] = useState({
    x: 0,
    y: 0,
    front: [-1, 0],
  });

  const directions = [
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
      const randomDirection = directions[randomDirectionIndex];
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
    const [dx, dy] = front;

    // 現在の向きを左に90度変更
    const newFront = [dy, -dx];

    // 新しい座標を計算
    const nextX = x + newFront[0];
    const nextY = y + newFront[1];

    // 新しい座標が迷路の範囲内であり、かつ壁がない場合は前進
    if (
      nextX >= 0 &&
      nextX < maze.length &&
      nextY >= 0 &&
      nextY < maze[0].length &&
      maze[nextY][nextX] !== 1
    ) {
      setHuman({ x: nextX, y: nextY, front: newFront });
    }
  };

  const goMove = () => {
    const { x, y, front } = human;
    const [dx, dy] = front;

    // 現在の座標の前方に進む座標を計算
    const nextX = x + dx;
    const nextY = y + dy;

    // 新しい座標が迷路の範囲内であり、かつ壁がない場合は前進
    if (
      nextX >= 0 &&
      nextX < maze.length &&
      nextY >= 0 &&
      nextY < maze[0].length &&
      maze[nextY][nextX] !== 1
    ) {
      setHuman({ ...human, x: nextX, y: nextY });
    }
  };

  const turnleft = () => {
    const { front } = human;
    const [dx, dy] = front;

    // 現在の向きを右に90度変更
    const newFront = [dy, -dx];
    setHuman({ ...human, front: newFront });
  };

  const moveHuman = () => {
    const { x, y, front } = human;
    const [dx, dy] = front;

    // 左手が壁でない場合は左に回る
    // const leftX = x - dy;
    // const leftY = y + dx;
    const leftX = x + dy;
    const leftY = y - dx;
    if (
      leftX >= 0 &&
      leftX < maze.length &&
      leftY >= 0 &&
      leftY < maze[0].length &&
      maze[leftY][leftX] === 1
    ) {
      leftMove();
      console.log('leftmove実行');
    }
    // 前が壁でない場合は前に進む
    else if (
      x + dx >= 0 &&
      x + dx < maze.length &&
      y + dy >= 0 &&
      y + dy < maze[0].length &&
      maze[y + dy][x + dx] !== 1
    ) {
      goMove();
      console.log('goMove実行');
    }
    // どちらも壁の場合は右に回る
    else {
      turnleft();
      console.log('turnleft実行');
    }
  };

  // 矢印の向きを計算する関数
  const getArrowRotation = (dx: number, dy: number): number => {
    const angle = Math.atan2(dy, dx);
    return (angle * 180) / Math.PI;
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
              {human.x === x && human.y === y && (
                <div className={styles.position}>
                  <div
                    className={styles.arrow}
                    style={{
                      transform: `rotate(${getArrowRotation(human.front[0], human.front[1])}deg)`,
                    }}
                  />
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
