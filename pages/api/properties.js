import { connectToDatabase } from '/pages/lib/mongodb'

export default async function handler(req, res) {
  const { db } = await connectToDatabase()

  const data = await db.collection('just_bike_it').find({}).limit(20).toArray()

  res.json(data)
}
