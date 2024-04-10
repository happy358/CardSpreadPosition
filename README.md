# CardSpreadPosition.js 

画面スクロールで要素が中央から広がるCSSアニメーション用ライブラリ。  
JSで移動位置量を計算して、CSS変数に設定する。
 
 
## Demo 
* demo 
  [https://codepen.io/wakana-k/full/XWQEaGQ](https://codepen.io/wakana-k/full/XWQEaGQ)
 
 
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
    --card-x: 0px;
    --card-y: 0px;
    --card-angle: 0deg;
    
    position: relative;
    width: 200px;
    height: 200px;
    
    animation: anim linear both;
    animation-timeline: view();
    animation-range: entry 10% contain 45%;
    transform-origin: center;
    transform: rotate3d(0, 0, 1, var(--card-angle))
        translate3d(var(--card-x), var(--card-y), 0);
}
@keyframes anim {
    to {
        --card-x: 0px;
        --card-y: 0px;
    }
}
```
 
 
### NOTE  
CSSにて次の３つの変数を使用している。（名前変更不可!）  
 
- --card-angle   
- --card-x   
- --card-y   
 
 
## Options 
お好みで、X値Y値をランダムにズラしたり、角度をランダムにつけたり、z-indexで表示順をランダムにしたりできる。 
 
```js
cardSpreadPosition.run({
    element: ".card", // default: ".card"
    rangeAngle: 10, // random angle range
    rangeX: 24, // random x-position range
    rangeY: 15, // random y-position range
    randomOrder: false // true: random z-index , default: false
});
```
