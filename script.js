const consultarPersonaje = async () => {

    let number = parseInt(document.getElementById('number').value);
    let title  = document.getElementById('title');
    let height = document.getElementById('height');
    let mass   = document.getElementById('mass');
    let gender = document.getElementById('gender');
    let eyeColor  = document.getElementById('eye_color');
    let hairColor = document.getElementById('hair_color');
    let skinColor = document.getElementById('skin_color');
    let birthYear = document.getElementById('birth_year');
        
    if(isNaN(number) || number <= 0) {
        alert('Please enter a valid number');
    } else {
        const API = `https://swapi.dev/api/people/${number}`;
        fetch(API)
        .then(response => response.json())
        .then(character => {
            if(character.name === undefined) {
                title.innerHTML = 'Character not exist';
                height.innerHTML = '*****';
                mass.innerHTML   = '*****';
                gender.innerHTML = '*****'
                eyeColor.innerHTML  = '*****';
                hairColor.innerHTML = '*****';
                skinColor.innerHTML = '*****';
                birthYear.innerHTML = '*****';
                return;
            }
            title.innerHTML  = character.name;
            height.innerHTML = character.height;
            mass.innerHTML   = character.mass;
            gender.innerHTML = character.gender;
            eyeColor.innerHTML  = character.eye_color;
            hairColor.innerHTML = character.hair_color;
            skinColor.innerHTML = character.skin_color;
            birthYear.innerHTML = character.birth_year;
        }) 
    }

}