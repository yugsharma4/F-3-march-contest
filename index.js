const OpeningCeremony = () => {
  setTimeout(() => {
    let intialScore = { red: 0, blue: 0, green: 0, yellow: 0 };

    console.log("Let the games begin", intialScore);
    Race100M(intialScore, LongJump);
  }, 1000);
};

const Race100M = (score, LongJump) => {
  console.log("Previous score ", score);
  setTimeout(() => {
    let red, blue, green, yellow;

    red = randomNum();
    blue = randomNum();
    green = randomNum();
    yellow = randomNum();

    let obj = { red, blue, green, yellow };

    //find smallest time consuming team name
    const ascTimeArray = Object.values(obj).sort((a, b) => a - b);

    const least = ascTimeArray[0];
    const secondLeast = ascTimeArray[1];

    //find team name with least and second least time
    leastTimeTeam = Object.keys(obj).find((k) => obj[k] === least);
    secondLeastTimeTeam = Object.keys(obj).find((k) => obj[k] === secondLeast);

    //Update the score
    score[leastTimeTeam] += 50;
    score[secondLeastTimeTeam] += 25;

    console.log("Updated score(Race100M): ", score);
    console.log(`${leastTimeTeam} team won the Race100M...`);

    LongJump(score, HighJump);
  }, 3000);
};

const LongJump = (score, HighJump) => {
  setTimeout(() => {
    //Generate random number between 0 to 3
    //Assume:- 0: "red", 1:"blue", 2:"green",3:"yellow"
    console.log("Previous score ", score);

    const generateRandomNum = Math.floor(Math.random() * 3);
    switch (generateRandomNum) {
      case 0:
        score["red"] += 150;
        break;
      case 1:
        score["blue"] += 150;
        break;
      case 2:
        score["green"] += 150;
        break;
      case 3:
        score["yellow"] += 150;
        break;
    }
    console.log("Updated score(LongJump): ", score);
    const winner =
      generateRandomNum == 0
        ? "red"
        : generateRandomNum == 1
        ? "blue"
        : generateRandomNum == 2
        ? "green"
        : "yellow";
    console.log(`${winner} team won the LongJump...`);

    //Next callback function
    HighJump(score, AwardCeremony);
  }, 2000);
};

const HighJump = (score, AwardCeremony) => {
  console.log("Previous score ", score);

  const inputColorName = prompt("What colour secured the highest jump?");

  //User entered wrong input: event cancelled otherwise update the score
  if (score[inputColorName] == undefined) {
    console.log("Event was cancelled");
  } else {
    score[inputColorName] += 100;
  }

  console.log("Updated score(HighJump): ", score);
  score[inputColorName]
    ? console.log(`${inputColorName} team won HighJump race...`)
    : "";

  //Next callback function
  AwardCeremony(score);
};

const AwardCeremony = (score) => {
  console.log("final score", score);

  //find highest score among the team --> sorting in descending order
  const ascTimeArray = Object.values(score).sort((a, b) => b - a);

  //Get the highest,secondHighest and thirdHighest values
  const first = ascTimeArray[0];
  const second = ascTimeArray[1];
  const third = ascTimeArray[2];

  //Get the winner team's names
  const firstWinner = Object.keys(score).find((k) => score[k] === first);
  const secondWinner = Object.keys(score).find((k) => score[k] === second);
  const thirdWinner = Object.keys(score).find((k) => score[k] === third);

  console.log(
    `${firstWinner} came first with ${first} points. ${secondWinner} came second with ${second} points. ${thirdWinner} came third with ${third} points.`
  );
};

OpeningCeremony();

//Generate random number
const randomNum = () => {
  return Math.floor(Math.random() * 100);
};
