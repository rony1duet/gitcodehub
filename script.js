// Function to toggle stylesheets based on viewport width
function toggleStylesheet() {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var mainCss = document.getElementById('main-css');
    var styleCss = document.getElementById('style-css');

    if (viewportWidth <= 1024) {
        mainCss.disabled = true;
        styleCss.disabled = false;
    } else {
        mainCss.disabled = false;
        styleCss.disabled = true;
    }
}

// Call the function on page load
toggleStylesheet();

// Add event listener to call the function on window resize
window.addEventListener('resize', toggleStylesheet);

// Page turn button functionality
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    };
});

// Contact me button functionality
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');
contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
};

// Back profile button functionality
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

const backProfileBtn = document.querySelector('.back-profile');
backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
};

// Cover and page initialization functionality
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);

setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200);

pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500);
    }, (index + 1) * 200 + 2100);
});
