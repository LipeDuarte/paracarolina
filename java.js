// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


(function()
         {
	var $target = $('.legenda'),
			animationClass = 'anime-start';

    function animeScroll() 
    {
		var documentTop = $(document).scrollTop();

        $target.each(function()
        {
			var itemTop = $(this).offset().top;
            if (documentTop > itemTop - 600) 
            {
				$(this).addClass(animationClass);
            } else 
            {
				$(this).removeClass(animationClass);
			}
		});
    }
    


	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 200));
})();



(function()
         {
	var $target = $('.linha'),
			animationClass = 'linha_anime';

    function animeLinha() 
    {
		var documentTop = $(document).scrollTop();

        $target.each(function()
        {
			var itemTop = $(this).offset().top;
            if (documentTop > itemTop - 700) 
            {
				$(this).addClass(animationClass);
            } else 
            {
				$(this).removeClass(animationClass);
			}
		});
    }
    


	animeLinha();

	$(document).scroll(debounce(function(){
		animeLinha();
	}, 200));
})();

var btn = document.getElementById('botao');
var container = document.querySelector('.especial');
var animationBotao = 'animado'
btn.addEventListener('click', function() 
{
    
  if(container.style.display === 'none') 
  {
	  container.style.display = 'block';
	  $(this).addClass(animationBotao);
  } 
  else
	{
	  container.style.display = 'none';
	  $(this).removeClass(animationBotao);
  }
});