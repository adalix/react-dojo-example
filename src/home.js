import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState ([
        { title : 'My new website', body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dicta illum perspiciatis. Sapiente optio tempore, maiores provident dolor harum officia labore nihil inventore eaque ipsum omnis assumenda fugit debitis quasi?', author : 'mario', id: 1},
        { title : 'Welcome party!', body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dicta illum perspiciatis. Sapiente optio tempore, maiores provident dolor harum officia labore nihil inventore eaque ipsum omnis assumenda fugit debitis quasi?', author : 'yoshi', id: 2},
        { title : 'Web dev top tips', body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dicta illum perspiciatis. Sapiente optio tempore, maiores provident dolor harum officia labore nihil inventore eaque ipsum omnis assumenda fugit debitis quasi?', author : 'mario', id: 3}   
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(()=> {
        console.log('use effect ran')
        console.log(blogs)
    })

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title = "All Blogs" handleDelete = {handleDelete}/>
           <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title = "Mario's Blogs"/>
        </div>
     );
}
 
export default Home;
