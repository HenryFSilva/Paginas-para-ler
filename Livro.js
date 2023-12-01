class Livro {
    #titulo
    #qtdPaginas
    #paginasLidas
    #porcentagem

    /**
     * 
     * @param {String} pTitulo 
     * @param {number} pQtdPaginas 
     * @param {number} pPaginasLidas 
     * @param {number} pPorcentagem 
     */

    constructor(pTitulo, pQtdPaginas, pPaginasLidas, pPorcentagem) {

        this.#titulo = pTitulo
        this.#qtdPaginas = pQtdPaginas
        this.#paginasLidas = pPaginasLidas
        this.#porcentagem = pPorcentagem

    }

    get titulo() {
        return this.#titulo
    }

    get qtdPaginas() {
        return this.#qtdPaginas
    }

    get paginasLidas() {
        return this.#paginasLidas
    }

    set titulo(novoTitulo) {
        this.#titulo = novoTitulo
    }

    set qtdPaginas(novoQtdPaginas) {
        this.#qtdPaginas = novoQtdPaginas
    }

    set paginasLidas(novoPaginasLidas) {
        this.#paginasLidas = novoPaginasLidas
    }

    verificarProgresso() {
         this.#porcentagem = (this.#paginasLidas * 100 / this.#qtdPaginas)
        return (`Você já leu ${this.#porcentagem.toFixed(2)} por cento do livro`)
    }
}

let pequenoPrincipe = new Livro('O pequeno príncipe', null, null);
pequenoPrincipe.qtdPaginas = 98;
console.log(`O livro ${pequenoPrincipe.titulo} possui ${pequenoPrincipe.qtdPaginas} páginas`);

pequenoPrincipe.paginasLidas = 20;
console.log(pequenoPrincipe.verificarProgresso());

pequenoPrincipe.paginasLidas = 50;
console.log(pequenoPrincipe.verificarProgresso());

let meuLivro = new Livro("God of War", 384, 155);
console.log(`O livro ${meuLivro.titulo} possui ${meuLivro.qtdPaginas} páginas`);
console.log(meuLivro.verificarProgresso());