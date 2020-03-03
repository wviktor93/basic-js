module.exports = function repeater(str, options) {

    if (options.repeatTimes === undefined) {
        options.repeatTimes = 0;
    }
    if (options.separator === undefined) {
        options.separator = "+";
    }
    if (options.addition === undefined) {
        options.addition = "";
    }
    if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 0;
    }
    if (options.additionSeparator === undefined) {
        options.additionSeparator = "|"
    }

    function makeAddition(options) {
        let addition = options.addition;
        if (options.additionRepeatTimes === 0) {
            return addition;
        }
        else {
            for (let i = 1; i < options.additionRepeatTimes; i++) {
                addition += options.additionSeparator + options.addition;
            }
        }
        return addition;
    }
    let addition = makeAddition(options);

    function makeResult(str, addition) {
        let res = str + addition;
        if (options.repeatTimes === 0) {
            return res;
        } else {
            for (let i = 1; i < options.repeatTimes; i++) {
                res += options.separator + str + addition ;
            }
        }
        return res;
    }

    let res = makeResult(str, addition);

    return res;
};
