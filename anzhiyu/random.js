var posts=["2024/10/20/利民资源合集（随时更新中）/","2024/10/20/sink/","2024/10/20/hexoanzhiyu/","2024/10/20/图床/","2024/10/20/节点搭建/","2024/10/20/网盘/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };