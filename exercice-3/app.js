const monObjet = {
  a: 1,
};

console.log(monObjet);

const monSecondObjet = {
  b: 2,
};

monSecondObjet.b = "test";

console.log(monSecondObjet);

const monTroisièmeObjet = {
  c: 3,
};

monTroisièmeObjet.d = 4;

console.log(monTroisièmeObjet);

const monQuatriemeObjet = {
  e: 5,
};

delete monQuatriemeObjet.e;
console.log(monQuatriemeObjet);
