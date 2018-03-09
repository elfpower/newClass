$( function () {
  console.log( "is notes" )

  emptyInit()
  function emptyInit() {
    myJS.emptyDataImg($(".note-list"),{
      src:"../../img/public-img/empty/note@3x.png",
      str:"暂时没有笔记"
    })
  }

} )