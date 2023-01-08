// console.log('convert ts to js file step 1');
// /*  */


// /* 
//     (null, undefined, any) type Assertions(as)
//     Non-Null Assertion Operator (Postfix!)
//     Optional Chaining(?.)
//     Literal Types(value an type)
//     literal Inference(as const)
// */

// interface user {
//     name?: string;
//     email:string;
// }

// let user: user | null | undefined = null;
// /* we are not use any bcz its don't support or don't checking anything in our code*/
// user = {
//     name: "user",
//     email: "user@gmail.com",
// };

// // type Assertions 
// /*   its means empty object
//  */
// let user = {} as user;
// user = {
//     name: "user",
//     email: "user@gmail.com",
// };

// user?.email;
