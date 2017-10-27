module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.create_bin([req.params.id[0], req.params.id[1],req.body.name,req.body.price]).then(() => res.status(200).send()).catch(err => { res.status(500); console.log("create", err) });
    },
    getBin: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_bin([req.params.id[0], req.params.id[1]]).then((products) => res.status(200).send(products)).catch(err => { res.status(500).send(err); console.log("getone", err) });
    },
    getShelf: (req, res) => {
        const dbInstance = req.app.get('db');
        console.log("dbInstance:", req.params.id);
        dbInstance.get_shelf([req.params.id]).then((products) => {
            console.log(products);
            res.status(200).send(products)
        }).catch(err => { res.status(500); console.log("getshelf", err) });
    },
    update: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.edit_bin([req.params.id[0], req.params.id[1], req.body.name, req.body.price]).then((products) => res.status(200).send(products)).catch(err => { res.status(500); console.log("update", err) });
    },
    deleteBin: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.delete_bin([req.params.id[0], req.params.id[1]]).then(() => res.status(200).send()).catch(err => { res.status(500); console.log("deleteBin", err) });
    }
}