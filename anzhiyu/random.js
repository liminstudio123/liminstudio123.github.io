var posts=["2024/10/17/利民资源合集（随时更新中）/","2024/10/14/hello-world/","2024/10/14/GitHub/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };