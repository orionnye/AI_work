function generateParenthesis(n) {
    
    let permutations = [];

    function spread(line, opens, closes) {
        // End of Life
        if (opens == 0 && closes == 0) {
            permutations.push(line);
            return
        }
        // Mutation is passed in at Permutation
        // Permutation
        if (opens > 0) {
            spread(line + "(", opens - 1, closes);
        }
        if (closes > opens) {
            spread(line + ")", opens, closes-1);
        }
    }
    spread("", n, n);
    return permutations;
}

function superCorrect(n) {
    const cache = new Map()
    
    function suffixes(opens, closes) {
        // Decode this shit later, super sexy bit-shift
        let key = opens << 3 | closes
        if (cache.has(key))
            return cache.get(key)

        let result = []
        if (opens == 0 && closes == 0)
            return [""]
        if (opens > 0) {
            for (let suffix of suffixes(opens - 1, closes))
                result.push("(" + suffix)
        }
        if (closes > opens) {
            for (let suffix of suffixes(opens, closes - 1))
                result.push(")" + suffix)
        }

        cache.set(key, result)
        return result
    }

    return suffixes(n, n)
};

console.log(generateParenthesis(3));