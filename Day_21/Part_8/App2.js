[2,4,6].every((el) => el%2 == 0);
true

[2,4,6,8].every((el) => el%2 == 0);
true

[2,4,6,8,1].every((el) => el%2 == 0);
false

[3,5,7,9,11].every((el) => el%2 == 0);
false

[3,5,7,9,11].every((el) => el%2 != 0);
true



// Reduce method or function 
