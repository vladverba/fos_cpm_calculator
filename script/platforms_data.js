/*

Store the platforms data dictionary here.
Store lowCPM, avgCPM, highCPM, avgOrganicImpressions for each platform.
This is used to calculate the cost for each platform.

NOTE: Currently hard coded, but likely will need to be replaced with a database
that has a collection of out social platforms and their data.

*/

const platforms = {
  "Instagram - Overall": {
    lowCPM: 1.98,
    avgCPM: 7.38,
    highCPM: 12.56,
    avgOrganicImpressions: 13968,
  },
  "Instagram - Feed Boost": {
    lowCPM: 2.46,
    avgCPM: 5.0,
    highCPM: 7.55,
    avgOrganicImpressions: 16669,
  },
  "Instagram - Reel Boost": {
    lowCPM: 8.17,
    avgCPM: 9.91,
    highCPM: 12.56,
    avgOrganicImpressions: 23439,
  },
  "Instagram - Dark Post": {
    lowCPM: 1.28,
    avgCPM: 1.63,
    highCPM: 1.98,
    avgOrganicImpressions: 0,
  },
  "Twitter - Overall": {
    lowCPM: 1.65,
    avgCPM: 3.88,
    highCPM: 6.57,
    avgOrganicImpressions: 28522,
  },
  "TikTok - Overall": {
    lowCPM: 4.71,
    avgCPM: 4.73,
    highCPM: 4.75,
    avgOrganicImpressions: 75363,
  },
  "LinkedIn - Overall": {
    lowCPM: 7.53,
    avgCPM: 9.1,
    highCPM: 10.66,
    avgOrganicImpressions: 13155,
  },
};
