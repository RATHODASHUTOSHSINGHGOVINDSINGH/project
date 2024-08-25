 
     
 

// Search Input Focus
document.querySelector('.search-input').addEventListener('focus', function() {
    this.style.backgroundColor = '#fffacd'; // Light yellow background on focus
});

document.querySelector('.search-input').addEventListener('blur', function() {
    this.style.backgroundColor = '#f3f3f3'; // Original background color when focus is lost
});

// Hover Effect for Boxes
document.querySelectorAll('.box').forEach(function(box) {
    box.addEventListener('mouseover', function() {
        this.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
    });

    box.addEventListener('mouseout', function() {
        this.style.boxShadow = 'none';
    });
});
 

 