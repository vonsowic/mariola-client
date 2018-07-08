import jwtDecode from 'jwt-decode'


export const tokenToUser = token => {
    try {
        const user = jwtDecode(token)
        return {
            id: user.id,
            name: user.name ,
            lastName: user.lastName,
            faculties: user.faculties,
        }
    } catch (err) {
        return {
            id: null,
            name: null,
            lastName: null,
            faculties: []
        }
    }
};