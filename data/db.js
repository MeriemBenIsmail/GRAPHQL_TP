export const db = {
    students : [
        {
            id: 1,
            name: 'Fatma Laribi',
            age: 22,
            gender: "FEMALE",
            classroom: 1
        },
        {
            id: 2,
            name: 'Ahmed Mahfoudhi',
            age: 22,
            gender: "MALE",
            classroom: 2
        },
        {
            id: 3,
            name: 'Nadine Boukadida',
            age: 22,
            gender: "FEMALE",
            classroom: 3
        },
        {
            id: 4,
            name: 'Mohamed Aziz Khayati',
            age: 22,
            gender: "MALE",
            classroom: 1
        }
    ],
    classroom: [
        {
            id: 1,
            designation: 'GL3'
        },{
            id: 2,
            designation: 'GL2'
        },{
            id: 3,
            designation: 'GL4'
        },
    ],
    todos: [
        {
            id:1,
            name:"todo1",
            content:"this is todo number 1",
            status:"WAITING",
            user:1

        },
        {
            id:2,
            name:"todo2",
            content:"this is todo number 2",
            status:"IN_PROCESS",
            user:1

        },
        {
            id:3,
            name:"todo3",
            content:"this is todo number 3",
            status:"DONE",
            user:2

        },
        {
            id:4,
            name:"todo4",
            content:"this is todo number 4",
            status:"CANCELLED",
            user:3

        },
        {
            id:5,
            name:"todo5",
            content:"this is todo number 5",
            status:"CANCELLED",
            user:4

        },
    ],
    users:[
        {
            id:1,
            name:"user1",
            email:"user1@gmail.com"
        },
        {
            id: 2,
            name:"user2",
            email:"user2@yahoo.com"
        },
        {
            id:3,
            name:"user3",
            email:"user3@outlook.com"
        },
        {
            id:4,
            name:"user4",
            email:"user4@gmail.com"
        },

    ]
}
