
 
//What is wrong with the following code?

var server_echo; //its 2022 , no need for global variables. It's better to keep things scoped
var json = {
    json: JSON.stringify({
        a: 1,
        b: 2
    }),
    delay: 3
};
fetch('/echo/', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain,'
        'Content-Type': 'application/json'
    },
    body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
})
.then(function (response) {
    server_echo = response.json().echo      //RESPON.json() returns a PROMISE w/ result of parsing response object. There is no echo method on a promise
    return response.json();                 //if you remove echo, still you be trying to "attempting to parse or READ RESPONSE" from an invalid type
})
.then(function (result) {
    alert(result);
})
.catch (function (error) {
    console.log('Request failed', error);
});
server_echo.forEach(
    element => console.log(element)
)

/**
 *  Additional notes
 *  This code in llustrates call back hell, it would better to use try catch method to improve the read ability of the code
 */

 let json = {
     json: JSON.stringify({
         a: 1,
         b: 2
     }),
     delay: 3
 };

async function fetchData(data: {[key: string]: any}){
    try {
        const response = await fetch('/echo/', {
            method: 'post',
            headers: {
               'Accept': 'application/json, text/plain,'
               'Content-Type': 'application/json'
       },
            body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
        })
    } catch(error: any) {
        console.log('Request failed', error)
    }
}

const server_echo = fetchData(json)


 .then(function (response) {
     server_echo = response.json().echo      //RESPON.json() returns a PROMISE w/ result of parsing response object. There is no echo method on a promise
     return response.json();                 //if you remove echo, still you be trying to "attempting to parse or READ RESPONSE" from an invalid type
 })
 .then(function (result) {
     alert(result);
 })
 .catch (function (error) {
     console.log('Request failed', error);
 });
 server_echo.forEach(
     element => console.log(element)
 )