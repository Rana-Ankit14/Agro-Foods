exports.pagination = async (currentPage, perPageLimit, condition, model) => {
  // const results = {};
  const startIndex = (currentPage - 1) * perPageLimit;
  const endIndex = currentPage * perPageLimit;

  const count = await model.count({
    where: condition,
  });

  const totalPage = Math.ceil(count / perPageLimit);

  return { startIndex, endIndex, totalNoOfItems: count, totalPage };
};
