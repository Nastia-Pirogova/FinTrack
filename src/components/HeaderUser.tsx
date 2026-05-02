import {useEffect, useState} from "react";
import useAuth from "../hooks/useAuth";
import avatar from "../assets/avatar.png";
import {doc, getDoc, setDoc, updateDoc} from "firebase/firestore";
import {db} from "../firebase";
import {useNavigate} from 'react-router-dom';


function HeaderUser({}) {
    const {user, loading} = useAuth();
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function getProfile() {
            if (!user) return;

            const docRef = doc(db, "users", user.uid);
            const snapshot = await getDoc(docRef);

            if (snapshot.exists()) {
                const data = snapshot.data();
                setProfile(data);
            }
        }

        getProfile();
    }, [user]);

    if (loading) return null;
    if (!user) return null;


    return (
        <>
            <div className="header-profile flex items-center gap-3 order-0  ml-auto lg:ml-0 lg:order-4 cursor-pointer"
                 onClick={() => navigate('/profile')}>
                <div className="header-profile-name hidden lg:block">
                    {profile?.name || user.displayName || "User"}
                </div>

                <img
                    src={avatar}
                    alt="User avatar"
                    className="header-profile-photo w-10 h-10 lg:w-14 lg:h-14 rounded-full object-cover"
                />
            </div>
        </>
    )
}

export default HeaderUser;