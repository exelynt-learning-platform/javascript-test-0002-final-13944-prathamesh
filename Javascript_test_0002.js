function printInvertedTriangle(rows) {
    let triangle = [];

   
    for (let i = 0; i < rows; i++) {
        triangle[i] = new Array(i + 1);
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                triangle[i][j] = 1;
            } else {
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }
    }

   
    for (let i = rows - 1; i >= 0; i--) {
        let rowOutput = "";
        
        
        for (let s = 0; s < rows - i - 1; s++) {
            rowOutput += " ";
        }

       
        for (let j = 0; j <= i; j++) {
            rowOutput += triangle[i][j] + " ";
        }
        
        console.log(rowOutput);
    }
}


printInvertedTriangle(5);