document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const logo = document.getElementById('logo');
    const allSections = document.querySelectorAll('section');
    const divContainers = document.querySelectorAll('#bio, #bio-text, #resume, #educ-background, #work-experience, #skills, #soft-skills, #technical-skills, #portfolio-content, #contact-content, #contact-form, #social-media');
    const formElements = document.querySelectorAll('.input, .form-btn');
    const navbar = document.getElementById('navbar');
    const buttonText = document.querySelectorAll('#resume-download, #link-ng-website, #link-ng-laro');

    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            enableLightMode();
        } else {
            enableDarkMode();
        }
    });

    function enableLightMode() {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        
        logo.classList.remove('dark-mode');
        logo.classList.add('light-mode');
        
        allSections.forEach(section => {
            section.classList.remove('dark-mode');
            section.classList.add('light-mode');
        });
        
        divContainers.forEach(div => {
            div.classList.remove('dark-mode');
            div.classList.add('light-mode');
            
            if (div.style.border) {
                div.style.borderColor = 'rgb(16, 16, 14)';
            }
        });
        
        formElements.forEach(elem => {
            elem.classList.remove('dark-mode');
            elem.classList.add('light-mode');
        });
        
        buttonText.forEach(btn => {
            btn.style.color = 'rgb(16, 16, 14)';
        });
        
        document.querySelectorAll('[style*="border"]').forEach(elem => {
            if (elem.style.border) {
                elem.style.borderColor = 'rgba(16, 16, 14, 0.2)';
            }
        });
        
    }

    function enableDarkMode() {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        
        logo.classList.remove('light-mode');
        logo.classList.add('dark-mode');
        
        allSections.forEach(section => {
            section.classList.remove('light-mode');
            section.classList.add('dark-mode');
        });
        
        divContainers.forEach(div => {
            div.classList.remove('light-mode');
            div.classList.add('dark-mode');
            
            if (div.style.border) {
                div.style.borderColor = 'rgb(48, 48, 43)';
            }
        });
        
        formElements.forEach(elem => {
            elem.classList.remove('light-mode');
            elem.classList.add('dark-mode');
        });
        
        buttonText.forEach(btn => {
            btn.style.color = 'rgb(255, 255, 227)';
        });
        
        document.querySelectorAll('[style*="border"]').forEach(elem => {
            if (elem.style.border) {
                elem.style.borderColor = 'rgb(48, 48, 43)';
            }
        });
        
        localStorage.setItem('theme', 'dark');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    
    if (page1 && page2 && page3) {
        // Initialize pages
        page1.style.display = 'flex';
        page2.style.display = 'none';
        page3.style.display = 'none';
        
        let currentPage = 1;
        const totalPages = 3;
        
        leftArrow.addEventListener('click', function() {
            // Navigate to previous page or wrap to the end
            const previousPage = currentPage === 1 ? totalPages : currentPage - 1;
            navigateToPage(previousPage);
        });
        
        rightArrow.addEventListener('click', function() {
            // Navigate to next page or wrap to the beginning
            const nextPage = currentPage === totalPages ? 1 : currentPage + 1;
            navigateToPage(nextPage);
        });
        
        function navigateToPage(targetPage) {
            if (targetPage === currentPage) return;
            
            const currentPageElement = document.getElementById(`page${currentPage}`);
            const targetPageElement = document.getElementById(`page${targetPage}`);
            
            // Determine animation direction
            let outAnimation, inAnimation;
            if ((targetPage > currentPage && !(currentPage === 1 && targetPage === totalPages)) || 
                (currentPage === totalPages && targetPage === 1)) {
                outAnimation = 'slide-out-left';
                inAnimation = 'slide-in-right';
            } else {
                outAnimation = 'slide-out-right';
                inAnimation = 'slide-in-left';
            }
            
            // Animate out current page
            currentPageElement.classList.add(outAnimation);
            
            setTimeout(() => {
                currentPageElement.style.display = 'none';
                currentPageElement.classList.remove(outAnimation);
                
                // Animate in target page
                targetPageElement.classList.add(inAnimation);
                targetPageElement.style.display = 'flex';
                
                setTimeout(() => {
                    targetPageElement.classList.remove(inAnimation);
                }, 500);
                
                currentPage = targetPage;
            }, 500);
        }
    }
});