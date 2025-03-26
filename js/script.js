document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (!currentUser && !window.location.pathname.includes('index.html')) {
        window.location.href = 'index.html';
        return;
    }
    
    // Display current username
    if (currentUser) {
        const usernameElements = document.querySelectorAll('#username-display');
        usernameElements.forEach(el => {
            el.textContent = currentUser.username;
        });
    }
    
    // Logout functionality
    const logoutButtons = document.querySelectorAll('#logout-btn');
    logoutButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            sessionStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        });
    });
    
    // Dashboard option cards
    const fresherCard = document.getElementById('fresher-card');
    if (fresherCard) {
        fresherCard.addEventListener('click', function(e) {
            if (e.target.classList.contains('option-btn') || e.target.closest('.option-btn')) {
                return;
            }
            window.location.href = 'fresher.html';
        });
        
        fresherCard.querySelector('.option-btn').addEventListener('click', function(e) {
            e.stopPropagation();
            window.location.href = 'fresher.html';
        });
    }
    
    const experiencedCard = document.getElementById('experienced-card');
    if (experiencedCard) {
        experiencedCard.addEventListener('click', function(e) {
            if (e.target.classList.contains('option-btn') || e.target.closest('.option-btn')) {
                return;
            }
            // In a complete implementation, this would link to experienced.html
            alert('Experienced section coming soon!');
        });
    }
    
    const expertCard = document.getElementById('expert-card');
    if (expertCard) {
        expertCard.addEventListener('click', function(e) {
            if (e.target.classList.contains('option-btn') || e.target.closest('.option-btn')) {
                return;
            }
            // In a complete implementation, this would link to expert.html
            alert('Expert section coming soon!');
        });
    }
    
    // Mobile menu toggle (would be implemented in a complete version)
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuToggle.addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
    });
    
    const dashboardHeader = document.querySelector('.dashboard-header .logo');
    if (dashboardHeader && window.innerWidth < 992) {
        dashboardHeader.appendChild(mobileMenuToggle);
    }
    
    window.addEventListener('resize', function() {
        if (window.innerWidth < 992) {
            if (dashboardHeader && !dashboardHeader.querySelector('.mobile-menu-toggle')) {
                dashboardHeader.appendChild(mobileMenuToggle);
            }
        } else {
            const toggle = document.querySelector('.mobile-menu-toggle');
            if (toggle) {
                toggle.remove();
            }
            document.querySelector('.sidebar').classList.remove('active');
        }
    });
});