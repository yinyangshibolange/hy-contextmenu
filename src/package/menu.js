 let menu_container

 export function createRightMenu(x, y, menu_items) {
 if (menu_container) {
  document.body.removeChild(menu_container)
 }
 menu_container = document.createElement("div")
 document.body.appendChild(menu_container)
 menu_container.classList && menu_container.classList.add("custom_menu_div")
 menu_container.style.left = x + 'px'
 menu_container.style.top = y + 'px'
 menu_container.style.zIndex = 999999

 let menu_ul = document.createElement("ul")
 menu_container.appendChild(menu_ul)

 if (Array.isArray(menu_items)) {
  menu_items.forEach((item,) => {
   const menu_lis = document.createElement("li")
   const icontainer = document.createElement("div")
   icontainer.classList && icontainer.classList.add("menu-i-div")
   const idom = document.createElement("i")
   if (item.icon_class) idom.classList.add(item.icon_class)
   icontainer.appendChild(idom)
   const divdom = document.createElement("div")
   divdom.classList && divdom.classList.add("menu-text-div")
   menu_lis.appendChild(icontainer)
   menu_lis.appendChild(divdom)

   menu_ul.appendChild(menu_lis)
   divdom.innerText = item.text
   menu_lis.onclick = (ev) => {
    ev.stopPropagation()
    ev.preventDefault()
    if (typeof item.click === 'function') {
     item.click(item,)

     if (menu_container) {
      document.body.removeChild(menu_container)
      menu_container = null
      document.onclick = null
     }
    }
   }
  })


 }

 if (document.onclick) document.onclick = null
 document.onclick = ev => {
  if (menu_container) {
   const { clientX, clientY } = ev
   const { top, bottom, left, right } = menu_container.getBoundingClientRect()
   if (left < clientX && right > clientX && top < clientY && bottom > clientY) {
return
   } else {
    document.body.removeChild(menu_container)
    menu_container = null

    document.onclick = null
   }
  }

 }

}