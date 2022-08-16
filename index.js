function scuberGreetingForFeet(ride) {
  if (ride > 2500) {
    return "No can do.";
  } else if (ride > 2000) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "This one is on me!";
  }
}

function ternaryCheckCity(city) {
  let cityValue = city === "NYC" ? "Ok, sounds good." : "No go.";
  return cityValue;
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}
