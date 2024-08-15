class Variable {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    toString() {
        return `${this.name} = ${this.value};`;
    }
}

class Block {
    constructor() {
        this.statements = [];
    }

    addVariable(name, value) {
        this.statements.push(new Variable(name, value));
    }

    addStatement(statement) {
        this.statements.push(statement);
    }

    toString() {
        return this.statements.map(statement => statement.toString()).join('');
    }

    execute(context) {
        this.statements.forEach(statement => {
            if (statement instanceof Variable) {
                context[statement.name] = statement.value;
            } else if (statement instanceof IfStatement) {
                statement.execute(context);
            }
        });
    }
}

class IfStatement {
    constructor(conditional, children) {
        this.conditional = conditional;
        this.children = children;
    }

    toString() {
        return `if (${this.conditional}) {${this.children.map(child => child.toString()).join('')}}`;
    }

    execute(context) {
        if (eval(this.conditional)) { // using eval for simplicity, however, this is a security concern
            this.children.forEach(child => child.execute(context));
        }
    }
}

// Example usage:

const block = new Block();
block.addVariable('x', 10);
block.addVariable('y', 5);
block.addStatement(new IfStatement('x > y', [
    new Block('console.log("x is greater than y");')
]));
const fs = require('node:fs');
fs.writeFile('./test.js', block.toString(), err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
    console.log("Code written to file");
  }
});