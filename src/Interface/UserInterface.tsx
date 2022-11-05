export interface User {
    name: Name,
    gender: string,
    email: string,
    picture: Picture,
}

interface Name {
    title: string,
    first: string,
    last: string,
}

interface Picture {
    thumbnail: string,
}