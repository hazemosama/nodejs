import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Hello About");
});
router.get("/me", (req, res, next) => {
  res.send("My Name is hazem osama");
});
router.get("/company", (req, res, next) => {
  res.send("My Company is comming in the future soon :)");
});

export default router;

/*
الحاجة مش بتتبعت مرة واحدة بتتبعت ع هيئة chunks
وده بيقلل الlose data 
وبتتجمع ف حاجة اسمها buffer // array buffer // stream
دي array 
بتجمع اجزاء الchunks دي
*/
