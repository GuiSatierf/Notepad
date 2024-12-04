export const salvarAnotacoesJSON = (anotacoes) => {
    localStorage.setItem("anotacoes", JSON.stringify(anotacoes));
  };
  
  export const carregarAnotacoesJSON = () => {
    return JSON.parse(localStorage.getItem("anotacoes")) || [];
  };
  