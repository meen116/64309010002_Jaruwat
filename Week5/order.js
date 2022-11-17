let data1 = {
    "Customer" : "Mr.Lee",
    "Item Order" : ["A4 Paper", "Ruler"],
    "Qty" : [5,2],
    "Price" : [120,25]
}

let data2 = {
    "Customer" : "Mr.Yue",
    "Item Order" : ["Flash Drive", "A4 Paper"],
    "Qty" : [2,3],
    "Price" : [130,120]
}

let data3 = {
    "Customer" : "Mr.New",
    "Item Order" : ["Flash Drive", "Power Supply", "Hard Disk"],
    "Qty" : [3,5,1],
    "Price" : [100,550,500]
}

for (i=0; i<data1.length;i++){
    console.log(order[i].Customer);
    let sum=0;
    for(let j = 0; j < order[i].ItemOrder.length; j++) {
        sum += order[i].Qty[j] = order[i].Price[j];
    }
    console.log(order[i].Customer, sum);
}