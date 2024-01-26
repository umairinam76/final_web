  // ---- Hamburger ----
  const hamburger = document.querySelector(".hamburger");
  const closedHamburger = document.querySelector(".closed-hamburger");
  const navItems = document.querySelector(".nav-items");
  const navItem = document.getElementsByClassName("nav-item");

  hamburger.addEventListener("click", () => {
    navItems.classList.toggle("nav-open");
    hamburger.classList.toggle("fa-xmark");
  });

  function openContactModal() {
    document.getElementById("contactModal").style.display = "block";
  }

  function closeContactModal() {
    document.getElementById("contactModal").style.display = "none";
  }

  function validateAndSubmitForm() {
    console.log("hello");

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    var formData = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    console.log(formData);

    emailjs
      .sendForm(
        "service_abm1ywd",
        "template_o1a3ks4",
        "#contactForm",
        "AocCMv7v3U36VvuDA"
      )
      .then(
        function () {
          Swal.fire({
            icon: "success",
            title: "Form submitted successfully!",
            showConfirmButton: false,
            timer: 2000,
          });
          closeContactModal();
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      message.trim() === ""
    ) {
      alert("All fields are required. Please fill them out.");
      return;
    }

    submitForm();
  }

  function submitForm() {
    closeContactModal();
  }




  document
    .getElementById("bookConsultation")
    .addEventListener("click", function () {
      var calendlyUsername = "YOUR_CALENDLY_USERNAME";

      var eventType = "YOUR_EVENT_TYPE";

      Calendly.initInlineWidgets({
        url: "https://calendly.com/" + calendlyUsername + "/" + eventType,
        parentElement: document.getElementById("bookConsultation"),
      });
    });



  // -- Initialize Swiper 1 --

  // Pause the interval on left and right arrow click
  document.getElementById("leftArrow").addEventListener("click", function () {
    // clearInterval(intervalId);
    prevTestimonial();
  });

  document.getElementById("rightArrow").addEventListener("click", function () {
    // clearInterval(intervalId);
    nextTestimonial();
  });



  // // ---- Hamburger ----
  // const hamburger = document.querySelector(".hamburger");
  // const closedHamburger = document.querySelector(".closed-hamburger");
  // const navItems = document.querySelector(".nav-items");
  // const navItem = document.getElementsByClassName("nav-item");

  // hamburger.addEventListener("click", () => {
  //   navItems.classList.toggle("nav-open");
  //   hamburger.classList.toggle("fa-xmark");
  // });

  function openContactModal() {
    document.getElementById('contactModal').style.display = 'block';
  }

  function closeContactModal() {
    document.getElementById('contactModal').style.display = 'none';
  }

  function validateAndSubmitForm() {
    console.log("hello");

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    var formData = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };
    console.log(formData);

    emailjs.sendForm('service_abm1ywd', 'template_o1a3ks4', '#contactForm', 'AocCMv7v3U36VvuDA')
      .then(function () {
        Swal.fire({
          icon: 'success',
          title: 'Form submitted successfully!',
          showConfirmButton: false,
          timer: 2000 
        });
        closeContactModal();
        console.log('SUCCESS!');
      }, function (error) {
        console.log('FAILED...', error);
      });

    
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || message.trim() === '') {
      alert('All fields are required. Please fill them out.');
      return;
    }

    submitForm();
  }


  function submitForm() {
    closeContactModal();
  }


  function submitForm() {
    const form = document.getElementById('contactForm');

    const formData = new FormData(form);

    emailjs.sendForm("service_your_emailjs_service_id", "template_your_emailjs_template_id", formData)
      .then(
        function(response) {
          console.log("Email sent successfully:", response);
        },
        function(error) {
          console.error("Error sending email:", error);
        }
      );
  }

  function openConsultationModal() {
  }


  document.getElementById('bookConsultation').addEventListener('click', function() {
    var calendlyUsername = 'YOUR_CALENDLY_USERNAME';

    var eventType = 'YOUR_EVENT_TYPE';

    Calendly.initInlineWidgets({
      url: 'https://calendly.com/' + calendlyUsername + '/' + eventType,
      parentElement: document.getElementById('bookConsultation')
    });
  });


  for (let item of navItem) {
    item.addEventListener("click", () => {
      navItems.classList.toggle("nav-open");
      hamburger.classList.toggle("fa-xmark");
    });
  }

  // -- Initialize Swiper 1 --
  var swiper = new Swiper(".mySwiper", {
    centeredSlides: false,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    centeredSlides: false,
    slidesPerView: 5,
    spaceBetween: 10,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      500: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
  var swiper3 = new Swiper(".mySwiper3", {
    centeredSlides: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });


  const testimonials = document.querySelectorAll('.customer .rated-person');
  let currentIndex = 0;
  let intervalId;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      const adjustedIndex = (i + index + testimonials.length) % testimonials.length;
      testimonial.classList.remove('active-rated-person');
  
      // Add logic to handle the active person list
      if (i === Math.floor(testimonials.length / 2)) {
        testimonial.classList.add('active-rated-person');
        const commentParagraph = document.querySelector('.review .comment-display');
        commentParagraph.textContent = getComment(adjustedIndex); // Call a function to get the comment based on the index
  
        // Move the active person list
        const activePersonList = document.querySelector('.active-person-list');
        const newActivePersonList = document.createElement('div');
        newActivePersonList.classList.add('active-person-list');
  
        // Append the person elements based on the index
        for (let j = 0; j < testimonials.length; j++) {
          const newIndex = (j + index + testimonials.length) % testimonials.length;
          const newPerson = document.createElement('div');
          newPerson.classList.add('person');
          newPerson.textContent = testimonials[newIndex].querySelector('.name').textContent;
          newActivePersonList.appendChild(newPerson);
        }
  
        // Replace the old active person list with the new one
        activePersonList.replaceWith(newActivePersonList);
      }
    });
  }
  

  function updateTestimonials(direction) {
    currentIndex = (currentIndex + direction + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  }

  // Automatically move to the next testimonials every 2 seconds
  intervalId = setInterval(() => {
    updateTestimonials(1);
  }, 3000);

  // Pause the interval on left and right arrow click
  document.getElementById('leftArrow').addEventListener('click', function () {
    clearInterval(intervalId);
    updateTestimonials(-1);
    intervalId = setInterval(() => updateTestimonials(1), 2000);
  });

  document.getElementById('rightArrow').addEventListener('click', function () {
    clearInterval(intervalId);
    updateTestimonials(1);
    intervalId = setInterval(() => updateTestimonials(1), 2000);
  });

  // Function to get the comment based on the index
  function getComment(index) {
    const comments = [
      "Without any doubt I recommend CodeSync Labs Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve come across so far. Wouldn’t hesitate to introduce their work to someone else.",
      "Best",
      "Good",
      "Outstanding",
      "Excellent"
      // Add other comments here for other customers
    ];

    return comments[index];
  }
