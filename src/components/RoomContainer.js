import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { RoomContext } from '../Context';
import Loading from './Loading';
import { useContext } from 'react';

export default function RoomContainer() {
    const { loading, sortedRooms, rooms } = useContext(RoomContext);
    if (loading) {
        return <Loading />;
    }
    return (
        <div>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </div>
    );
}


// == Higher Order Component ==

// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';
// import { withRoomConsumer } from '../Context';
// import Loading from './Loading';

// const RoomContainer = ({ context }) => {
//     const { loading, sortedRooms, rooms } = context;
//     if (loading) {
//         return <Loading />;
//     }
//     return (
//         <div>
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//         </div>
//     );
// }
// export default withRoomConsumer(RoomContainer);