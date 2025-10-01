import { ref } from "vue";
import { defineStore } from "pinia";
import { db } from "./firebase.ts";
import { collection, getDocs } from "firebase/firestore";
import type { User } from "../types/user.ts";

export const useUserStore = defineStore('user', () => {
    const usersList = ref([] as User[]);
    const loggedinUser = ref<User | null>(null);

    async function fetchAllUsers() {
        try {
            const querySnapshot = await getDocs(collection(db, "users"));
            usersList.value = querySnapshot.docs.map(doc => doc.data() as User);
        } catch (error) {
            console.error("Fehler beim Abrufen der Benutzer:", error);
        }
    }

    async function setLoggedinUser(id: string) {
        if (usersList.value.length === 0) {
            await fetchAllUsers();
        }
        
        const user = usersList.value.find(usr => usr.userId === id || null)
        if (user == null) {
            console.error("Nutzer nicht gefunden!")
            loggedinUser.value = {
                username: "unbekannt",
                userId: id,
            }
        } else {
            loggedinUser.value = user;
        }
    }

    function unsetLoggedinUser() {
        loggedinUser.value = null;
    }

    return {
        setLoggedinUser,
        unsetLoggedinUser,
        loggedinUser,
    }
})