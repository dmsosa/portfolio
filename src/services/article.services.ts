import { TArtikel } from "../data/types";

export async function getArtikeln({ headers, endpoint, username, tags, offset, limit=3 } : 
    { 
        headers: Record<string, string>,
        endpoint: 'global' | 'feed' | 'favoriter' | 'author',
        username?: string | undefined, 
        tags?: string,
        offset: number,
        limit: number,
    }) {
    try {
        const searchParams = new URLSearchParams();
        searchParams.append('offset', offset.toString());
        searchParams.append('limit', limit.toString());

        if (endpoint === 'author' && username) {
            searchParams.append('author', username);
        }
        if (endpoint === 'favoriter' && username) {
            searchParams.append('favoriter', username);
        }
        if (tags) {
            searchParams.append('tags', tags);
        }
        const url = endpoint === 'feed' ? 'http://localhost:3000/api/artikel/feed' : 'http://localhost:3000/api/artikel';
        const res = await fetch(url + '?' + searchParams, { headers: headers });
        const articleData = await res.json();
        return articleData;
    } catch (error) {
        console.log(error);
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
        console.log(error);
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
        console.log(error);
        throw error;
    }
} 

