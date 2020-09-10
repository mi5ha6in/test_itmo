
var writeUsModal = $('#writeUsModal');

writeUsModal.on('submit', function(evt) {
  evt.preventDefault();
  $('#writeUsModal').modal('hide');
  setTimeout(function() {
    $('#thankModal').modal('show')
  }, 1000);
  setTimeout(function() {
    $('#thankModal').modal('hide')
  }, 6000)
});
