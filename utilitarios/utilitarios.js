export const criaHeader = async () => {
    const tagHeader = document.getElementsByTagName("header")[0];
    
    try {
        const response = await fetch('./components/header/header.html');
        if (response.ok) {
            const headerContent = await response.text();
            tagHeader.innerHTML = headerContent;
        } else {
            console.error("Erro ao carregar o conteúdo do header: Página não encontrada.");
        }
    } catch (error) {
        console.error("Erro ao carregar o conteúdo do header:", error);
    }
};

export const criaFooter = async () => {
    const tagFooter = document.getElementsByTagName("footer")[0];
    
    try {
        const response = await fetch('./components/footer/footer.html');
        if (response.ok) {
            const footerContent = await response.text();
            tagFooter.innerHTML = footerContent;
        } else {
            console.error("Erro ao carregar o conteúdo");
        }
    } catch (error) {
        console.error("Erro ao carregar o conteúdo do header:", error);
    }
};