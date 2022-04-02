# ucrb
UnCheckable Radio Buttons  
ラジオボタンのチェックを解除できるようになります。  

## 使い方
ucrb.js を読み込ませるだけで**すべてのラジオボタン**がチェック解除可能になります。

```html
<input type="radio" name="radio1" id="selection1"><label for="selection1">selection1</label>
<input type="radio" name="radio1" id="selection2"><label for="selection2">selection2</label>
<input type="radio" name="radio1" id="selection3"><label for="selection3">selection3</label>

<script src="ucrb.js"></script>
```

### 特定のラジオボタンだけに適用する場合
適用する範囲を特定のラジオボタンだけにしたい場合  
1.対象の input 要素に適当な class を追加  
2.ucrb.js を読み込ませる  
3.ucrb.addClass で class を指定する  

```html
<input type="radio" name="radio1" id="selection1-1"><label for="selection1-1">selection1-1</label>
<input type="radio" name="radio1" id="selection1-2"><label for="selection1-2">selection1-2</label>
<input type="radio" name="radio1" id="selection1-3"><label for="selection1-3">selection1-3</label>

<input type="radio" name="radio2" id="selection2-1" class="uncheckable"><label for="selection2-1">selection2-1</label>
<input type="radio" name="radio2" id="selection2-2" class="uncheckable"><label for="selection2-2">selection2-2</label>
<input type="radio" name="radio2" id="selection2-3" class="uncheckable"><label for="selection2-3">selection2-3</label>

<script src="ucrb.js"></script>
<script>ucrb.addClass("uncheckable");</script>
```