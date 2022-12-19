(function() {
  var updateButton = document.getElementById('inventory-filters-modal');
  var cancelButton = document.getElementById('modal-close');
  var favDialog = document.getElementById('modal');

  // Update button opens a modal dialog
  updateButton.addEventListener('click', function() {
    favDialog.showModal();
  });

  // Form cancel button closes the dialog box
  cancelButton.addEventListener('click', function() {
    favDialog.close();
  });

})();

$('.slide-inv').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});