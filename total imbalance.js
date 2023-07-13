function totalImbalance(ranks) {
    let length = ranks.length;
    let groups = [];
    let totalImbalance = 0;

    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            let sliced = ranks.slice(i, j + 1);
            sliced.sort(function (a, b) { return a-b; });
            // print(sliced);
            groups.push(sliced);
        }
    }
    
    groups.forEach(function (g) {
        print(g)
        
        for (let x = 1; x < g.length; x++) {
            if (g[x] - g[x - 1] > 1) {
                totalImbalance++;
                break;
            }
        }
    });
    
    // for (let g of groups) {
    //     for (let x = 1; x < g.length; x++) {
    //         if (g[x] - g[x - 1] > 1) {
    //             totalImbalance++;
    //             break;
    //         }
    //     }
    // }
    
    return totalImbalance;
}

print(totalImbalance([4,1,3,2]))






