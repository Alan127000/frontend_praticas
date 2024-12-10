// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyApsT0GkM2ytPBGjkMbCUO55i7jxsoIFDw",
  authDomain: "tcc-imagens.firebaseapp.com",
  projectId: "tcc-imagens",
  storageBucket: "gs://tcc-imagens.appspot.com",
  messagingSenderId: "134513757121",
  appId: "1:134513757121:web:005ebb8ed3df4927927d40"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const storage = getStorage(app)

export default storage