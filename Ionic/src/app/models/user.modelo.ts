
export interface Users {
       
    _id: string,
    email: String,       
    name: String,
    last_name: String,
    password: String,
    rol: String,
    Rol_List: dataRolList[]
    
}

export interface dataRolList {
    
    nameRol: String

}

export interface dataUserMostar {
    message: string;
    data: Users;
}

export interface dataUserMostar2 {
    message: string;
    data: Users[];
}

export interface dataUserEliminar {
    data: Users;
}




