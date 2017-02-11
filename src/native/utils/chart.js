/* export const filterTraits = (arr) => {
  return arr.filter(obj => {
    return obj.key === 'Imagination' || obj.key === 'Self-discipline' || obj.key === 'Cheerfulness' || obj.key === 'Outgoing' || obj.key === 'Altruism' || obj.key === 'Modesty' || obj.key === 'Trust' || obj.key === 'Self-consciousness' || obj.key === 'Curiosity' || obj.key === 'Harmony' || obj.key === 'Love' || obj.key === 'Openness to change' || obj.key === 'Susceptible to stress' || obj.key === 'Stability' || obj.key === 'Intellect';
  });
}; */

export const filterTraits = (arr) => {
  const traits = ['Imagination', 'Self-discipline', 'Cheerfulness', 'Outgoing', 'Altruism', 'Modesty', 'Trust', 'Self-consciousness', 'Curiosity', 'Harmony', 'Love', 'Openness to change', 'Susceptible to stress', 'Stability', 'Intellect'];
  return arr.filter(obj => {
    return traits.includes(obj.key);
  });
};
