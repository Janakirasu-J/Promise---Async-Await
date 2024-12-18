// const age = parseInt(prompt("Enter Your Age"));
// const promises = new Promise((resolve, reject) => {
//   if (age >= 18) {
//     resolve("You Vote 2026");
//   } else {
//     reject("Your Not Eligible For Vote");
//   }
// });

// console.log(promises);
// promises.then((data) => console.log(data)).catch((error) => console.log(error));

function add(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num + 2), 2000);
  });
}
add(0)
  .then((data) => {
    console.log(data);
    return add(data);
  })

  .then((ele) => {
    console.log(ele);
    return add(ele);
  })
  .then((res) => {
    console.log(res);
    return add(res);
  })

  .then((fin) => {
    console.log(fin);
    return add(fin);
  })

  .catch((error) => console.log(error));
