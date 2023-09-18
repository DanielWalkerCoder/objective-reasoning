// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(user){
    // if(obj['userRole'] === 'ADMIN'){
    //     return true
    // } else{
    //     return false
    // }
    return user.userRole === 'ADMIN';
}

function getEmail(obj){
    let email = ''
    email += obj['firstName'][0].toLowerCase()
    email += obj['lastName'].toLowerCase()
    email += '.prsvr@gmail.com'
    return email
}

function getPlaylistLength(obj){
    return obj['songs'].length
}

function getHardestHomework(arr){
    if(arr.length === 0){
        return ''
    }
    let hardestHomework = arr[0].name;
    let lowestScore = arr[0].averageScore
    for(i = 1; i < arr.length; i++){
        if(arr[i].averageScore < lowestScore){
            lowestScore = arr[i].averageScore
            hardestHomework = arr[i].name
        }
    } return hardestHomework
}

function createPhonebook(names, numbers){
    let phonebook = {};
    for(i = 0; i < names.length; i++){
        phonebook[names[i]] = numbers[i]
    } return phonebook
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};