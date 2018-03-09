$( function () {
  console.log( "is tasks" )

  emptyInit()
  function emptyInit() {
    myJS.emptyDataImg($(".task-list"),{
      src:"../../img/public-img/empty/homework@3x.png",
      str:"暂时没有作业"
    })
  }

} )