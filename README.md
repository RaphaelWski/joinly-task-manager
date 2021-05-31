# Joinly Task Manager

## Getting Started
Le but est de créer une petite application Angular qui gère une liste de tâches.

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
> conteneurisé l'app, systeme de log et monitoring, variable d'environnement, test, ...
- Quelle roadmap proposerais-tu pour que ton application soit production ready ?
> ...

Prends le temps qu'il te faut (max 24h) pour nous renvoyer le test que tu mettras sur un repo en ligne.
Envoie-nous le lien quand tu as terminé.