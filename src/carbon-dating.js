const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  number = parseFloat(sampleActivity);
  if (typeof sampleActivity === "boolean" ||
    typeof sampleActivity === "number" ||
    typeof sampleActivity === "object" ||
    typeof sampleActivity === "symbol" ||
    typeof sampleActivity === "undefined" ||
    typeof sampleActivity !== "string" ||
    number > MODERN_ACTIVITY ||
    number <= 0 ||
    isNaN(number)) {
    return false;
  }
  else {
    let res = Math.ceil(Math.log(MODERN_ACTIVITY / number) / (0.693 / HALF_LIFE_PERIOD));
    return res;
  }

};
