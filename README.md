ATIVIDADE DE VERSIONAMENTO - SENAI - PROGRAMADOR FULL STACK

Esta atividade tem como objetivo simular as alterações realizadas no respositório por outro programador e listar os principais comandos utilzados para utilizar o git.

Comandos:

Geral
 git help

Setar usuário
git config --global user.name "seu nome"

Setar e-mail
git config --global user.email seu_nome@hotmail.com

Criar novo repositório
git init

Verificar estado dos arquivos/diretórios
git status

Adicionar arquivo/diretório (staged area)
git add meu_arquivo.txt

Adicionar todos os diretórios/arquivos
git add.

Comitar arquivo/diretório
git commit meu_arquivo.txt

Comitar com mensagem
git commit meu_arquivo.txt -m "minha mensagem"

Remover arquivo 
git rm meu_arquivo.txt

Remover diretório 
git rm -r diretorio

Visualizar histórico
git log

Exibir resumo do histórico (hash completa, autor, data, comentário e qtd de alterações)
git log --stat

Exibir os repositórios remotos 
git remote 
git remote -v

Vincular repositório local com o repositório remoto 
git remote add origin git@github.com:userexemple/repositorio-remoto.git

Exibir informações dos repositórios remotos 
git remote show origin

Renomear um repositório remoto 
git remote rm respositorio-remoto

Enviar arquivos/diretorios para o repositório remoto 
git push -u origin master (primeiro push)
git push (demais pushs)

Atualizar repositorio local de acordo com o repositório remoto
git pull

Clonar um repositorio já existente 
git clone git@github.com:userexemple/repositorio-remoto.git

Criar tag leve 
git tag vs-1.1

Criat tag anotada
git tag -a vs-1.1 -m "Versão 1.1"

Criar um novo branch
git branch bug-123

Trocando para uma branch existente
git checkout bug-123

Voltando para o branch principal 
git checkout master 



