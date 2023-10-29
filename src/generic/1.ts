/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise() {
  return new Promise((resolve) => {
    let arr: Array<string | number> = ["Text", 50];
    resolve(arr);
  });
}

getPromise().then((data) => {
  console.log(data);
});

export {};
