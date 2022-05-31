const user = {
    id: 42,
    displayName: 'Theus',
    fullName: {
        firstName: 'Matheus',
        lastName: 'de Carvalho'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

console.log(userId(user));
// 42

console.log(getFullName(user));
// Matheus de Carvalho