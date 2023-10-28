
function fizzBuzz(n, optimized) {
    if (!optimized) {
        for (let i = 1; i <= n; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                print("FizzBuzz ");
            } else if (i % 5 == 0) {
                print("Buzz ");
            } else if (i % 3 == 0) {
                print("Fizz");
            } else {
                print(i);
            }
        }
    } else {
        let s = "";
        let m3 = 0;
        let m5 = 0;

        for (let i = 1; i <= n; i++) {
            m3++; m5++;

            if (m3 == 3) {
                s += "Fizz";
                m3 = 0;
            }
            if (m5 == 5) {
                s += "Buzz";
                m5 = 0;
            }

            // if (s != "") {
            //     s += " ";
            // }

            if (s == "") {
                print(i);
            } else {
                print(s);
            }

            s = "";
        }
    }
}

fizzBuzz(100, true);

// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         let output = "";
//         if (i % 3 === 0) {
//             output += "Fizz";
//         }
//         if (i % 5 === 0) {
//             output += "Buzz";
//         }
//         if (output === "") {
//             output = i;
//         }
//         print(output);
//     }
// }

// fizzBuzz(100);
