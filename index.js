function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    if(string == "Let's have dinner together!"){
        return "I would love to!";
    }
    let x = string.toUpperCase();
    if(x == string){
        return "YES INDEED!";
    }else{
        return "I can't hear you!";
    }
}