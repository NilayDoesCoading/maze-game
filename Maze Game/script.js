const mazeMap = [
    "###############################",
    "#S....#.....#.......#.........#",
    "###.#.#.###.#######.#.#######.#",
    "#...#.#...#.........#.#.......#",
    "#.###.###.###########.#.#####.#",
    "#.....#...#...........#.#.....#",
    "#####.#.###.###########.#.###.#",
    "#.....#.....#...........#...#.#",
    "#.#########.#.###########.#.#.#",
    "#.........#.#.#...........#.#.#",
    "#########.#.#.#.###########.#.#",
    "#.........#...#.#...........#.#",
    "#.#############.#.###########.#",
    "#...............#.............#",
    "#.###########################.#",
    "#............................G#",
    "###############################"
];

const maze = document.getElementById("maze");

let playerRow;
let playerCol;

function startGame() {

    for (let row = 0; row < mazeMap.length; row++) {
        for (let col = 0; col < mazeMap[row].length; col++) {

            if (mazeMap[row][col] === "S") {
                playerRow = row;
                playerCol = col;
            }

        }
    }

    drawMaze();
}

function drawMaze() {

    maze.innerHTML = "";

    for (let row = 0; row < mazeMap.length; row++) {

        for (let col = 0; col < mazeMap[row].length; col++) {

            const cell = document.createElement("div");

            cell.classList.add("cell");

            const value = mazeMap[row][col];

            if (value === "#") {
                cell.classList.add("wall");
            }

            if (value === "G") {
                cell.classList.add("goal");
                cell.textContent = "🏠";
            }

            if (row === playerRow && col === playerCol) {
                cell.classList.add("player");
                cell.textContent = "🫪";
            }

            maze.appendChild(cell);
        }
    }
}

function move(direction) {

    let newRow = playerRow;
    let newCol = playerCol;

    if (direction === "up") {
        newRow--;
    }

    if (direction === "down") {
        newRow++;
    }

    if (direction === "left") {
        newCol--;
    }

    if (direction === "right") {
        newCol++;
    }

    if (mazeMap[newRow][newCol] !== "#") {

        playerRow = newRow;
        playerCol = newCol;

        drawMaze();

        checkWin();
    }
}

function checkWin() {

    if (mazeMap[playerRow][playerCol] === "G") {

        setTimeout(() => {
            alert("🎉 You Won!");
        }, 100);
    }
}

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowUp" || event.key.toLowerCase() === "w") {
        move("up");
    }

    if (event.key === "ArrowDown" || event.key.toLowerCase() === "s") {
        move("down");
    }

    if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
        move("left");
    }

    if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
        move("right");
    }

});

startGame();