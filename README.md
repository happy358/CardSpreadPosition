# CardSpreadPosition.js 

This is a JavaScript library to calculate the difference in pixels (px) between the current screen coordinate x-value of an element and the x-value of the screen center.

![ScreenShot](./assets/ScreenShot.jpg?raw=true "CardSpreadPosition.js")

画面スクロールで要素が中央から広がるCSSアニメーション用ライブラリ  
 
JSでスクリーン座標xの中央値からの移動位置量を計算して、CSS変数に設定する
 
 
## Demo 
* demo3  
 [https://codepen.io/wakana-k/full/QWPxwGE](https://codepen.io/wakana-k/full/QWPxwGE)
  
* demo1  
  [https://codepen.io/wakana-k/full/QWPraav](https://codepen.io/wakana-k/full/QWPraav)
 
* demo2  
  [https://codepen.io/wakana-k/full/eYorVJb](https://codepen.io/wakana-k/full/eYorVJb)  
  
  
## Usage 
### html:
```html
<div class="card">...</div>
<div class="card">...</div>

<script src="https://cdn.jsdelivr.net/gh/happy358/CardSpreadPosition@v0.0.1/cardSpreadPosition.min.js"></script>
<script>
    cardSpreadPosition.run({
        element: ".card" /* your-class */
    });
</script>
```
 
### css:
```css 
@property --card-angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
}
@property --card-x {
    syntax: "<length>";
    initial-value: 0px;
    inherits: false;
}
@property --card-y {
    syntax: "<length>";
    initial-value: 0px;
    inherits: false;
}

.card {
    --card-x: 0px; /* auto set by CardSpreadPosition.js */
    --card-y: 0px; /* auto set by CardSpreadPosition.js */
    --card-angle: 0deg; /* auto set by CardSpreadPosition.js */
    
    position: relative; /* or sticky */
    width: 200px;
    height: 200px;
    
    animation: anim linear both;
    animation-timeline: view();
    animation-range: entry 25% contain 50%;
    transform-origin: center;
    transform: rotate3d(0, 0, 1, var(--card-angle))
        translate3d(var(--card-x), var(--card-y), 0);
}
@keyframes anim {
    to {
        --card-x: 0px;
        --card-y: 0px; /* if you want. */
        --card-angle: 0deg; /* if you want. */
    }
}
```
 
 
#### NOTE!  
CSSにて次の３つの変数を使用している（名前変更不可!）  
 
- --card-angle   
- --card-x   
- --card-y   
  
  
## Options 
  
```js
cardSpreadPosition.run({
    element: ".card", // default: ".card"
    rangeAngle: 10, // random angle range
    rangeX: 24, // random x-position range
    rangeY: 15, // random y-position range
    randomOrder: false // true: random z-index , default: false
});
```
 
 お好みで、X値Y値をランダムにズラしたり、角度をランダムにつけたり、z-indexで表示順をランダムにしたりできる 
