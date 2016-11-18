$carousels = $(".carousel");

function resizeCarousels() {
  var carouselWidth = 0;
  var totImagesWidth = 0;
  var imgMargin = 0;
  var displayProportion = 0.7;
  var displaySize = 0;

  // Resizes the carousels according to available space
  $carousels.each(function() {
    //Resize container
    $(this).parent().parent().css("width", "90%").css("margin", "0 auto")
    //set variabless
    carouselWidth = $(this).width();
    totImagesWidth = 0;
    displaySize = 0;
    reachedEnd = false;
    $(this).find(".carousel-cover").each(function(index) {
        //For each image set negative margin and hide if overflows.
        $(this).parent().show();
        imgWidth = $(this).width();
        if (displaySize == 0) {
          displaySize = imgWidth  * displayProportion;
        }
        imgMargin = imgWidth - displaySize
        if ( imgMargin < 0) {
          console.log("Exit");
          console.log(imgMargin + ", w: " + imgWidth + ", ds: " + displaySize);
        }
        if (totImagesWidth + imgWidth > carouselWidth - 30) {
          reachedEnd = true;
        }
        if (reachedEnd) {
          $(this).parent().hide();
        } else {
          totImagesWidth += imgWidth - imgMargin;
          $(this).css('margin-right', -imgMargin);

        };
    });
  });
};

resizeCarousels();

$( window ).resize(function() {
  resizeCarousels();
});
