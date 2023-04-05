import data from "./mockData";

export default function handler(req, res) {
  const { filter, pageNumber, rows } = req.query;

  const filteredData = !filter
    ? data
    : data.filter(
        friend => filter.includes(friend.status) && friend.status !== ""
      );

  const rowStart = (pageNumber - 1) * rows;
  const pageData = filteredData.slice(rowStart, rowStart + 20);

  res.status(200).json({
    pageData: pageData,
    totalPages: Math.ceil(filteredData.length / rows)
  });
}
