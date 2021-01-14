import passport from "passport";

passport.use(new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
    session: false
}, (username,password,done) =>{
    
}));