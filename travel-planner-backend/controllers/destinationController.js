exports.getDestinations = (req, res) => {
    const destinations = [
        { id: 1, name: "Goa", country: "India" },
        { id: 2, name: "Paris", country: "France" }
    ];
    res.json(destinations);
};
