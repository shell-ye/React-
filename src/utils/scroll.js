/* 
 * 使用方法: 
 * new Scroll({
 *  el: '',  // 元素
 *  scrollPosition: 100, // 距离底部的距离
 *  scrollBottom: () => {}  // 回调函数
 * })
*/ 

class Scroll {
    constructor ({el, scrollPosition = 100, scrollBottom = () => console.log('到底了')}) {
        this.el = document.querySelector(el)
        this.scrollPosition = scrollPosition
        this.scrollBottom = scrollBottom
        this.timer = ''

        this.el.addEventListener('scroll', this.scroll)
    }

    scroll = e => {
        const lastChildrenPosition = e.target.children[e.target.children.length - 1].getBoundingClientRect()
        if ( (lastChildrenPosition.y + lastChildrenPosition.height - document.documentElement.scrollHeight) < this.scrollPosition  ) {
            clearTimeout( this.timer )
            this.timer = setTimeout(() => {
                this.scrollBottom()
            }, 500)
        }
    }
}

export default Scroll