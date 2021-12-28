import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyAPI ,{ LOGIN_URL } from "../../../utils/spotify";


async function refreshAcessToken(token){
    try {
        
        spotifyAPI.setAccessToken(token.accessToken);
        spotifyAPI.setRefreshToken(token.refreshToken);

        const {body,refreshedToken }=await spotifyAPI.refreshAccessToken();

        console.log("refreshedtoken "+refreshToken);

        return{
            ...token,
            accessToken:refreshedToken.access_token,
            accessTokenExpires:Date.now + refreshedToken.expires_in *1000,
            refreshToken:refreshedToken.refresh_token ?? token.refreshToken,
        }

    } catch (error) {
        console.log(error);
        return {
            ...token,
            error:"RefreshTokenError"
        }
    }
}

export default NextAuth({

    providers:[
        SpotifyProvider({
        clientId:process.env.NEXT_PUBLIC_CLIENT_ID,
        clientSecret:process.env.NEXT_PUBLIC_CLIENT_SECRET,
        authorization:LOGIN_URL
        })
    ],
    secret:process.env.JWT_SECRET,
    pages:{
        signIn:'/login',
    },
    callbacks:{
        async jwt({token,account,user}){
            //initial sign
            if(account && user){
                return{
                    ...token,
                    username:account.providerAccountId,
                    accessToken:account.access_token,
                    refreshToken:account.refresh_token,
                    // accessing expire in milliseconds
                    accessTokenExpires:account.expires_at * 1000

                }
            }
            // if the token doesnt expires yet
            if(Date.now() < token.accessTokenExpires){
                console.log("ACESS TOKEN VALID EXISTING");
                return token;
            }

            //if the access token expires,we ned to refresh it
            console.log("ACCESS TOKEN EXPIRES REFRESHIG IT");
            return await refreshAcessToken(token);
        },
        async session({session,token}){
            session.user.accessToken=token.accessToken;
            session.user.refreshAccessToken=token.refreshToken;
            session.user.username=token.username;

            return session;
        },
    },
})