
function superbowlWin(arr) {
    let result = arr.find(ele => ele.result==="W")
    return !!result ? result.year : undefined
}