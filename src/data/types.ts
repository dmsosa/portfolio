export interface TArtikel {
    slug: string;
    title: string;
    body: string;
    description: string;
    tags: string[];
    author: TBenutzer;
    isFavorite: boolean;
    favoritesCount: number;
    kommentar: TKomment[];
    createdAt: Date;
    updatedAt: Date;
}
export interface TKomment {
    author: TBenutzer;
    body: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface TBenutzer {
    username: string;
    image: string;
    bio: string;
    isFollowing: boolean;
    followingCount: number;
    followersCount: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface TLoggedBenutzer {
    username: string;
    email: string;
    image: string;
    bio?: string;
    token: string;
    role: 'BENUTZER' | 'ADMIN';
    createdAt: Date;
    updatedAt: Date;
}