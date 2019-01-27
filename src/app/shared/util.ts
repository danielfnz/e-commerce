import {Product} from './model/product.model';

export const iconsRef = {
  milk: {
    title: 'Sem Lactose',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABmwAAAZsBqMTCdgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALzSURBVEiJtZZNbAxhGMd/z8zsisRBSHwEqa42dJsg2db6ClEHEW4ScROSTVsiceHkRpzchO1aCZG4uHHQcNgeHNjYIkqLbVYiEd0WFREf7cw8DruzptPth1XPZSbP/Gd+7/953+edV1pT+Zwq5pjKnuedDcNUiVjqzT5RuQjUBx4VwDiR61hzt9p7/jBUMYCNYdFMPF1YWk0kKskqEIAI4l6eCQJgmaa513acjECz7TiZeLrQlk1EigHdKoBcR6P4ky1deUWpmw3IyCYiRcs02xT6BaKO6/S0Xnq7LKB7B9Cayud8kCcACu9nBQLww1Ca1LR7Yqn+5T7dEIC6fPPlvgMI9M8GNKEU8XRhabmMUeCVyniboeENinYDn+x5VsOzI/VfAGKp/uWiodfAAlTW5zobXszoyIsJzmCdaLhH0dPlIV30IAC97dEPiCQBQfTkTI6MYCKbiBTH3PB2EXpB1wK7ANcZN68HtabKVUCBA823Xob/CgTQd6xu1DDMffqn/l+N0M+xSYPqWJMHngIL538O7fxrEASdsVAIPdycHFg9SSjcKV1kd00gCDhT6myxugOrEVHtKd9trRnUcmVwr7dAEAaAdaKhjL/P7LAMACgarRmEq7dbk/mD2USkaBrmLg+mpl1p6qdHG0fK6sW1gyCkwk0ozZnYVsWZWnamyg5SMwjA8m4eH68f+uWEt4nQi9Kklv0gns6vnCvQhOg7VjeKbe1HGEBpcFzu/xcQlJwp7g5En6M0/TcQQG/72o9ih/aU5wyA6easZhCUnPkWCGrZU/48/wnkwZwQO70y2o7zYEvy9Yo5B0Gpl7wyCjSOiXE/6GxOQC3JwUP+MgpEy8eCCmxOQIjejKUGD/v7rAyrlHEmUBEglnoTn0qwqSu/BTBE9RxM3IgFGsfFuLc+ObjEmuoD5aHeAD0lKo9auvJVFW7FlFzzctlEpBhPF9q801VYtHtaRz8W/Tqj6AWUkak0AsMo513jy1l/vrLrQx9g/wb3IlOJb8rvawAAAABJRU5ErkJggg=='
  },
  gluten: {
    title: 'Sem Gluten',
    image: 'data:image/png;base64,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'
  },
  sugar: {
    title: 'Sem Adicao de Acucar',
    image: 'data:image/png;base64,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'
  },
  organic: {
    title: 'Organico',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABmwAAAZsBqMTCdgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVEiJ7ZXNSsNAFIXPtfoQTRAfJmZfpA0FqZsYEDdd+RyKCyk0WQhWxUX7AJ2+ihvb5iFKPS5aIRknf9WFSs5u5l7Ody8MZ4Bav11S1GCrYZuQWwDNDIPXd/IqdoPxziB7Fl2QvCsxEEXkcuH4g8qgCpBSMKNJczo8EZEXAI2SkE+tKdKJHX+iF/aNdJEbDbIGcbZ0zx9TA6noVMD7RG9DyGsAX0B7GZMdpsns6RAAiI/9EYQ97frIZJgFSmnpBE+71CqDfkI16J+A7FnYyaxNI+87oHnyQGJkqbClN1kqbFH4oF2/mQyNyUCyr0XQAYCJpcLcqbGJoL6pYNwodoMxSQ/Aqsg5oRVJz5RzQEEyb8P1GZuNiiDdvD8p9zFsN+sCXOS0zYsgtf6GPgBRL3WbX0IhkAAAAABJRU5ErkJggg=='
  },
  vegetarian: {
    title: 'Vegetariano',
    image: 'data:image/png;base64,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'
  }
};


