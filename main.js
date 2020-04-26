// Creating a Fibonacci Series of a given number
// I didn't really understand the wording of the question, and so I decided to write the two interpretations of the question that I thought of.

// A function Fibonacci to return the nth number of the sequence
let fibonacciNum = (n) => {
    let x = 0,
        y = 1,
        z = 1;

    for (let i = 2; i <= n; i++) {
        z = x + y;
        x = y;
        y = z;
    }
    return z;
};

console.log(fibonacciNum(5));

// A function fibonacci to return a sequence with 'm' numbers in the Fibonacci sequence
let fibonacciSeq = (m) => {
    if (m === 1) {
        return [0, 1];
    } else {
        let seq = fibonacciSeq(m - 1);
        seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
        return seq;
    };
};

console.log(fibonacciSeq(9));