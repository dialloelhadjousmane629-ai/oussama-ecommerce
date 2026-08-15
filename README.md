# Oussama — Boutique en ligne

Site vitrine statique pour Oussama, une boutique en ligne proposant de la mode, de l'électronique, des articles pour la maison et des accessoires.

## Aperçu

Le site comprend quatre pages :

- [`index.html`](index.html) — Accueil : présentation, catégories et produits populaires
- [`produits.html`](produits.html) — Catalogue complet des produits
- [`apropos.html`](apropos.html) — Histoire et valeurs de la boutique
- [`contact.html`](contact.html) — Formulaire de contact et coordonnées

## Structure du projet

```
.
├── index.html
├── produits.html
├── apropos.html
├── contact.html
├── css/
│   └── style.css
└── js/
    ├── script.js
    └── emailjs-config.js
```

## Démarrer en local

Aucune dépendance ni build n'est nécessaire : ouvrez simplement [`index.html`](index.html) dans un navigateur, ou servez le dossier avec un petit serveur HTTP, par exemple :

```bash
npx serve .
```

## Technologies

- HTML5 / CSS3
- JavaScript vanilla
- [EmailJS](https://www.emailjs.com/) pour l'envoi du formulaire de contact
