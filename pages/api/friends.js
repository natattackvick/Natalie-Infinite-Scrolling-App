import data from "./mockData";

export default function handler(req, res) {
  res.status(200).json(data);
}
