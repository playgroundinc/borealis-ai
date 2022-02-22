export default class GalleryClass {
    constructor(selector) {
        this.selector = selector;
        this.handleDrag = this.handleDrag.bind(this);
        this.dragged = false;
        this.setState = this.setState.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.removeListeners = this.removeListeners.bind(this);
    }

    setState(name, value) {
        this[name] = value;
    }

    setHeight() {
        const parent = this.selector.parentElement;
        const listItems = [...this.selector.querySelectorAll('li')];
        if (listItems.length > 0) {
            const heights = listItems.map((item) => {
                if (Number(item.offsetHeight) < 150) {
                    return 550;
                }
                return Number(item.offsetHeight) + 150;
            })
            const maxHeight = Math.max(...heights);
            parent.style.paddingTop = `${maxHeight}px`;
        }


    }

    removeListeners(e) {
        this.setState('pageXStart', null);
        this.setState('pageXEnd', null);
        this.setState('dragged', false);
        this.selector.removeEventListener('mousemove', this.handleMouseMove);
        this.selector.removeEventListener('mouseup', this.handleMouseUp);
        this.selector.removeEventListener('touchmove', this.handleMouseMove);
        this.selector.removeEventListener('touchend', this.handleMouseUp);
    }
    addListeners() {
        this.pageXStart = null;
        this.pageXEnd = null;
        this.selector.addEventListener('mousedown', this.handleDrag);
        window.addEventListener('mouseup', this.removeListeners);
        const links = [...this.selector.querySelectorAll('a')];
        if (links.length > 0) {
            links.forEach((link) => {
                link.addEventListener('click', (e) => { e.preventDefault()});
                link.addEventListener('mousedown', this.handleDrag);
            })
        }
    }

    calculateDrag() {
        const drag = this.pageXEnd - this.pageXStart;
        return drag;
    }

    handleMouseMove(e) {
        const end = e.touches && e.touches[0].clientX ? e.touches[0].clientX : e.pageX;
        if (end) {
            this.setState('pageXEnd', end);
        } else {
            this.setState('pageXEnd', this.pageXStart);
        }
        const drag = this.calculateDrag();
        if (drag > 5 || drag < -5) {
            this.setState('dragged', true);
        }
        this.selector.scrollLeft = Number(this.selector.scrollLeft) - Number(drag * 0.2);
    }
    handleClick(e) {
        let link = null;
        if (e.target.tagName === 'A') {
            link = e.target;
        } 
        if (e.target.parentElement.tagName === 'A') {
            link = e.target.parentElement;
        }
        if (link) {
            const href = link.getAttribute('href');
            if (href) {
                window.location = href;
            }
        }
    }

    handleMouseUp(e) {
        e.preventDefault();
        console.log('mouse up')
        if (!this.pageXEnd) {
            this.setState('pageXEnd', this.pageXStart);
        }
        const drag = this.calculateDrag();
        if (drag < 6 && !this.dragged) {
            this.handleClick(e);
        }
        this.removeListeners()
    }

    handleDrag(e) {
        e.preventDefault();
        const start = e.touches && e.touches[0].clientX ? e.touches[0].clientX : e.pageX;
        this.setState('pageXStart', start);
        this.selector.addEventListener('touchmove', this.handleMouseMove);
        this.selector.addEventListener('touchend', this.handleMouseUp);            
        this.selector.addEventListener('mousemove', this.handleMouseMove);
        this.selector.addEventListener('mouseup', this.handleMouseUp);
    }

    init() {
        this.addListeners();
        this.setHeight();
    }
}