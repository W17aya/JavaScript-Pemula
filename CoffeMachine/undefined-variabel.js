let json = '{ "name": "Yoda", "age": 20 }';

try {
    let user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }

    errorCode;

    console.log(user.name); // Yoda
    console.log(user.age);  // 20
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}

/* output
JSON Error: errorCode is not defined
*/

//try {
//     // ...
// } catch (error) {
//     if (error instanceof SyntaxError) {
//         console.log(`JSON Error: ${error.message}`);
//     } else if (error instanceof ReferenceError) {
//         console.log(error.message);
//     } else {
//         console.log(error.stack);
//     }
// }
//menyesuaikan error message dengan error yang muncul