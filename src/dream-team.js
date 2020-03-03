module.exports = function createDreamTeam(members) {
  let res = [];
  if (!members || typeof members === "undefined" || Array.isArray(members) === false){
    return false;
  }
  else {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string"){
        let push = members[i].trim().toUpperCase().split("");
        res.push(push[0]);
      }
    }
  }
  res = res.sort().join("").toUpperCase();
  return res;
};