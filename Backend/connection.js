
  const mongoose=require('mongoose');
  mongoose.connect('mongodb+srv://ananyapramod04:8136988796@cluster0.nu5shqq.mongodb.net/blogdb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
      console.log('DB is connected');
  }).catch((error)=>{
      console.log('Error in connection')
  })
// mongodb+srv://fathimagesny:marianmon1234@cluster0.h0mmerg.mongodb.net/detailsdb?retryWrites=true&w=majority&appName=Cluster0