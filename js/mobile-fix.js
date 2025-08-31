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
      
      // Ensure max-w-7xl containers have correct width
    //   document.querySelectorAll('.max-w-7xl').forEach(container => {
    //     container.style.width = '100%';
    //     container.style.maxWidth = '100%';
    //     container.style.paddingLeft = '15px';
    //     container.style.paddingRight = '15px';
    //     container.style.boxSizing = 'border-box';
    //   });
    }
  }
  
  // Run on load
  fixMobileView();
  
  // Run on resize
  window.addEventListener('resize', fixMobileView);
});
