// ═══════════════════════════════════════════════════════════
//  config.js  —  Configuration Firebase
//  ⚠️  Ajoute ce fichier dans ton .gitignore si ton dépôt
//      est public, pour ne pas exposer ta clé API.
//
//  .gitignore :
//      config.js
//
//  Récupère ces valeurs dans :
//  Console Firebase → Paramètres du projet → Vos applications
// ═══════════════════════════════════════════════════════════

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCA_-IXPsYSZjgAuaZTh0S7BlEVvdGvcsE",
  authDomain: "jdr-lancer-des.firebaseapp.com",
  databaseURL: "https://jdr-lancer-des-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jdr-lancer-des",
  storageBucket: "jdr-lancer-des.firebasestorage.app",
  messagingSenderId: "806397430349",
  appId: "1:806397430349:web:b9ca42182314a983a76a04"
};

// Mot de passe du Maître de Jeu
// Change cette valeur avant de déployer !
export const GM_PASSWORD = "maitre123";
