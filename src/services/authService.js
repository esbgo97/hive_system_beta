import Firebase from '../infraestructure/plugins/firebase'

export default class AuthService {
    authContext = null
    constructor() {
        this.authContext = Firebase.auth()
    }

    singIn = (email, pass) => {
        return this.authContext.signInWithEmailAndPassword(email, pass)
    }

    singOut = () => {
        return this.authContext.singOut()
    }

    currentUser = () => {
        return this.authContext.currentUser
    }
}