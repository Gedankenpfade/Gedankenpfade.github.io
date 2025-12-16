import { collection,  doc, getDocs, setDoc } from "firebase/firestore";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { db } from "./firebase.ts";
import type { Book, Chapter } from "../types/book.ts"

export const useBooksStore = defineStore('books', () => {
    const queerBooks = ref<Book[]>([]);
    const ffBooks = ref<Book[]>([]);
    const otherBooks = ref<Book[]>([]);
    const autismBooks = ref<Book[]>([]);
    const glassChildBooks = ref<Book[]>([]);
    const allBooks = ref<Book[]>([]);

    const creatorsBooks = ref<Book[]>([]);

    function getFirebaseCategory(c: string): string  {
        switch (c) {
            case "autism":
            case "Autismus":
                return "autism-books"
            case "ff":
            case "Fanfiction":
                return "ff-books";
            case "glasschild":
            case "Glaskind":
                return "glasschild-books";
            case "other": 
            case "Anderes":
                return "other-books";
            case "queer":
            case "Queer":
                return "queer-books";
            default: return "unknown";
        }
    }

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
                    id: data.id,
                    description: data.beschreibung,
                    category: data.kategorie,
                    content,
                    createdBy: data.erstelltVon,
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
                    id: data.id,
                    description: data.beschreibung,
                    category: data.kategorie,
                    content,
                    createdBy: data.erstelltVon,
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
                    id: data.id,
                    description: data.beschreibung,
                    category: data.kategorie,
                    content,
                    createdBy: data.erstelltVon,
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
                    id: data.id,
                    description: data.beschreibung,
                    category: data.kategorie,
                    content,
                    createdBy: data.erstelltVon,
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
                    id: data.id,
                    description: data.beschreibung,
                    category: data.kategorie,
                    content,
                    createdBy: data.erstelltVon,
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

        // Alle Bücher aus den verschiedenen Kategorien zusammenführen
        allBooks.value = [
            ...queerBooks.value,
            ...ffBooks.value,
            ...otherBooks.value,
            ...autismBooks.value,
            ...glassChildBooks.value,
        ];
        console.log("Found " + allBooks.value.length + " books")
    }

    async function getBookByName(name: string, category: string): Promise<Book | null> {
        const res: Ref<Book | undefined> = ref(undefined);

        if (allBooks.value.length === 0) {
            await getAllBooks();
        }
        res.value = allBooks.value.find((book) => book.title === name && book.category === category);

        if (res.value != undefined) {
            return res.value; // Rückgabe des gefundenen Buches  
        } else {
            console.log("Book not found.")
            return null; // Rückgabe von null, wenn kein Buch gefunden wurde
        }
}

    async function getBookByCreator(title: string, creator: string): Promise<Book | null> {    
        if (allBooks.value.length === 0) {
            await getAllBooks();
        }

        console.log("creator: ", creator);

        const res = allBooks.value.find((book) => book.title === title && book.createdBy === creator);
        console.log(res);
        if (res != undefined) {
            return res;
        } else {
            return {} as Book;
        }
    }

    async function addNewBook(book: Book) {
        try {
            const fb_category = getFirebaseCategory(book.category)
            const data = {
                autor: book.author,
                beschreibung: book.description,
                kategorie: fb_category.split('-')[0],
                titel: book.title,
                zielgruppe: '',
                erstelltVon: book.createdBy
            }
            // neues Dokument (Buch) anlegen: 
            const docRef = doc(db, `${fb_category}`, book.title);
            await setDoc(docRef, data);

            // Kapitel hinzufügen:
            const contentCollectionRef = collection(docRef, "Inhalt");
            book.content.forEach(async (chap) => {
                await setDoc(doc(contentCollectionRef, "Kapitel"+chap.id.toString()), {
                    id: chap.id,
                    titel: chap.title,
                    text: chap.content
                })
            })

            // zu Store hinzufügen
            authorsBooks.value.push(book);

            console.log("added new book")
        } catch (error) {
            console.error("Fehler beim Hinzufügen des Buchs: ", error);
        }
    }

    async function addChapterToBook(book: Book, chap: Chapter) {
        try {
            // Pfad bestimmen:
            const category = getFirebaseCategory(book.category);
            const bookContentRef = collection(db, `${category}/${book.title}/Inhalt`);
            console.log("Pfad:" + `${category}/${book.title}/Inhalt`)

            // neues Dokument (Kapitel) anlegen
            await setDoc(doc(bookContentRef, "Kapitel"+chap.id.toString()), {
                    id: chap.id,
                    titel: chap.title,
                    text: chap.content
                })

            authorsBooks.value.forEach((b) => {
                if (b.title === book.title) {
                    b.content.push(chap);
                }
            })

            // ToDo! 
            // if (id vorhanden) { Kapitel verändern }
            // else { neues Kapitel hinzufügen }
            console.log("added new chapter")
        } catch (e) {
            console.error("Fehler: ", e);
        }
    }

    async function changeBookInformation(book: Book) {
        try {
            console.log("changing information of book")
        } catch (e) {
            console.error("Fehler beim Ändern der Informationen des Buchs! ", e)
        }
    }

    async function getBooksFromCreator(creator: String) {
        if (creatorsBooks.value.length == 0) {
            await getAllBooks();

            allBooks.value.forEach((b) => {
                if (b.createdBy === creator) {
                    creatorsBooks.value.push(b);
                }
            })
        }
    }


    return {
        fetchQueerBooks,
        fetchFfBooks,
        fetchOtherBooks,
        fetchAutismBooks,
        fetchGlassChildBooks,
        getAllBooks,
        getBooksFromCreator,
        getBookByName,
        getBookByCreator,
        addNewBook,
        addChapterToBook,
        changeBookInformation,
        queerBooks,
        ffBooks,
        otherBooks,
        autismBooks,
        glassChildBooks,
        creatorsBooks        
    }
})