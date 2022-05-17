import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from   'react-firebase-hooks/firestore';
import { Firestore } from 'firebase/firestore';


firebase.initializeApp({
  apiKey: "AIzaSyBB_sw17rCk8KooUPU7LxjmreTJy_wrGtI",
  authDomain: "superchat-3884b.firebaseapp.com",
  projectId: "superchat-3884b",
  storageBucket: "superchat-3884b.appspot.com",
  messagingSenderId: "425359077240",
  appId: "1:425359077240:web:0942af2a28785b6da6628d",
  measurementId: "G-1SCN8ZFS8P"

})

const auth = firebase.auth();
const firebase = firebase.firebase();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header >

      </header> 

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}


function SignIn(){
  const SignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);

  }

  return (
    <button onClick={SignInWithGoogle }>Sign in with Google</button>

  )

}

function SignOut(){
  return auth.currentUser && (

    <button onClick={() => auth.SignOut()}> Sign Out </button>
  )

}

function ChatRoom(){

    const messagesRef = Firestore.Collection('message');
    const query = messagesRef.orderby('createAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});
    
    return(
    <>
      <div>
        {messages && messages.map(msg => <ChatMessage key = {mgs.id} message={msg} />)}
      </div>

      <div>

      </div>

   </>
    )
}

function ChatMessage(props){

  return <p>{text}</p>
}



export default App;
