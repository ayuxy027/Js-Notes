// String handbook


// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.



// str.length give length of the string

// const str = 'Ayush Yadav'
// console.log(str.length)



// str.indexOf() gives index of the target string

// const str = 'Ayush Yadav'
// console.log(str.indexOf('Yadav'));



//lastindexOf() gives the last position of the target string

// const str = 'Ayush Yadav';
// console.log(str.lastIndexOf('a'));



// str.slice() gives the sliced desired part of the target string

// const str = 'Ayush Yadav'
// const slicedString = str.slice(0,5)
// console.log(slicedString);


//How is str.slice() and substr() different? 

// ans - Because of the parameteric difference 

// const str = 'Ayush Yadav';

// const str1 = str.slice(2, 5); (here the first parameter mean the start of the string and 2nd parameter is the limit of the string)

// const str2 = str.substr(2, 5); (here the first parameter mean the start of the string and 2nd parameter is the total lenght of the string)

// console.table({ "Original String": str, "Slice Method": str1, "Substring Method": str2 });


//str.replace() replaces the string with the required substring

// const str1 = "  Hello world";
// console.log(str1.replace('world', 'JavaScript'));


//str.split splits the string into parts 

// const str = 'Hi My Name is Ayush Yadav'
// const str1 = str.split(" ")
// console.log(str1);


//str.trim() removes the leading and trailing empty spaces (ONLY IN BEGINNING AND ENDING parts)

// const str = "       Ayush     Yadav      ";
// console.log(str);

// console.log(str.trim());



// Similary are toLowerCase() and toUpperCase()