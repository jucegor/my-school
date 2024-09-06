'use client'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebaseConfig';
import { useRouter } from 'next/navigation'

const Calendar = () => {
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    if (loading) return <p>Loading...</p>;
    if (!user) {
        router.push('/login');
        return null;
    }

    return <div><h1>Calendario Escolar</h1>
        <p>Welcome, {user.email}, CALENDARIO</p></div>;
};

export default Calendar;



