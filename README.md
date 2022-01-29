# INFORMAÇÕES GERAIS DO PROJETO

- Projeto desenvolvido em ambiente Linux.
- Eventualmente, algumas definições e instalações devem se adequar ao ambiente de SO diferente.

## 1 - Configuração e instalações iniciais iniciais
<br>

### 1.1 - Arquivo global.json
- O projeto foi estruturado para trabalhar com dotnet 5.0
- Listar as versões de dotnet instaladas
> dotnet --list-sdks

- Definir o global.json adequado ao dotnet 5.0
> dotnet new globaljson --sdk-version 5.0.404 

<br><hr><br>

### 1.2 - node, npm e angular
- O projeto utiliza node, npm e angular nas versões abaixo:
> Node: v16.13.2

> Npm: 8.4.0

> Angular: Versão 12

- Instalação do node
> sudo apt install nodejs

- Instalação do npm
> sudo apt install npm

- Instalação do angular
> npm install -g @angular/cli@12

<br><hr><br>

### 1.3 - Divisão do projeto
- O projeto tem as seções de Front e Back, cada uma com suas respectivas funções.
- Em Back/src/ foi criada a web API através do comando:
> dotnet new webapi -n ProEventos.API


<br><hr><br>

### 1.4 - Habilitação do https

- Habilitar https
> dotnet dev-certs https --trust

- Em Linux, em caso de falha na identificação do certificado https executar as instruções abaixo contidas em:
> https://docs.microsoft.com/pt-br/aspnet/core/security/enforcing-ssl?view=aspnetcore-6.0&tabs=visual-studio#ssl-linux


- Execução dos comandos abaixo para gerar certificado confiável:
> dotnet dev-certs https 

> sudo -E dotnet dev-certs https -ep /usr/local/share/ca-certificates/aspnet/https.crt --format PEM 

> cat <<EOF | sudo tee /usr/lib/firefox/distribution/policies.json
> {
>     "policies": {
>         "Certificates": {
>             "Install": [
>                 "/usr/local/share/ca-certificates/aspnet/https.crt"
>             ]
>         }
>     }
> }
> EOF

- No Firefox
* Configurar a confiança do certificado HTTPS usando o navegador Firefox

> Insira about:config no navegador FireFox.

>   Selecione Aceitar o Risco e Continuar se você aceitar o risco.

>   Selecione Mostrar Tudo

>   Definir security.enterprise_roots.enabled = true

>   Sair e reiniciar o Firefox

