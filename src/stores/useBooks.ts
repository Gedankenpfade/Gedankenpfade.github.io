import { addDoc, collection,  CollectionReference,  doc, getDocs, setDoc } from "firebase/firestore";
import { defineStore } from "pinia";
import { ref } from "vue";
import { db } from "./firebase.ts";
import type { Book, Chapter } from "../types/book.ts"

export const useBooksStore = defineStore('books', () => {
    const queerBooks = ref<Book[]>([]);
    const ffBooks = ref<Book[]>([]);
    const otherBooks = ref<Book[]>([]);
    const autismBooks = ref<Book[]>([]);
    const glassChildBooks = ref<Book[]>([]);

    async function fetchQueerBooks() {
        if (queerBooks.value.length == 0) {
            const booksCollection = collection(db, 'queer-books')
        
            queerBooks.value = await Promise.all((await getDocs(booksCollection)).docs.map(async (doc) => {
                const data = doc.data();
                const chaptersCollection = collection(doc.ref, 'Inhalt');
                const content: Chapter[] = (await getDocs(chaptersCollection)).docs.map(chapterDoc => ({
                    title: chapterDoc.data().titel,
                    content: chapterDoc.data().text,
                    id: chapterDoc.data().id
                }))

                return {
                    title: data.titel,
                    author: data.autor,
                    //id: 0,
                    description: data.beschreibung,
                    content,
                    category: data.kategorie,
                } as Book
            }))
        }
    }

    async function fetchFfBooks() {
        if (ffBooks.value.length == 0) {
            const booksCollection = collection(db, 'ff-books')
        
            ffBooks.value = await Promise.all((await getDocs(booksCollection)).docs.map(async (doc) => {
                const data = doc.data();
                const chaptersCollection = collection(doc.ref, 'Inhalt');
                const content: Chapter[] = (await getDocs(chaptersCollection)).docs.map(chapterDoc => ({
                    title: chapterDoc.data().titel,
                    content: chapterDoc.data().text,
                    id: chapterDoc.data().id
                }))

                return {
                    title: data.titel,
                    author: data.autor,
                    //id: 0,
                    description: data.beschreibung,
                    content,
                    category: data.kategorie,
                } as Book
            }))
        }
    }

    async function fetchOtherBooks() {
        if (otherBooks.value.length == 0) { 
            const booksCollection = collection(db, 'other-books')
        
            otherBooks.value = await Promise.all((await getDocs(booksCollection)).docs.map(async (doc) => {
                const data = doc.data();
                const chaptersCollection = collection(doc.ref, 'Inhalt');
                const content: Chapter[] = (await getDocs(chaptersCollection)).docs.map(chapterDoc => ({
                    title: chapterDoc.data().titel,
                    content: chapterDoc.data().text,
                    id: chapterDoc.data().id
                }))

                return {
                    title: data.titel,
                    author: data.autor,
                    //id: 0,
                    description: data.beschreibung,
                    content,
                    category: data.kategorie,
                } as Book
            }))
        }
    }

    async function fetchAutismBooks() {
        if (autismBooks.value.length == 0) { 
            const booksCollection = collection(db, 'autism-books')
        
            autismBooks.value = await Promise.all((await getDocs(booksCollection)).docs.map(async (doc) => {
                const data = doc.data();
                const chaptersCollection = collection(doc.ref, 'Inhalt');
                const content: Chapter[] = (await getDocs(chaptersCollection)).docs.map(chapterDoc => ({
                    title: chapterDoc.data().titel,
                    content: chapterDoc.data().text,
                    id: chapterDoc.data().id
                }))

                return {
                    title: data.titel,
                    author: data.autor,
                    //id: 0,
                    description: data.beschreibung,
                    content,
                    category: data.kategorie,
                } as Book
            }))
        }
    }

    async function fetchGlassChildBooks() {
        if (glassChildBooks.value.length == 0) { 
            const booksCollection = collection(db, 'glasschild-books')
        
            glassChildBooks.value = await Promise.all((await getDocs(booksCollection)).docs.map(async (doc) => {
                const data = doc.data();
                const chaptersCollection = collection(doc.ref, 'Inhalt');
                const content: Chapter[] = (await getDocs(chaptersCollection)).docs.map(chapterDoc => ({
                    title: chapterDoc.data().titel,
                    content: chapterDoc.data().text,
                    id: chapterDoc.data().id
                }))

                return {
                    title: data.titel,
                    author: data.autor,
                    //id: 0,
                    description: data.beschreibung,
                    category: data.kategorie,
                    content,
                } as Book
            }))
        }
    }

    async function getAllBooks() {
        await fetchQueerBooks();
        await fetchFfBooks();
        await fetchOtherBooks();
        await fetchAutismBooks();
        await fetchGlassChildBooks();
    }

    async function getBookByName(name: string, category: string): Promise<Book | null> {
        if (category === "queer") {
            if (queerBooks.value.length === 0) {
                await fetchQueerBooks();
            }

            const res = queerBooks.value.find((book) => book.title === name);

            if (res === undefined) {
                return null; // Rückgabe von null, wenn kein Buch gefunden wurde
            } else {
                return res; // Rückgabe des gefundenen Buches
            }
        } else if(category == "glasschild") {
            if (glassChildBooks.value.length === 0) {
                await fetchGlassChildBooks();
            }

            const res = glassChildBooks.value.find((book) => book.title === name);

            if (res === undefined) {
                return null; // Rückgabe von null, wenn kein Buch gefunden wurde
            } else {
                return res; // Rückgabe des gefundenen Buches
            }
        } else {
            console.error("Unsupported category"); // Fehlerbehandlung für andere Kategorien
            return null; // Rückgabe von null für nicht unterstützte Kategorien
        }
    }

    async function addNewBook(category: string, book: Book) {
        try {
            let collectionRef: CollectionReference = collection(db, 'other-books');
            const bookCategory = ref('')
            switch (category) {
                case "Queer": 
                    bookCategory.value = 'queer'
                    collectionRef = collection(db, 'queer-books');
                    break;
                case "Fanfiction": 
                    bookCategory.value = 'ff';
                    collectionRef = collection(db, 'ff-books');
                    break;            
                case "Autismus": 
                    bookCategory.value = 'autism';
                    collectionRef = collection(db, 'autism-books');
                    break;
                case "Anderes": 
                    bookCategory.value = 'other'
                    collectionRef = collection(db, 'other-books');
                    break;
                default: 
                    bookCategory.value = 'other';
                    collectionRef = collection(db, 'other-books');
            }

            const data = {
                autor: book.author,
                beschreibung: book.description,
                kategorie: bookCategory.value,
                titel: book.title,
                zielgruppe: '',
                erstelltVon: book.createdBy
            }
            // neues Dokument (Buch) anlegen:
            const docRef = await addDoc(collectionRef, data);
            // Kapitel hinzufügen:
            const contentCollectionRef = collection(docRef, "Inhalt");
            book.content.forEach(async (chap) => {
                await setDoc(doc(contentCollectionRef, "Kapitel"+chap.id.toString()), {
                    id: chap.id,
                    titel: chap.title,
                    text: chap.content
                })
            })

            console.log("done")
        } catch (error) {
            console.error("Fehler beim Hinzufügen des Buchs: ", error);
        }
    }


    return {
        fetchQueerBooks,
        fetchFfBooks,
        fetchOtherBooks,
        fetchAutismBooks,
        fetchGlassChildBooks,
        getAllBooks,
        queerBooks,
        ffBooks,
        otherBooks,
        autismBooks,
        glassChildBooks,
        getBookByName,
        addNewBook,
    }
})