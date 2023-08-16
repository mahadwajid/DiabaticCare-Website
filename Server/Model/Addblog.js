import mongoose from 'mongoose';

const blogStructure = mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    publishDateTime: { type: Date, required: true },
    author: { type: String, required: true },
    authorImage: { type: String, required: true },
    image:{
      type:String,
   }
   
  },
  { timestamps: true },
  
);

const BlogModel = mongoose.model('Blog', blogStructure);

export default BlogModel;

