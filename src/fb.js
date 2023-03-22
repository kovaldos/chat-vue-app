import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

console.log(firebase);

const firebaseConfig = {
	apiKey: "AIzaSyBOf4mx9wxj9-XA1xKXbG0LFy2FCrvW0TU",
	authDomain: "chat-vue-app-6586b.firebaseapp.com",
	projectId: "chat-vue-app-6586b",
	storageBucket: "chat-vue-app-6586b.appspot.com",
	messagingSenderId: "765406290574",
	appId: "1:765406290574:web:8b6fda7394ff75c3809fdf"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()
