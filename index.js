
function superbowlWin(gamesArray) {
  let result = gamesArray.find( (gameObject) => {
    return gameObject.result === "W";
  });

  if (result) {
    return result.year
  }
}