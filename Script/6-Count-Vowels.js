function countVowels(name){

    let Vowels=['a','e','u','i','o','y'];
    let count = 0;
    for (let i = 0; i < name.length; i++) {
        if (Vowels.includes(name[i])) {
            count++;
            }
            }
            return count;
};