const myDeepCopy = (inObject) => {
  let outObject, value, key;

  if (typeof inObject !== "object" || inObject === null) {
    return inObject;
  }

  outObject = Array.isArray(inObject) ? [] : {};

  for (key in inObject) {
    value = inObject[key];

    outObject[key] = myDeepCopy(value);
  }

  return outObject;
}

let originalArray = [37, 3700, { hello: "world" }];

let shallowCopiedArray = originalArray.slice();

let deepCopiedArray = myDeepCopy(originalArray);

originalArray[1] = 0;
originalArray[2].hello = "moon";

console.log("Original array:", ...originalArray);
console.log("Shallow copy:", ...shallowCopiedArray);
console.log("Deep copy:", ...deepCopiedArray);

