let set1 = [12, 13, 6, 10];
let set2 = [13, 10, 16, 15];
let sum = 0
let result = 0;
let result2 = 0;
let unique1 = set1.filter(function (o) {
    return set2.indexOf(o) === -1
});
let unique2 = set2.filter(function (o) {
    return set1.indexOf(o) === -1
});
let set = unique1.concat(unique2);
for (let i = 0; i < set.length; i++) {
    result2 += set[i]

}

for (let i = 0; i < set1.length; i++) {
    for (let j = 0; j < set1.length; j++) {
        if (set1[i] != set2[j]) continue;
        if (set1[i] == set2[j]) {
            sum = set1[i] + set2[j];
            result += sum;
        }
    }
}
console.log("the sum of overlapping elements :", result);
console.log("the sum of distinct elements  :", result2)
