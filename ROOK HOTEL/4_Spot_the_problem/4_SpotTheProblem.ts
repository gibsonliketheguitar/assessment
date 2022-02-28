//What is wrong with the following code?

var server_echo; //its 2022 , no need for global variables. It's better to keep things scoped
var json = {
  json: JSON.stringify({
    a: 1,
    b: 2,
  }),
  delay: 3,
};
fetch("/echo/", {
  method: "post",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
  body:
    "json=" +
    encodeURIComponent(JSON.stringify(json.json)) +
    "&delay=" +
    json.delay,
})
  .then(function (response) {
    server_echo = response.json().echo; //RESPON.json() returns a PROMISE w/ result of parsing response object. There is no echo method on a promise
    return response.json();
  })
  .then(function (result) {
    alert(result);
  })
  .catch(function (error) {
    console.log("Request failed", error);
  });
server_echo.forEach((element) => console.log(element));

/**
 *  Reafactor notes notes
 *  This code in illustrates call back hell, it would better to use try catch method to improve the read ability of the code
 *  - use try catch to flatten logic
 *  - create method to with the single responsibility of fetching data. (it was fetching, alerting, and iterating to print)
 *
 */

let data = {
  json: JSON.stringify({
    a: 1,
    b: 2,
  }),
  delay: 3,
};

async function fetchData(data: { [key: string]: any }): Promise<[]> {
  let result: any = [];
  try {
    const response = await fetch("/echo/", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain,",
        "Content-Type": "application/json",
      },
      body:
        "json=" +
        encodeURIComponent(JSON.stringify(data.json)) +
        "&delay=" +
        data.delay,
    });
    result = await response.json();
  } catch (error: any) {
    console.log("Request failed", error);
    result = { error: true, message: error };
  }
  return result;
}

const server_echo2 = await fetchData(data);
alert(server_echo2);
server_echo2.forEach((e: any) => console.log(e));
