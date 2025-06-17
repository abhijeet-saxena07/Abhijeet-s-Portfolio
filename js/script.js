// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});



// Header Scroll Effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(10, 10, 10, 0.95)";
    header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.5)";
  } else {
    header.style.background = "rgba(10, 10, 10, 0.9)";
    header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.3)";
  }
});

// About Section Animation
const aboutSection = document.querySelector('.about');
const skillCards = document.querySelectorAll('.skill-card');

window.addEventListener('scroll', () => {
    const aboutPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (aboutPosition < screenPosition) {
        aboutSection.classList.add('active');
        
        skillCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            card.classList.add('active');
        });
    }
});

// Project Card Animation Trigger
const projectsSection = document.querySelector('.projects');
const projectCards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
    const sectionPosition = projectsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        projectCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.style.opacity = '1';
        });
    }
});

// Smooth hover effect enhancement
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const x = e.offsetX;
        const y = e.offsetY;
        const centerX = card.offsetWidth / 2;
        const centerY = card.offsetHeight / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0) rotateY(0)';
    });
});

// Contact Form Validation & Animation
const contactForm = document.getElementById('contactForm');
const formGroups = document.querySelectorAll('.form-group');

// Form validation
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Form submission logic (replace with your actual submission code)
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    submitBtn.style.background = 'var(--green)';
    
    // Reset form after 2 seconds
    setTimeout(() => {
        contactForm.reset();
        submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
        submitBtn.style.background = 'linear-gradient(45deg, var(--green), var(--dark-green))';
        
        // Reset labels
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            const label = group.querySelector('label');
            if (input.value === '') {
                label.style.top = '10px';
                label.style.fontSize = '1rem';
                label.style.color = 'rgba(255, 255, 255, 0.7)';
            }
        });
    }, 2000);
});

// Animate contact section when scrolled to
const contactSection = document.querySelector('.contact');
window.addEventListener('scroll', () => {
    const sectionPosition = contactSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if (sectionPosition < screenPosition) {
        formGroups.forEach((group, index) => {
            group.style.animationDelay = `${index * 0.2}s`;
            group.style.opacity = '1';
        });
        
        document.querySelectorAll('.info-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2 + 0.6}s`;
            card.style.opacity = '1';
        });
    }
});

// Enhanced hover effect for info cards
document.querySelectorAll('.info-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const x = e.offsetX;
        const y = e.offsetY;
        const centerX = card.offsetWidth / 2;
        const centerY = card.offsetHeight / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `translateY(-5px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(-5px) rotateX(0) rotateY(0)';
    });
});


// Skills Animation
const skillsSection = document.querySelector('.skills');
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress;
    });
}

// Animate when scrolled to
window.addEventListener('scroll', () => {
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (sectionPosition < screenPosition) {
        animateSkillBars();
    }
});

// Additional hover effect
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const percent = item.querySelector('.skill-percent');
        percent.style.color = item.querySelector('.skill-progress').style.background.includes('green') 
            ? 'var(--green)' 
            : 'var(--red)';
        percent.style.transform = 'scale(1.2)';
    });
    
    item.addEventListener('mouseleave', () => {
        const percent = item.querySelector('.skill-percent');
        percent.style.color = 'white';
        percent.style.transform = 'scale(1)';
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const skillProgress = document.querySelectorAll(".skill-progress");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progress = entry.target;
          const value = progress.getAttribute("data-progress");
          progress.style.width = value;
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  skillProgress.forEach((bar) => {
    observer.observe(bar);
  });
});

