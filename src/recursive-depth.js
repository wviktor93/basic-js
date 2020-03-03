module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!Array.isArray(arr)) {
            return 0;
        }

        let res = 1;
        for (let i = 0; i < arr.length; i++) {
            let currRes = this.calculateDepth(arr[i]) + 1;
            if (res < currRes) {
                res = currRes;
            }
        }

        return res;
    }
};