# API de Gestion des Recettes

Cette API permet de gérer des recettes de cuisine, incluant la création, la lecture, la mise à jour et la suppression des recettes (opérations CRUD). L'API utilise une base de données MySQL pour stocker les recettes, et inclut des validations des données grâce à express-validator.

## Prérequis

- Node.js (version 14+ recommandée)
- MySQL (version 5.7+)
- Postman (pour les tester de l'API)

# Installation

1. Cloner le projet :

```bash
git https://github.com/Mamoudou12/Brief_API_gestion_recette.git
```

```bash
cd Brief_API_gestion_recette
```

2. Installer les dépendances :

```bash
npm install
```

3. Configurer la base de données :

- Créer un fichier .env à la racine de votre projet
- copier les informations qui se trouvent dans le fichier .env.example puis utiliser les dans votre fichier .env
- Mettre à jour les informations de connexion à la base de données (hôte, utilisateur, mot de passe, nom de la base de données).

4. Importer via la ligne de commande le script sql :

```bash
mysql -u [nom_utilisateur] -p [nom_base_de_donnees] < [chemin/vers/script.sql]
```

5. Démarrer le serveur :

```bash
npm start
```

## Endpoints de l'API

1. Récupérer toutes les recettes

- URL : /recipes
- Méthode : GET
- Description : Renvoie la liste de toutes les recettes.
- Exemple de réponse :

```bash
[
  {
    "id": 1,
    "title": "Lasagnes",
    "ingredients": "Pâtes, Sauce tomate, Viande hachée",
    "id_categorie": 2,
    "type": "plat"
  },
  {
    "id": 2,
    "title": "Tarte aux pommes",
    "ingredients": "Pommes, Pâte brisée, Sucre",
    "id_categorie": 3,
    "type": "dessert"
  }
]
```

2. Récupérer une recette par ID

- URL : /recipes/:id
- Méthode : GET
- Paramètres : id (Requis, entier)
- Description : Renvoie une recette spécifique par son ID.
- Exemple de réponse :

```bash
{
 "id": 1,
 "title": "Lasagnes",
 "ingredients": "Pâtes, Sauce tomate, Viande hachée",
 "id_categorie": 2,
 "type": "plat"
}
```

3. Créer une nouvelle recette

- URL : /recipes
- Méthode : POST
- Corps :
  ```bash
  {
  "title": "Titre de la recette",
  "ingredients": "Liste des ingrédients",
  "id_categorie": 1,
  "type": "plat"
  }
  ```

````
- Exemple de réponse :

```bash
{
  "message": "Recipe successfully created!",
  "id": 3,
  "title": "Quiche Lorraine",
  "ingredients": "Pâte brisée, Lardons, Crème fraîche",
  "id_categorie": 1,
  "type": "plat"
}
````

4.  Mettre à jour une recette

- URL : /recipes/:id
- Méthode : PUT
- Paramètres : id (Requis, entier)
- Corps : Corps (facultatif, mettre à jour les champs souhaités) :

```bash
{
  "title": "Titre mis à jour",
  "ingredients": "Ingrédients mis à jour",
  "id_categorie": 2,
  "type": "dessert"
}
```

- Exemple de réponse :

{
"message": "Recipe updated successfully"
}

5. Supprimer une recette

- URL : /recipes/:id
- Méthode : DELETE
- Paramètres : id (Requis, entier)
- Description : Supprime une recette spécifique par son ID.
- Exemple de réponse :

{
"message": "Recipe deleted successfully"
}

6. Récupérer toutes les catégories

- URL : /categories
- Méthode : GET
- Description : Renvoie la liste de toutes les catégories de recettes.
- Exemple de réponse :

```bash
[
  {
    "id": 1,
    "title": "Entrées"
  },
  {
    "id": 2,
    "title": "Plats principaux"
  }
]
```

7. Créer une nouvelle catégorie

- URL : /categories
- Méthode : POST
- Corps :

```bash
{
  "title": "Titre de la catégorie"
}
```

- Exemple de réponse :

```bash
{
  "message": "Category successfully created!",
  "id": 4,
  "title": "Desserts"
}
```

8. Supprimer une catégorie

- URL : /categories/:id
- Méthode : DELETE
- Paramètres : id (Requis, entier)
- Exemple de réponse :

```bash
{
  "message": "Category deleted successfully"
}
```

### Codes de Statut HTTP

- 200 OK : La requête a été traitée avec succès.
- 201 Created : Une nouvelle ressource a été créée.
- 400 Bad Request : Les données fournies ne sont pas valides.
- 404 Not Found : La ressource demandée n'a pas été trouvée.
- 500 Internal Server Error : Une erreur serveur est survenue.

## Lancer l'application

```bash
npm start
```

## Tests unitaires

Des tests unitaires sont proposé pour vérifier le bon fonctionnement des fonctionnalités CRUD.

- Framework utilisé : Jasmine
- Executer les tests:

```bash
npm test
```

## Analyse et formatage du code

Pour l'analyse statique du code j'ai utillisé ESLint et Prettier pour le formatage. Ces outils sont configurés pour maintenir un code propre et cohérent.

Pour l'analyse du code Executer les commandes suivants:

- Recherche des erreur:

```bash
npm run lint
```

- Fixer les erreurs corrigeable par ESLint:

```bash
npm run lint:fix
```

- formatage du code:

```bash
npm run format
```

## Collection Postman

Pour vous faciliter le tester des différents endpoints de l'API, vous pouvez utiliser les collections Postman incluse dans ce projet. Elles contiennent toutes les requêtes configurées pour interagir avec l'API.

- Importer les deux collections (collection_category et collection_recette) dans postman pour éfectuer les tests

# Auteur

[Mamoudou Adama Ba ](https://github.com/Mamoudou12)
