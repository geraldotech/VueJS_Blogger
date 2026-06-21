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
