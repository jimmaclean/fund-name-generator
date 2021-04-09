"use strict";

function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}
function getRandomItem(array) {
  return array[random(0, array.length - 1)];
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

module.exports.hello = async (event) => {
  let fundName = `${getRandomItem(namePart1)}'s fund`;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: fundName,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
