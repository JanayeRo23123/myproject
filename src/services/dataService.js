let catalog = [

{
    "title":"Bath Salts",
    "category":"Spa",
    "price": 11.11,
    "image": "bathsalt1.jpg",
    "_id": "1"
},
{
    "title":"Candle",
    "category":"Spa",
    "price": 22.22,
    "image": "candle2.jpg",
    "_id": "2"
},
{
    "title":"Crystals",
    "category":"Healing",
    "price": 44.44,
    "image": "crystals-bc4.jpg",
    "_id": "3"
},
{
    "title":"Hoodie",
    "category":"Clothes",
    "price": 55.55,
    "image": "hoodie2.jpg",
    "_id": "4"
},
{
    "title":"Sugar Scrub",
    "category":"Spa",
    "price": 13.13,
    "image": "sugarscrub.jpg",
    "_id": "5"
},
{
    "title":"Lose Leaf Tea",
    "category":"Healing",
    "price": 10.10,
    "image": "tea.jpg",
    "_id": "6"
},
{
    "title":"Beauty Bundle",
    "category":"Spa",
    "price": 99.99,
    "image": "beautybundle.jpg",
    "_id": "7"
},

];

class DataService{

    getProducts(){
        return catalog;
    }
}
export default DataService;
