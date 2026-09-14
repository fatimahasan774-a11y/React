const Header =() =>{
return(
<h1>my blog</h1>

)
}

const Post =()=>{
return(
    <>
<h1> my first blog post</h1>
<p>this is the contect of my first blog post. welcome to my blog</p>
</>
);
};

const Footer=()=>{
    return(
        <footer> 
        <p>© 2026 My Blog. All rights reserved.</p>
</footer>

    )
}

const Blog= () =>{
return(
    <>
    
        <Header/>,
    <Post/>,
    <Footer/>
    
    </>

)
}

export default Blog;