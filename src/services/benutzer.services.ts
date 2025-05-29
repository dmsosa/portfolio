import axios from "axios";
import { TBenutzer, TLoggedBenutzer } from "../data/types";
import { TBenutzerDatei } from "../hooks/useBenutzer";
import { defaultLoggedBenutzer } from "../data/artikel.data";
import { TAuthStatus } from "../context/AuthContext";

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/benutzer',
    timeout: 1000,

})


export async function toggleFollow({ headers, isFollowing, username }: { headers: Record<string, string>, isFollowing: boolean, username: string }): Promise<TBenutzer> {
    try {
        const url = `http://localhost:3000/api/profiles/${username}/follow`;
        const res = await fetch(url, {
            method: isFollowing ? 'POST' : 'DELETE',
            headers: headers
        });
        const benutzer: TBenutzer = await res.json();
        return benutzer;
    } catch (error) {
          console.error(error);
        throw error;
    }
}
export async function getCurrentBenutzer(headers: Record<string, string> ): Promise<TLoggedBenutzer> {
    try {
        const url = 'http://localhost:3000/api/benutzer/';
        const res = await fetch(url, {
            method: 'GET',
            headers: headers
        });
        const loggedBenutzer: TLoggedBenutzer = await res.json();
        return loggedBenutzer;
    } catch (error) {
          console.error(error);
        throw error;
    }
}
export async function loginBenutzer({ email, password } : { email: string, password: string }): Promise<TAuthStatus> {
    try {
        const { data } = await instance.post('/login', { email, password });
        const loggedBenutzer: TLoggedBenutzer = data;
        const loggedStatus = { headers: { Authorization:`${loggedBenutzer.token}` }, loggedUser: loggedBenutzer, isAuth: true };
        return loggedStatus;
    } catch (error) {
          console.error(error);
        throw error;
    }
}
export async function logoutBenutzer({ headers } : { headers: Record<string, string>  }): Promise<TAuthStatus> {
    try {
        await instance.post('/logout', { headers });
        const loggedStatus = { headers: undefined , loggedUser: defaultLoggedBenutzer, isAuth: false };
        return loggedStatus;
    } catch (error) {
          console.error(error);
        throw error;
    }
}
export async function getAllBenutzer({ headers, endpunkt, username, limit, offset } : { headers?: Record<string, string>, endpunkt: 'global' | 'feed' | 'author' | 'favorite' | 'followers',  username?: string,  limit: number, offset: number }): Promise<TBenutzerDatei> {
    try {
        const searchParams = new URLSearchParams();
        searchParams.append('limit', limit.toString());
        searchParams.append('offset', offset.toString());

        if (endpunkt === 'feed' && username) {
            searchParams.append('feed', username);
        }
        if (endpunkt === 'followers' && username) {
            searchParams.append('followers', username);
        }

        const url = 'http://localhost:3000/api/profiles' + '?' + searchParams;
        const res = await fetch(url, {
            method: 'GET',
            headers: headers? headers : {},
        });
        const benutzerData: TBenutzerDatei = await res.json();
        return benutzerData;
    } catch (error) {
            console.error("Fehler beim Abrufen der Benutzer:", error);
        throw error;
    }
}
export async function getProfile({headers, username } : { headers?: Record<string, string>, username: string }): Promise<TBenutzer> {
    try {
        const url = `http://localhost:3000/api/profiles/${username}`;
        const res = await fetch(url, {
            method: 'GET',
            headers: headers ? headers: {},
        });
        const benutzerData: TBenutzer = await res.json();
        return benutzerData;
    } catch (error) {
          console.error(error);
        throw error;
    }
}