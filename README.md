flex.style con 0 0 calc(100% / ${size}
- no grow ni shrink
con calc(100%/${size}) haces que cada cuadrado se distribuya por el container.
- Ejemplo: 
grid de 4x4.
Con flex wrap sin el calc te intentará ocupar lo que haya y quizas solo te sobre 1 cuadrado en la siguiente fila
con calc sera por ejemplo 100%/4 -> 25% 25% 25% 25% = 100% y asi caber los 4 perfectamente.
Y wrap hace que continue en la siguiente fila.
