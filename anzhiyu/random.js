var posts=["2024/10/13/GitHub/","2024/10/13/这是一篇新的博文/","2024/10/13/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };