allPosts.map((eachPost, idx) => {
    return (
      
      <div key={idx} className="individual-post">
        <span>For Sale: </span> <span>{eachPost.title}</span>
        <p>Description: {eachPost.description}</p>
        <p>Price: ${eachPost.price}</p>
        <p>Seller: {eachPost.author.username}</p>
      </div>
      
    );
  })