import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBFULzAQDIMDq6E2G4RmhQcyD1S1eTPmWg",
    authDomain: "clothing-website-ad4a6.firebaseapp.com",
    databaseURL: "https://clothing-website-ad4a6.firebaseio.com",
    projectId: "clothing-website-ad4a6",
    storageBucket: "clothing-website-ad4a6.appspot.com",
    messagingSenderId: "356614758956",
    appId: "1:356614758956:web:9872982bd052d0e42f6789",
    measurementId: "G-JEFCB73TE9"
  };

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const{displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    }catch (error) {
      console.log('error creating user', error.message)

    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) =>{
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectToAdd.forEach(obj =>{
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections)=>{
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();

    return{
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumlator,collection)=>{
    accumlator[collection.title.toLowerCase()] = collection;
    return accumlator;
  }, {});
};

export const getCurrentUser =() =>{
  return new Promise((resolve,reject)=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      unsubscribe();
      resolve(userAuth);
    },reject)
  })
}

export const auth = firebase.auth(); 
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;