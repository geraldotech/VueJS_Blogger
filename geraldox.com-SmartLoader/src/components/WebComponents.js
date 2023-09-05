//Global CDN IMG
import cdn from "/src/cdn.js";
//console.log(img,"CDN importado WebComponents.js")

// Vanilla Web Components [Beta]
class IntroducingWebCompo extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(this.template(), this.styles(), this.methods());
  }

  connectedCallback() {
    //call functions here - void duplicate console.logs in this blogger
  }
  styles() {
    const style = document.createElement("style");
    style.textContent = `
    main {
      color: blue;
    }    
    `;
    return style;
  }
  template() {
    const template = document.createElement("template");
    template.innerHTML = `
    <main>
      <h1>Maceió</h1>
    </main>    
    `;
    return template.content;
  }
  methods() {
    //functions here
    const person = {
      name: "Geraldo",
      age: 30,
      language: "JavaScript",
      RAM: 16,
    };
    const p = document.createElement("p");

    for (const key in person) {
      p.innerHTML += key + ":" + person[key] + "<br>";
    }

    return p;
  }
}
customElements.define("maceio-al", IntroducingWebCompo);

class LinuxInstall extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(this.template(), this.styles());
  }

  connectedCallback() {
    //call functions here - void duplicate console.logs in this blogger
  }
  styles() {
    const style = document.createElement("style");
    style.textContent = `
    `;
    return style;
  }
  template() {
    const template = document.createElement("template");
    template.innerHTML = `
     <h3>1 - EFI System Partition</h3>
     <ul>
     <li>Lógica - 1024MB [1GB]</li>
     </ul>

     <h3>2 - Swap</h3>
     <ul>
     <li>Lógica - 2000MB</li>
     </ul>

     <h3>3 - Reserved BIOS boot area</h3>
     <ul>
     <li>Primary - 1MB</li>
     </ul>

     <h3>4 - ext4 ou btrfs[more fast?]</h3>
     <ul>
     <li>Primary - define space</li>
     <li>Mount point: / </li>
     </ul>
    `;
    return template.content;
  }
}
customElements.define("linux-install", LinuxInstall);

class IntelBoost extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(this.template(), this.styles());
  }

  connectedCallback() {
    //call functions here - void duplicate console.logs in this blogger
  }
  styles() {
    const style = document.createElement("style");
    style.textContent = `
   figure:has(img) {
    text-align: center;    
   }
   img {
    width: 100%;
   }

   @media screen and (min-width: 650px){
    img {
      width: 50%;
    }
   }
    `;
    return style;
  }
  template() {
    const template = document.createElement("template");
    template.innerHTML = `
     <p>Desabilitando Intel Boost</p>
     <figure>
      <img src="${cdn.img[2023]}desativando-modo-turbo.jpg" alt="drop" />
     </figure>
    `;
    return template.content;
  }
}
customElements.define("intel-boost", IntelBoost);
class Winmonitorwall extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(this.template(), this.styles());
  }

  connectedCallback() {
    //call functions here - void duplicate console.logs in this blogger
    this.copy();
    console.log(``);
  }
  copy() {
    const inputVal = this.shadowRoot.querySelector("input").value;
    const imgIcon = this.shadowRoot.querySelector("img");
    const spancopiado = this.shadowRoot.querySelector("#copiado");

    imgIcon.onclick = function () {
      navigator.clipboard.writeText(inputVal).then(() => {
        spancopiado.textContent = "Copied!";
        texto();
      });

      //function clean text
      const texto = () => {
        setTimeout(function () {
          spancopiado.textContent = "";
        }, 1000);
      };
    };
  }
  styles() {
    const style = document.createElement("style");
    style.textContent = ` 
    .clipboard{
      display: flex;
    } 
  
   .clipboard img{
    cursor: pointer;
    width: 20px;
    height: 20px;
   }
  
   .clipboard input{
    width: 80%;
    color: seagreen;
   }

   nav{
    margin-top: 100px;
   }

   @media screen and (min-width: 650px){
    img {
      width: 50%;
    }
   }
    `;
    return style;
  }
  template() {
    const template = document.createElement("template");
    template.innerHTML = `
     <p>Set wallpaper per monitor: </p> 

    <form class="clipboard">
      <input disabled type="text" value="shell:::{ED834ED6-4B5A-4bfe-8F11-A626DCB6A921} -Microsoft. Personalization\pageWallpaper">
      <img src="${cdn.img.path}/src/icons/icons8-copy-24.png" />
      <span id="copiado"></span>
    </form>
     <nav>
     <a href="https://winaero.com/how-to-set-wallpaper-per-monitor-in-windows-11/" target="_blank">Ref</a>
     </nav>
    `;
    return template.content;
  }
}
customElements.define("win-wallmonitor", Winmonitorwall);
