const names = ['mamun', 'ruhul', 'nayeem', 'suboj', 'aminul', 'mamun', 'ruhul', 'aminul', 'tariq', 'rokib'];

function removeDuplicate(names) {
    const unique = [];
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);

        }

    }
    return unique;
}


const uniqueNames = removeDuplicate(names);

console.log(uniqueNames);