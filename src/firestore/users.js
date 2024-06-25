import { db, auth, provider, signInWithPopup } from '../firebase-config';
import { getDoc, doc, deleteDoc, setDoc, updateDoc } from 'firebase/firestore';
import { deleteUser as deleteAuthUser } from 'firebase/auth';

// Function to sign up with Google and create user in Firestore
export const signUpWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // Create user object
        const userObj = {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            bio: "",
            posts: [],
            favorites: [],
            genres: [],
            userType: ""
        };

        // Add user to Firestore
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, userObj);

        return userObj;
    } catch (e) {
        console.error("Error signing up with Google: ", e);
        throw new Error(e.message);
    }
};

// Function to update user's display name
export const updateUserDisplayName = async (uid, displayName) => {
    try {
        const userRef = doc(db, "users", uid);
        await updateDoc(userRef, { displayName });
    } catch (e) {
        console.error("Error updating display name: ", e);
        throw new Error(e.message);
    }
};

// Function to update user's photo URL
export const updateUserPhotoURL = async (uid, photoURL) => {
    try {
        const userRef = doc(db, "users", uid);
        await updateDoc(userRef, { photoURL });
    } catch (e) {
        console.error("Error updating photo URL: ", e);
        throw new Error(e.message);
    }
};

// Function to update user's bio
export const updateUserBio = async (uid, bio) => {
    try {
        const userRef = doc(db, "users", uid);
        await updateDoc(userRef, { bio });
    } catch (e) {
        console.error("Error updating bio: ", e);
        throw new Error(e.message);
    }
};

// Function to update user's posts
export const updateUserPosts = async (uid, posts) => {
    try {
        const userRef = doc(db, "users", uid);
        await updateDoc(userRef, { posts });
    } catch (e) {
        console.error("Error updating posts: ", e);
        throw new Error(e.message);
    }
};

// Function to update user's favorites
export const updateUserFavorites = async (uid, favorites) => {
    try {
        const userRef = doc(db, "users", uid);
        await updateDoc(userRef, { favorites });
    } catch (e) {
        console.error("Error updating favorites: ", e);
        throw new Error(e.message);
    }
};

// Function to update user's genres
export const updateUserGenres = async (uid, genres) => {
    try {
        const userRef = doc(db, "users", uid);
        await updateDoc(userRef, { genres });
    } catch (e) {
        console.error("Error updating genres: ", e);
        throw new Error(e.message);
    }
};

// Function to update user's user type
export const updateUserUserType = async (uid, userType) => {
    try {
        const userRef = doc(db, "users", uid);
        await updateDoc(userRef, { userType });
    } catch (e) {
        console.error("Error updating user type: ", e);
        throw new Error(e.message);
    }
};

// Function to get user details
export const getUser = async (uid) => {
    try {
        const userRef = doc(db, "users", uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            return { id: userSnap.id, ...userSnap.data() };
        } else {
            console.log("No such user!");
            return null;
        }
    } catch (e) {
        console.error("Error getting user: ", e);
        throw new Error(e.message);
    }
};

// Function to delete a user from Firestore and Authentication
export const deleteUser = async (uid) => {
    try {
        // Delete user from Firestore
        const userRef = doc(db, "users", uid);
        await deleteDoc(userRef);

        // Delete user from Firebase Authentication
        const user = auth.currentUser;
        if (user && user.uid === uid) {
            await deleteAuthUser(user);
        } else {
            console.error("Error: No user is currently signed in or UID does not match.");
            throw new Error("No user is currently signed in or UID does not match.");
        }

        console.log("User deleted");
    } catch (e) {
        console.error("Error deleting user: ", e);
        throw new Error(e.message);
    }
};