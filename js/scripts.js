$(document).ready(function() {
  $("form#destinationChoice").submit(function(event) {
    event.preventDefault();
    var travel = $("#travel").val();
    var geography = $("#geography").val();
    var density = $("#density").val();
    var price = $("#price").val();
    var temperature = $("#temperature").val();
    var parameters = [travel, geography, density, price, temperature];
    var result

    if (travel && geography && density && price && temperature){
      $(".picsize").fadeOut(500);
      $("#inputError").hide();
      $(".has-error").removeClass("has-error"); //successful inputs, clears fields and headline
      // begin excessive nested if statements
      if (travel === "domestic") {
        $("#foreignResult").fadeOut(500)
        $("#domesticResult").fadeOut(500)
        setTimeout(function() {
          $("#domesticResult").fadeIn(500);

          if (geography === "water") {
            if (density === "city") {
              if (price === "cheap") {
                if (temperature === "hot") {$("#tallahasseePic").show(), result = "Tallahassee" }
                else {$("#buffaloPic").show(), result = "Buffalo"}
              }
              else { //classy
                if (temperature === "hot") {$("#LAPic").show(), result = "Los Angeles" }
                else {$("#NYCPic").show(), result = "New York"}
              }
            }

            else { //rural
              if (price === "cheap") {
                if (temperature === "hot") {$("#evergladesPic").show(), result = "the Everglades" }
                else {$("#allagashPic").show(), result = "the Allagash Wilderness"}
              }
              else { //classy
                if (temperature === "hot") {$("#jetskiPic").show(), result = "a remote Florida key to go jetskiing" }
                else {$("#drysuitPic").show(), result = "the Oregon coast for drysuit diving"}
              }
            }
          }
          else { //mountain
            if (density === "city") {
              if (price === "cheap") {
                if (temperature === "hot") {$("#phoenixPic").show(), result = "Phoenix" }
                else {$("#SLCPic").show(), result = "Salt Lake City"}
              }
              else { //classy
                if (temperature === "hot") {$("#vegasPic").show(), result = "Las Vegas" } //Turns out Googling "classy hot mountain city" gives some unexpected results.
                else {$("#denverPic").show(), result = "Denver"}
              }
            }
            else { //rural
              if (price === "cheap") {
                if (temperature === "hot") {$("#guadaPic").show(), result = "Guadalupe National Park" }
                else {$("#hoodPic").show(), result = "Mount Hood"}
              }
              else { //classy
                if (temperature === "hot") {$("#canyonPic").show(), result = "a guided tour of the Grand Canyon" }
                else {$("#aspenPic").show(), result = "Aspen for a snowmobile adventure"}
              }
            }
          }
        }, 500) //ends delay function making fadeout work for pictures and such
      }//ends nested if for domestic travel
      else {  //foreign travel
        $("#domesticResult").fadeOut(500)
        $("#foreignResult").fadeOut(500)
        setTimeout(function() {
          $("#foreignResult").fadeIn(500);
        }, 500)
      }
      setTimeout(function() {
        $("#output").text(result);
      }, 500)
    }
    else { //for empty input boxes
      $("#inputError").show();
      $(".has-error").removeClass("has-error");
      if (!travel) {$("#travelInputError").addClass("has-error")}
      if (!geography) {$("#geographyInputError").addClass("has-error")}
      if (!price) {$("#priceInputError").addClass("has-error")}
      if (!density) {$("#densityInputError").addClass("has-error")}
      if (!temperature) {$("#temperatureInputError").addClass("has-error")}
    }
  });
});
