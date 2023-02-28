/*
Store the platforms data dictionary here.
Store lowCPM, avgCPM, highCPM, avgOrganicImpressions for each platform.
This is used to calculate the cost for each platform.

NOTE: Currently hard coded, but likely will need to be replaced with a database
that has a collection of out social platforms and their data.
*/

const PLATFORMS_DATA_DICT = {
  "Instagram - Public": {
    lowCPM: 2.46,
    avgCPM: 7.76,
    highCPM: 13.06,
    avgOrganicImpressions: 17055,
  },
  // "Instagram - Feed Boost": {
  //   lowCPM: 2.46,
  //   avgCPM: 5.0,
  //   highCPM: 7.55,
  //   avgOrganicImpressions: 16669,
  // },
  // "Instagram - Reel Boost": {
  //   lowCPM: 8.17,
  //   avgCPM: 9.91,
  //   highCPM: 12.56,
  //   avgOrganicImpressions: 23439,
  // },
  "Instagram - Dark Post": {
    lowCPM: 1.3,
    avgCPM: 1.64,
    highCPM: 1.98,
    avgOrganicImpressions: 0,
  },
  "Twitter - Overall": {
    lowCPM: 0.58,
    avgCPM: 3.15,
    highCPM: 6.57,
    avgOrganicImpressions: 40678,
  },
  "TikTok - Overall": {
    lowCPM: 4.71,
    avgCPM: 4.73,
    highCPM: 4.75,
    avgOrganicImpressions: 4000,
  },
  "LinkedIn - Overall": {
    lowCPM: 7.53,
    avgCPM: 9.1,
    highCPM: 10.66,
    avgOrganicImpressions: 13155,
  },
};
