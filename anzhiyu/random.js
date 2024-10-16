var posts=["2024/10/16/2024/","2024/10/14/GitHub/","2024/10/14/hello-world/","2024/10/13/这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };