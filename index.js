// script.js

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Toggle menu on burger click
    burger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close the menu if clicking outside
    document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && !burger.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Smooth scroll on link click
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
                
                // Close menu on link click (for mobile)
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Highlight active link on scroll
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 50 && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

function predictFraud() {
    // Get values from the form
    const callDuration = parseFloat(document.getElementById('call_duration').value);
    const smsLength = parseInt(document.getElementById('sms_length').value, 10);
    const numberOfCalls = parseInt(document.getElementById('number_of_calls').value, 10);
    const numberOfSms = parseInt(document.getElementById('number_of_sms').value, 10);

    // Simple fraud detection logic
    let fraudRisk = 0;

    // Example thresholds (these values are arbitrary; adjust as needed)
    const CALL_DURATION_THRESHOLD = 10; // minutes
    const SMS_LENGTH_THRESHOLD = 40; // characters
    const NUMBER_OF_CALLS_THRESHOLD = 3;
    const NUMBER_OF_SMS_THRESHOLD = 3;

    if (callDuration > CALL_DURATION_THRESHOLD) {
        fraudRisk += 1;
    }

    if (smsLength > SMS_LENGTH_THRESHOLD) {
        fraudRisk += 1;
    }

    if (numberOfCalls > NUMBER_OF_CALLS_THRESHOLD) {
        fraudRisk += 1;
    }

    if (numberOfSms > NUMBER_OF_SMS_THRESHOLD) {
        fraudRisk += 1;
    }

    // Determine fraud status based on risk
    let resultText = 'Fraud Risk: Low';

    if (fraudRisk >= 3) {
        resultText = 'Fraud Risk: High';
    } else if (fraudRisk === 2) {
        resultText = 'Fraud Risk: Medium';
    }

    // Display the result
    document.getElementById('result').innerText = resultText;
}
