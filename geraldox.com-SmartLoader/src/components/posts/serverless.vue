<template>
  <div>
    <p>
      Serverless é um modelo de computação em nuvem que está se popularizando cada vez mais entre nós programadores, assim como o Docker fez com a conteinerização. Mas o que exatamente é Serverless e
      por que ele está ganhando tanta popularidade?
    </p>

    <p>
      Imagine que você está planejando uma festa de casamento. Vai ser uma festa grande, com mais de 200 convidados. Com certeza você poderia cozinhar toda a comida sozinho e lidar com tudo, mas isso
      exige muito tempo, esforço e recursos financeiro. Isso seria como gerenciar seus próprios servidores e manter a própria infra. É possível. Mas, você pode também contratar um serviço de catering
      que cuida de tudo para você, desde cozinhar o que você pedir até limpar tudo depois. Você só paga e usa. Isso é como se fosse o modelo Serverless, onde você entrega a responsabilidade de
      gerenciamento de servidores a um provedor de nuvem e paga apenas pelos serviços que usa, assim como pagaria aos fornecedores pela quantidade de comida consumida. Genial, não?
    </p>

    <p>
      Para nós desenvolvedores web, o Serverless é como ter uma varinha mágica que cuida de todas as tarefas chatas e complicadas de gerenciamento de servidor e infra. Com ela a gente pode se
      concentrar em escrever o código da nossa aplicação e a plataforma Serverless cuida automaticamente do dimensionamento, implantação e manutenção da infraestrutura. Isso significa que os nossos
      aplicativos podem ser dimensionados automaticamente de acordo com a demanda, sem que a gente precise se preocupar com provisionamento ou gerenciamento de servidores. Isso é simplesmente
      incrível.
    </p>

    <p>
      Como você provavelmente já percebeu, Serverless, seria traduzido para “Sem servidor”, mas isso não significa que não tenham servidores envolvidos; significa simplesmente que os servidores são
      escondidos de nós devs. O nosso código é executado em contêineres stateless que são acionados por eventos e totalmente gerenciados pelo provedor de nuvem (como AWS ou Google). Isso permite um
      uso mais eficiente dos recursos, já que a gente só é cobrado pela quantidade exata de tempo de computação que o nosso app vier a consumir.
    </p>

    <figure>
      <img
        :src="`${img[2024]}/serverless.webp`"
        class="img-flex" />
    </figure>

    <p>
      Um exemplo comum de Serverless é o AWS Lambda, um serviço da Amazon Web Services. Se você quer aprender mais sobre isso, tem um vídeo aqui no canal criando uma aplicação serverless do zero. Com
      esse serviço, a gente pode executar um código em resposta a eventos, como requisições HTTP, modificações em buckets do Amazon S3 ou atualizações em uma tabela do DynamoDB. Todas essas
      integrações já vem pré-prontas e nós só precisamos acioná-las. Essa arquitetura orientada a eventos permite a gente construir aplicativos altamente escaláveis e econômicos, já que a gente não
      paga pelo tempo ocioso dos servidores. Os benefícios dessa tecnologia são claros: custos iniciais e de manutenção mais baixos, maior escalabilidade e foco no desenvolvimento de aplicativos em
      vez de no gerenciamento de infraestrutura. No entanto, assim como tudo, Serverless não é uma solução perfeita para todos. Há considerações sobre desempenho, segurança e dependência em um único
      fornecedor que precisam ser levadas em consideração. Dependendo do caso até preços podem ser um fator que nos faça reconsiderar.
    </p>
    <a href="https://www.youtube.com/post/UgkxlosES-TkGKTyT11bL679PUKs6HqH7xDQ">REF</a>
  </div>
</template>

<script>
module.exports = {}
</script>

<style></style>
