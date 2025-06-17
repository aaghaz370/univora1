// File: js/script.js

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Optional: Close the menu when a link is clicked (for mobile UX)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });

  // Add logo to the navbar
  const logoContainer = document.querySelector('.navbar .logo');
  if (logoContainer) {
    const logoImage = document.createElement('img');
    logoImage.src = 'assets/logo.jpg'; // Adjust path if needed
    logoImage.alt = 'SKS HITECH Logo';
    logoImage.style.width = '40px';
    logoImage.style.height = '40px';
    logoImage.style.borderRadius = '50%';
    logoImage.style.marginRight = '10px';
    logoImage.style.verticalAlign = 'middle';
    logoContainer.prepend(logoImage);
  }
});

 const modal = document.getElementById("serviceModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalList = document.getElementById("modalList");

    const servicesData = [
      {
        title: "Water / Waste Water Treatment",
        image: "assets/water-wastewatertreatment.jpg",
        points: [
          "STP & ETP Design",
          "Installation & Commissioning",
          "24/7 Maintenance Support",
          "Eco-friendly Technology",
          "Fully Automated Systems",
          "Remote Monitoring",
          "PLC-based Control",
          "Sludge Handling Solutions",
          "AMC Available",
          "Government Compliance"
        ]
      },
      {
        title: "Cooling / Boiler Water Treatment",
        image: "assets/cooling.jpg",
        points: [
          "Chemical Dosing Systems",
          "Boiler Descaling",
          "Cooling Tower Management",
          "Corrosion Control",
          "Energy Efficiency",
          "Online Monitoring",
          "Certified Chemicals",
          "Risk Assessment",
          "Water Quality Testing",
          "Expert Technicians"
        ]
      },
      {
        title: "RO / UF System",
        image: "assets/RO-UF system.jpg",
        points: [
          "RO Plant Installation",
          "UF System Design",
          "Membrane Cleaning",
          "Hardness Removal",
          "TDS Reduction",
          "Energy-efficient Units",
          "Annual Maintenance Contract",
          "Automatic Flushing",
          "Custom Capacity Design",
          "User Training Provided"
        ]
      },
      {
        title: "Swimming Pool Services",
        image: "assets/swimming.jpg",
        points: [
          "Pool Construction",
          "Filtration Systems",
          "Chemical Balancing",
          "pH Monitoring",
          "Algae Prevention",
          "Pump Maintenance",
          "Filter Replacement",
          "Swimming Pool AMC",
          "Safety Inspections",
          "On-demand Visits"
        ]
      },
      {
        title: "AHU / FCU Service",
        image: "assets/ahu-fcu.jpg",
        points: [
          "AHU Coil Cleaning",
          "Filter Replacement",
          "Motor Inspection",
          "Drain Tray Cleaning",
          "Odor Removal",
          "Air Flow Testing",
          "Duct Disinfection",
          "Energy Optimization",
          "Noise Reduction",
          "Comprehensive AMC"
        ]
      },
      {
        title: "Solid Waste Management",
        image: "assets/waste.jpg",
        points: [
          "Waste Segregation Setup",
          "Dry & Wet Collection",
          "On-site Composting",
          "Recyclable Material Sorting",
          "Sanitary Disposal",
          "Odor Control",
          "Plastic Management",
          "Bulk Waste Solutions",
          "Municipal Guidelines",
          "Sustainability Goals"
        ]
      },
      {
        title: "Security & Surveillance",
        image: "assets/camera1.jpg",
        points: [
          "Waste Segregation Setup",
          "Dry & Wet Collection",
          "On-site Composting",
          "Recyclable Material Sorting",
          "Sanitary Disposal",
          "Odor Control",
          "Plastic Management",
          "Bulk Waste Solutions",
          "Municipal Guidelines",
          "Sustainability Goals"
        ]
      },
      {
        title: "Fire Alarm & Detection",
        image: "assets/alarm.jpg",
        points: [
          "Waste Segregation Setup",
          "Dry & Wet Collection",
          "On-site Composting",
          "Recyclable Material Sorting",
          "Sanitary Disposal",
          "Odor Control",
          "Plastic Management",
          "Bulk Waste Solutions",
          "Municipal Guidelines",
          "Sustainability Goals"
        ]
      }
    ];

    function openModal(index) {
      const service = servicesData[index];
      modalTitle.innerText = service.title;
      modalImage.src = service.image;
      modalList.innerHTML = service.points.map(point => `<li>${point}</li>`).join('');
      modal.style.display = "block";
    }

    function closeModal() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) closeModal();
    }

    const slides = document.querySelectorAll('.hero-image');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      dots[i].classList.remove('active');
    });

    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide); // Show first slide
  setInterval(nextSlide, 5000); // Change every 5 seconds


  
  
  
 


