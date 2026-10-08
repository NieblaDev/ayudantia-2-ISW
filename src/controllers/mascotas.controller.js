let mascotas = [
    {id: 1, nombre: "Tomy", especie: "Perro", edad: 3, adoptado: false},
    {id: 2, nombre: "Mia", especie: "Gato", edad: 2, adoptado: false}
];

const obtenerMascotas = (req, res) => {
    res.json(mascotas);
}

const obtenerMascotaPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const mascota = mascotas.find(m => m.id === id);
    if (!mascota) {
        return res.status(404).json({message: "Mascota no encontrada"});
    }
    res.json(mascota);
}

const crearMascota = (req, res) => {
    const {nombre, especie, edad, adoptado} = req.body;
    const nuevaMascota = {
        id: mascotas.length + 1,
        nombre,
        especie,
        edad,
        adoptado
    };
    mascotas.push(nuevaMascota);
    res.status(201).json(nuevaMascota);
}

const actualizarMascota = (req, res) => {
    const id = parseInt(req.params.id);
    const {nombre, especie, edad, adoptado} = req.body;

    const mascotaIndex = mascotas.findIndex(m => m.id === id);

    if (mascotaIndex === -1) {
        return res.status(404).json({message: "Mascota no encontrada"});
    }

    mascotas[mascotaIndex] = {
        ...mascotas[mascotaIndex],
        nombre: nombre || mascotas[mascotaIndex].nombre,
        especie: especie || mascotas[mascotaIndex].especie,
        edad: edad || mascotas[mascotaIndex].edad,
        adoptado: adoptado !== undefined ? adoptado : mascotas[mascotaIndex].adoptado
    };
    res.json(mascotas[mascotaIndex]);
};

const eliminarMascota = (req, res) => {
    const id = parseInt(req.params.id);
    const mascotaIndex = mascotas.findIndex(m => m.id === id);

    if (mascotaIndex === -1) {
        return res.status(404).json({message: "Mascota no encontrada"});
    }
    mascotas = mascotas.filter(m => m.id !== id);
    res.json({message: "Mascota eliminada"});

}

module.exports = {
    obtenerMascotas,
    obtenerMascotaPorId,
    crearMascota,
    actualizarMascota,
    eliminarMascota
}