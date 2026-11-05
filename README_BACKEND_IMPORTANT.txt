MES PRODUITS - CONFIGURATION API

L'application Angular est maintenant adaptée à une API de PRODUITS (et non plus de Sports).

URL de base configurée :
  http://localhost:8090/produits/api

D'après les informations disponibles sur la base, les champs Produit sont :
  idProduit, dateCreation, nomProduit, prixProduit, categorie

La colonne categorie_id_cat indique que le produit est lié à une catégorie.
Le formulaire envoie donc la catégorie sous la forme :
  "categorie": { "idCat": 1 }

IMPORTANT :
- Le nom exact de la propriété de relation (categorie) et de l'identifiant (idCat)
  dépend du code Java de votre API. Si votre API utilise un autre nom, il faudra
  adapter ce champ.
- Les routes GET/POST utilisent /produits/api.
- Les routes GET/PUT/DELETE d'un produit utilisent /produits/api/{id}.
  Vérifiez ces routes dans le contrôleur si votre API est configurée différemment.
- L'API doit autoriser CORS depuis l'adresse du serveur Angular.

Démarrer l'API :
  java -jar api_rest_produits.jar --server.port=8090

Démarrer Angular :
  npm install
  npm start

Ouvrir :
  http://localhost:4200
