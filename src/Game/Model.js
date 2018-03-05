import dimensions from './Dimensions'

class Model {
  constructor(selectedLength) {
    this.length = dimensions.length[selectedLength];
    this.cells = dimensions.set[selectedLength]
    this.colors = new Map();
    this.neighbors = new Map();
    this.filled = new Set();
    this.filled.add(1);
    for (let cell = 1; cell <= this.length * this.length ; cell++) {
      this.colors.set(cell, Math.floor(Math.random() * 6 + 1));
      this.neighbors.set(cell, this.findNeighbor(cell, this.length));
    }
  }

  fill(color) {
    this.filled.forEach((cell) => {
      this.colors.set(cell, color);
      this.neighbors.get(cell).forEach((neighbor) => {
        if (this.colors.get(neighbor) === this.colors.get(cell)) {
          this.filled.add(neighbor);
        }
      });
    });
  }

  findNeighbor(cellNumber, gridSize) {
    let neighbors = [];
    if (cellNumber - gridSize > 0) neighbors.push(cellNumber - gridSize);
    if (cellNumber % gridSize !== 0) neighbors.push(cellNumber + 1);
    // if (cellNumber - gridSize * gridSize < -gridSize) neighbors.push(cellNumber + gridSize);
    if (cellNumber + gridSize < gridSize * gridSize) neighbors.push(cellNumber + gridSize);
    if ((cellNumber - 1) % gridSize !== 0) neighbors.push(cellNumber - 1);

    return neighbors;
  }
}

export default Model;