export const initialProducts: Product[] = [
  {
    id: 1,
    nome: 'TOMATE ITALIANO ORGÂNICO 500G - SOLO VIVO',
    marca: 'SOLO VIVO',
    categoria : 'legumes',
    preco: 11.29,
    quantidade: 1,
    precoPromocional: 7.90,
    imagens: ['https://organomix.vteximg.com.br/arquivos/ids/27855-1000-1000/tomate-italiano.jpg?v=636362324022870000', 'https://organomix.vteximg.com.br/arquivos/ids/22040-1000-1000/DSC06155.jpg?v=636047085815800000'],
    icones: ['milk', 'gluten', 'sugar', 'organic', 'vegetarian'],
    descricao: {
      titulo: 'Sobre a marca',
      conteudo: 'A Solo Vivo é uma das principais produções orgânicas do mercado, certificada e dentro das normas estabelecidas pelo Ministério da Agricultura do Brasil. Uma marca que objetiva a produção de alimentos de qualidade, com foco na preservação do meio ambiente. Seu portfólio conta com frutas, legumes e verduras, orgânicos e frescos.'
    },
    voceSabia: {
      titulo: 'O Ataque dos Tomates contra o Câncer',
      conteudo: 'Preste atenção ao humilde tomate. Ele pode parecer insignificante demais para ter algum efeito como droga anticancerígena, mas novas pesquisas descobriram que o tomate é um elemento importante na dieta alimentar de pessoas menos propensas ao câncer. Não há mistério sobre o potencial do tomate como arma contra o câncer. É o licopeno, um pigmento que confere ao tomate sua cor vermelha. Novas pesquisas realizadas pelo Dr. Helmut Sies, na Alemanha, descobriram que o licopeno é um beta caroteno duas vezes mais poderoso no "combate ao oxigênio molecular", uma molécula de oxigênio tóxica e agressiva que pode provocar o câncer nas células. O tomate é uma importante fonte alimentar de licopeno e isso inclui todos os tipos de produtos derivados do tomate, por exemplo, tomate cozido, tomate e molho de tomate enlatados, pasta de tomate e ketchup. Também há uma grande concentração de licopeno na melancia e uma concentração média no damasco.'
    },
  },
  {
    id: 2,
    nome: 'AGRIÃO ORGÂNICO - SOLO VIVO',
    marca: 'SOLO VIVO',
    categoria : 'verduras',
    preco: 5.55,
    quantidade: 1,
    precoPromocional: 4,
    imagens: ['https://organomix.vteximg.com.br/arquivos/ids/12124-1000-1000/DSC01511.jpg?v=635501799592970000'],
    icones: ['milk', 'gluten', 'sugar', 'organic', 'vegetarian'],
    descricao: {
      titulo: 'Sobre a marca',
      conteudo: 'A Solo Vivo é uma das principais produções orgânicas do mercado, certificada e dentro das normas estabelecidas pelo Ministério da Agricultura do Brasil. Uma marca que objetiva a produção de alimentos de qualidade, com foco na preservação do meio ambiente. Seu portfólio conta com frutas, legumes e verduras, orgânicos e frescos.'
    },
    voceSabia: {
      titulo: 'Lorem ipsum',
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa deleniti, eaque eligendi est ipsum sed. Ab enim fugiat laudantium quaerat, quis reiciendis reprehenderit saepe suscipit voluptates. Dignissimos, nesciunt!\n'
    },
  },
  {
    id: 3,
    nome: 'ABÓBORA JAPONESA ORGÂNICA 600G - SOLO VIVO',
    marca: 'SOLO VIVO',
    categoria : 'legumes',
    preco: 7.68,
    quantidade: 1,
    precoPromocional: 6.2,
    imagens: ['https://organomix.vteximg.com.br/arquivos/ids/27872-1000-1000/abobora-japonesa.jpg?v=636362496854130000', 'https://organomix.vteximg.com.br/arquivos/ids/14291-1000-1000/DSC02707.jpg?v=635635673734230000'],
    icones: ['milk', 'gluten', 'sugar', 'organic', 'vegetarian'],
    descricao: {
      titulo: 'Sobre a marca',
      conteudo: 'A Solo Vivo é uma das principais produções orgânicas do mercado, certificada e dentro das normas estabelecidas pelo Ministério da Agricultura do Brasil. Uma marca que objetiva a produção de alimentos de qualidade, com foco na preservação do meio ambiente. Seu portfólio conta com frutas, legumes e verduras, orgânicos e frescos.'
    },
    voceSabia: {
      titulo: 'Lorem ipsum',
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa deleniti, eaque eligendi est ipsum sed. Ab enim fugiat laudantium quaerat, quis reiciendis reprehenderit saepe suscipit voluptates. Dignissimos, nesciunt!\n'
    },
  },
  {
    id: 4,
    nome: 'BERINJELA ORGÂNICA 600G - SOLO VIVO',
    marca: 'SOLO VIVO',
    categoria : 'legumes',
    preco: 9.62,
    quantidade: 1,
    precoPromocional: 7.8,
    imagens: ['https://organomix.vteximg.com.br/arquivos/ids/27863-1000-1000/berinjela.jpg?v=636362469916700000', 'https://organomix.vteximg.com.br/arquivos/ids/22046-1000-1000/DSC06160.jpg?v=636047123798670000'],
    icones: ['milk', 'gluten', 'sugar', 'organic', 'vegetarian'],
    descricao: {
      titulo: 'Sobre a marca',
      conteudo: 'A Solo Vivo é uma das principais produções orgânicas do mercado, certificada e dentro das normas estabelecidas pelo Ministério da Agricultura do Brasil. Uma marca que objetiva a produção de alimentos de qualidade, com foco na preservação do meio ambiente. Seu portfólio conta com frutas, legumes e verduras, orgânicos e frescos.'
    },
    voceSabia: {
      titulo: 'Lorem ipsum',
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa deleniti, eaque eligendi est ipsum sed. Ab enim fugiat laudantium quaerat, quis reiciendis reprehenderit saepe suscipit voluptates. Dignissimos, nesciunt!\n'
    },
  },
  {
    id: 5,
    nome: 'CEBOLA ORGÂNICA 500G - SOLO VIVO',
    marca: 'SOLO VIVO',
    categoria : 'legumes',
    preco: 11.47,
    quantidade: 1,
    precoPromocional: 9.54,
    imagens: ['https://organomix.vteximg.com.br/arquivos/ids/27860-1000-1000/cebola-branca.jpg?v=636362466235200000', 'https://organomix.vteximg.com.br/arquivos/ids/22049-1000-1000/DSC06163.jpg?v=636047126818170000'],
    icones: ['milk', 'gluten', 'sugar', 'organic', 'vegetarian'],
    descricao: {
      titulo: 'Sobre a marca',
      conteudo: 'A Solo Vivo é uma das principais produções orgânicas do mercado, certificada e dentro das normas estabelecidas pelo Ministério da Agricultura do Brasil. Uma marca que objetiva a produção de alimentos de qualidade, com foco na preservação do meio ambiente. Seu portfólio conta com frutas, legumes e verduras, orgânicos e frescos.'
    },
    voceSabia: {
      titulo: 'Curiosidades',
      conteudo: 'Para ajudar a manter o sangue livre de coágulos, coma cebola crua ou cozida. O Dr. Victor Gurewich, de Harvard, aconselha todos os seus pacientes com doenças coronarianas a comerem cebolas diariamente, em parte porque seus compostos impedem o acúmulo de plaquetas e agilizam a atividade de dissolução de coágulos. Na verdade, a cebola pode ter uma capacidade verdadeiramente espantosa de combater os efeitos prejudiciais da formação de plaquetas resultante da ingestão de alimentos gordurosos. M. M. Gupta, professor da faculdade de medicina K. P., em Lucknow na Índia, administrou inicialmente aos homens uma refeição com teor altíssimo de gordura - com manteiga e creme de leite - e documentou que sua atividade relacionada à dissolução de coágulos diminuiu.\n' +
        '\n' +
        'Em seguida, ofereceu-lhes a mesma refeição gordurosa, dessa vez acrescentando cerca de 60 g de cebola crua, cozida ou frita. O exame de sangue realizado 2 e 4 horas após a refeição gordurosa, mostrou que a cebola havia bloqueado totalmente a ação prejudicial da gordura na obstrução das artérias. Na verdade, menos de metade de uma xícara de cebola inverteu completamente os efeitos danosos da gordura na atividade de dissolução de coágulos.\n' +
        '\n' +
        'Ao ingerir alimentos gordurosos, acrescente algumas cebolas. Aquela cebola no hambúrguer ou omelete, pode ajudar a combater os poderes prejudiciais dos alimentos gordurosos.'
    },
  },
  {
    id: 6,
    nome: 'BANANA PRATA ORGÂNICA 800G - SOLO VIVO',
    marca: 'SOLO VIVO',
    categoria : 'legumes',
    preco: 10.73,
    quantidade: 1,
    precoPromocional: 9.4,
    imagens: ['https://organomix.vteximg.com.br/arquivos/ids/19418-400-400/banana-prata-800g.jpg?v=635917420760230000'],
    icones: ['milk', 'gluten', 'sugar', 'organic', 'vegetarian'],
    descricao: {
      titulo: 'Sobre a marca',
      conteudo: 'A Solo Vivo é uma das principais produções orgânicas do mercado, certificada e dentro das normas estabelecidas pelo Ministério da Agricultura do Brasil. Uma marca que objetiva a produção de alimentos de qualidade, com foco na preservação do meio ambiente. Seu portfólio conta com frutas, legumes e verduras, orgânicos e frescos.'
    },
    voceSabia: {
      titulo: 'A Cura pela banana',
      conteudo: 'Parece uma úlcera, mas os exames dizem que não é. Poderíamos chamar de indigestão, mas os médicos lhe dão outro nome: dispepsia não ulcerosa. Isso significa que a pessoa apresenta episódios persistentes de incômodo estomacal, às vezes acompanhados de dor abdominal e náusea - frequentemente depois de comer, mas ninguém sabe a causa. Os indícios mais recentes atribuem os sintomas a um estômago extraordinariamente "sensível".\n' +
        '\n' +
        'A banana pode ajudar. Segundo um estudo realizado por pesquisadores indianos com 46 pacientes, esse antigo remédio popular para problemas gástricos alivia especificamente a dispepsia. Metade dos pacientes ingeriu cápsulas de banana em pó diariamente durante oito semanas. Dentre eles, 50% obteve alívio total, 25% obteve alívio parcial e 25% não obteve alívio algum. Por outro lado, apenas 20% do grupo que tomou cápsulas de placebo declarou estar melhor do estômago. A banana foi quatro vezes mais eficaz do que o placebo. "Assim, se seu estômago estiver incomodando, uma banana por dia pode mante-lo longe do médico!", afirma Ronald Hoffman, M.D., autor de Seven Weeks to a Seattle Stomach.\n' +
        '\n' +
        'Por outro lado, cuidado com o café, com ou sem cafeína. Segundo pesquisadores da Universidade de Michigan, o café pode causar dispepsia. O estudo que realizaram com 55 pessoas com o problema revelou que metade sofreu incômodo digestivo depois de ingerir pelo menos duas xícaras de café por dia. Até mesmo o café descafeinado causou indigestão. "Talvez seja o ácido do café", sugeriram os pesquisadores.'
    },
  },
  {
    id: 7,
    nome: 'OVO ÔMEGA 3 COM 10 UNIDADES - LABEL ROUGE',
    marca: 'LABEL ROUGE',
    categoria : 'outros',
    preco: 14.88,
    quantidade: 1,
    precoPromocional: 11.25,
    imagens: ['https://organomix.vteximg.com.br/arquivos/ids/29930-1000-1000/Ovos-Omega.jpg?v=636458257112500000', 'https://organomix.vteximg.com.br/arquivos/ids/29920-1000-1000/Ovo-Omega-3---Informacoes.jpg?v=636457370056200000'],
    icones: ['milk', 'gluten', 'sugar'],
    descricao: {
      titulo: 'Curiosidade',
      conteudo: 'As aves que produzem os Ovos Ômega 3 Label Rouge se alimentam de ração rica em óleo de linhaça, a linhaça tem grande concentração de ácido graxo poliinsaturado ômega 3, que é absorvido pelas aves e transferido para o ovo. O consumo de alimentos ricos em Ômega 3 é importante para a redução dos riscos de doenças cardiovasculares, além de diminuir o colesterol, regular a pressão arterial, é bom para a visão, para o cérebro, combate a depressão, alivia os sintomas da artrite reumatoide e muitos outros benefícios. Em outras palavras o Ovo Ômega 3 Label Rouge é tudo de bom, experimente.'
    },
    voceSabia: {
      titulo: 'Lorem ipsum',
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa deleniti, eaque eligendi est ipsum sed. Ab enim fugiat laudantium quaerat, quis reiciendis reprehenderit saepe suscipit voluptates. Dignissimos, nesciunt!\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa deleniti, eaque eligendi est ipsum sed. Ab enim fugiat laudantium quaerat, quis reiciendis reprehenderit saepe suscipit voluptates. Dignissimos, nesciunt!\n'
    },
  },
  {
    id: 8,
    nome: 'ABÓBORA PAULISTA ORGÂNICA 700G - SOLO VIVO',
    marca: 'SOLO VIVO',
    categoria : 'legumes',
    preco: 9.07,
    quantidade: 1,
    precoPromocional: 8.4,
    imagens: ['https://organomix.vteximg.com.br/arquivos/ids/22052-1000-1000/DSC06166.jpg?v=636047129142470000'],
    icones: ['milk', 'gluten', 'sugar', 'organic', 'vegetarian'],
    descricao: {
      titulo: 'Sobre a Marca',
      conteudo: 'A Solo Vivo é uma das principais produções orgânicas do mercado, certificada e dentro das normas estabelecidas pelo Ministério da Agricultura do Brasil. Uma marca que objetiva a produção de alimentos de qualidade, com foco na preservação do meio ambiente. Seu portfólio conta com frutas, legumes e verduras, orgânicos e frescos.'
    },
    voceSabia: {
      titulo: 'Lorem',
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa deleniti, eaque eligendi est ipsum sed. Ab enim fugiat laudantium quaerat, quis reiciendis reprehenderit saepe suscipit voluptates. Dignissimos, nesciunt!\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa deleniti, eaque eligendi est ipsum sed. Ab enim fugiat laudantium quaerat, quis reiciendis reprehenderit saepe suscipit voluptates. Dignissimos, nesciunt!\n'
    },
  },
  {
    id: 9,
    nome: 'CENOURA ORGÂNICA 600G - SOLO VIVO',
    marca: 'SOLO VIVO',
    categoria : 'legumes',
    preco: 10.73,
    quantidade: 1,
    precoPromocional: 9.40,
    imagens: ['https://organomix.vteximg.com.br/arquivos/ids/27856-1000-1000/cenoura.jpg?v=636362326283900000', 'https://organomix.vteximg.com.br/arquivos/ids/22041-1000-1000/DSC06156.jpg?v=636047116693200000'],
    icones: ['milk', 'gluten', 'sugar', 'organic', 'vegetarian'],
    descricao: {
      titulo: 'Sobre a marca',
      conteudo: 'A Solo Vivo é uma das principais produções orgânicas do mercado, certificada e dentro das normas estabelecidas pelo Ministério da Agricultura do Brasil. Uma marca que objetiva a produção de alimentos de qualidade, com foco na preservação do meio ambiente. Seu portfólio conta com frutas, legumes e verduras, orgânicos e frescos.'
    },
    voceSabia: {
      titulo: 'Cenoura controla o Colesterol e previne contra Derrames',
      conteudo: 'Segundo os cientistas do Centro de Pesquisas Regionais do Leste do Departamento Norte-Americano e Agricultura, Philip Pfeffer, Ph.D., e Peter Hoagland, Ph.D., a cenoura é uma grande aliada no controle dos níveis de colesterol, ajudando a aumentar o ?bom? e a diminuir o ?ruim?.\n' +
        '\n' +
        '\n' +
        'Calcula-se que, ingerindo algumas cenouras por dia, diminui-se de 10% a 20% o colesterol LDL. Depois que começou a consumir uma cenoura por dia, Dr. Pfeffer descobriu que o nível de colesterol em seu sangue baixou em 20%. Segundo um teste canadense, homens que consumiram duas cenouras cruas e meia por dia tiveram seus níveis de colesterol reduzidos, em média, em 11%. Já um estudo alemão indicou que a quantidade de beta caroteno presente em uma ou duas cenouras, se consumidas diariamente, pode aumentar significativamente os HDLs bons.\n' +
        '\n' +
        '\n' +
        'Alimentos ricos em beta caroteno ? conhecido também como vitamina A vegetal por se transformarem em vitamina A após ingeridas ? também ajudam na prevenção contra derrames. Essa atividade antiderramante está relacionada à propriedade antioxidante desses alimentos. Além da cenoura, o espinafre também é um bom exemplo.'
    },
  },
  {
    id: 10,
    nome: 'ALFACE CRESPA VERDE ORGÂNICA - ORGANOMIX',
    marca: 'ORGANOMIX',
    categoria : 'verduras',
    preco: 5.37,
    quantidade: 1,
    precoPromocional: 4.2,
    imagens: ['https://organomix.vteximg.com.br/arquivos/ids/27878-1000-1000/alface-crespa-lado.jpg?v=636362519511000000', 'https://organomix.vteximg.com.br/arquivos/ids/14549-1000-1000/DSC02903.jpg?v=635648775386000000'],
    icones: ['milk', 'gluten', 'sugar', 'organic', 'vegetarian'],
    descricao: {
      titulo: 'Sobre a marca',
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa deleniti, eaque eligendi est ipsum sed. Ab enim fugiat laudantium quaerat, quis reiciendis reprehenderit saepe suscipit voluptates. Dignissimos, nesciunt!\n'
    },
    voceSabia: {
      titulo: 'Lorem',
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa deleniti, eaque eligendi est ipsum sed. Ab enim fugiat laudantium quaerat, quis reiciendis reprehenderit saepe suscipit voluptates. Dignissimos, nesciunt!\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa deleniti, eaque eligendi est ipsum sed. Ab enim fugiat laudantium quaerat, quis reiciendis reprehenderit saepe suscipit voluptates. Dignissimos, nesciunt!\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa deleniti, eaque eligendi est ipsum sed. Ab enim fugiat laudantium quaerat, quis reiciendis reprehenderit saepe suscipit voluptates. Dignissimos, nesciunt!\n'
    },
  },
  {
    id: 11,
    nome: 'BERTALHA - ORGANOMIX',
    marca: 'ORGANOMIX',
    categoria : 'verduras',
    preco: 4.77,
    quantidade: 1,
    precoPromocional: 4.2,
    imagens: ['https://organomix.vteximg.com.br/arquivos/ids/31436-1000-1000/WhatsApp-Image-2018-03-15-at-15.36.jpg?v=636573975493330000'],
    icones: ['milk', 'gluten', 'sugar', 'organic', 'vegetarian'],
    descricao: {
      titulo: 'Sobre a marca',
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa deleniti, eaque eligendi est ipsum sed. Ab enim fugiat laudantium quaerat, quis reiciendis reprehenderit saepe suscipit voluptates. Dignissimos, nesciunt!\n'
    },
    voceSabia: {
      titulo: 'Lorem',
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa deleniti, eaque eligendi est ipsum sed. Ab enim fugiat laudantium quaerat, quis reiciendis reprehenderit saepe suscipit voluptates. Dignissimos, nesciunt!\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa deleniti, eaque eligendi est ipsum sed. Ab enim fugiat laudantium quaerat, quis reiciendis reprehenderit saepe suscipit voluptates. Dignissimos, nesciunt!\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa deleniti, eaque eligendi est ipsum sed. Ab enim fugiat laudantium quaerat, quis reiciendis reprehenderit saepe suscipit voluptates. Dignissimos, nesciunt!\n'
    },
  },
];
