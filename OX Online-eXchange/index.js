$(document).ready(function () {
    var owl = $(".owl-carousel").owlCarousel({
      items: 4, // Set the number of items you want to display
      loop: true, // Enable the loop
      autoplay: true, // Enable autoplay
      autoplayTimeout: 3000, // Set autoplay timeout in milliseconds
      dots: false, // Hide the default dots navigation
      responsive: {
        0: {
          items: 1 // Number of items to display on small screens (e.g., mobile)
        },
        768: {
          items: 2 // Number of items to display on tablets
        },
        992: {
          items: 4// Number of items to display on larger screens
        }
      }
    });

    // Custom dots navigation
    var dotsContainer = $('.owl-dots');
    owl.on('changed.owl.carousel', function (event) {
      var itemCount = event.item.count;
      var currentIndex = event.item.index;
      var dotsHtml = '';
      for (var i = 0; i < itemCount; i++) {
        dotsHtml += '<div class="owl-dot" data-owl-index="' + i + '"></div>';
      }
      dotsContainer.html(dotsHtml);
      dotsContainer.find('.owl-dot').eq(currentIndex).addClass('active');

      // Handle dot click event
      dotsContainer.find('.owl-dot').on('click', function () {
        var index = $(this).data('owl-index');
        owl.trigger('to.owl.carousel', [index, 300]);
      });
    });

  });