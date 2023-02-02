// pad impressions input with commas
function padWithCommas(_obj) {
  // get the number from the input field
  function getNumber(_str) {
    var arr = _str.split("");
    var out = new Array();
    for (var cnt = 0; cnt < arr.length; cnt++) {
      if (isNaN(arr[cnt]) == false) {
        out.push(arr[cnt]);
      }
    }
    return Number(out.join(""));
  }

  var num = getNumber(_obj.val());
  if (num == 0) {
    _obj.val("");
  } else {
    _obj.val(num.toLocaleString());
  }
}

// function to generate checkboxes with social platforms
function generateCheckBoxes(platforms_dict) {
  for (const platform in platforms_dict) {
    document.write(
      `
      <div class="checkbox-value-holder"> 
        <input class="checkbox-input" 
          type="checkbox" 
          id="${platform}-name" 
          name="${platform}" 
          value="${platform}"> 
        <label for="${platform}-name"><b>${platform}</b></label> 
      </div>
      
      <div class="platform-input-holder">
        <label for="${platform}-posts"> - Total Number of <i><u>Posts</u></i>: </label>
        <input class="platform-value-input"
          type="text"
          id="${platform}-posts"
          name="${platform}-posts"
          onkeyup="padWithCommas($(this))"
          placeholder="number of posts here"
          >
      </div>

      <div class="platform-input-holder">
        <label for="${platform}-impressions"> - Total Num <i><u>Impressions</u></i>: </label>
        <input class="platform-value-input"
          type="text"
          id="${platform}-impressions"
          name="${platform}-impressions"
          onkeyup="padWithCommas($(this))"
          placeholder="total impressions here"
          >
      </div>
      <br>
      `
    );
  }
}

// on click of 'Calculate' button
function calculateClicked() {
  // function to get all the checked checkboxes
  function getCheckedBoxes() {
    let selectedPlatforms = [];

    const checkboxes = document.getElementsByClassName("checkbox-input");
    for (const checkbox of checkboxes) {
      if (checkbox.checked) {
        // create a dictionary

        selected_platform = {
          platform: checkbox.value,
          posts: document.getElementById(`${checkbox.value}-posts`).value,
          impressions: document.getElementById(`${checkbox.value}-impressions`)
            .value,
        };

        selectedPlatforms.push(selected_platform);
      }
    }

    return selectedPlatforms;
  }

  // get all the checked checkboxes
  selectedPlatforms = getCheckedBoxes();
  console.log("--- selected platforms ---");
  console.log(selectedPlatforms);

  // get the total number of impressions
  function getTotalImpressions(selectedPlatforms) {
    let totalImpressions = 0;
    for (const platform of selectedPlatforms) {
      // remove commas from the impressions
      platform.impressions = platform.impressions.replace(/,/g, "");
      totalImpressions += parseInt(platform.impressions);
    }
    return totalImpressions;
  }

  // get the number of impressions to buy
  function getImpressionsToBuy(selectedPlatforms, platforms_dict) {
    // for each platform in selectedPlatforms
    for (const platform of selectedPlatforms) {
      // get the number of posts for the platform
      platform.posts = platform.posts.replace(/,/g, "");
      platform.posts = parseInt(platform.posts);

      // get the number of organic impressions for the platform
      // use the platforms dictionary from platforms_data.js
      platform.avgOrganicImpressions =
        platforms_dict[platform.platform].avgOrganicImpressions;

      // get the total number of organic impressions for the platform
      // this is number of organic impressions * number of posts
      platform.totalOrganicImpressions = Math.ceil(
        platform.posts * platform.avgOrganicImpressions
      );

      // get the number of impressions to buy
      // this is total impressions - total organic impressions
      platform.impressionsToBuy = Math.ceil(
        platform.impressions - platform.totalOrganicImpressions
      );

      // get the total cost for the platform using the avgCPM from the platforms dictionary
      platform.totalCost = Math.ceil(
        (platform.impressionsToBuy / 1000) *
          platforms_dict[platform.platform].avgCPM
      );
    }

    // get the total number of impressions to buy
    let totalImpressionsToBuy = 0;
    for (const platform of selectedPlatforms) {
      totalImpressionsToBuy += platform.impressionsToBuy;
    }

    // get the total cost
    let totalCost = 0;
    for (const platform of selectedPlatforms) {
      totalCost += platform.totalCost;
    }

    console.log("Total Impressions to buy: " + totalImpressionsToBuy);
    console.log("Total Cost (avgCPM): " + totalCost);
  }

  totalImpressions = getTotalImpressions(selectedPlatforms);
  console.log("Total Impressions: " + totalImpressions);

  getImpressionsToBuy(selectedPlatforms, PLATFORMS_DATA_DICT);
}

