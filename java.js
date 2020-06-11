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

	$(document).scroll(debounce(function(){
		animeLinha();
	}, 200));
})();

(function()
         {
	var $target = $('.pontos'),
			animationClass = 'pontos_anime';

    function animePonto() 
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

	$(document).scroll(debounce(function(){
		animePonto();
	}, 200));
})();


(function()
         {
	var $target = $('.data'),
			animationClass = 'datanimada';

    function animeData() 
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
    


	animeData();

	$(document).scroll(debounce(function(){
		animeData();
	}, 200));
})();



var botao = document.getElementById('botao');
var conteiner = document.querySelector('.especial');
var animationBotao = 'animado'
botao.addEventListener('click', function() 
{
    
  if(conteiner.style.display == 'none') 
  {
	  conteiner.style.display = 'block';
	  $(this).addClass(animationBotao);
  } 
  else
	{
	  conteiner.style.display = 'none';
	  $(this).removeClass(animationBotao);
  }
});

var btn = document.getElementById('button');
var container = document.querySelector('.special');
btn.addEventListener('click', function() 
{
    
  if(container.style.display == 'none') 
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

var bot = document.getElementById('bot');
var especiale = document.querySelector('.especiale');
bot.addEventListener('click', function() 
{
    
  if(especiale.style.display == 'none') 
  {
	  especiale.style.display = 'flex';
	  $(this).addClass(animationBotao);
  } 
  else
	{
	  especiale.style.display = 'none';
	  $(this).removeClass(animationBotao);
  }
});

var botaozito = document.getElementById('botaozito');
var especialzito = document.querySelector('.especialzito');
botaozito.addEventListener('click', function() 
{
    
  if(especialzito.style.display == 'none') 
  {
	  especialzito.style.display = 'block';
	  $(this).addClass(animationBotao);
  } 
  else
	{
	  especialzito.style.display = 'none';
	  $(this).removeClass(animationBotao);
  }
});

var bot = document.getElementById('botin');
var especiale = document.querySelector('.especialin');
bot.addEventListener('click', function() 
{
    
  if(especiale.style.display == 'none') 
  {
	  especiale.style.display = 'flex';
	  $(this).addClass(animationBotao);
  } 
  else
	{
	  especiale.style.display = 'none';
	  $(this).removeClass(animationBotao);
  }
});

(function()
         {
	var $target = $('.fas'),
			animationClass = 'animacaoEstrela';

    function animeEstrela() 
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
    


	animeEstrela();

	$(document).scroll(debounce(function(){
		animeEstrela();
	}, 200));
})();


