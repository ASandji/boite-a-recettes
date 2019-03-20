import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDJW_5abwKNDv58ynG2Vras-pmRbXo_1so",
    authDomain: "recettes-box-92911.firebaseapp.com",
    databaseURL: "https://recettes-box-92911.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
