// 205. Isomorphic Strings

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length != t.length ) return false;
    let m = new Map();
    let x = ""
    for(let i=0;i<s.length;i++){
        if(!m.has(s[i]) && x.includes(t[i])){
            return false;
        }else if(m.has(s[i])){
            x += m.get(s[i]);
        }else{
            m.set(s[i], t[i]);
            x+= t[i];
        }
    }
    if(x == t) return true;
    return false;
};