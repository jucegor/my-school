'use client'
import { collection, addDoc, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebaseConfig';
import { useRouter } from 'next/navigation'

const TaskManager = () => {
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    const [tasks, setTasks] = useState<DocumentData[]>([]);
    const [newTask, setNewTask] = useState('');

    const fetchTasks = async () => {
        const querySnapshot = await getDocs(collection(db, 'tasks'));
        setTasks(querySnapshot.docs.map(doc => doc.data()));
    };

    const addTask = async () => {
        await addDoc(collection(db, 'tasks'), { task: newTask });
        fetchTasks();
    };



    useEffect(() => {
        fetchTasks();
    }, []);

    if (loading) return <p>Carando Tareas...</p>;
    if (!user) {
        router.push('/login');
        return null;
    }

    return (
        <div>
            <input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Nueva tarea" />
            <button onClick={addTask}>Agregar tarea</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task.task}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;
