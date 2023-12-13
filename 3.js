let item = [
    {
        name: "Asus F12",
        category: "Laptop",
        priceUSD: 999,
    },
    {
        name: "Oppo",
        category: "Mobiles",
        priceUSD: 499,
    },
    {
        name: "Watch",
        category: "Watches",
        priceUSD: 499,
    },
];

let exchangeRate = 80 ;
function convertToINR(USD) {
    return USD * exchangeRate ;
}

let itmInINR = item.map((item)=> ({
...item,
priceINR: convertToINR(item.USD),
}));

console.log(itmInINR) ;





