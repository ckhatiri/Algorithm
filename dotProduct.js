let IR = [[1,5,6],[0,0,0]];
function dotProduct(v1 , v2){
    let result =0;
    for(let i = 0; i<v1.length; i++){
        result += v1[i] * v2[i];
    }
    return result
}

for (let i = 0; i < IR.length; i++) {
    for (let j = i+1; j < IR.length; j++) {
        if (dotProduct(IR[i],IR[j]) === 0) {
            console.log(IR[i], 'and',IR[j], 'are orthogonal');
        }
        
    }
    
}