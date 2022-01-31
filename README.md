# INFORMAÇÕES GERAIS DO PROJETO

- Projeto desenvolvido em ambiente Linux.
- Eventualmente, algumas definições e instalações devem se adequar ao ambiente de SO diferente.

## 1 - Configuração e instalações iniciais iniciais
<br>

### 1.1 - Extensões VS Code
- C# For Visual Studio Code By Microsoft
- C# IDE Extensions for VSCode
- .NET Core Tools
- NuGet Gallery
- Auto-Using for C#

<br><hr><br>

### 1.2 - Arquivo global.json
- O projeto foi estruturado para trabalhar com dotnet 5.0
- Listar as versões de dotnet instaladas
> dotnet --list-sdks

- Definir o global.json adequado ao dotnet 5.0
> dotnet new globaljson --sdk-version 5.0.404 

<br><hr><br>

### 1.3 - node, nvm, npm e angular
- O projeto utiliza node, npm e angular nas versões abaixo:
> Node: v14.18.3

> Npm: 6.14.15

> Angular: Versão 12

- Instalação do nvm conforme link
> https://letscodepare.com/blog/how-to-install-nvm-node-version-manager-on-linux

- Comandos nvm - Listar versões disponíveis no servidor remoto: 
> nvm ls-remote

- Comandos nvm - Instalar última versão estável: 
> nvm install stable

- Comandos nvm - Instalar versão específica: 
> nvm install v14.18.3

- Comandos nvm - Listar versões do node instaladas na máquina: 
> nvm list

- Comandos nvm - Definir a versão de node a ser utilizada: 
> nvm use v14.18.3

- Instalação do node
> sudo apt install nodejs

- Instalação do npm
> sudo apt install npm

- Instalação do angular
> npm install -g @angular/cli@12

- Apresentar versão dos programas instalados
> ng --version

<br><hr><br>

### 1.4 - Divisão do projeto
- O projeto tem as seções de Front e Back, cada uma com suas respectivas funções.
- Em Back/src/ foi criada a web API através do comando:
> dotnet new webapi -n ProEventos.API


<br><hr><br>

### 1.5 - Habilitação do https

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

<br><hr><br>

## 2 - Entity Framework
<br>

### 2.1 - Acessórios
- Verificação das ferramentas .NET instaladas
> dotnet tool list --global

<br><hr><br>

### 2.2 - Instalação do EF

- Instalação da última versão do Entity Framework
> dotnet tool install --global dotnet-ef

- Instalação de uma versão específica do Entity Framework. Como meu projeto é em .NET 5 instalei a versão 5.0.13
> dotnet tool install --global dotnet-ef --version 5.0.13

- Utilitário via CLI do Entity Framework
> dotnet-ef

- Instalação via NuGet Gallery:
- Pressione CTRL SHIFT P
- Digite:
> \>NuGet: Open NuGet Gallery

- No campo de busca digite:
> EntityFrameworkCore

- Clique nele e selecione a versão desejada, no meu caso, como o projeto está definido para .NET5, seleciono a última versão 5 (5.0.13).

- A referência abaixo será incluída no arquivo .csproj
> \<PackageReference Include="Microsoft.EntityFrameworkCore" Version="5.0.13" />

- Instalação das ferramentas EntityFrameworkCore.Tools e EntityFrameworkCore.Design EntityFrameworkCore.Sqlite utilizando a mesma lógica.

- Após a instalação das ferramentas o csproj ficará conforme abaixo:
> \<ItemGroup><br>
>     \<PackageReference Include="Microsoft.EntityFrameworkCore" Version="5.0.13" /><br>
>     \<PackageReference Include="Microsoft.EntityFrameworkCore.Design" Version="5.0.13"><br>
>       \<IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive\</IncludeAssets><br>
>       \<PrivateAssets>all\</PrivateAssets><br>
>     \</PackageReference><br>
>     \<PackageReference Include="Microsoft.EntityFrameworkCore.Sqlite" Version="5.0.13" /><br>
>     \<PackageReference Include="Microsoft.EntityFrameworkCore.Tools" Version="5.0.13"><br>
>       \<IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive\</IncludeAssets><br>
>       \<PrivateAssets>all\</PrivateAssets><br>
>     \</PackageReference><br>
>     \<PackageReference Include="Swashbuckle.AspNetCore" Version="5.6.3" /><br>
>   \</ItemGroup><br>

<br><hr><br>

### 2.3 - Iniciando as Migrations

- Acessar o diretório do projeto (/home/gilmar/Projetos/ProEventos/Back/src/ProEventos.API)
- Digitar o comando para iniciar as Migrations com o nome Initial (pode ser nome qualquer) e definindo a saída para o diretório Data/Migrations
> dotnet ef migrations add Initial -o Data/Migrations

- Iniciando o database
> dotnet ef database update

- Para gerenciamento do banco de dados SqLite pode-se utilizar o DB Browser for SQLite

<br><hr><br>

## 3 - Angular
<br>

### 3.1 - Extensão VS Code

- instalar extensão Angular essentials for VS Code.

<br><hr><br>

### 3.2 - Instalações no Angular

- Iniciar o projeto Angular

> ng new ProEventos.App

- Would you like to add Angular routing? *Yes*

- Which stylesheet format would you like to use? *SCSS*

<br><hr><br>

### 3.3 - Comandos do projeto

- Todos os comandos precisam ser dados dentro do diretório do projeto no caso:

> /home/gilmar/Projetos/ProEventos/Front/ProEventos-App

- O projeto utiliza alguns comandos padrão que são definidos no arquivo package.json "scripts"

- Os comandos podem ser dados com npm ou ng. Por exemplo para a opção start (ambos iniciariam o projeto) ficaria assim:

> npm start ou ng serve

<br><hr><br>

### 3.4 - Geração de componentes

- Os componentes no angular podem ser gerados pela CLI

- Para gerar um componente pode-se utilizar o comando completo ou o comando resumido.

- Geração do componente eventos com o comando completo

> ng generate component eventos

- Geração do componete palestrantes com o comando resumido

> ng g c palestrantes