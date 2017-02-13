import React from 'react';
import { View, Text } from 'react-native';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryLabel, VictoryAxis, Line } from 'victory-native';

export const colorArray = [ '#7D26CD','#0000EE','#6495ED','#68228B','#c06dff','#104E8B','#B0C4DE','#0000FF','#5D478B','#1E90FF','#F0F8FF','#AB82FF','#836FFF','#9932CC','#BCD2EE','#6E7B8B','#191970','#6A5ACD','#0000CD','#9A32CD','#B23AEE','#7A67EE','#6C7B8B','#9370DB','#7B68EE','#473C8B','#000080','#D15FEE','#9F79EE','#BA55D3','#4B0082','#778899','#4682B4','#483D8B','#3A5FCD','#7A378B','#8A2BE2','#4169E1','#63B8FF','#8470FF','#800080','#A2B5CD','#27408B','#9400D3','#1874CD','#551A8B' ];

export const personality = 'The scores you see are all percentiles. They are comparing you to the broader population. For example, a 90% on Extraversion does not mean that you are 90% extroverted. It means that for that single trait, you are more extroverted than 90% of the people in the population.';

export const emotional = 'Emotional tone measures different types of emotions and feelings that people express. For each tone, a score of less than 50% indicates that the tone is unlikely to be perceived in the recorded content. Likewise, a score greater than 75% indicates high likelihood that the tone will be perceived.';

export const language = 'Language tone describes perceived language style based on the recorded content. For each tone, a score of less than 50% indicates that the tone is unlikely to be perceived in the recorded content. Likewise, a score greater than 75% indicates high likelihood that the tone will be perceived.';

export const social = 'Social tone measures the social tendencies in the recorded content on five categories that are adopted from the Big Five personality model. For each tone, a score of less than 50% indicates that the tone is unlikely to be perceived in the recorded content. Likewise, a score greater than 75% indicates high likelihood that the tone will be perceived.';

export const tone = 'For each tone, a score of less than 50% indicates that the tone is unlikely to be perceived in the recorded content. Likewise, a score greater than 75% indicates a high likelihood that the tone will be perceived.';

export const personalityTitles = ['Personality Insights I', 'Personality Insights II', 'Personality Insights III', 'Personality Insights IV', 'Personality Insights V'];

export const toneTitles = ['Emotional Tone Insights I', 'Emotional Tone Insights II', 'Language Tone Insights', 'Social Tone Insights I', 'Social Tone Insights II'];

export const barDomainCoords = [
  {x: [0, 100], y: [35, 48]},
  {x: [0, 100], y: [24, 36]},
  {x: [0, 140], y: [12, 26]},
  {x: [0, 160], y: [0, 14]},
  {x: [0, 150], y: [0, 14]} //toneAnalysis
];

export const barGraphTitles = ['Personality Insights I', 'Personality Insights II', 'Personality Insights III', 'Personality Insights IV', 'Tone Analysis'];

export const personalityDataRange = [`35-47`, `24-35`, `12-24`, `0-12`];

//line graph helper
export const filterTraits = (arr) => {
  const traits = ['Imagination', 'Self-discipline', 'Cheerfulness', 'Outgoing', 'Altruism', 'Modesty', 'Trust', 'Self-consciousness', 'Curiosity', 'Harmony', 'Love', 'Openness to change', 'Susceptible to stress', 'Stability', 'Intellect'];
  return arr.filter(obj => {
    return traits.includes(obj.key);
  });
};

//bar graph helper
export const mapLabels = (arr) => {
  return arr.map(obj => obj.quality + ` ${(obj.score * 100).toFixed(1)}%`);
};

export const sortData = (arr) => {
  let count = 1;
  return arr.sort((a, b) => b.score - a.score).map(obj => {
    return {
      x: count++,
      y: obj.score * 100
    };
  });
};
