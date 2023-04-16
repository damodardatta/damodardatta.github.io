$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
        $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
        $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');
    $('#news-table').DataTable( {
        "bDestroy": true,
        "paging":   true,
        "ordering": false,
        "info":     false,
        "searching": false,
        "bLengthChange": false,
        "pageLength": 5,
        "pagingType": "simple",
        "language": {
        "paginate": {
            "next": '<div class="news-button btn btn-sm"><i class="fa fa-chevron-right"></i></div>',
            "previous": '<div class="news-button btn btn-sm"><i class="fa fa-chevron-left"></i></div>'
          }
        }
     });
});
