Utilizado para hospedagem da api na cloud a ferramenta AWS (Amazon Web Services). Optado pela ferramenta pois providencia inúmeras ferramentas disponíveis para facilitar o uso, além de ter um período gratuito muito completo de 12 meses. 

A api, contruída em NodeJs, está disponibilizada em uma máquina virtual da AWS, chamada EC2. Para envio do código, foi feita uma conexão SSH entre o computador e a instância, permitindo enviar os arquivos do projeto imediatamente, para que sejam executados. Para a execução, é necessário instalar as dependências do npm e iniciar o projeto. A inicialização do projeto foi feita com uma biblioteca chamada pm2, que consegue executar N aplicações em background, eleminando a necessidade de manter a conexão SSH aberta para o servidor ser executado.

A instância utilizada é uma t2.micro, que conta com 1GB de memória RAM e um VCPU; configuraçaõ suficiente para a execução do servidor. Cada instância criada possui um DNS proprio, quie será utilizado para as requisições. Cada DNS é composto pelo IP da maquian juntamente com a configuração de subdominio da aws, *.amazonaws.com

Após todas essas configurações, é necessário pemitir que o mundo externo (internet) possa consumir nossa aplicação. Para que isso seja possível, é necessário configurar um grupo de segurança e permitir trafego http padrão na porta 8080, onde está sendo execuado o servidor.

Após liberada a conexão atavés do grupo de segurança, a api está pronta para ser consumida.
