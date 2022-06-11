var Currículo = React.createClass({
  render: function() {
    return (
      <div>
        {/*Metadados*/}
        <meta charSet="UTF-8" />
        <meta name="author" content="Desenvolvido por Maria Clara" />
        <meta name="description" content="Venham e conheçam um pouco sobre minha carreira e experiência. Currículo Vitae de Maria Clara Cardoso, apresentando seus projetos e aplicações na área de informática." />
        <meta name="keywords" content="cv, curriculo, vitae, informatica, web designer, desenvolvedor, maria clara" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/*Links*/}
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="css/fontes.css" />
        <link rel="stylesheet" href="css/larguras.css" />
        <link rel="shortout icon" href="img/icon.png" />
        {/*Título da Página*/}
        <title>Currículo Vitae | Maria Clara Cardoso</title>
        {/*Container da Página*/}
        <div className="w3-content w3-margin-top">
          {/*Grid da Página*/}
          <div className="w3-row-padding">
            {/*Coluna da Esquerda*/}
            <div className="w3-third">
              {/*Bloco da esquerda*/}
              <div className="w3-content w3-card w3-white w3-margin-bottom">
                {/*Bloco da Esquerda*/}
                <div className="w3-white text-gray w3-grid-4">
                  {/*Display da Imagem*/}
                  <div className="w3-display-container">
                    {/*Imagem do Perfil*/}
                    <img src="img/perfil.jpeg" alt="Maria Clara Cardoso" className="larg-img-perfil" />
                    {/*Nome Perfil*/}
                    <div className="w3-display-bottomleft w3-container w3-text-white">
                      <h3>Maria Clara Cardoso</h3>
                    </div>
                  </div>
                  {/*Conteúdo à esquerda*/}
                  <div className="w3-container">
                    {/*Profisão ou estado de formação*/}
                    <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />Mecânica de Manutenção</p>
                    {/*Residência*/}
                    <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />Itu-SP, Brasil</p>
                    {/*Endereço de E-mail*/}
                    <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />mariaclaracardoso@gmail.com</p>
                    {/*Telefone*/}
                    <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />(11)95521-6685</p>
                    <hr />
                    {/*Subtítulo e Habilidades*/}
                    <p className="w3-large">
                      <b className="w3-text-grey"><i className="fa fa-asterisk fa-fw w3-margin-right w3-large w3-text-teal" />Habilidades</b>
                    </p>
                    {/*1ª Habilidade*/}
                    <p>Adobe Photoshop</p>
                    {/*Barrinha cinza*/}
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      {/*Barrinha verde*/}
                      <div className="w3-container w3-center w3-round-xlarge w3-teal primeira-habilidade">90%</div>
                    </div>
                    {/*2ª Habilidade*/}
                    <p>Adobe Illustrator</p>
                    {/*Barrinha cinza*/}
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      {/*Barrinha verde*/}
                      <div className="w3-container w3-center w3-round-xlarge w3-teal segunda-habilidade">85%</div>
                    </div>
                    {/*3ª Habilidade*/}
                    <p>Adobe Premier</p>
                    {/*Barrinha cinza*/}
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      {/*Barrinha verde*/}
                      <div className="w3-container w3-center w3-round-xlarge w3-teal terceira-habilidade">70%</div>
                    </div>
                    {/*4ª Habilidade*/}
                    <p>HTML e CSS</p>
                    {/*Barrinha cinza*/}
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      {/*Barrinha verde*/}
                      <div className="w3-container w3-center w3-round-xlarge w3-teal quarta-habilidade">100%</div>
                    </div>
                    {/*Idiomas*/}
                    <p className="w3 large">
                      <b className="w3-text-grey"><i className="fa fa-asterisk fa-fw w3-margin-right w3-large w3-text-teal" />Idiomas</b>
                    </p>
                    {/*1º idioma*/}
                    <p>Inglês</p>
                    {/*Barrinha cinza*/}
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      {/*Barrinha verde*/}
                      <div className="w3-container w3-center w3-round-xlarge w3-teal primeiro-idioma">95%</div>
                    </div>
                    {/*2º idioma*/}
                    <p>Espanhol</p>
                    {/*Barrinha cinza*/}
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      {/*Barrinha verde*/}
                      <div className="w3-container w3-center w3-round-xlarge w3-teal segundo-idioma">85%</div>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
              <br />
            </div>
            {/*Coluna da direita*/}
            <div className="w3-twothird">
              {/*Bloco da experiência*/}
              <div className="w3-content w3-card w3-white w3-margin-bottom">
                {/*Experiências*/}
                <h2 className="w3-container w3-text-grey w3-padding-16">
                  {/*Ícone experiência*/}
                  <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                  Experiências
                </h2>
                {/*Container das experiências*/}
                <div className="w3-container">
                  <h5 className="w3-text-grey"><b>Mecânica de manuntenção | Porcher do Brasil</b></h5>
                  <h6>
                    <i className="fa fa-calendar fa-fw w3-text-teal" />Jan-2022
                    {/*Box verde*/}
                    <span className="w3-round w3-tag w3-teal">   Atualmente</span>
                  </h6>
                  {/*Descrição da Experiência*/}
                  <p>Responsável por realizar a manutenção em componentes, equipamentos e máquinas industriais para a indústria. Possuo conhecimento sobre lubrificação de máquinas, interpretação de desenhos técnicos, torneamento de peças; manuntenções preditivas, preventinas e corretivas; Alinhamento de eixos; Dispositivos para movimentação de carga; Bombas; Redutores; Compressores; Turbinas; Recuperação de roscas; Recuperação de eixos; Mancais de rolamentos; Rasqueteamento; Conservação de superfície; Soldagem de peças; Normas de saúde e segurança no trabalho e de meio ambiente.</p>
                  <h5 className="w3-text-grey"><b>Administradora | ProDevs</b></h5>
                  <h6>
                    <i className="fa fa-calendar fa-fw w3-text-teal" />Nov-2019
                    {/*Box verde*/}
                    <span className="w3-round w3-tag w3-teal">   Dez/2021</span>
                  </h6>
                  {/*Descrição da Experiência*/}
                  <p>Responsável pela tomada de decisão e condução de estratégias no meio corporativo, ações de planejamento, organização e execução nas mais variadas áreas do negócio, incluindo a gestão de recursos financeiros, tecnológicos, humanos e materiais.</p>
                  <h5 className="w3-text-grey"><b>Web Designer | Marias de Noca</b></h5>
                  <h6>
                    <i className="fa fa-calendar fa-fw w3-text-teal" />Jun-2018
                    {/*Box verde*/}
                    <span className="w3-round w3-tag w3-teal">   Out/2019</span>
                  </h6>
                  {/*Descrição da Experiência*/}
                  <p>Projeto sites, blogs, sistemas, aplicativos para web e peças digitais como banners e artes para redes sociais. Posto constantemente e atendia clientes pelos meios de comunicação Whatsapp Business, Instagram e Facebook.</p>
                </div>
              </div>
              {/*Bloco Educação*/}
              <div className="w3-content w3-card w3-white w3-magin-bottom">
                {/*Educação*/}
                <h2 className="w3-container w3-text-grey w3-padding-16">
                  {/*Ícone Educação*/}
                  <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                  Educação
                </h2>
                {/*Container de Educação*/}
                <div className="w3-container">
                  {/*Descrição da Formação*/}
                  <h5 className="w3-opacity"><b>Mecânica de Manutenção | Senai</b></h5>
                  {/*Data da Formação*/}
                  <h6 className="w3-text-teal">
                    <i className="fa fa-calendar fa-fw w3-margin-bottom" />
                    2022 - Atualmente</h6>
                  {/*Resumo da Formação*/}
                  <p>Comunicação Oral e Escrita; Cálculos aplicados à Manutenção; Desenho Técnico; Fundamentos da Automação Aplicados à Manutenção; Fundamentos da Manutenção; Usinagem Aplicada à Manutenção; Técnicas de Intervenção da Manutenção; Soldagem Aplicada a Manutenção; Técnicas de Lubrificação; Inspeção e Comissionamento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});