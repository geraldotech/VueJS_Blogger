/*  const options = {
  moduleCache: {
    vue: Vue,
  },

  async getFile(url) {
    const res = await fetch(url)
    if (!res.ok) throw Object.assign(new Error(res.statusText + ' ' + url), { res })
    return {
      getContentData: (asBinary) => (asBinary ? res.arrayBuffer() : res.text()),
    }
  },
  addStyle(textContent) {
    const style = Object.assign(document.createElement('style'), {
      textContent,
    })
    const ref = document.head.getElementsByTagName('style')[0] || null
    document.head.insertBefore(style, ref)
  },
}

const { loadModule } = window['vue3-sfc-loader'] */

const options = {
  moduleCache: {
    vue: Vue,
  },

  async getFile(url) {
    try {
      const res = await fetch(url, { cache: 'no-store' })

      // Arquivo não encontrado → retorno silencioso
      if (!res.ok) {
        return null
      }

      return {
        getContentData: (asBinary) => (asBinary ? res.arrayBuffer() : res.text()),
      }
    } catch (e) {
      return null
    }
  },

  addStyle(textContent) {
    const style = document.createElement('style')
    style.textContent = textContent

    const ref = document.head.querySelector('style')
    document.head.insertBefore(style, ref)
  },
}

const { loadModule } = window['vue3-sfc-loader']
