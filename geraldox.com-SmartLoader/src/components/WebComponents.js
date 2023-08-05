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

// Vanilla Web Components [Beta]

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
