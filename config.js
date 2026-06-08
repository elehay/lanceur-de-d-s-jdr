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
  apiKey:            "VOTRE_API_KEY",
  authDomain:        "VOTRE_PROJECT.firebaseapp.com",
  databaseURL:       "https://VOTRE_PROJECT-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "VOTRE_PROJECT",
  storageBucket:     "VOTRE_PROJECT.appspot.com",
  messagingSenderId: "VOTRE_SENDER_ID",
  appId:             "VOTRE_APP_ID"
};

// Mot de passe du Maître de Jeu
// Change cette valeur avant de déployer !
export const GM_PASSWORD = "maitre123";
