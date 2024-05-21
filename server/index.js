import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connect from './database/database.js'
import { BillRouter, ContainerRouter, ContractRouter, GoodsDeclarationRouter, OrderRouter, UserRouter, VesselRouter } from './routes/index.js'
    
const PORT = process.env.PORT || 4000
const app = express();



app.use(cors())
app.use(express.json({
    limit: '500mb'
}));


app.use('/user', UserRouter); 
app.use('/order', OrderRouter); 
app.use('/goodsDeclaration', GoodsDeclarationRouter);
app.use('/container', ContainerRouter); 
app.use('/vessel', VesselRouter); 
app.use('/bill', BillRouter); 
app.use('/contract', ContractRouter); 



app.get('/', (req,res) => {
    res.send('Hello from server side')
})

app.listen(PORT, async () => {
    await connect();
    console.log(`Server is running at PORT ${PORT}`);
})