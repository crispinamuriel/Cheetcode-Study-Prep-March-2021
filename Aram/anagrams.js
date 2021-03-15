const groupAnagrams = function(strs) {
    let ref = {}
    
    for (let i = 0; i < strs.length; i++) {
        const word = strs[i]
        const key = word.split('').sort().join('')
        
        if (!ref[key]) {
            ref[key] = []
        }
        ref[key].push(word)
        
    }
    return Object.values(ref)
    
}