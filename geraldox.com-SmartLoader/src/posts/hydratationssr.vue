<template>
  <div>
    <p class="article">
      Quando utilizamos frameworks modernos para criar sites e aplicações web,
      como React ou Vue, existe um recurso muito especial trabalhando nos
      bastidores chamado "Hidratação" (ou Hydration, em inglês). Nesse post nós
      vamos entender por que ele é tão crucial. Primeiro, imagine que você está
      construindo um site usando um desses frameworks. As páginas do seu site
      são criadas dinamicamente com JavaScript, ou seja, são montadas na hora,
      conforme o usuário navega. Isso é ótimo para uma experiência interativa,
      mas gera um desafio: se você desativar o JavaScript no navegador, nada
      aparecerá! E aqui está o problema: motores de busca, como o Google,
      precisam ver seu site como uma página HTML completa para poderem indexá-lo
      corretamente. Mas se eles encontrarem apenas um esqueleto vazio, esperando
      ser preenchido por JavaScript, não conseguirão ler e entender o conteúdo.
      A solução para isso é o SSR. Com o SSR, o HTML da página é gerado no
      servidor cada vez que alguém solicita a página. Isso garante que os
      motores de busca encontrem uma página completa para indexar. Porém, essa
      página HTML inicial é estática, sem interatividade. O usuário não pode
      clicar em botões ou preencher formulários, por exemplo. E é aqui que entra
      o processo de Hidratação. A Hidratação é a etapa que transforma essa
      página HTML estática em uma página interativa e dinâmica. Quando a página
      chega ao nosso navegador, o processo de Hidratação começa silenciosamente.
      Ele adiciona todos os elementos interativos, como botões clicáveis,
      formulários preenchíveis, animações, e tudo mais que torna a nossa
      experiência de usuário muito mais rica e envolvente. Isso é feito de
      maneira tão eficiente que nós nem percebemos que algo aconteceu. Tudo
      simplesmente funciona! Sem a Hidratação, teríamos que carregar a página
      estática do servidor, carregar todo o JavaScript necessário para torná-la
      interativa, e então reconstruir toda a página no navegador do usuário.
      Isso não só é ineficiente, mas também resultaria em um momento
      desagradável em que a página pisca ou muda abruptamente, o que chamamos de
      "flicker de renderização". Com a Hidratação, evitamos esse problema,
      tornando a experiência do usuário suave e agradável. Então, em resumo, a
      Hidratação é um processo essencial que dá vida às páginas estáticas,
      permitindo que tanto os motores de busca quanto os usuários finais vejam e
      interajam com o seu site da maneira como você planejou. É uma peça
      fundamental no desenvolvimento de aplicações web.
    </p>

    <figure>
      <img :src="`${img[2024]}/hydratation.png`" class="img-flex" />
    </figure>

    <p>
      <a
        href="https://www.youtube.com/post/Ugkx41bzyHQBWkCMfbUCQvpwo26JNRvHhF9w"
        target="_lank"
        >Via YoutubePost</a
      >
    </p>
  </div>
</template>

<script></script>

<style></style>
