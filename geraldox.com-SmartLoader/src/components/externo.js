class externo extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.append(this.template(), this.styles())
  }

  connectedCallback() {
    //call functions here - void duplicate console.logs in this blogger
    console.log(``)
  }
  anyfunction() {}
  styles() {
    const style = document.createElement('style')
    style.textContent = ` 
      p{
        color: red;
      }
  
     @media screen and (min-width: 650px){
      img {
        width: 50%;
      }
     }
      `
    return style
  }
  template() {
    const template = document.createElement('template')
    template.innerHTML = `
       <p>Testing importacao de webcomponents alone</p>
      `
    return template.content
  }
}
customElements.define('externo-compo', externo)
