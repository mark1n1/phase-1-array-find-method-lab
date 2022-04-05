// code your solution here
function superbowlWin(record) {
    const wins = record.find(lookup);
    
    if(wins) {
        return wins.year;
    }
    return undefined;
}

function lookup(record) {
    return record.result === "W";
}