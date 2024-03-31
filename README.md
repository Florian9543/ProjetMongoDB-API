# Dossier contenant le Projet MongoDB-API

## Université Clermont Auvergne - Campus Le Puy-en-Velay
 
 BUT Informatique - 2ème Année
 
 Ressource R4.03 - Développement Web

Pour le lancement, il faut installer les node-modules ainsi que mongoose, puis exécuter la commande npm run dev.

Les fonctionnalités suivantes ont pu être implémentées : 

## Récupération des challenges :  

- Récupération d'un challenge aléatoire : /challenges
- Récupération de multiples challenges aléatoires : /challenges/multiple/:nb --> exemple : challenges/multiple/5

## Opération authentifiées  : 

- Login de l'utilisateur (ajout d'un token) : /auth/login/:email/:motdepasse --> Par défaut : /auth/login/test@gmail.com/password

### Pour les actions suivantes, il faut être authentifié pour les réaliser.
- Création d'un nouveau challenge : challenges/create/:titre/:description --> exemple : challenges/create/testTitre/testDescription
- Mise à jour d'un challenge : challenges/update/:ancientitre/:nouveautitre/:nouvelledescription --> exemple : challenges/update/titre/nouveautitre/nouvelleDescription
- Suppression d'un challenge : challenges/delete/:titre --> exemple : challenges/delete/nouveautitre


## © IMBAUD Florian - LAROSSE Olivier
