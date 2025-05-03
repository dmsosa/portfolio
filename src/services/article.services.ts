import { TArtikel } from "../data/types";
import { TKommentDatei } from "../hooks/useKomment";

export async function getArtikeln({ headers, endpunkt, username, tags, offset, limit=3 } : 
    { 
        headers?: Record<string, string>,
        endpunkt: 'global' | 'feed' | 'favorite' | 'author' | 'followers',
        username?: string | undefined, 
        tags?: string,
        offset: number,
        limit: number,
    }) {
    try {
        const searchParams = new URLSearchParams();
        searchParams.append('offset', offset.toString());
        searchParams.append('limit', limit.toString());

        if (endpunkt === 'author' && username) {
            searchParams.append('author', username);
        }
        if (endpunkt === 'favorite' && username) {
            searchParams.append('favoriter', username);
        }
        if (tags) {
            searchParams.append('tags', tags);
        }
        const url = endpunkt === 'feed' ? 'http://localhost:3000/api/artikel/feed' : 'http://localhost:3000/api/artikel';
        const res = await fetch(url + '?' + searchParams, { headers: headers ? headers : {} });
        const articleData = await res.json();
        return articleData;
    } catch (error) {   
        console.error("Fehler beim Abrufen der Artikel:", error);
        throw error;
    }
}
export async function getArtikel({ headers, slug } : { 
    headers?: Record<string, string>,
    slug: string,
}) : Promise<TArtikel> {
    try {
        const url = `http://localhost:3000/api/artikel/${slug}`;
        const res = await fetch(url, {
            method: 'GET',
            headers: headers ? headers : {}
        });
        const artikel: TArtikel = await res.json();
        return artikel;
    } catch (error) {
          console.error(error);
        throw error;
    }
} 

export async function getArtikelKommentar({ headers, slug } : { 
    headers?: Record<string, string>,
    slug: string,
}) : Promise<TKommentDatei> {
    try {
        const url = `http://localhost:3000/api/artikel/komment/${slug}`;
        const res = await fetch(url, {
            method: 'GET',
            headers: headers ? headers : {}
        });
        const kommentDatei = await res.json();
        return kommentDatei;
    } catch (error) {
          console.error(error);
        throw error;
    }
} 
export async function toggleFavorite({ headers, isFavorite, slug } : { 
    headers: Record<string, string>,
    isFavorite: boolean,
    slug: string,
}) : Promise<TArtikel> {
    try {
        const url = `http://localhost:3000/api/artikel/fav/${slug}`;
        const res = await fetch(url, {
            method: isFavorite ? 'POST' : 'DELETE',
            headers: headers
        });
        const artikel: TArtikel = await res.json();
        return artikel;
    } catch (error) {
          console.error(error);
        throw error;
    }
}

export async function removeArtikel({ headers, slug } : { 
    headers: Record<string, string>,
    slug: string,
}) : Promise<TArtikel> {
    try {
        const url = `http://localhost:3000/api/artikel/${slug}`;
        const res = await fetch(url, {
            method: 'DELETE',
            headers: headers
        });
        const artikel: TArtikel = await res.json();
        return artikel;
    } catch (error) {
          console.error(error);
        throw error;
    }
} 

