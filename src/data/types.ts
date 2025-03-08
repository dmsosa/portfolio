export interface TArtikel {
    slug: string;
    title: string;
    body: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    tags: string[];
    author: TBenutzer;
    kommentar: TKomment[];
}
export interface TKomment {
    author: TBenutzer;
    body: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface TBenutzer {
    username: string;
    email: string;
    image: string;
    bio: string;
    createdAt: Date;
    updatedAt: Date;
}