import "./Post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://tse2.mm.bing.net/th?id=OIP.G7TWA3rPaWmn-dCwt-ymgQHaCs&pid=Api&P=0"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">React.js : web development</span>
          {/* <span className="postCat">React Native : Android development</span> */}
        </div>
        <span className="postTitle">Introduction to React.js</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        beatae quia sint, voluptatum vero unde id, dolores quisquam ducimus
        rerum illo dolore quos delectus iusto quo eaque voluptas, minima
        corporis.
      </p>
    </div>
  );
}

export default Post;
