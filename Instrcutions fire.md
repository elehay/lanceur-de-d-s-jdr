# ⚔️ RPG Dice Roller — Guide de mise en place

## Structure des fichiers
```
index.html   → Page d'accueil / sélection du personnage
game.html    → Plateau de jeu
README.md    → Ce fichier
```

---

## 1. Configurer Firebase (pour le multijoueur)

Firebase est gratuit pour ce type d'usage.

1. Va sur [console.firebase.google.com](https://console.firebase.google.com)
2. **Crée un projet** (bouton "+")
3. Dans le projet → **"Ajouter une application"** → icône Web `</>`
4. Copie ta **firebaseConfig** (apiKey, databaseURL, etc.)
5. Dans le menu gauche → **"Realtime Database"** → Créer une base
   - Choisis une région (ex: `europe-west1`)
   - Mode : **"Démarrer en mode test"** (OK pour commencer)
6. Ouvre `game.html` et remplace le bloc `firebaseConfig` avec tes valeurs

```js
const firebaseConfig = {
  apiKey:            "TA_CLE_API",
  authDomain:        "TON_PROJET.firebaseapp.com",
  databaseURL:       "https://TON_PROJET-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "TON_PROJET",
  storageBucket:     "TON_PROJET.appspot.com",
  messagingSenderId: "TON_SENDER_ID",
  appId:             "TON_APP_ID"
};
```

Sans Firebase, le site fonctionne en **mode démo local** (dés visibles uniquement par soi-même).

---

## 2. Personnaliser les personnages

Dans `index.html`, modifie le tableau `CHARACTERS` :

```js
const CHARACTERS = [
  {
    id: "thorin",               // identifiant unique (pas d'espaces)
    name: "Thorin Martelofer",  // nom affiché
    class: "Guerrier Nain",     // classe affichée
    color: "#c94a4a",           // couleur du pion sur le plateau
    avatar: "⚒️",               // emoji du pion
    stats: {
      force: 18,
      agilite: 8,
      perception: 10,
      dexterite: 9,
      charisme: 11,
      intelligence: 10,
      sagesse: 12,
      chance: 8
    }
  },
  // ... autres personnages
];
```

---

## 3. Ajouter une image de plateau

**Option A — Fichier local :**
Place ton image `map.jpg` dans le même dossier que les fichiers HTML.
Dans `game.html`, change la ligne :
```html
<img id="boardImg" src="map.jpg" alt="plateau">
```

**Option B — URL externe :**
```html
<img id="boardImg" src="https://exemple.com/ma-carte.jpg" alt="plateau">
```

**Option C — Le MJ change l'image en temps réel via Firebase :**
Dans la console Firebase → Realtime Database, ajoute manuellement :
```
session/
  boardImage: "https://url-de-ton-image.jpg"
```
Tous les joueurs connectés verront l'image changer instantanément.

---

## 4. Ajuster les positions de départ des pions

Dans `game.html`, modifie `PION_POSITIONS` (valeurs en % du plateau) :

```js
const PION_POSITIONS = {
  thorin:  { x: 30, y: 50 },   // 30% depuis la gauche, 50% depuis le haut
  elawyn:  { x: 50, y: 30 },
  mira:    { x: 70, y: 60 },
  balgar:  { x: 40, y: 70 },
};
```

---

## 5. Déployer sur GitHub Pages

1. Crée un dépôt GitHub (ex: `mon-jdr`)
2. Upload les 3 fichiers (`index.html`, `game.html`, `README.md`)
3. Settings → Pages → Branch `main` → Save
4. Ton site : `https://TON_PSEUDO.github.io/mon-jdr/`

---

## Fonctionnalités actuelles

- ✅ Page d'accueil avec sélection personnage + aperçu des stats
- ✅ 8 stats colorées avec boutons D20 dans le HUD
- ✅ Dés animés sur le plateau (roll animation)
- ✅ Critiques (20) et fumbles (1) avec effets visuels
- ✅ Badge propriétaire sur chaque dé
- ✅ Pions déplaçables (drag & drop) pour son propre personnage
- ✅ Synchronisation temps réel via Firebase (dés + pions)
- ✅ Image de plateau partagée changeable par le MJ
- ✅ Mode démo local si Firebase non configuré

## Prochaines étapes possibles
- [ ] Drag & drop des pions avec grille magnétique
- [ ] Historique des lancers partagé
- [ ] Panneau MJ pour changer l'image à la volée
- [ ] Effets sonores
- [ ] Initiative / ordre de tour
