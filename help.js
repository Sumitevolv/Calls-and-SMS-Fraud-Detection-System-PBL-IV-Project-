// script.js

document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
<div class="faq-item">
    <h3>1. How does the SMS and Fraud Detection System work?</h3>
    <p style="display: none;">Our system uses advanced algorithms and machine learning to monitor SMS transactions for signs of fraudulent activity, ensuring real-time protection for users.</p>
</div>
