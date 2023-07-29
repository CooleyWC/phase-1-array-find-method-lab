// code your solution here
function superbowlWin(record){
    let teamWinSearch = record.find(function(element){
        return element.result === "W";
    });
    if(teamWinSearch) {
        return teamWinSearch.year;
    } else {
        return undefined
    }
}
