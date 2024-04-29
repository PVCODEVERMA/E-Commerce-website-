const { verify } = require("jsonwebtoken");
const Categiory = require("../model/categori.Model");
//  createCategory start
const createCategory = async (req, res) => {
  try {
    const { categorieName } = req.body;

    const result = await Categiory.create({
      categorieName,
      img: req.file.filename,
    });
    if (await result.save()) {
      return res.status(200).json({
        success: true,
        message: "Record save",
      });
    }
  } catch (error) {
    res.send("Error Record");
  }
};
//  createCategory end

const getCategry = async (req, res) => {
  const categry = await Categiory.find();

  res.send(categry);
};

const DeleteCategry = async (req, res) => {
  try {
    const { id } = req.params;

    const categry = await Categiory.findOneAndDelete({ _id: id });

    if (categry) {
      res.status(200).json({
        success: true,
        message: "delete catefory succesfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "faild",
    });
  }
};

const getCategrybyID = async (req, res) => {
  const { id } = req.params;
  const categry = await Categiory.findById(id);
  res.send(categry);
};

const putCategrybyEdite = async (req, res) => {
  try {
    const { id } = req.params;

    const categry = await Categiory.findOneAndUpdate(
      { _id: id },
      {
        categorieName: req.body.cname,
        img: req.file.cimg,
      }
    );
    if (categry) {
      return res.status(200).json({
        success: true,
        message: "category update successfully",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: true,
      message: "category update faled",
    });
  }
  
};

module.exports = {
  createCategory,
  getCategry,
  DeleteCategry,
  getCategrybyID,
  putCategrybyEdite,
};
