// Mobile viewport fix
document.addEventListener('DOMContentLoaded', function() {
  // Fix for mobile viewport issues
  function fixMobileView() {
    if (window.innerWidth <= 768) {
      // Ensure sections have correct width
      document.querySelectorAll('section').forEach(section => {
        section.style.width = '100%';
        section.style.maxWidth = '100%';
      });
    }
  }
  
  // Run on load
  fixMobileView();
  
  // Run on resize
  window.addEventListener('resize', fixMobileView);
});
