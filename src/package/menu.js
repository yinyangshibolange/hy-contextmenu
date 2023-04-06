let menu_containers = []

export function createRightMenu (x, y, menu_items, level = 0, type = 'right_click') {
   popMenu(level)
   menu_containers.push({
      el: document.createElement("div"),
      menu_items: menu_items,
      type: type,
   })
   const menu_container = menu_containers[level].el
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
         menu_lis.classList.add("menu-ul-li")

         const icontainer = document.createElement("div")
         icontainer.classList && icontainer.classList.add("menu-i-div")
         const idom = document.createElement("i")
         if (item.icon_class) idom.classList.add(item.icon_class)
         icontainer.appendChild(idom)

         const divdom = document.createElement("div")
         divdom.classList && divdom.classList.add("menu-text-div")

    


         menu_lis.appendChild(icontainer)
         menu_lis.appendChild(divdom)

         if(item.selector) {
            const div_right_dom = document.createElement("div")
            div_right_dom.classList.add("div_right_i")
            const iright = document.createElement("img")
            iright.classList.add("i-right")
            div_right_dom.appendChild(iright)
            menu_lis.appendChild(div_right_dom)
         }
      
         menu_ul.appendChild(menu_lis)
         divdom.innerText = item.text

         console.log(item.children)

         if (item.children) {
            const trigger = item.trigger || 'click' // 触发方式
            if (trigger === 'hover') {
               menu_lis.onmouseenter = (ev) => {
                  ev.stopPropagation()
                  ev.preventDefault()

                  const li_el = getLiElement(ev.target, "menu-ul-li")
                  console.dir(li_el)
                  const { top, right } = li_el.getBoundingClientRect()

                  createRightMenu(right, top, item.children, level + 1, 'hover')
               }



            } else if (trigger === 'click') {
               menu_lis.onmouseenter = (ev) => {
                  ev.stopPropagation()
                  ev.preventDefault()
                  popMenu(level + 1,)
               }

               menu_lis.onclick = (ev) => {
                  ev.stopPropagation()
                  ev.preventDefault()

                  const li_el = getLiElement(ev.target, "menu-ul-li")
                  console.dir(li_el)
                  const { top, right } = li_el.getBoundingClientRect()
                  createRightMenu(right, top, item.children, level + 1, 'click')
               }
            }
         } else {
            menu_lis.onmouseenter = (ev) => {
               ev.stopPropagation()
               ev.preventDefault()
               popMenu(level + 1)
            }
            menu_lis.onclick = (ev) => {
               ev.stopPropagation()
               ev.preventDefault()
               if (typeof item.click === 'function') {
                  item.click(item,)
                  if (menu_container) {
                     popMenu(0)
                     document.onclick = null
                  }
               }
            }
         }

      })


   }

   if (level === 0) {
      documentClickSet()
   }



}

function documentClickSet () {
   if (document.onclick) document.onclick = null
   document.onclick = ev => {
      if (menu_containers.length > 0) {
         let flag = false
         const { clientX, clientY } = ev

         for (let i = 0; i < menu_containers.length; i++) {
            const menu_container = menu_containers[i].el
            const { top, bottom, left, right } = menu_container.getBoundingClientRect()
            if (left < clientX && right > clientX && top < clientY && bottom > clientY) {
               flag = true
            }
         }

         console.log('flag', flag)

         if (!flag) {
            popMenu(0)
            document.onclick = null
         }

      }
   }
}


function getLiElement (el, classname) {
   if (el.classList.contains(classname)) {
      return el
   }
   if (!el.parentElement) {
      return {}
   }
   return getLiElement(el.parentElement, classname)
}

function popMenu (level) {
   if (menu_containers[level]) {
      const menu_container = menu_containers.pop()
      document.body.removeChild(menu_container.el)
      if (level < menu_containers.length) {
         popMenu(level)
      }
   }
}
