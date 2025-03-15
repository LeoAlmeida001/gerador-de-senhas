const languageTexts = {
    pt: {
        title: "Gerador de Senhas",
        length: "Tamanho da Senha:",
        uppercase: "Letras Maiúsculas",
        lowercase: "Letras Minúsculas",
        numbers: "Números",
        symbols: "Caracteres Especiais",
        generate: "Gerar Senha",
        copy: "Copiar"
    },
    en: {
        title: "Password Generator",
        length: "Password Length:",
        uppercase: "Uppercase Letters",
        lowercase: "Lowercase Letters",
        numbers: "Numbers",
        symbols: "Special Characters",
        generate: "Generate Password",
        copy: "Copy"
    },
    es: {
        title: "Generador de Contraseñas",
        length: "Longitud de la Contraseña:",
        uppercase: "Letras Mayúsculas",
        lowercase: "Letras Minúsculas",
        numbers: "Números",
        symbols: "Caracteres Especiales",
        generate: "Generar Contraseña",
        copy: "Copiar"
    }
};

function generatePassword() {
    const length = document.getElementById("length").value;
    const useUppercase = document.getElementById("uppercase").checked;
    const useLowercase = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;
    
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    
    let characters = "";
    if (useUppercase) characters += uppercase;
    if (useLowercase) characters += lowercase;
    if (useNumbers) characters += numbers;
    if (useSymbols) characters += symbols;
    
    if (characters === "") {
        alert("Selecione pelo menos uma opção de caracteres.");
        return;
    }
    
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    document.getElementById("password").value = password;
}

function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Senha copiada!");
}

function changeLanguage() {
    const lang = document.getElementById("language").value;
    document.getElementById("title").textContent = languageTexts[lang].title;
    document.getElementById("length-label").textContent = languageTexts[lang].length;
    document.getElementById("uppercase-label").textContent = languageTexts[lang].uppercase;
    document.getElementById("lowercase-label").textContent = languageTexts[lang].lowercase;
    document.getElementById("numbers-label").textContent = languageTexts[lang].numbers;
    document.getElementById("symbols-label").textContent = languageTexts[lang].symbols;
    document.getElementById("generate-btn").textContent = languageTexts[lang].generate;
    document.getElementById("copy-btn").textContent = languageTexts[lang].copy;
}
