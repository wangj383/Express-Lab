const foodOptions = [
    {foodOption: "Thai Food", open: true},
    {foodOption: "Sushi", open: false},
    {foodOption: "Burger King", open: true}
];

module.exports = {
    getAll: function() {
        return foodOptions;
    }
}