class externo extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.append(this.template(), this.styles())
    //let function available
  }

  connectedCallback() {
    // call functions here - void duplicate console.logs
    this.anyfunction()
  }
  anyfunction() {
    const button = this.shadowRoot.querySelector('button')
    const add = this.shadowRoot.querySelector('#add')
    /*  console.log(add.id)
    console.log(button, add) */

    button.onclick = function () {
      add.scrollIntoView(true)
      history.pushState('', '', '#' + add.id) // add # to url
    }
    //
    if (location.hash) {
      console.log(location.hash)
      return add.scrollIntoView(true)
    }
  }
  styles() {
    const style = document.createElement('style')
    style.textContent = ` 
      p{       
        font-size: 2rem;
      }
      h1{
        color: rgb(120,80,0)
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
    <h1>Introduction to primitive wrapper types</h1>

        <button>scrollIntoView</button>
   
        <a href="#add">scrollIntoView href</a> 

       <p>Testing importacao de webcomponents alone</p>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

       <h2 id="add">Additional Resources</h2>
      

       <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
       </p>
       <ul>      
        <li>Create an object of a corresponding type. </li>
        <li>Call a specific method on the instance. </li>
        <li>Delete the instance immediately. </li>
        <li>So the following code </li>
       </ul>
      `
    return template.content
  }
}
customElements.define('externo-compo', externo)
