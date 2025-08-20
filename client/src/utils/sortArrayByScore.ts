interface Player {
  name: string;
  score: number;
}
const sortArrayByScore = (array: Array<Player>) => {
  const sortedArray = array.sort((a, b) => a.score - b.score);

  return sortedArray;
};

export default sortArrayByScore;
