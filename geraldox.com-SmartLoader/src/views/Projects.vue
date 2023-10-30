<template>
  <div class="projects">
    <section>
      <h1>Projects</h1>
      <p>
        <code>
          Ter a solução de forma conceitual, antes de ir para o code, ter a
          solução na mente antes de resolver qualquer coisa.</code
        >
      </p>
      <section>
        <!--container-->
        <section class="projects_menu">
          <ul>
            <label for="menu">Select:</label>
            <select name="" id="menu" v-model="selected">
              <option v-for="link in prolink" :key="link.id" :value="link">
                {{ link.name }}
              </option>
            </select>
          </ul>
        </section>
        <p class="link">
          <a :href="selected.url" target="_blank">{{ selected.name }}</a>
        </p>
        <p class="promobile">You are in mobile version</p>
        <!--container article-->
      </section>
    </section>
  </div>
</template>

<script>
module.exports = {
  metaInfo: {
    title: 'Projects',
    titleTemplate: '%s - geraldoX',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'description',
        content: 'Todos os meus projetos',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'vuejs, windows, android, linux' },
    ],
  },
  created() {
    //sort.name working thanks Peter Mortensen from  https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
    this.prolink.sort((a, b) => {
      if (a.name < b.name) return -1
      return a.name > b.name ? 1 : 0
    })
  },
  data() {
    const baseURL = 'https://dev.geraldox.com/projects/'
    return {
      prolink: [
        {
          id: 1,
          name: 'Array indexOf preventDefault',
          url: baseURL + 'Array_indexOf-preventdefault.html',
        },
        {
          id: 2,
          name: 'Array indexOf and Splice',
          url: baseURL + 'Array_indexOf_and_Splice.html',
        },
        { id: 3, name: 'Add Ferias', url: baseURL + 'add-ferias.html' },
        {
          id: 4,
          name: 'Array input Radio Search',
          url: baseURL + 'array_input_radio_search',
        },
        {
          id: 5,
          name: 'Calcular Maioridade',
          url: baseURL + 'calcular-idade-maior-idade.html',
        },
        {
          id: 6,
          name: 'Consulta Bancos',
          url: baseURL + 'consulta-bancos.html',
        },
        {
          id: 7,
          name: 'Consulta Cartoes SearchBox',
          url: baseURL + 'consulta-cartoes-searchbox.html',
        },
        {
          id: 8,
          name: 'Consulta Limites',
          url: baseURL + 'consulta-limites/index.html',
        },
        { id: 9, name: 'CRUD Set Limit', url: baseURL + 'CRUD_Set-Limit.html' },
        {
          id: 10,
          name: 'CSS hide Box Click to Show',
          url: baseURL + 'CSS-hide-box-click-reveal.html',
        },
        {
          id: 11,
          name: 'Fetch Local Seach',
          url: baseURL + 'fetch_local_search/index.html',
        },
        { id: 12, name: 'Check VPN', url: baseURL + 'CheckVPN/' },
        {
          id: 13,
          name: 'Array Input Mult Checkbox Advanced Search',
          url: baseURL + 'isInGit/array_input_mult_checkbox_search/',
        },
        {
          id: 14,
          name: 'Aumentar Limite Cartão',
          url: baseURL + 'limite-cartao-aumentar/limite-cartao-aumentar5.html',
        },
        { id: 15, name: 'Marsha Urso Game', url: baseURL + 'apple-sum' },
        { id: 16, name: 'Mytimer', url: baseURL + 'mytimer.html' },
        { id: 17, name: 'PSW Manager', url: baseURL + 'psw-manager2v1.html' },
        { id: 18, name: 'quizJS', url: baseURL + 'quiz_js/index.html' },
        {
          id: 19,
          name: 'return Max/Min Value',
          url: baseURL + 'return_max_min_value/index.html',
        },
        {
          id: 20,
          name: 'To Do List Append Child',
          url: baseURL + 'To-do-list-append-child.html',
        },
        {
          id: 21,
          name: 'Base64 converter',
          url: baseURL + 'Base64-converter/Base64-converter.html',
        },
        {
          id: 22,
          name: 'Base64 converter 2',
          url: baseURL + 'Base64-converter/Base64-converter-2.html',
        },
        {
          id: 23,
          name: 'Mouse Clicks Test',
          url: baseURL + 'Mouse-click-test/index.html',
        },
        {
          id: 24,
          name: 'not Includes',
          url: baseURL + 'notIncludesA/index.html',
        },
        {
          id: 25,
          name: 'Loja Interativa CRUD',
          url: 'https://geraldotech.github.io/server-guide/LojaInterativa_CRUD',
        },
        {
          id: 26,
          name: 'VueJS Blogger',
          url: 'https://blogger-router.netlify.app/#/',
        },
        {
          id: 27,
          name: 'Express Login Way - NodeJS com Express',
          url: 'https://expressloginway.onrender.com/',
        },
      ],
      selected: '',
    }
  },
  methods: {},
}
</script>

<style scoped>
.projects {
  text-align: center;

  z-index: -1;
}

.projects select {
  cursor: pointer;
  margin: 20px 0;
}
.projects select option {
  font-weight: bold;
  font-size: 1rem;
}
.projects section.projects_menu {
  display: block;
  text-align: center;
}
.link {
  font-size: 1.5rem;
}

.projects h1 {
  margin: 15px 0;
  font-size: 2em;
}
.projects_menu {
  margin-top: 20px;
}

ol {
  padding: 0 20px;
}

.promobile {
  display: none;
}

/*for desktop*/
@media screen and (min-width: 800px) {
  .projects_menu {
    text-align: center;
    width: 50%;
    margin: 0 auto;
  }
}
/* force mobile style */
@media screen and (max-width: 700px) {
  .projects {
    padding: 20px;
  }
  /* deep selector para funcionar */
  .projects .promobile {
    display: block;
    color: rgb(4, 188, 126);
  }
}
</style>
