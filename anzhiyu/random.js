var posts=["2024/10/14/GitHub/","2024/10/14/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };