
//Solution 1 with an array

let set1 = [12, 13, 6, 10];
let set2 = [13, 10, 16, 15];
let sum =0
let result = 0;
for(let i = 0; i < set1.length; i++){
    for(let j = 0; j < set1.length; j++){
        if(set1[i] != set2[j]) continue;
        if(set1[i] == set2[j]){
            sum = set1[i] + set2[j];
            result += sum;
        }
    }
}
console.log("the sum of overlapping elements :",result);

//Solution 2 with an hash table

let set3 = {
    "a":12,
    "b":13,
    "c":6,
    "d":10,
};
let set4 = {
    "a":13,
    "b":10,
    "c":16,
    "d":15,
};
let sum1 =0
let result1 = 0;
for(let i in set3){
    for(let j in set4){
        if(set3[i] != set4[j]) continue;
        if(set3[i] == set4[j]){
            sum1 = set3[i] + set4[j];
            result1 += sum1;
        }
    }
}
console.log("the sum of overlapping elements :",result1);
