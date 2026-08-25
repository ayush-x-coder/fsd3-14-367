// in asynchronous we use eventloop to manage the call stack

// asynchronous call using timer
// 1. set timeout
// 2. set immediate
// 3. process.next tick
// 4. set interval

const f1 = () => {
    console.log("f1");
};

const f2 = () => {
    console.log("f2");
};

// const main= () => {
//     console.log("main");
//     setTimeout(f1, 5000);
//     setTimeout(f2, 6000);
//     console.log("end main");
// };

// const main = () => {
//     console.log("main");
//     setInterval(f1, 1000);
//     console.log("end main");
// };

// const main = () => {
//     console.log("main");
//     setImmediate(f2);
//     console.log("end");
// };

const main = () => {
    console.log("main");
    setTimeout(f1, 0);
    process.nextTick(f2);
    console.log("end");
};

main();