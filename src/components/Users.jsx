import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/reducers/usersSlice';
import { useEffect } from 'react';

const Users = () => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    console.log(data);

    if (loading) {
        return <h1>Loading</h1>;
    }

    if (error !== null) {
        return <h1>Error</h1>;
    }

    return (
        <div>
            <h1>Users</h1>
            {data?.length > 0 && (
                <ul>
                    {data.map((user, index) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Users;
