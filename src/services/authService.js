import Firebase from '../infraestructure/plugins/firebase'

export default class AuthService {
    authContext = null
    constructor() {
        this.authContext = Firebase.auth()
    }

    singIn = (email, pass) => {
        return this.authContext.signInWithEmailAndPassword(email, pass)
    }
    signUp = (email, pass) => {
        return this.authContext.createUserWithEmailAndPassword(email, pass)
    }

    singOut = () => {
        return this.authContext.signOut()
    }

    currentUser = () => {
        return this.authContext.currentUser
    }
}