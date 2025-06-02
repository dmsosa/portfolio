import axios from "axios";
import { TArtikel } from "../data/types";
import { TKommentDatei } from "../hooks/useKomment";
const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 1000,
  });
export async function getArtikeln({ headers, endpunkt, username, tags, offset, limit=3 } : 
    { 
        headers: Record<string, string>,
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
        const url = endpunkt === 'feed' ? '/feed' : '/artikel';
        const res = await instance.get(url, { headers, params: searchParams })
        const articleData = await res.data;
        
        return articleData;
    } catch (error) {   
        console.error("Fehler beim Abrufen der Artikel:", error);
        throw error;
    }
}
export async function getArtikel({ headers, slug } : { 
    headers: Record<string, string>,
    slug: string,
}) : Promise<TArtikel> {
    try {
        const url = `/artikel/${slug}`;
        const res = await axios.get(url, {
            headers
        });
        
        return res.data;
    } catch (error) {
        console.error(error);
        throw (error);
    }
} 
export async function postArtikel({ headers, title, description, body, tags } : { 
    headers: Record<string, string>,
    title: string, 
    description: string, 
    body: string, 
    tags: string
 }): Promise<TArtikel> {
    try {
        console.log({ headers, title, description, body, tags })
        const res = await instance.request({
            url: "/artikel",
            headers: headers,
            method: 'POST',
            data: { title, description, body, tags }
        });
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    } 
}
export async function putArtikel({ headers, slug, title, description, body, tags } : { 
    headers: Record<string, string>,
    slug: string,
    title: string, 
    description: string, 
    body: string, 
    tags: string
 }): Promise<TArtikel> {
    try {
        const res = await instance.request({
            url: `/artikel/${slug}`,
            headers: headers,
            method: 'PUT',
            data: { title, description, body, tags }
        });
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    } 
}
export async function getArtikelKommentar({ headers, slug, limit, offset } : { 
    headers: Record<string, string>,
    slug: string,
    limit: number,
    offset: number,
}) : Promise<TKommentDatei> {
    try {
        const url = `/artikel/komment/${slug}`;
        const res = await instance.get(url, { headers: headers, params: { limit, offset } });
        return res.data;
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

export async function postKomment({ headers, body, author, slug } : {
    headers: Record<string, string>,
    body: string,
    author: string,
    slug: string,
} )  {
    try {
        const url = `/artikel/komment/${slug}`;
        const komment = await axios.post(url, { body, author }, { headers: headers });
        return komment.data;
    } catch (error) {
        console.error(error);
      throw error;
  }
}
export async function putKomment({ headers, body, author, kommentId, slug } : {
    headers: Record<string, string>,
    body: string,
    author: string,
    kommentId: string,
    slug: string,
} )  {
    try {
        const url = `/artikel/komment/${slug}/${kommentId}`;
        const komment = await instance.request({
            url: url,
            method: 'POST',
            data: { author, body },
            headers: headers,
        })
        return komment.data;
    } catch (error) {
        console.error(error);
      throw error;
  }
}
export async function deleteKomment({ headers, kommentId, slug } : {
    headers: Record<string, string>,
    body: string,
    author: string,
    kommentId: string,
    slug: string,
} )  {
    try {
        const url = `/artikel/komment/${slug}/${kommentId}`;
        const komment = await instance.request({
            url: url,
            method: 'DELETE',
            headers: headers,
        })
        return komment.data; 
    } catch (error) {
        console.error(error);
      throw error;
  }
}
export async function getArtikelKommentAnzahl({ slug } : { slug: string }) : Promise<number> {
    try {
        const url = `/artikel/komment/${slug}`;
        const komment = await instance.request({
            url: url,
            method: 'GET',
        })
        const data = komment.data as TKommentDatei;
        return data.kommentAnzahl; 
    } catch (error) {
        console.error(error);
      throw error;
  }
}