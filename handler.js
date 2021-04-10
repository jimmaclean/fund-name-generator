"use strict";

function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}
function getRandomKey(array) {
  return random(0, array.length - 1);
}
function getRandomItem(array) {
  return array[getRandomKey(array)];
}

const namePart1 = [
  "Aldrich",
  "Alleway",
  "Allwright",
  "Asher",
  "Boobyer",
  "Brigman",
  "Buckley",
  "Collins",
  "Crampton",
  "Cridland",
  "Dowding",
  "Drake",
  "Earnshaw",
  "Elloway",
  "Elphicke",
  "Foulds",
  "Gingell",
  "Goffin",
  "Gould",
  "Haig",
  "Haines",
  "Hooten",
  "Jacox",
  "Lewin",
  "Lowin",
  "Mayberry",
  "Medford",
  "Millership",
  "Newey",
  "Oakes",
  "Pakenham",
  "Paley",
  "Ramsey",
  "Richardson",
  "Rixon",
  "Roddan",
  "Sagar",
  "Sandys",
  "Selwyn",
  "Sharpe",
  "Snowsill",
  "Stan",
  "Stansfield",
  "Stanton",
  "Stearn",
  "Stearns",
  "Stone",
  "Tadman",
  "Thornton",
  "Traynor",
  "Welsh",
  "Wismer",
  "Withers",
  "Woodroofe",
];

const namePart2 = [
  "Capital",
  "Investment",
  "Management",
  "Trends",
  "Performance",
  "Investor",
  "Portfolio",
  "Structure",
  "Approach",
  "Group",
  "Holdings",
  "Savings",
  "Options",
];

const namePart3 = [
  "accumulation",
  "income",
  "distribution",
  "growth",
  "balanced",
  "opportunities",
];

function generateNameSeed(arrayOfArrays) {
  return arrayOfArrays.map((arr) => getRandomKey(arr));
}
const ID_SEPARATOR = "-";
function encodeSeedString(seedArray) {
  return seedArray.join(ID_SEPARATOR);
}
function decodeSeedString(seedString) {
  return seedString.split(ID_SEPARATOR).map((str) => parseInt(str));
}

module.exports.fund = async (event) => {
  let seed = generateNameSeed([namePart1, namePart2, namePart3]);
  let fundName = `${namePart1[seed[0]]} ${namePart2[seed[1]]} ${
    namePart3[seed[2]]
  } fund`;
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(
      {
        message: fundName,
        seed: encodeSeedString(seed),
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
