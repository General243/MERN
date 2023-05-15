const postModel = require("../models/post.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.readPost = async (req, res) => {
  try {
    const docs = await PostModel.find().sort({ createdAt: -1 });
    res.send(docs);
  } catch (err) {
    console.log("Error to get data : " + err);
  }
};

module.exports.createPost = async (req, res) => {
  const newPost = new postModel({
    posterId: req.body.posterId,
    message: req.body.message,
    depart: req.body.depart,
    arrivee: req.body.arrivee,
    jour: req.body.jour,
    heure: req.body.heure,
    nopass: req.body.nopass,
    prix: req.body.prix,
  });

  try {
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.updatePost = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const updatedRecord = {
    message: req.body.message,
  };

  try {
    const updatedPost = await PostModel.findByIdAndUpdate(
      req.params.id,
      { $set: updatedRecord },
      { new: true }
    );
    res.send(updatedPost);
  } catch (err) {
    console.log("Update error : " + err);
  }
};

module.exports.deletePost = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    const deletedPost = await PostModel.findByIdAndRemove(req.params.id);
    res.send(deletedPost);
  } catch (err) {
    console.log("Delete error : " + err);
  }
};
