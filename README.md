# Slider

This project contains an interactive slider, which created with HTML5, CSS3, JavaScript and Bootstrap 5.

The navigation between the pages is able with clicking on the indicators, or swiping.

Using this slider is simple. To customize it, the edit of HTML code is enough.

# Demo version

Sources can be found in the ``src`` folder.

Demo version is also able to try with
[this link](https://sk-studio.hu/Slider)
.

# How it works

## Main HTML items

Every page has an own item in 3 HTML div: ``#sliderInner``, ``#sliderTextBox``, ``#sliderIndicatorBox``

In ``#sliderInner`` there are containers with an ``img`` item. This images makes up the page. Every image container have ``.slider-page`` class.

All images must have the same aspect ratio.

```html
<div id="sliderInner">
    <div class="slider-page">
        <img src="./img/img-1.jpg" alt="Image 1" title="Image 1">
    </div>
    <div class="slider-page">
        <img src="./img/img-2.jpg" alt="Image 2" title="Image 2">
    </div>
    ...
</div>
```

In ``#sliderTextBox`` there are texts, which are the titles of the pages. Every title is a paragraph item with ``.sliderText`` class and ``text-num`` attribute, which has a number value. This value is the index of the page. The numbering starts with 0.

```html
<div id="sliderTextBox" class="pt-2 ps-2 pt-md-3 ps-md-3">
    <p text-num="0" class="sliderText active"><span>I</span> Image 1 title</p>
    <p text-num="1" class="sliderText"><span>I</span> Image 2 title</p>
    ...
</div>
```

In ``#sliderIndicatorBox`` there are the indicators for the pages. Active indicator is a filled circle and inactive is an empty circle. Every indicator has an ``.indicator`` class.

```html
<div id="sliderIndicatorBox">
    <span class="indicator" indicator-num="0">&#9679;</span> <!-- Active indicator -->
    <span class="indicator" indicator-num="1">&#9675;</span> <!-- Inactive indicator -->
    ...
</div>
```

There is an important rule: The 3 containers must have the same number of child element.

## Automatic stepping

If Slider have ``.auto`` class, It is stepping forward in the pages in every 10 seconds.

## Slider class instantiation

In JavaScript, Slider class's constructor need 1 argument. This is a decimal number for the ratio of the page's height to width. It can be easily calculate by dividing the height by the width.

```javascript
const slider = new Slider(660/1320);
```

