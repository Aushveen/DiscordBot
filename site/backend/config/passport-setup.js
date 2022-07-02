const passport = require("passport");
var DiscrodStrategy = require("passport-discord").Strategy;
const { clientId, clientSecret} = require("../../../config.json");

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.use(
    new DiscrodStrategy({
        clientID: clientId,
        clientSecret: clientSecret,
        callbackURL: 'http://localhost:4000/auth/discord/callback',
        scope: ["bot", "identify"]
    },
    async (accessToken, refreshToken, profile, done) => {
        done(null, profile);
    })
)