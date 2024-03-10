$(document).ready(function () {
  // $(".upperli i").on("click", () => {
  //   $(".upperli i").toggleClass("arrow-down");
  //   if ($(".upperli i").hasClass("arrow-down")) {
  //     $(".upperli a").css("color", "#29b638");
  //     $(".for-side-nav-bar-menu").css({
  //       height: "fit-content",
  //       overflow: "visible",
  //     });
  //   } else {
  //     $(".upperli a").css("color", "white");
  //     $(".for-side-nav-bar-menu").css({
  //       height: "0px",
  //       overflow: "hidden",
  //     });
  //   }
  // });

  $(".upperli i").on("click", function () {
    var $currentSubMenu = $(this)
      .closest(".for-side-nav-bar")
      .find(".for-side-nav-bar-menu");

    // Toggle classes for the clicked icon and its associated elements
    $(this).toggleClass("arrow-down");

    // Toggle the color and menu visibility based on the "arrow-down" class
    if ($(this).hasClass("arrow-down")) {
      $(this).siblings("a").css("color", "#29b638");
      $currentSubMenu.css({
        height: "fit-content",
        overflow: "visible",
        transform: "rotateX(0deg)",
      });
    } else {
      $(this).siblings("a").css("color", "white");
      $currentSubMenu.css({
        height: "0px",
        overflow: "hidden",
        transform: "rotateX(40deg)",
      });
    }
  });

  $(".hero-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    items: 1,
    nav: true,
    animateOut: "slideOutUp",
    animateIn: "slideInUp",
    navText: [
      "<i class='fa fa-long-arrow-left'></i>",
      "<i class='fa fa-long-arrow-right'></i>",
    ],
    autoplayTimeout: 5000,
  });

  $(".about-page-feedback").owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    items: 1,
    animateIn: "fadeOut",
  });

  function changeImgSrc() {
    var image = $("#myimage");
    if ($(window).width() < 770) {
      image.attr("src", "assets/img/square-cut.png");
    } else {
      image.attr("src", "assets/img/complete-white-part-logo.png");
    }
  }
  $(window).on("load resize", changeImgSrc);
  $(window).on("resize", changeImgSrc);

  let burgerMenu = $(".fa-grip-lines");
  let sideMenu = $(".nav-show-on-small-screen");
  let cross = $(".closing-cross");
  burgerMenu.on("click", function () {
    sideMenu.toggleClass("small-nav-show-right");
    $("body").toggleClass("no-scroll");
  });
  cross.on("click", function () {
    sideMenu.removeClass("small-nav-show-right");
    $("body").removeClass("no-scroll");
  });

  let cursor = $(".circular-div");
  $(document).on("mousemove", function (e) {
    gsap.to(cursor, {
      top: e.clientY + 12,
      left: e.clientX + 12,
    });
  });

  $(document).on("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
      ease: "power2.inOut",
    });
  });

  $(document).on("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1.2,
      opacity: 1,
      ease: "power2.inOut",
    });
  });

  function textcontainerAnimate() {
    let tch1 = $("#text-container h1");
    let tch4 = $("#text-container h4");
    let tcbutton = $("#text-container button");

    let intervalId1 = setInterval(function () {
      gsap.to(tch1, {
        y: "-550%",
        opacity: 0,
        ease: "power2.inOut",
      });

      setTimeout(function () {
        gsap.to(tch1, {
          y: "0%",
          opacity: 1,
          ease: "power2.inOut",
          duration: 2,
        });
      }, 200);
    }, 4900);

    let intervalId2 = setInterval(function () {
      gsap.to(tch4, {
        y: "-150%",
        opacity: 0,
        ease: "power2.inOut",
      });

      setTimeout(function () {
        gsap.to(tch4, {
          y: "0%",
          opacity: 1,
          ease: "power2.inOut",
          duration: 1,
        });
      }, 900);
    }, 4900);

    let intervalId3 = setInterval(function () {
      gsap.to(tcbutton, {
        y: "500%",
        ease: "power2.inOut",
      });

      setTimeout(function () {
        gsap.to(tcbutton, {
          y: "0%",
          ease: "power2.inOut",
          duration: 1,
        });
      }, 400);
    }, 4900);

    return [intervalId1, intervalId2, intervalId3];
  }
  let intervalIds = textcontainerAnimate();

  let prevCarousel = $(".hero-carousel .owl-nav .owl-prev");
  prevCarousel.on("click", function () {
    intervalIds.forEach(clearInterval);
    let tch1 = $("#text-container h1");
    let tch4 = $("#text-container h4");
    let tcbutton = $("#text-container button");
    gsap.to(tch1, {
      y: "-550%",
      opacity: 0,
      ease: "power2.inOut",
    });
    setTimeout(function () {
      gsap.to(tch1, {
        y: "0%",
        opacity: 1,
        ease: "power2.inOut",
        duration: 2,
      });
    }, 200);
    gsap.to(tch4, {
      y: "-150%",
      opacity: 0,
      ease: "power2.inOut",
    });
    setTimeout(function () {
      gsap.to(tch4, {
        y: "0%",
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      });
    }, 900);
    gsap.to(tcbutton, {
      y: "500%",
      ease: "power2.inOut",
    });
    setTimeout(function () {
      gsap.to(tcbutton, {
        y: "0%",
        ease: "power2.inOut",
        duration: 1,
      });
    }, 400);
  });

  let nextCarousel = $(".hero-carousel .owl-nav .owl-next");
  nextCarousel.on("click", function () {
    intervalIds.forEach(clearInterval);
    let tch1 = $("#text-container h1");
    let tch4 = $("#text-container h4");
    let tcbutton = $("#text-container button");
    gsap.to(tch1, {
      y: "-550%",
      opacity: 0,
      ease: "power2.inOut",
    });
    setTimeout(function () {
      gsap.to(tch1, {
        y: "0%",
        opacity: 1,
        ease: "power2.inOut",
        duration: 2,
      });
    }, 200);
    gsap.to(tch4, {
      y: "-150%",
      opacity: 0,
      ease: "power2.inOut",
    });
    setTimeout(function () {
      gsap.to(tch4, {
        y: "0%",
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      });
    }, 900);
    gsap.to(tcbutton, {
      y: "500%",
      ease: "power2.inOut",
    });
    setTimeout(function () {
      gsap.to(tcbutton, {
        y: "0%",
        ease: "power2.inOut",
        duration: 1,
      });
    }, 400);
  });

  function navigationPositioning() {
    $(window).on("scroll", () => {
      let page1 = $(".page1");
      let nav = $(".page1 nav");
      let rect1 = page1[0].getBoundingClientRect();
      if (rect1.top < 0) {
        gsap.to(nav, {
          top: -200,
        });
        gsap.to($(".nav-lower-part.hiding"), {
          top: 0,
        });
      } else {
        gsap.to(nav, {
          top: 20,
        });
        gsap.to($(".nav-lower-part.hiding"), {
          top: -150,
        });
      }
    });
  }
  function checkWidthAndCallNavigation() {
    if ($(window).width() > 1321) {
      navigationPositioning();
    }
  }
  checkWidthAndCallNavigation();
  $(window).resize(navigationPositioning);

  let animationsTriggered = false;
  $(window).on("scroll", function () {
    let page2 = $(".page2");
    let rect2 = page2[0].getBoundingClientRect();
    let windowHeight = $(window).height();
    if (rect2.top < windowHeight * 0.5 && !animationsTriggered) {
      let gardenwomen = $("#women-garden");
      let greenBoxIcon = $(".green-icon-box");

      gsap.to(gardenwomen, {
        x: "0",
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut",
      });

      greenBoxIcon.each((index, element) => {
        setTimeout(() => {
          gsap.to(element, {
            y: "0",
            opacity: "1",
            duration: 1,
          });
        }, index * 500);
      });
      animationsTriggered = true;
      setTimeout(() => {
        gardenwomen.css("opacity", "1");
      }, 2000);
    }
  });

  $(".services").owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    navContainer: ".page3-contents",
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  $(".rs-projects-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    items: 1,
    autoplay: true,
  });


  $(".review").owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    autoplay: true,
    responsive: {
      758: {
        items: 2,
      },
      0: {
        items: 1,
      },
    },
  });

  $(".projects").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    // autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 3,
      },
      1300: {
        items: 5,
      },
    },
  });

  $(document).ready(function () {
    $(".projects .item:even").addClass("even-item");
  });

  $(document).ready(function () {
    $(".projects .item:odd").addClass("odd-item");
  });

  function updateBrInH2p6() {
    var windowWidth = $(window).width();
    var thresholdWidth = 678; // Adjust as needed

    if (windowWidth <= thresholdWidth) {
      // Remove <br> from the h2 element
      $(".projects-text h2 br").remove();
    } else {
      // Add <br> back to the h2 element
      $(".page6 .projects-text h2.incredible").html(
        "Enjoy our incredible recently <br> completed projects"
      );
    }
  }
  updateBrInH2p6();
  $(window).resize(updateBrInH2p6);

  function updateBrInH2p3() {
    var windowWidth = $(window).width();
    var thresholdWidth = 688; // Adjust as needed

    if (windowWidth <= thresholdWidth) {
      // Remove <br> from the h2 element
      $(".page3 .page3-contents .top-part-text h2 br").remove();
    } else {
      // Add <br> back to the h2 element
      $(".page3 .page3-contents .top-part-text h2").html(
        "Services were provding to <br> our customers"
      );
    }
  }
  updateBrInH2p3();
  $(window).resize(updateBrInH2p3);

  function updateBrInH2p1() {
    var windowWidth = $(window).width();
    var thresholdWidth = 437; // Adjust as needed

    if (windowWidth <= thresholdWidth) {
      // Remove <br> from the h2 element
      $(".page1 #text-container h1 br").remove();
    } else {
      // Add <br> back to the h2 element
      $(".page1 #text-container h1").html("Make dream <br> gardening");
    }
  }
  updateBrInH2p1();
  $(window).resize(updateBrInH2p1);

  $(".gallery-images").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    // autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  function updateBrInH2p10() {
    var windowWidth = $(window).width();
    var thresholdWidth = 700; // Adjust as needed

    if (windowWidth < thresholdWidth) {
      // Remove <br> from the h2 element
      $(".page10 .contact-text h2 br").remove();
    } else {
      // Add <br> back to the h2 element
      $(".page10 .contact-text h2 ").html(
        "Get a free estimate for <br>your garden"
      );
    }
  }
  updateBrInH2p10();
  $(window).resize(updateBrInH2p10);

  function updateBrInH2p10() {
    var windowWidth = $(window).width();
    var thresholdWidth = 700; // Adjust as needed

    if (windowWidth < thresholdWidth) {
      // Remove <br> from the h2 element
      $(".page10.contact-text h2 br");
    } else {
      // Add <br> back to the h2 element
      $(".page10.contact-text h2 ").html("Feel free to write gardon anytime");
    }
  }
  updateBrInH2p10();
  $(window).resize(updateBrInH2p10);

  function updateBrInPp10() {
    var windowWidth = $(window).width();
    var thresholdWidth = 700; // Adjust as needed

    if (windowWidth < thresholdWidth) {
      // Remove <br> from the h2 element
      $(".page10 .contact-text p br").remove();
    } else {
      // Add <br> back to the h2 element
      $(".page10 .contact-text p ").html(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br>incididunt ut labore et dolore magna aliqua."
      );
    }
  }
  updateBrInPp10();
  $(window).resize(updateBrInPp10);

  $(".page11-cont").owlCarousel({
    loop: true,
    margin: 120,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
      },
      575: {
        items: 3,
      },
      756: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });

  function handleHover(classPrefix) {
    $(`.img-inner.${classPrefix}`).mouseover(() => {
      $(`.img-outer-abs-text__hover.${classPrefix}`).removeClass("displaynone");
      $(`.img-outer-abs-text.${classPrefix}`).addClass("displaynone");
    });

    $(`.img-inner.${classPrefix}`).mouseleave(() => {
      $(`.img-outer-abs-text__hover.${classPrefix}`).addClass("displaynone");
      $(`.img-outer-abs-text.${classPrefix}`).removeClass("displaynone");
    });
  }

  handleHover("uno");
  handleHover("dos");
  handleHover("tres");

  function updateBrInAp12() {
    var windowWidth = $(window).width();
    var thresholdWidth = 380; // Adjust as needed

    if (windowWidth < thresholdWidth) {
      // Remove <br> from the h2 element
      $(".page12 .stl .full-white a br").remove();
    } else {
      // Add <br> back to the h2 element
      $(".page12 .stl .full-white a ").html(
        "Best ways to light up <br> your garden walkways"
      );
    }
  }
  updateBrInAp12();
  $(window).resize(updateBrInAp12);

  function updateBrInPp12() {
    var windowWidth = $(window).width();
    var thresholdWidth = 382;

    if (windowWidth <= thresholdWidth) {
      $(".page12 .stl .full-white p br").remove();
    } else {
      $(".page12 .stl .full-white p").html(
        "Lorem ipsum dolor sit amet consect <br>etru adi piscing elit"
      );
    }
  }
  updateBrInPp12();
  $(window).resize(updateBrInPp12);

  function setHoverWidth() {
    var stlWidth = $(".img-outer-abs-text__hover").width();
    $(".img-outer-abs-text__hover button").width(stlWidth - 80);
  }
  setHoverWidth();
  $(window).resize(function () {
    setHoverWidth();
  });

  function setSliderWidth() {
    var sliderwidth = $(".slide-cont").height();
    $(".page7").css("marginTop", sliderwidth);
  }
  setSliderWidth();
  $(window).resize(function () {
    setSliderWidth();
  });

  function updateBrInAppp2() {
    var windowWidth = $(window).width();
    var thresholdWidth = 1201;
    if (windowWidth < thresholdWidth) {
      $(".page2.about-page p.gray-lorem br").remove();
    } else {
      $(".page2.about-page p.gray-lorem").html(
        "Lorem ipsum dolor sit am adipi we help you ensure everyone is in <br>the right jobs sicing elit, sed do consulting firms Et leggings across <br>the nation tempor."
      );
    }
  }
  updateBrInAppp2();
  $(window).resize(updateBrInAppp2);

  function updateBrInAph1p2() {
    var windowWidth = $(window).width();
    var thresholdWidth = 769;
    if (windowWidth < thresholdWidth) {
      $(".page2.about-page h1 br").remove();
    } else {
      $(".page2.about-page h1").html(
        "Providing the quality <br> gardening services"
      );
    }
  }
  updateBrInAph1p2();
  $(window).resize(updateBrInAph1p2);

  if ($(".home-page").length) {
    $(document).ready(equalImgWidth);
    $(window).resize(equalImgWidth);

    var inputDown =
      "ontouchstart" in document.documentElement ? "touchstart" : "mousedown";
    var inputMove =
      "ontouchmove" in document.documentElement ? "touchmove" : "mousemove";
    var inputUp =
      "ontouchend" in document.documentElement ? "touchend" : "mouseup";
    var handleClicked = false;
    var containerOffset = $("#divider").offset().left;
    var containerWidth = $("#divider").outerWidth();

    var slidePercent = "";

    function equalImgWidth() {
      var divider = $("#divider");
      var imgWidth = divider.width() + "px";

      $("#beforeImage img").css("width", imgWidth);
    }

    $("#handle").on(inputDown, handleScaleUp);

    $("#divider").on(inputMove, function (event) {
      var relativeX = event.pageX ? event.pageX : event.touches[0].pageX;
      slidePercent =
        ((relativeX - containerOffset) / containerWidth) * 100 + "%";

      resizeBeforeImage();
    });

    function handleScaleUp() {
      handleClicked = true;
      $("#handle").css("transform", "scale(2, 2)");
    }

    $(window).on(inputUp, function () {
      handleScaleDown();
    });

    function handleScaleDown() {
      handleClicked = false;
      $("#handle").css("transform", "scale(1, 1)");
    }

    function resizeBeforeImage() {
      if (handleClicked === true) {
        $("#beforeImage").css("width", slidePercent);
        $("#handle").css("left", slidePercent);
      }
    }
  }

  let pageaboutfeedbox = $(
    ".page5-container.about-page .review.about-page .item"
  ).width();
  $(".page5-container.about-page .review .item::after").css(
    "width",
    pageaboutfeedbox + "px"
  );

  $(document).on("click", function () {
    // Set the enlarged size on click
    cursor.css({
      width: "20px", // Adjust the desired enlarged width
      height: "20px", // Adjust the desired enlarged height
    });

    // Revert to the original size after a delay using setTimeout
    setTimeout(function () {
      cursor.css({
        width: "10px", // Adjust the original width
        height: "10px", // Adjust the original height
      });
    }, 200); // Adjust the delay time in milliseconds as needed
  });

  if ($(".page7")) {
    $(window).scroll(function () {
      if (isInViewport($(".page7"))) {
        startCountdown();
        // Unbind the scroll event to ensure it only runs once
        $(window).off("scroll");
      }
    });
    function isInViewport(element) {
      var rect = element[0].getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    }
    function startCountdown() {
      let currentValue = 0;
      let intervalId = setInterval(function () {
        $(".page7 .four-white-boxes h3").text(currentValue);
        currentValue += Math.floor(Math.random() * 20);
        if (currentValue > 886) {
          clearInterval(intervalId);
        }
      }, 15);
    }
    if (isInViewport($(".page7"))) {
      startCountdown();
      // Unbind the scroll event to ensure it only runs once
      $(window).off("scroll");
    }
  } else {
    return;
  }

  $("#service").owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  

  // this is the ending parenthesis
});

