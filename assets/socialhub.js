(function(){

$(document).on('ready pjax:success',function(){
  
  $('body[id*=socialhub] .btn-highlight,body[id*=socialhub] .btn-highlighted').click(function(e) {
    var state = this.getAttribute('data-state');
    e.preventDefault();

    $.ajax({
      url: this.href,
      data: {state: state}
    });

    if(state == 'highlight') {
      this.className = 'btn btn-highlighted';
      this.setAttribute('data-state','highlighted');
      this.getElementsByTagName('i')[0].className = 'rex-icon rex-icon-highlighted';
    } else {
      this.className = 'btn btn-highlight';
      this.setAttribute('data-state','highlight');
      this.getElementsByTagName('i')[0].className = 'rex-icon rex-icon-highlight';
    }
  });

  $('body[id*=socialhub] .btn-visible, body[id*=socialhub] .btn-invisible').click(function(e) {
    var state = this.getAttribute('data-state');
    e.preventDefault();

    $.ajax({
      url: this.href,
      data: {state: state}
    });

    if(state == 'visible') {
      this.className = 'btn btn-invisible';
      this.setAttribute('data-state','invisible');
      this.getElementsByTagName('i')[0].className = 'rex-icon rex-icon-invisible';
    } else {
      this.className = 'btn btn-visible';
      this.setAttribute('data-state','visible');
      this.getElementsByTagName('i')[0].className = 'rex-icon rex-icon-visible';
    }
  });

});

})(jQuery);