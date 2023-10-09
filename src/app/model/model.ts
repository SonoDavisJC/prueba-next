
export interface Task {
    id: Number,
    nombre: String,
    description: String,
    date: Date | String,
}

export interface ModelUser {
    id: Number
    avatar: String,
    email: String,
    first_name: String,
    last_name: String,
}