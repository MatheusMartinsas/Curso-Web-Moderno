function tipoTriangulo(a, b, c) {
    if(a != b) {
        if(a != c) {
            if(c != b) {
                console.log("Escaleno")
            } else {
                console.log("Isósceles")
            }
        } else {
            console.log("Isóceles")
        }
    } else if(a != c) {
        console.log("Isósceles")
    } else {
        console.log("Equilátero")
    }
}

tipoTriangulo(1, 2, 3) //Escaleno
tipoTriangulo(1, 2, 1) //Isóceles
tipoTriangulo(1, 1, 2) //Isóceles
tipoTriangulo(2, 1, 1) //Isóceles
tipoTriangulo(2, 2, 2) //Equilátero
