import express from 'express'
import Jobs from './database.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.post('/create', async (req, res) => {
  try {
    const newJob = req.body;

    const job = await Jobs.create(newJob);

    res.status(201).json(job);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message
    });
  }
});

app.get('/jobs',async (req,res)=>{
    const jobs = await Jobs.find()
    res.json({jobs:jobs})
})

app.put('/jobs/:id',async (req,res)=>{
    const id = req.params.id
    const updatedJob = await Jobs.findByIdAndUpdate(
        id,
        req.body,
        {new : true}
    )

    res.json({updatedJob})
})

app.delete('/jobs/:id',async (req,res)=>{
    const deletedJob = await Jobs.findByIdAndDelete(req.params.id)
    
    res.json({deletedJob})
})

app.listen(3000)