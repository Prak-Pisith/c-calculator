function matrix(row, col) {
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            // console.log('?');
            process.stdout.write("#");
        }
        ;
        console.log("");
    }
}
function matrix2(row) {
    for (var i = 1; i <= row; i++) {
        for (var j = 0; j < i; j++) {
            // console.log('?');
            process.stdout.write("#");
        }
        ;
        console.log("");
    }
}
function matrix3(row) {
    for (var i = row; i >= 0; i--) {
        for (var j = 0; j < i; j++) {
            process.stdout.write("#");
        }
        ;
        console.log("");
    }
}
function matrix4(row) {
    var space = '';
    for (var i = row; i >= 0; i = i - 2) {
        for (var j = 0; j < i; j++) {
            process.stdout.write("#");
        }
        ;
        console.log('');
        space = space + ' ';
        process.stdout.write(space);
    }
}
function matrix5(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j <= i; j++) {
            process.stdout.write("#");
        }
        process.stdout.write("");
    }
}
matrix5(7);
