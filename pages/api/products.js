import { mongooseConnect } from "../../lib/mongoose";
import Dataset from "../../models/Product";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "POST") {
    const {
      title,
      description,
      meta,
      slug,
      content,
      category,
      images,
      loaike,
      chieucao,
      chieudai,
      dorongmam,
      sotang,
      trongtai,
    } = req.body;

    const productDoc = await Dataset.create({
      title,
      description,
      slug,
      content,
      category,
      images,
      loaike,
      chieucao,
      chieudai,
      dorongmam,
      sotang,
      trongtai,
    });

    res.json(productDoc);
  }

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Dataset.findOne({ _id: req.query.id }));
    } else {
      res.json(await Dataset.find());
    }
  }

  if (method === "PUT") {
    const {
      title,
      description,
      meta,
      slug,
      content,
      category,
      images,
      loaike,
      chieucao,
      chieudai,
      dorongmam,
      sotang,
      trongtai,
    } = req.body;
    await Dataset.updateOne(
      { _id },
      {
        title,
        description,
        meta,
        slug,
        content,
        category,
        images,
        loaike,
        chieucao,
        chieudai,
        dorongmam,
        sotang,
        trongtai,
      }
    );
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Dataset.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