$(document).ready(function () {
  // Zoom image in a lightbox
  function zoomPopupImage() {
    $(".mfp-container").on("mousemove touchmove", function (e) {
      const container = $(this),
        image = container.find(".mfp-img"),
        y = e.pageY + 1 - container.offset().top,
        containerHeight = container.height(),
        imageHeight = image.height(),
        heightDiff = imageHeight - containerHeight;

      if (imageHeight > containerHeight) {
        image.css(
          "margin-top",
          -Math.floor(heightDiff * (y / (containerHeight + 10)))
        );
      }
    });
  }

  // Magnific popup
  const singlePopupImage = $(
    '*[id^="attachment"] a, .entry-content a[href$=".jpg"], .entry-content a[href$=".jpeg"]'
  ).not('.gallery a[href$=".jpg"], .gallery a[href$=".jpeg"]');
  const galleryPopupImage = $(".popup-gallery");

  // Instantiate Magnific Popup with a single image
  singlePopupImage.magnificPopup({
    type: "image",
    closeOnContentClick: true,
    tLoading: "",
    image: {
      verticalFit: false,
    },
    callbacks: {
      updateStatus: function (data) {
        if (data.status === "ready") {
          zoomPopupImage();
        }
      },
    },
  });

  // Instantiate Magnific Popup with gallery images
  galleryPopupImage.magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "",
    mainClass: "mfp-zoom-in",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    callbacks: {
      updateStatus: function (data) {
        if (data.status === "ready") {
          zoomPopupImage();
        }
      },
    },
  });
});
