// 796. Rotate String
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length != goal.length) return false;
    let size = s.length;
    while(size--){
        if(s == goal){
            return true;
        }
        let last = goal.slice(-1);
        goal = last+goal.slice(0,-1);
    }
    return false;
    // one line solution
    // return (s + s).includes(goal);
};