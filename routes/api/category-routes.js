const router = require('express').Router();
const { Category, Product } = require('../../models');

// GET/ Read `/api/categories` **
router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [
      {
        model: Product,
      },
    ],
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//GET/ Read category by ID **
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: { id: req.params.id },
    include: [{ model: Product }],
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res
          .status(404)
          .json({ message: 'No category matches the id selected' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//POST/ Create new category
//expects {category_name: 'Accessories'}
router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name,
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//PUT/ Update category by ID
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: { id: req.params.id },
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData[0]) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//DELETE category by ID
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: { id: req.params.id },
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
