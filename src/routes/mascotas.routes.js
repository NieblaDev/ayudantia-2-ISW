const {Router} = require('express');
const {obtenerMascotas, obtenerMascotaPorId, crearMascota, actualizarMascota, eliminarMascota} = require('../controllers/mascotas.controller');

const router = Router();

router.get('/mascotas', obtenerMascotas);
router.get('/mascotas/:id', obtenerMascotaPorId);
router.post('/mascotas', crearMascota);
router.put('/mascotas/:id', actualizarMascota);
router.delete('/mascotas/:id', eliminarMascota);

module.exports = router;