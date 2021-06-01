# Joinly Task Manager

## Getting Started
Petite application Angular qui gère une liste de tâches.

Lancer le projet :
```
docker-compose up
```
> Note :  
> - l'application n'est pas fonctionnelle à 100%  
> Plonger dans la piscine 'NgRx' n'a pas été évident comme vous allez le découvrir.  
>
> J'ai réparti mon travail en 2 sprint: 
> - Construction de l'api hier,
> - Construction du client aujourd'hui.
>    
> Je m'excuse pour les 2 gros commits, qui ne faciliteront pas le code review.
> Mes réponses aux questions se trouvent en bas du présent README.
>
> Si vous avez des questions n'hésitez pas.
## Consignes pour le front :

- Création du module Angular
- Implémentation de NgRx
- Actions disponibles à l'utilisateur :
  - Création d'une tâche : envoyer le nom de la tâche au back
  - Edition d'une tâche : envoyer l'ancien et le nouveau nom de la tâche au back
  - Suppression d'une tâche

## Consignes pour le back :

- Création d'une application NodeJs avec le framework Koa, SANS base de données :white_check_mark:
- Routes :
  - Création d'une tâche :white_check_mark:
    - [x] Renvoyer au front le nom de la tâche qui vient du front avec un uuid random
    - [x] Le nom de la tâche ne peut pas être null ou une string vide
  - Edition d'une tâche :white_check_mark:
    - [x] Renvoyer au front le nouveau nom de la tâche
    - [x] L'ancien et le nouveau nom ne peuvent pas être identiques
    - [x] L'ancien et le nouveau d'une tâche ne peuvent pas être null ou une string vide
  - Suppression d'une tâche :white_check_mark:
- Remplacez la sauvegarde en DB par un console.log de la tâche

> L'utilisateur n'a pas besoin de s'identifier pour utiliser l'application

## Deux questions supplémentaires:

- Selon toi, que manque-t-il à ton application pour qu'elle soit production ready ?
> Il manque pas mal de chose, puisque tout n'est pas fonctionnel... Mais dans l'ideal je dirais des tests, un système de log amélioré, une base de données, des variables d'environnements, ... tout ça afin de faciliter la CI/CD.

- Quelle roadmap proposerais-tu pour que ton application soit production ready ?
> Déja terminer les fonctionnalités principales...
> Ensuite ameliorer mon code pour qu'il ait une meilleur couverture de test, mettre des variables d'environnements pour l'api et le client et créer un fichier .yml pour la CI selon la plateforme choisie.