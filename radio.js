(function($){
  $(document).ready(function() {
    $(document).mousemove(function(e) {
        $('body').css('--x', e.clientX + 'px');
        $('body').css('--y', e.clientY + 'px');
      });

    $('a').click(function(e) {
      e.preventDefault();

      let $this = $(this);

      if ($this.next().hasClass('show')) {
          $this.next().removeClass('show');
          $this.next().slideUp(200);
      } else {
          $this.parent().parent().find('li .display').removeClass('show');
          $this.parent().parent().find('li .display').slideUp(200);
          $this.next().toggleClass('show');
          $this.next().slideToggle(200);
      }
    });
  });
})(jQuery);