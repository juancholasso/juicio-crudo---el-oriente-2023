$(document).ready(function(){
  $('#daterange').daterangepicker({
    //autoUpdateInput: false,
    // autoApply: false,
     locale: {
      cancelLabel: 'Limpiar',
      applyLabel: 'Aceptar',
      format: 'DD-MM-YYYY'
    },
  });
    $('#daterange').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('DD-MM-YYYY') + ' - ' + picker.endDate.format('DD-MM-YYYY'));
  });

  $('#daterange').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
  });

  $('#daterange').on('apply.daterangepicker', function(ev, picker) {
    $('#daterange_txt').val($('#daterange').val());
      $('#f_per_page').submit();

  });


})


