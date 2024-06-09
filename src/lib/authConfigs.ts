import { AuthOptions } from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import DiscordProvider from 'next-auth/providers/discord'
import prisma from "./database"

const googleClientId = process.env.GOOGLE_CLIENT_ID
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET

const discordClientId = process.env.DISCORD_CLIENT_ID
const discordClientSecret = process.env.DISCORD_CLIENT_SECRET

if (!googleClientId) throw new Error('Missing GOOGLE_CLIENT_ID')
if (!googleClientSecret) throw new Error('Missing GOOGLE_CLIENT_SECRET')

if (!discordClientId) throw new Error('Missing DISCORD_CLIENT_ID')
if (!discordClientSecret) throw new Error('Missing DISCORD_CLIENT_SECRET')

const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: googleClientId,
            clientSecret: googleClientSecret,
        }),
        DiscordProvider({
            clientId: discordClientId,
            clientSecret: discordClientSecret,
        }),
    ],
    session: { strategy: 'jwt' },
    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                try {
                    await prisma.user.upsert({
                        where: { userId: user.id },
                        create: {
                            userId: user.id,
                            username: user.name as string,
                            email: user.email as string,
                            image: user.image as string,
                        },
                        update: {},
                    })

                    token.userId = user.id
                } catch (error) {
                    console.error('Error during user upsert:', error)
                }
            }

            return token;
        },

        async session({ session, token }) {
            try {
                const userInfo = await prisma.user.findUnique({
                    where: { userId: token.userId as string },
                })

                if (userInfo) {
                    session.user = {
                        userId: userInfo.userId,
                        name: userInfo.username,
                        email: userInfo.email,
                        image: userInfo.image,
                    }
                } else {
                    console.error('User not found for session token:', token.userId)
                }
            } catch (error) {
                console.error('Error fetching user info for session:', error)
            }

            return session;
        },
    },
};

export default authOptions;
