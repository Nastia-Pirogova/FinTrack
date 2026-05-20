import {useEffect, useState} from "react";
import useAuth from "../hooks/useAuth";
import avatar from "../assets/avatar.png";
import { doc, getDoc, updateDoc} from "firebase/firestore";
import {db} from "../firebase";
import Input from "./Input.tsx";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";


function ProfileHeader({}) {
    const {user, loading} = useAuth();
    const [profile, setProfile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("");
    const storage = getStorage();

    useEffect(() => {
        async function getProfile() {
            if (!user) return;

            const docRef = doc(db, "users", user.uid);
            const snapshot = await getDoc(docRef);

            if (snapshot.exists()) {
                const data = snapshot.data();
                setProfile(data);
                setName(data.name || user.displayName || "User");
            }
        }

        getProfile();
    }, [user]);

    if (loading) return null;
    if (!user) return null;


    async function handleSaveName(name) {
        const profileName = name.trim()
        if (profileName === '') return;

        await updateDoc(doc(db, "users", user.uid), {name: profileName});
        setProfile({
            ...profile,
            name: profileName
        })
        setIsEditing(false)
    }

    async function uploadPhoto(photo) {
        const maxSizeBytes = 5 * 1024 * 1024;
        if (!photo || (photo.type !== 'image/png' && photo.type !== 'image/jpeg' && photo.type !== 'image/webp') || (photo.size > maxSizeBytes)) {
            return;
        }

        const fileRef = ref(storage, `users/avatar/${user.uid}/profile.jpg`);


        try {
            await uploadBytes(fileRef, photo);

            const url = await getDownloadURL(fileRef);
            console.log(url);

            await updateDoc(doc(db, "users", user.uid), {
                photoURL: url
            });

            setProfile((prevProfile) => ({
                ...(prevProfile || {}),
                photoURL: url,
            }));

        } catch (error) {
            console.error(error);
        }
        console.log("photo:", photo);

    }

    return (
        <>
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-full">
                <div className="container px-4 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <div className="profile-photo">
                            <img
                                src={profile?.photoURL || avatar}
                                alt="User avatar"
                                className="w-24 h-24 rounded-full object-cover"
                            />
                            <div className="profile-photo-title mt-2.5">Choose a profile picture:</div>
                            <Input
                                id="avatar"
                                inputType="file"
                                name="file"
                                label=""
                                accept="image/png,image/jpeg,image/webp"
                                onChange={(e) => uploadPhoto(e.target.files[0])}
                                className="px-2 py-2 h-5 mb-0 max-h-max w-fit max-w-fit text-xs md:text-xs cursor-pointer"
                            />
                        </div>

                        <div>
                            <h2 className="profile-name text-xl font-semibold text-gray-900 flex gap-2.5">

                                {isEditing ? (
                                    <div className="flex items-center gap-2">
                                        <input
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="rounded-lg border border-gray-200 px-3 py-1 text-xl font-semibold outline-none"
                                        />

                                        <button className="profile-name-edit" onClick={() => handleSaveName(name)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="m4.5 12.75 6 6 9-13.5"/>
                                            </svg>

                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                    <span>
                                        {profile?.name || user.displayName || "User"}
                                    </span>
                                        <button className="profile-name-edit" onClick={() => setIsEditing(true)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                                            </svg>
                                        </button>
                                    </div>
                                )}


                            </h2>
                            <p className="text-sm text-gray-500">
                                {profile?.email || user.email || "Email"}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfileHeader;