export function sortRoomsByStatus(rooms) {
    return rooms.slice().sort((a, b) => {
        if (a.status === 'Available' && b.status === 'Booked') {
            return -1; // a debe estar antes que b
        } else if (a.status === 'Booked' && b.status === 'Available') {
            return 1; // a debe estar después que b
        } else {
            return a.status.localeCompare(b.status);
        }
        });
    }
    
    export function sortRoomsByPrice(rooms) {
        return rooms.slice().sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    }