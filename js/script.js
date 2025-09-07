let next = document.querySelector('.next2')
let prev = document.querySelector('.prev2')



 

//carousel


// Clone the first and last few cards for the infinite loop effect


// Highlight the center card immediately
function highlightCenterCard() {
    const allItems = Array.from(document.querySelectorAll('.services-item'));
    allItems.forEach(item => item.classList.remove('center'));

    // Center card index in the carousel DOM (including clones)
    const centerIndex = currentIndex + 4; // Adjust for cloned cards
    if (allItems[centerIndex]) {
        allItems[centerIndex].classList.add('center');
    }
}










// Function to handle auto-scrolling
function autoScroll() {
    setInterval(() => {
        // Move the carousel to the next position
        currentIndex2++;
        carousel2.style.transform = `translateX(-${currentIndex2 * 140}px)`; // Adjust for logo width + margin

        // Once the last logo is out of view, reset the position to create an infinite loop effect
        if (currentIndex2 === totalItems2) {
            // Wait for the transition time to complete before resetting
            setTimeout(() => {
                carousel2.style.transition = 'none'; // Disable transition to avoid jump
                carousel2.style.transform = `translateX(0)`; // Reset position to the start
                currentIndex2 = 0; // Reset the index to the beginning

                // Re-enable the transition after reset
                setTimeout(() => {
                    carousel2.style.transition = 'transform 1s ease-in-out'; // Re-enable transition for smooth scrolling
                }, 50); // Small delay to ensure reset completes before enabling transition
            }, 1000); // Delay to wait for the last logo to move out of view
        }
    }, 2000); // Set interval for auto-scrolling (2 seconds)
}




//preload.............
 var loader = document.getElementById("preloader");

 window.addEventListener("load", function(){
    loader.style.display = "none";
 }

 )

 // Mail service...............
