function SignPublic(options) {
    this.config = options || {}
    this.init()
}
SignPublic.prototype = {
    init() {
        this.getDom()
        this.addEvent()
    },
    addEvent() {
        let that = this;
        //this.removeClassName()
        for (let i = 0; i < this.item.length; i++) {

            this.item[i].onclick = function() {
                if (!that.config.flag) {
                    that.removeClassName()
                    this.className = that.activeClass
                } else {
                    //this.classList.remove(that.activeClass)
                    this.classList.toggle(that.activeClass)
                }


            }

        }


    },
    getDom() {
        this.wrap = document.querySelector(this.config.wrap);
        this.item = this.wrap.querySelectorAll(this.config.item);
        this.activeClass = this.config.activeClass
    },
    removeClassName() {
        let that = this
        for (let j = 0; j < that.item.length; j++) {
            that.item[j].classList.remove(that.activeClass)
        }
    }
}