interface Player {
  name: string;
  score: number;
}
const sortArrayByScore = (array: Array<Player>) => {
  const sortedArray = array.sort((a, b) => a.score - b.score);

  const nonNullSortedArray = sortedArray.filter((player) => player.score !== 0);

  return nonNullSortedArray;
};

export default sortArrayByScore;
