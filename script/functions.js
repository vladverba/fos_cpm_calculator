/* Javascript functions used for FOS CPM Calculator */

// create a list of checkboxes for each platform
function generateCheckboxes(platforms_dict) {
  for (const platform in platforms_dict) {
    document.write(
      `<div class="checkbox-value-holder"> <input class="checkbox-input" type="checkbox" id="${platform}" name="${platform}" value="${platform}"> <label for="${platform}">${platform}</label> </div> <br>`
    );
  }
}

// calculate the cost of the campaign for the selected platforms
function calculateCost() {
  // get the input total impressions sold (comes from the input field)
  let impressions = document.getElementById("impressions").value;
  console.log("impressions sold: " + impressions);

  // get margin costs (comes from the input field)
  let margin = document.getElementById("margin").value;
  console.log("margin: " + margin);

  // read the selected platforms from the checkboxes
  let selectedPlatforms = [];
  const checkboxes = document.getElementsByClassName("checkbox-input");
  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      selectedPlatforms.push(checkbox.value);
    }
  }

  /*
  for each selected platform, calculate the following:
  - impressions to buy
  - cost based on LOW CPM
  - cost based on AVG CPM
  - cost based on HIGH CPM
  */

  // create a list to store the results
  let final_output = [];

  // for each platform, calculate the values we are looking for
  for (const platform of selectedPlatforms) {
    // get the impressions to buy
    const impressionsToBuy =
      impressions - platforms[platform].avgOrganicImpressions;

    // get the cost based on LOW CPM
    var costLowCPM = (impressionsToBuy / 1000) * platforms[platform].lowCPM;

    // get the cost based on AVG CPM
    var costAvgCPM = (impressionsToBuy / 1000) * platforms[platform].avgCPM;

    // get the cost based on HIGH CPM
    var costHighCPM = (impressionsToBuy / 1000) * platforms[platform].highCPM;

    // round the values to 2 decimal places
    var costLowCPM = Math.round(costLowCPM * 100) / 100;
    var costAvgCPM = Math.round(costAvgCPM * 100) / 100;
    var costHighCPM = Math.round(costHighCPM * 100) / 100;

    // add margin to the cost
    const costLowCPMWithMargin = costLowCPM + costLowCPM * (margin / 100);
    const costAvgCPMWithMargin = costAvgCPM + costAvgCPM * (margin / 100);
    const costHighCPMWithMargin = costHighCPM + costHighCPM * (margin / 100);

    // add results to final_output list
    // add commas to the cost values
    final_output.push({
      platform: platform,
      impressionsToBuy: impressionsToBuy.toLocaleString("en-US"),
      costLowCPM: costLowCPMWithMargin.toLocaleString("en-US"),
      costAvgCPM: costAvgCPMWithMargin.toLocaleString("en-US"),
      costHighCPM: costHighCPMWithMargin.toLocaleString("en-US"),
    });
  }

  // display the values in final_output
  output_field = document.getElementById("output").innerHTML = "";
  for (const platform of final_output) {
    // display the platform name
    document.getElementById(
      "output"
    ).innerHTML += `<br /><h3>${platform.platform}</h3>`;
    // display the impressions to buy
    document.getElementById(
      "output"
    ).innerHTML += `<p>Impressions to buy: ${platform.impressionsToBuy}</p>`;

    // display the cost based on LOW CPM
    document.getElementById(
      "output"
    ).innerHTML += `<p>Cost based on LOW CPM: ${platform.costLowCPM}</p>`;

    // display the cost based on AVG CPM
    document.getElementById(
      "output"
    ).innerHTML += `<p>Cost based on AVG CPM: ${platform.costAvgCPM}</p>`;

    // display the cost based on HIGH CPM
    document.getElementById(
      "output"
    ).innerHTML += `<p>Cost based on HIGH CPM: ${platform.costHighCPM}</p>`;
  }
}
