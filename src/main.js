class Slider {
    slider;
    sliderInner;
    sliderDetectionZone;
    sliderIndicatorBox;
    sliderPages;
    sliderIndicators;
    sliderTextBox;
    silderTexts;

    pageCount;
    sliderWidth;
    sliderHeight;
    sliderHeightRatio;
    sliderInnerWidth;

    startX = 0;
    endX = 0;
    pageIndex = 0;

    constructor(sliderHeightRatio) {
        this.sliderHeightRatio = sliderHeightRatio;
        this.slider = document.getElementById('slider');
        this.sliderInner = document.getElementById('sliderInner');
        this.sliderDetectionZone = document.getElementById('sliderDetectionZone');
        this.sliderIndicatorBox = document.getElementById('sliderIndicatorBox');
        this.sliderPages = document.getElementsByClassName('slider-page');
        this.sliderIndicators = document.getElementsByClassName('indicator');
        this.sliderTextBox = document.getElementById('sliderTextBox');
        this.sliderTexts = document.getElementsByClassName('sliderText');

        this.pageCount = this.sliderPages.length;

        this.setSizes();
        window.onresize = this.setSizes;

        this.sliderDetectionZone.ontouchstart = (e) => {
            this.startX = e.touches[0].clientX;
        }
        
        this.sliderDetectionZone.ontouchend = (e) => {
            this.endX = e.changedTouches[0].clientX;
            this.handleSwipe();
        }

        for(let indicatorObj of this.sliderIndicators) {
            indicatorObj.onclick = this.indicatorClick;
        }

        for(let textObj of this.sliderTexts) {
            textObj.onclick = this.textClick;
        }

        if(this.slider.classList.contains('auto')) {
            setInterval(() => {
                if(this.pageIndex < this.pageCount-1) {
                    this.pageIndex++;
                } else {
                    this.pageIndex = 0;
                }
                this.turn();
            }, 10000);
        }
    }

    turn = () => {
        this.slider.scroll(this.pageIndex*this.sliderWidth,0);
        this.setIndicators();
        this.setTexts();
    }

    setSizes = () => {
        this.sliderWidth = this.slider.offsetWidth;
        this.sliderHeight = Math.round(this.sliderWidth * this.sliderHeightRatio);
        this.sliderInnerWidth = this.sliderWidth * this.pageCount;

        this.sliderInner.style.width = this.sliderInnerWidth+'px';


        this.sliderPages = document.getElementsByClassName('slider-page');
        for(let sliderPageElement of this.sliderPages) {
            sliderPageElement.style.width = this.sliderWidth+'px';
        }

        this.sliderDetectionZone.style.width = this.sliderWidth+'px';
        this.sliderDetectionZone.style.height = this.sliderHeight+'px';
        this.sliderDetectionZone.style.marginTop = '-'+this.sliderHeight+'px';

        this.sliderTextBox.style.height = this.sliderHeight+'px';
        this.sliderTextBox.style.marginTop = '-'+this.sliderHeight+'px';
    }

    handleSwipe = () => {
        if(this.startX < this.endX) {
            // Prev
            if(this.pageIndex > 0) {
                this.pageIndex--;
            }
        } else if(this.startX > this.endX) {
            // Next
            if(this.pageIndex < this.pageCount-1) {
                this.pageIndex++;
            }
        }
        this.turn();
    }

    setIndicators = () => {
        for(let indicatorObj of this.sliderIndicators) {
            indicatorObj.innerHTML = (indicatorObj.getAttribute('indicator-num') == this.pageIndex) ? '&#9679;' : '&#9675;';
        }
    }

    indicatorClick = (e) => {
        this.pageIndex = e.target.getAttribute('indicator-num');
        this.turn();
    }

    setTexts = () => {
        for(let textObj of this.sliderTexts) {
            if(textObj.getAttribute('text-num') == this.pageIndex) {
                textObj.classList.add('active');
            } else {
                textObj.classList.remove('active');
            }
        }
    }

    textClick = (e) => {
        this.pageIndex = e.target.getAttribute('text-num');
        this.turn();
    }
}

const slider = new Slider(660/1320);