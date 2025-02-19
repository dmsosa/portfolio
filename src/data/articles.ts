import { TArtikel, TBenutzer, TKomment } from "./types";


const benutzer1: TBenutzer = {
    username: "Benutzer 1",
    email: "benutzer1@dmsosa.com",
    image: "bild",
    bio: "Etwas kool zu lesen",
    createdAt: new Date(),
    updatedAt: new Date(),
}
const kommentar1: TKomment = {
    author: benutzer1,
    body: "Das ist unglaublich!",
    createdAt: new Date(),
    updatedAt: new Date(),
}
const a1: TArtikel = {
    slug: "what-is-lorem-ipsum",
    title: "What is Lorem Ipsum?",
    description: "scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    body: "What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. \nWhy do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). \nWhere does it come from?",
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ["react", "lorem", "demo"],
    kommentar: [kommentar1]
}
const artikelArray: TArtikel[] = [a1];


export default artikelArray;