function calculateClickedNew() {
  // function to get all the checked checkboxes
  function getCheckedBoxes() {
    let selectedPlatforms = [];

    const checkboxes = document.getElementsByClassName("checkbox-input");
    for (const checkbox of checkboxes) {
      if (checkbox.checked) {
        // create a dictionary

        selected_platform = {
          platform: checkbox.value,
          posts: document.getElementById(`${checkbox.value}-posts`).value,
          impressions: document.getElementById(`${checkbox.value}-impressions`)
            .value,
        };

        selectedPlatforms.push(selected_platform);
      }
    }

    return selectedPlatforms;
  }

  // get all the checked checkboxes
  selectedPlatforms = getCheckedBoxes();
  console.log("--- selected platforms ---");
  console.log(selectedPlatforms);

  // calculate the total impressions
  function getTotalImpressions(selectedPlatforms) {
    let totalImpressions = 0;
    for (const platform of selectedPlatforms) {
      // remove commas from the impressions
      platform.impressions = platform.impressions.replace(/,/g, "");
      totalImpressions += parseInt(platform.impressions);
    }
    return totalImpressions;
  }

  var totalImpressions = getTotalImpressions(selectedPlatforms);

  console.log("Total Impressions: " + totalImpressions);

  // calculate per platform variables
  for (const platform of selectedPlatforms) {
    // calculate number of impressions to buy
    platform.impressionsToBuy = Math.ceil(
      platform.impressions -
        platform.posts *
          PLATFORMS_DATA_DICT[platform.platform].avgOrganicImpressions
    );

    // calculate total cost
    platform.totalCost = Math.ceil(
      (platform.impressionsToBuy / 1000) *
        PLATFORMS_DATA_DICT[platform.platform].avgCPM
    );

    // calculate organic impressions
    platform.organicImpressions = Math.ceil(
      platform.posts *
        PLATFORMS_DATA_DICT[platform.platform].avgOrganicImpressions
    );
  }

  console.log("--- selected platforms updated ---");
  console.log(selectedPlatforms);

  // calculate total impressions to buy
  let totalImpressionsToBuy = 0;
  for (const platform of selectedPlatforms) {
    totalImpressionsToBuy += platform.impressionsToBuy;
  }

  // calculate total cost
  let totalCost = 0;
  for (const platform of selectedPlatforms) {
    totalCost += platform.totalCost;
  }

  // add total impressions, impressions to buy and total cost to output
  document.getElementById("output").innerHTML = `
    <br>
    <div class="output">
    <h3 class="underline-text">Totals:</h3>
      <div class="output-holder">Total Impressions: ${totalImpressions.toLocaleString(
        "en-US"
      )}</div>
      <div class="output-holder">Impressions to Buy: ${totalImpressionsToBuy.toLocaleString(
        "en-US"
      )}</div>
      <div class="output-holder">Total Cost (avg CPM): $${totalCost.toLocaleString(
        "en-US"
      )}</div>
    </div>
    </br>
  `;

  // add per platform variables to output
  for (const platform of selectedPlatforms) {
    impressionsInt = parseInt(platform.impressions);
    postsCountInt = parseInt(platform.posts);

    document.getElementById("output").innerHTML += `
      <div class="output">
        <h3 class="underline-text">${platform.platform}:</h3>
        <div class="output-holder">Total Impressions: ${impressionsInt.toLocaleString(
          "en-US"
        )}</div>
        <div class="output-holder">Est Organic Impressions: ${platform.organicImpressions.toLocaleString(
          "en-US"
        )}</div>
        <div class="output-holder">Impressions to Buy: ${platform.impressionsToBuy.toLocaleString(
          "en-US"
        )}</div>
        <div class="output-holder">Impressions to Buy Per Post: ${parseInt(
          platform.impressionsToBuy / postsCountInt
        ).toLocaleString("en-US")}</div>
      </div>
      <div class="output-holder">Avg CPM Spend Per Post: $${parseInt(
        (platform.impressionsToBuy / postsCountInt / 1000) *
          PLATFORMS_DATA_DICT[platform.platform].avgCPM
      ).toLocaleString("en-US")}</div>
      </div>
      </br>
    `;
  }
}

/*
IMPROVEMENTS:

process/logic:
- segment everything into functions
- steps should be like this:
- 1. get all the checked checkboxes
- 2. calculate data points for each platform
- 3. display data points for each platform

visual:
- header and footer
*/
