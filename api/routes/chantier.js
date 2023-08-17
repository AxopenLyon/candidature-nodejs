const {getCustomResMessage} = require("../../utils/personnal-error");
const {
    findChantier,
    putRandomChantier,
    updateChantier,
    deleteChantier,
    findAllChantier
} = require("../helpers/chantier");
const {findUserById} = require("../helpers/user");

const route = require('express').Router();

/**
 * Get a new random chantier each call
 * @return chantier a random chantier
 */
route.get('/:numero', async function (req, res) {
    try {
        let numero = req.params.numero
        let chantier = await findChantier(numero);
        return res.json(chantier);
    } catch (e) {
        return res.status(500).json({key: getCustomResMessage('Error on finding chantier', e)})
    }
});

/**
 * Get all chantier in database
 * @returns {Chantier[]} the new chantier
 */
route.get('/', async function (req, res) {
    try {
        const chantiers = await findAllChantier();

        console.log('chantiers', chantiers)

        for(let i = 0; i < chantiers.length; i++) {
            chantiers[i].chef_chantier = await findUserById(chantiers[i].chef_chantier_id);
            chantiers[i].responsable_chantier = await findUserById(chantiers[i].responsable_chantier_id);
            console.log('chantiers[i].chef_chantier', chantiers[i].chef_chantier)
            console.log('chantiers[i].responsable_chantier', chantiers[i].responsable_chantier)
        }



        return res.json(await findAllChantier());
    } catch (e) {
        return res.status(500).json({key: getCustomResMessage('Error on updating random chantier', e)})
    }
});

/**
 * Insert a random chantier in database
 * @returns {Chantier} the new chantier
 */
route.put('/', async function (req, res) {
    try {
        let updatedChantier = await putRandomChantier();
        return res.json(updatedChantier);
    } catch (e) {
        return res.status(500).json({key: getCustomResMessage('Error on updating random chantier', e)})
    }
});

/**
 * Update the chantier in body
 * @param numero the numero of the chantier to update
 * @body chantier the new chantier
 * @returns {Chantier} the updated chantier
 */
route.post('/:numero', async function (req, res) {
    try {
        let numero = req.params.numero;
        let description = req.body.description;
        let city = req.body.city;
        let city_cp = req.body.city_cp;
        let date_debut = req.body.date_debut;
        let date_fin = req.body.date_fin;
        let updatedChantier = await updateChantier(description, city, city_cp, date_debut, date_fin, numero);
        return res.json(updatedChantier);
    } catch (e) {
        return res.status(500).json({key: getCustomResMessage('Error on updating chantier', e)})
    }
});

/**
 * Delete a chantier
 * @param numero the numero of the chantier to delete
 */
route.get('/delete/:numero', async function (req, res) {
    try {
        let numero = req.params.numero;
        await deleteChantier(numero);
        res.json();
    } catch (e) {
        return res.status(500).json({key: getCustomResMessage('Error on updating chantier', e)})
    }
});

module.exports = route;
