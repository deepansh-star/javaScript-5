function genRandNums() {
    return Math.floor(Math.random() * 100 ) ;
}
function genRandNumsDelay (delay) {
    console.log(`Genrate A Random Number After A Delay Of ${delay} Seconds...`);
    let countdown = 3 ;
    const countWithInterval = setInterval (() => {
        console.log(`${countdown} Seconds Remaining...`);
        countdown--;
        if (countdown == 0) {
            clearInterval(countWithInterval);
            const randomNumber = genRandNums();
            console.log(`Random number generated: ${randomNumber}`);          
        }
    }, 1000) ;
}
genRandNumsDelay() ;






