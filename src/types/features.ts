export type Status = 'not-loaded' | 'loaded' | 'pending' | 'rejected';

export interface User {
    id: number;
    full_name: string | undefined;
    username: string | undefined;
    photo: string | undefined;
    phone?: string | undefined;
    position: string | undefined;
    description: string | undefined;
    email: string | undefined;
    start_date: string;
    state: string | undefined;
    password: string | undefined;
}

export interface BookingType {
    id: number;
    guest: string | undefined;
    image: string;
    date: string;
    checkIn: string;
    hourIn: string;
    checkOut: string;
    request: string;
    roomTipe: string;
    status: string;
    }


export interface Room {
    id: number;
    name: string | undefined;
    bed_type: string | undefined;
    photo: string | undefined;
    description?: string | undefined;
    amenities: string[];
    rate: number;
    offer: number;
    status: string;
}

export interface RoomType {
    id: number;
    name: string | undefined;
    bed_type: string | undefined;
    photo: string | undefined;
    description?: string | undefined;
    amenities: string[];
    rate: number;
    offer: number;
    status: string;
}

export interface Contact {
    id: string;
    date: string;
    name: string | undefined;
    email: string | undefined;
    phone: string | undefined;
    subject: string | undefined;
    comment: string | undefined;
    archived: boolean;
    }