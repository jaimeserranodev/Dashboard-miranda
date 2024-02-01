import { User } from '../../types/features';
import jaimePhoto from '../../imagenes/foto.perfil.jpeg';

export const usersJson: User[] = [
    {
        "_id": 1,
        "full_name": "Jaime Serrano",
        "username": "jaime",
        "photo": jaimePhoto,
        "position": "Manager",
        "description": "Overseeing the daily operations of the hotel, directing phone calls, coordinating travel plans",
        "email": "jaime@serrano.com",
        "start_date": "2022-04-01",
        "state": "active",
        "password": "admin"
    },
    {
        "_id": 2,
        "full_name": "Alice Johnson",
        "username": "alicej",
        "photo": "https://randomuser.me/api/portraits/women/1.jpg",
        "position": "Receipt",
        "description": "Contact for guests as they enter the hotel, answering guest inquiries",
        "email": "alicejohnson@example.com",
        "start_date": "2023-02-15",
        "state": "active",
        "password": "p@ssword123"
    },
    {
        "_id": 3,
        "full_name": "Bob Smith",
        "username": "bobsmith",
        "photo": "https://randomuser.me/api/portraits/men/1.jpg",
        "position": "Room Service",
        "description": "Taking orders from guests over the phone",
        "email": "bobsmith@example.com",
        "start_date": "2023-03-10",
        "state": "inactive",
        "password": "mysecret"
    },
    {
        "_id": 4,
        "full_name": "Lucas Torres",
        "username": "lucast",
        "photo": "https://randomuser.me/api/portraits/men/2.jpg",
        "position": "Manager",
        "description": "Overseeing the daily operations of the hotel, directing phone calls, coordinating travel plans",
        "email": "lucast@example.com",
        "start_date": "2022-04-05",
        "state": "active",
        "password": "mysecurepass"
    },
    {
        "_id": 5,
        "full_name": "Maria Rodriguez",
        "username": "maria_rod",
        "photo": "https://randomuser.me/api/portraits/women/2.jpg",
        "position": "Receipt",
        "description": "Contact for guests as they enter the hotel, answering guest inquiries",
        "email": "maria.rodriguez@example.com",
        "start_date": "2023-05-10",
        "state": "active",
        "password": "mypassword"
    },
    {
        "_id": 6,
        "full_name": "Luisa Perez",
        "username": "luisap",
        "photo": "https://randomuser.me/api/portraits/women/3.jpg",
        "position": "Room Service",
        "description": "Taking orders from guests over the phone",
        "email": "luisa.perez@example.com",
        "start_date": "2023-06-15",
        "state": "inactive",
        "password": "12345678"
    },
    {
        "_id": 7,
        "full_name": "Mark Johnson",
        "username": "markj",
        "photo": "https://randomuser.me/api/portraits/men/3.jpg",
        "position": "Receipt",
        "description": "Contact for guests as they enter the hotel, answering guest inquiries",
        "email": "mark.johnson@example.com",
        "start_date": "2023-07-20",
        "state": "active",
        "password": "password123"
    },
    {
        "_id": 8,
        "full_name": "Samantha Lee",
        "username": "samlee",
        "photo": "https://randomuser.me/api/portraits/women/4.jpg",
        "position": "Room Service",
        "description": "Taking orders from guests over the phone",
        "email": "samlee@example.com",
        "start_date": "2023-08-25",
        "state": "active",
        "password": "mysupersecret"
    },
]