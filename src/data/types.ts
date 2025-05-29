export interface TArtikel {
    slug: string;
    title: string;
    body: string;
    description: string;
    tags: string[];
    author: TBenutzer;
    isFavorite: boolean;
    favoritesCount: number;
    commentsCount: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface TKomment {
    id: string;
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
    token?: string | undefined;
    role: 'BENUTZER' | 'ADMIN';
    createdAt: Date;
    updatedAt: Date;
}