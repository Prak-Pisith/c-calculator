function matrix (row: number, col: number): void {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // console.log('?');
      process.stdout.write("#");
    };
    console.log("");
  }
}


function matrix2 (row: number): void {
  for (let i = 1; i <= row; i++) {
    for (let j = 0; j < i; j++) {
      // console.log('?');
      process.stdout.write("#");
    };
    console.log("");
  }
}

function matrix3 (row: number): void {
  for (let i = row; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      process.stdout.write("#");
    };
    console.log("");
  }
}

function matrix4 (row: number): void {
  let space: string = '';
  for (let i = row; i >= 0; i = i - 2) {
    for (let j = 0; j < i; j++) {
      process.stdout.write("#");
    };
    console.log('');
    space = space + ' ';
    process.stdout.write(space);
  }
}

function matrix5 (n: number): void {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("#");
    }
    process.stdout.write("");
  }
} 


matrix5(7);

