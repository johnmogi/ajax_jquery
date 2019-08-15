console.log("start script") //1


function getUserFromServer(callback) { //3
    console.log("start getUserFromServer") //5
    setTimeout(() => { //6
        console.log("user back from server") //9
        callback("hello Gal, Please login") //10
    }, 7000);
    console.log("end getUserFromServer") //7
}

getUserFromServer((cbResult) => { //4
    console.log("you can use the user here!")  //11
    $("#result").html(cbResult) //12
});

console.log("end script") //8