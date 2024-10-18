var posts=["2024/10/18/利民资源合集（随时更新中）/","2024/10/18/节点搭建/","2024/10/18/图床/","2024/10/18/网盘/","2024/10/18/sink/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };