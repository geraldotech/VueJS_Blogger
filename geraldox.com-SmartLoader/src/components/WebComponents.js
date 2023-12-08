// Vanilla Web Components

//Global CDN IMG
import cdn from '/src/cdn.js'
//console.log(img,"CDN importado WebComponents.js")

// Vanilla Web Components [Beta]
class IntroducingWebCompo extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.append(this.template(), this.styles(), this.methods())
  }

  connectedCallback() {
    //call functions here - void duplicate console.logs in this blogger
  }
  styles() {
    const style = document.createElement('style')
    style.textContent = `
    main {
      color: blue;
    }    
    `
    return style
  }
  template() {
    const template = document.createElement('template')
    template.innerHTML = `
    <main>
      <h1>Maceió</h1>
    </main>    
    `
    return template.content
  }
  methods() {
    //functions here
    const person = {
      name: 'Geraldo',
      age: 30,
      language: 'JavaScript',
      RAM: 16,
    }
    const p = document.createElement('p')

    for (const key in person) {
      p.innerHTML += key + ':' + person[key] + '<br>'
    }

    return p
  }
}
customElements.define('maceio-al', IntroducingWebCompo)

class LinuxInstall extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.append(this.template(), this.styles())
  }

  connectedCallback() {
    //call functions here - void duplicate console.logs in this blogger
  }
  styles() {
    const style = document.createElement('style')
    style.textContent = `
    `
    return style
  }
  template() {
    const template = document.createElement('template')
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
    `
    return template.content
  }
}
customElements.define('linux-install', LinuxInstall)

class IntelBoost extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.append(this.template(), this.styles())
  }

  connectedCallback() {
    //call functions here - void duplicate console.logs in this blogger
  }
  styles() {
    const style = document.createElement('style')
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
    `
    return style
  }
  template() {
    const template = document.createElement('template')
    template.innerHTML = `
     <p>Desabilitando Intel Boost</p>
     <figure>
      <img src="${cdn.img[2023]}/desativando-modo-turbo.jpg" alt="drop" />
     </figure>
    `
    return template.content
  }
}
customElements.define('intel-boost', IntelBoost)
class Winmonitorwall extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.append(this.template(), this.styles())
  }

  connectedCallback() {
    //call functions here - void duplicate console.logs in this blogger
    this.copy()
    console.log(``)
  }
  copy() {
    const inputVal = this.shadowRoot.querySelector('input').value
    const imgIcon = this.shadowRoot.querySelector('img')
    const spancopiado = this.shadowRoot.querySelector('#copiado')

    imgIcon.onclick = function () {
      navigator.clipboard.writeText(inputVal).then(() => {
        spancopiado.textContent = 'Copied!'
        texto()
      })

      //function clean text
      const texto = () => {
        setTimeout(function () {
          spancopiado.textContent = ''
        }, 1000)
      }
    }
  }
  styles() {
    const style = document.createElement('style')
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
    margin-top: 50px;
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
     <p>Set wallpaper per monitor: </p> 

    <form class="clipboard">
      <input disabled type="text" value="shell:::{ED834ED6-4B5A-4bfe-8F11-A626DCB6A921} -Microsoft. Personalization\pageWallpaper">
      <img src="${cdn.img.path}/src/icons/icons8-copy-24.png" />
      <span id="copiado"></span>
    </form>
     <nav>
     <a href="https://winaero.com/how-to-set-wallpaper-per-monitor-in-windows-11/" target="_blank">Ref</a>
     </nav>
    `
    return template.content
  }
}
customElements.define('win-wallmonitor', Winmonitorwall)
class Updatechromemint extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.append(this.template(), this.styles())
  }

  connectedCallback() {
    //call functions here - void duplicate console.logs in this blogger
  }

  styles() {
    const style = document.createElement('style')
    style.textContent = ` 
      code {
        color: dodgerblue;
      }

    `
    return style
  }
  template() {
    const template = document.createElement('template')
    template.innerHTML = `
    <div>
    <p>Comandos para atualizar o Google Chrome no Linux Mint / Ubuntu</p>
    <p>1. Update the system repo</p>
    <snippet-x>
    <pre>$ sudo apt update</pre>
    </snippet-x>
    <p>2. Downloaing chrome.deb</p>
    <snippet-x>
    <pre>$ sudo wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb</pre>
    </snippet-x>
    <p>3. install dependencias</p>
    <snippet-x>
    <pre>$ sudo apt-get install libu2f-udev </pre>
    </snippet-x>   
    <p>4. install package</p>
    <snippet-x>
    <pre>$ sudo dpkg -i google-chrome-stable_current_amd64.deb</pre>
    </snippet-x>
    <p>Or you can install with a single command:</p>
    <snippet-x name="one command">
    <pre block>$ sudo wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && sudo apt-get install libu2f-udev && sudo dpkg -i google-chrome-stable_current_amd64.deb</pre>
    </snippet-x>
    </div>
    `
    return template.content
  }
}
customElements.define('update-chromelinux', Updatechromemint)
class Backupwindowsdrivers extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.append(this.template(), this.styles())
  }

  connectedCallback() {
    //call functions here - void duplicate console.logs in this blogger
  }

  styles() {
    const style = document.createElement('style')
    style.textContent = ` 
      code {
        color: dodgerblue;
      }
      div{
        min-height: 35vh;
      }
    `
    return style
  }
  template() {
    const template = document.createElement('template')
    template.innerHTML = `
    <div>
   <h1>Como fazer o backup de todos os drivers do Windows rápidamente</h1>
   <p>Simplesmente copie a segue pasta:</p>
   <snippet-x> 
   <pre cora>C:&#92;Windows&#92;System32&#92;DriverStore</pre>
   </snippet-x> 
    </div>
    `
    return template.content
  }
}
customElements.define('backup-windowsdrivers', Backupwindowsdrivers)
class Windowsltsv extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.append(this.template(), this.styles())
  }

  connectedCallback() {
    //call functions here - void duplicate console.logs in this blogger
  }

  styles() {
    const style = document.createElement('style')
    style.textContent = ` 
    .btnDownload {
      cursor: pointer;
      text-align: center;
      font-size: 16px;
      background: #1a2b81;
      padding: 0.5em 3em;
      border: none;
      opacity: 0.8;
      border-radius: 10px;
      text-decoration: none;
    }
    
    nav:has(.btnDownload) {
      margin: 3em auto;
      max-width: fit-content;
    }
    
    nav:has(.btnDownload) a {
      display: block;
      margin: 15px 0;
    }
    
    .btnDownload:hover {
      box-shadow: 0 0 15px black;
      color: white;
      background: #0747a6;
      transition: 2s;
    }

    `
    return style
  }
  template() {
    const template = document.createElement('template')
    template.innerHTML = `
    <div>
   <h1>Versão mais simples do OS</h1>
   <ul>
    <li>LTSB  2015 / 2016</li>
    <li>LTSC 2019</li>
   </ul>
   <nav>
   <a href="https://massgrave.dev/windows_ltsc_links.html#Windows_LTSC_Download" class="btnDownload target="_blank">Download</a> 
   </nav>
    </div>
    `
    return template.content
  }
}
customElements.define('windows-ltsb', Windowsltsv)
class Windowsperformance extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.append(this.template(), this.styles())
  }

  connectedCallback() {
    //call functions here - void duplicate console.logs in this blogger
  }

  styles() {
    const style = document.createElement('style')
    style.textContent = ` 
    code{
      color: dodgerblue;
    }

    `
    return style
  }
  template() {
    const template = document.createElement('template')
    template.innerHTML = `
    <div>
   <h1>Desativar Telemetry</h1>
  <p>Digite "Serviços": <code>services.msc</code> e "Experiências e Telemetria de Usuário Conectado" e dê um  duplo clique.</p>
  <p>Na janela de propriedades do serviço clique em "Parar" caso ele esteja rodando e depois em "Tipo de  inicialização" coloque "Desativado". Depois dê um OK.</p>
  <p>Ir em regedit ⇒ <code>Computador/HKEY_LOCAL_MACHINE/SOFTWARE/Policies/Microsoft/Windows/DataCollection</code>    
  create a new value: Valor DWORD (32 bits) com o nome AllowTelemetry e set os dados do valor para 0</p>
    </div>
    `
    return template.content
  }
}
customElements.define('win-afterinstall', Windowsperformance)
class Winfolderuse extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.append(this.template(), this.styles())
  }

  connectedCallback() {
    //call functions here - void duplicate console.logs in this blogger
  }

  styles() {
    const style = document.createElement('style')
    style.textContent = ` 
    .btnDownload {
      cursor: pointer;
      text-align: center;
      font-size: 16px;
      background: #1a2b81;
      padding: 0.5em 3em;
      border: none;
      opacity: 0.8;
      border-radius: 10px;
      text-decoration: none;
    }
    
    nav:has(.btnDownload) {
      margin: 3em auto;
      max-width: fit-content;
    }
    
    nav:has(.btnDownload) a {
      display: block;
      margin: 15px 0;
    }
    
    .btnDownload:hover {
      box-shadow: 0 0 15px black;
      color: white;
      background: #0747a6;
      transition: 2s;
    }
    .img-flex {
      max-width: 100%;
      margin: 0 auto;
      height: auto;
    }
    `
    return style
  }
  template() {
    const template = document.createElement('template')
    template.innerHTML = `
    <div>
    <p>1 - Primeiro baixe o Handle</p>
    <nav>
      <a href="https://learn.microsoft.com/pt-br/sysinternals/downloads/handle"  target="_blank" class="btnDownload">Download</a>
    </nav>
    <p>2 - Type "handle.exe <folder_path>" (without quotes) and press Enter.</p>

    <figure>
    <img src='${cdn.img[2023]}/handle-process.jpg' alt='handle process' class="img-flex">
    </figure>
    <p>3 - Use "taskkill /PID " (without quotes) and press Enter for each process.</p>

    </div>
    `
    return template.content
  }
}
customElements.define('win-folderuser', Winfolderuse)
