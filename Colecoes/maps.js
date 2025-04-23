function GetAdmins(maps) {
    const admins = [];

    for (const [user, role] of maps) {
        if (role.toLowerCase() === 'admin') {
            admins.push(user);
        }
    }

    return admins;
}

const usuarios = new Map();
usuarios.set('Pedro', 'admin');
usuarios.set('Maria', 'user');  
usuarios.set('Juan', 'admin');
usuarios.set('Ana', 'user');
usuarios.set('Luis', 'Guest');
usuarios.set('Carlos', 'admin');

const admins = GetAdmins(usuarios);
console.log(admins);

const numeros = [30, 30, 40, 5, 223, 2049, 3034, 5];
const numerosunicos = new Set(numeros);
console.log(numerosunicos);
