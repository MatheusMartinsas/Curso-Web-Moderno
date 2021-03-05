function tipoTriangulo(a, b, c) {
    if(a != b) {
        if(b != c) {
            console.log('Escaleno')
        } else (
            console.log('Isósceles')
        )
    } else if (b = c) {
        console.log('Equilátero')
    } else {
        console.log('Escaleno')
    }
}

tipoTriangulo(1, 2, 3)
tipoTriangulo(1, 2, 1)
tipoTriangulo(1, 1, 2)
tipoTriangulo(2, 1, 1)
tipoTriangulo(2, 2, 2)
