let menu_containers = []
let current_theme = 'default'

export function createRightMenu(x, y, menu_items, theme = 'default', level = 0, type = 'right_click') {
    popMenu(level)
    menu_containers.push({
        el: document.createElement("div"),
        menu_items: menu_items,
        type: type,
    })
    const menu_container = menu_containers[level].el
    document.body.appendChild(menu_container)
    menu_container.classList.add("custom_menu_div")
    menu_container.style.zIndex = 99999
    if(level === 0) {
        current_theme = theme || 'default'
    }
    menu_container.setAttribute("theme", current_theme)


    let menu_ul = document.createElement("ul")
    menu_container.appendChild(menu_ul)

    if (Array.isArray(menu_items)) {
        menu_items.forEach((item, index) => {
            const menu_lis = document.createElement("li")
            menu_lis.id = `li-${level}-${index}`
            menu_lis.classList.add("menu-ul-li")
            if (typeof item.custom_style === 'object') {
                for (const key in item.custom_style) {
                    menu_lis.style[key] = item.custom_style[key]
                }
            }
            if (item.custom_class) {
                if (item.custom_class.split) {
                    item.custom_class.split(" ").forEach(item => {
                        menu_lis.classList.add(item.trim())
                    })
                }
            }
            if (item.border_top) {
                menu_lis.classList.add("border-top")
            }

            const i_container_div = document.createElement("div")
            i_container_div.classList && i_container_div.classList.add("menu-i-div")
            if (item.icon_class) {
                const i_dom = document.createElement("i")
                item.icon_class.split(" ").forEach(item => {
                    i_dom.classList.add(item.trim())
                })
                i_container_div.appendChild(i_dom)
            } else if (item.icon_img) {
                const i_dom = document.createElement("img")
                i_dom.src = item.icon_img
                i_container_div.appendChild(i_dom)
            }

            const div_dom = document.createElement("div")
            div_dom.classList && div_dom.classList.add("menu-text-div")

            menu_lis.appendChild(i_container_div)
            menu_lis.appendChild(div_dom)

            const div_right_dom = document.createElement("div")
            div_right_dom.classList.add("menu-right-div")
            menu_lis.appendChild(div_right_dom)

            // 右边箭头或者check勾
            if (Array.isArray(item.children) && item.children.length > 0) {
                div_right_dom.classList.add("i-right")
            } else {
                div_right_dom.classList.add("i-check")
            }

            if (item.checked) {
                menu_lis.classList.add("li-checked")
            }

            menu_ul.appendChild(menu_lis)
            div_dom.innerText = item.text


            if (item.children) {
                const trigger = item.trigger || 'click' // 触发方式
                if (trigger === 'hover') {
                    menu_lis.onmouseenter = (ev) => {
                        ev.stopPropagation()
                        ev.preventDefault()

                        const li_el = getLiElement(ev.target, "menu-ul-li")
                        const {top, right} = li_el.getBoundingClientRect()

                        createRightMenu(right, top, item.children,theme, level + 1, 'hover')
                    }

                    menu_lis.onclick = (ev) => {
                        ev.stopPropagation()
                        ev.preventDefault()

                        if (typeof item.click === 'function') {
                            item.click(item, ev, menu_lis)
                        }
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
                        const {top, right} = li_el.getBoundingClientRect()

                        createRightMenu(right, top, item.children,theme, level + 1, 'click')

                        if (typeof item.click === 'function') {
                            item.click(item, ev, menu_lis)
                        }
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

                    // 选项没有 子的
                    // menu_items // 父所有节点

                    if (item.selector) { // 如果可选，那么
                        if (item.group) { // 如果有组，那么就是单选，没有组就是可以多选
                            menu_items.forEach((item_1, index_1) => {
                                if (item_1.group === item.group) {
                                    const el = document.getElementById(`li-${level}-${index_1}`)
                                    item_1.checked = false
                                    el.classList.remove("li-checked")
                                }
                            })
                            item.checked = true
                            menu_lis.classList.add("li-checked")
                        } else {
                            item.checked = !item.checked
                            if (item.checked) {
                                menu_lis.classList.add("li-checked")
                            } else {
                                menu_lis.classList.remove("li-checked")
                            }
                        }
                    }


                    if (typeof item.click === 'function') {
                        item.click(item, ev, menu_lis)
                    }
                    if (!item.click_keep) {
                        popMenu(0)
                        document.onclick = null
                    }


                }
            }


        })


    }


    // 控制菜单出现位置，防止 跳出窗口外
    menu_container.style.left = x + 'px'
    menu_container.style.top = y + 'px'
    resizeMenu()
    if (level === 0) {
        documentClickSet()
    }
    return {
        setTheme: setMenuTheme
    }
}

function setMenuTheme(theme) {
        current_theme = theme
        if(menu_containers.length > 0) {
            menu_containers.forEach(item=> {
                item.el.setAttribute("theme", theme)
            })
        }
}

function documentClickSet() {
    if (document.onclick) document.onclick = null
    document.onclick = ev => {
        if (menu_containers.length > 0) {
            let flag = false
            const {clientX, clientY} = ev

            for (let i = 0; i < menu_containers.length; i++) {
                const menu_container = menu_containers[i].el
                const {top, bottom, left, right} = menu_container.getBoundingClientRect()
                if (left < clientX && right > clientX && top < clientY && bottom > clientY) {
                    flag = true
                }
            }


            if (!flag) {
                popMenu(0)
                document.onclick = null
            }

        }
    }
}


function getLiElement(el, classname) {
    if (el.classList.contains(classname)) {
        return el
    }
    if (!el.parentElement) {
        return {}
    }
    return getLiElement(el.parentElement, classname)
}

function popMenu(level) {
    if (menu_containers[level]) {
        const menu_container = menu_containers.pop()
        document.body.removeChild(menu_container.el)
        if (level < menu_containers.length) {
            popMenu(level)
        }
    }
}

function getWindowSize() {
    const width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    const height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    return {
        width,
        height,
    }
}

function resizeMenu() {
    const {width: window_width, height: window_height} = getWindowSize()
    const last_menu = menu_containers[menu_containers.length - 1]
    const {right, bottom} = last_menu.el.getBoundingClientRect()


    if (right > window_width) {
        for (let i = 0; i < menu_containers.length; i++) {
            const {left,} = menu_containers[i].el.getBoundingClientRect()
            menu_containers[i].el.style.right = 'auto'
            menu_containers[i].el.style.left = left - (right - window_width) + 'px'
        }
    }

    if (bottom > window_height) {
        for (let i = 0; i < menu_containers.length; i++) {
            const {top} = menu_containers[i].el.getBoundingClientRect()
            menu_containers[i].el.style.bottom = 'auto'
            menu_containers[i].el.style.top = top - (bottom - window_height) + 'px'
        }
    }

}
