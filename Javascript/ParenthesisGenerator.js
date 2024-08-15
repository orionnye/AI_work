/**
 * @param {number} n
 * @return {string[]}
 */

class Pair {
    children = [];
    addDepth(depth) {
        if (depth <= 0) {
            return
        }
        this.children.push(new Pair());
        let chosenChild = Math.floor(Math.random()*(this.children.length + 1));
        // console.log(chosenChild);
        if (chosenChild >= this.children.length) {
            this.addDepth(depth-1);
        } else {
            this.children[chosenChild].addDepth(depth-1);
        }
    }
    toString() {
        let print = "";
        print += "(";
        this.children.forEach(child => {
            print += child.toString();
        });
        print += ")";

        return print;
    }
}

var generateParenthesis = function(n) {
    let output = [];

    // Single Deep Pair
    let deepPair = new Pair();
    deepPair.addDepth(n-1);
    output.push(deepPair.toString());

    // Single Shallow Stack
    let combination = "";
    for (let i = 0; i < n; i++) {
        let set = "()";
        combination += set;
    }
    output.push(combination);

    // Return Output
    return output;
};

var generateParenthesisCorrect = function(n) {
    let result = [];

    function gen(prefix, opens, closes, depth) {
        if (opens == 0 && closes == 0) {
            result.push(prefix);
            return
        }

        if (opens > 0)
            gen(prefix + "(", opens - 1, closes, depth + 1);
        if (closes > 0 && depth > 0)
            gen(prefix + ")", opens, closes - 1, depth - 1);
    }

    gen("", n, n, 0)

    return result
};

// console.log(generateParenthesis(5));
console.log(generateParenthesisCorrect(3).length);