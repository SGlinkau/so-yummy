import Recipe from '../../models/Recipe.jsx';

const searchController = async (req, res) => {
  const query = req.query.query;
  const ingredient = req.query.ingredient;
  const page = parseInt(req.query.page) || 1;
  const limit =
    req.query.limit ||
    (req.device.type === 'mobile' || req.device.type === 'tablet' ? 6 : 12);

  if (!query && !ingredient) {
    return res
      .status(400)
      .json({ error: 'Brak parametru "query" lub "ingredient"' });
  }

  try {
    let results;
    let totalCount;

    const skip = (page - 1) * limit;

    if (query) {
      results = await Recipe.find({ title: { $regex: query, $options: 'i' } })
        .skip(skip)
        .limit(limit);
      totalCount = await Recipe.countDocuments({
        title: { $regex: query, $options: 'i' },
      });
    } else {
      results = await Recipe.find({
        ingredients: { $regex: ingredient, $options: 'i' },
      })
        .skip(skip)
        .limit(limit);
      totalCount = await Recipe.countDocuments({
        ingredients: { $regex: ingredient, $options: 'i' },
      });
    }

    const totalPages = Math.ceil(totalCount / limit);

    res.json({ results, totalPages });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Wystąpił błąd podczas wyszukiwania przepisów' });
  }
};

export { searchController };
