if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
            var ieversion=new Number(RegExp.$1)
              if (ieversion<=8){
                var conteudo  = '<div style="position: fixed;top: 0;padding: 15px;background: #D4092F;color: #ffffff;text-align: center;width: 100%; z-index:999999"><p>Seu navegador não exibe corretamente todo o conteúdo. Utilize a versão mais recente: (Internet Explore +9, Mozila Firefox, Google Chrome.</p></div>';
                $('body').append(conteudo)
            }
}