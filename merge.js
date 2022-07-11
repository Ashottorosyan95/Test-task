const myMerge = (obj1, obj2) => {
  return {...obj1, ...obj2};
};

const profile = {
  name: 'Ashot',
  lastname: 'Torosyan',
  age: 25
};

const job = {
  profession: 'Developer',
  age: 25,
  name: 'Ashot',
};

const user = myMerge(profile, job);

console.log('user', user);