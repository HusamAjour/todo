import admin from "firebase-admin";

const config = {
  type: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_TYPE,
  project_id: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PROJECT_ID,
  private_key_id: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY_ID,
  private_key: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY,
  client_email: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_CLIENT_EMAIL,
  client_id: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_CLIENT_ID,
  auth_uri: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_AUTH_URI,
  token_uri: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_TOKEN_URI,
  auth_provider_x509_cert_url:
    process.env.NEXT_PUBLIC_FIREBASE_ADMIN_AUTH_PROVIDER_x509_CERT_URL,
  client_x509_cert_url:
    process.env.NEXT_PUBLIC_FIREBASE_ADMIN_CLIENT_x509_CERT_URL,
};
// if (admin.apps.length === 0) {
//   admin.initializeApp({ credential: admin.credential.cert(config) });
// }
admin.initializeApp({ credential: admin.credential.cert(config) });

// export default admin;

const auth = admin.auth();
const db = admin.firestore();

export { auth, db };
