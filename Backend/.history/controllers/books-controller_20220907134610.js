const Book = require("../model/Book");

const getAllBooks = async(req,res,next) =>{
    let books;
try{
    books = await Book.find();
} catch (err) {
    console.log(err);
}
if(!books) {
    return res.status(404).json({ message: "No products found" });
}
return res.status(200).json({ books });
};

const addBooks = async (req, res, next) =>{
    const {name,author,description,price,available} = req.body;
    let book;
    try{
        book = new book({
            name,
            author,
            description,
            price,
            available
        });
        await book.save();
    } catch (err) {
        console.log(err);
    }

    if (!book){
        return res.status(500).json({message:'Unable To Add'})
    }
    return res.status(201).json({ book });
};

exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;