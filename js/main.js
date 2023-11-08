//variavel com o nome das tags aserem criadas e com os textos que será inserido
const elements = [
  { tag: "p", texto: "sou um parágrafo" },
  { tag: "div", texto: "sou ma div" },
  { tag: "section", texto: "sou uma section" },
  { tag: "footer", texto: "sou um footer" },
];

//capturando os elementos
const section1 = document.querySelector(".container");
const section2 = document.querySelector(".container2");
const div1 = document.createElement("div");
const div2 = document.createElement("div");

for (let i = 0; i < elements.length; i++) {
  //aqui desestruturo a cada iteração os valores de "tag" e "texo" que virá do objeto "elements"
  const { tag, texto } = elements[i];

  //aqui crio e guardo a Tag de acordo com o nome que virá no valor de tag que vem do objeto "elements"
  let tagCriada = document.createElement(tag);
  //aqui insiro na tag criada o texto que virá no valor de "texto", que virá do objeto "elements"
  tagCriada.innerText = texto;
  //aqui insiro na "div" as tag com seu texto respectivo na minha div
  div1.appendChild(tagCriada);
}
//inserindo na minha section que começa vazia, os elementos criados na iteração do for
section1.appendChild(div1);

//OUTRA FORMA DE FAZER
for (let i = 0; i < elements.length; i++) {
  //aqui desestruturo a cada iteração os valores de "tag" e "texo" que virá do objeto "elements"
  const { tag, texto } = elements[i];

  //aqui crio e guardo a Tag de acordo com o nome que virá no valor de tag que vem do objeto "elements"
  let createdTag = document.createElement(tag);
  //essa variavel guarda o texto que virá no valor de "texto, que virá do objeto "elements
  let createdText = document.createTextNode(texto);

  createdTag.appendChild(createdText);
  //aqui insiro na "div" as tag com seu texto respectivo na minha div

  div2.appendChild(createdTag);
}
//inserindo na minha section que começa vazia, os elementos criados na iteração do for

section2.appendChild(div2);
