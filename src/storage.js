// src/storage.js
import { storage } from './firebase-config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Upload file to Firebase Storage
export const uploadFile = async (file, path) => {
    try {
        const storageRef = ref(storage, path);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
    } catch (e) {
        console.error("Error uploading file: ", e);
        throw new Error(e.message);
    }
};
