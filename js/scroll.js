var sections = document.querySelectorAll('.section')
if(!sections || sections.length === 0){
} else {
  var idx = 0
  var busy = false

  function go(i){
    if(i < 0) i = 0
    if(i >= sections.length) i = sections.length - 1
    idx = i
    sections[idx].scrollIntoView({behavior: 'smooth', block: 'start'})
    busy = true
    setTimeout(function(){ busy = false }, 700)
  }

  window.addEventListener('wheel', function(e){
    if(busy) return
    var d = e.deltaY
    if(d > 20) { go(idx + 1) }
    else if(d < -20) { go(idx - 1) }
  }, {passive: true})

  var nav = document.querySelector('.navbar')
  if(nav){
    nav.addEventListener('click', function(e){
      var t = e.target
      if(!t || t.tagName !== 'A') return
      var href = t.getAttribute('href')
      if(!href || href.charAt(0) !== '#') return
      var id = href.substring(1)
      var targetIndex = -1
      for(var i = 0; i < sections.length; i++){
        if(sections[i].id === id){ targetIndex = i; break }
      }
      if(targetIndex >= 0){ e.preventDefault(); go(targetIndex) }
    })
  }

  window.addEventListener('load', function(){
    var y = window.scrollY
    var best = Infinity
    for(var i = 0; i < sections.length; i++){
      var rect = sections[i].getBoundingClientRect()
      var top = rect.top + window.scrollY
      var dist = Math.abs(y - top)
      if(dist < best){ best = dist; idx = i }
    }
  })

}