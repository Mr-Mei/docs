# CSS常用

## **1. 文字溢出省略号**

**单行文字**溢出：

```css
overflow: hidden;            // 溢出隐藏
text-overflow: ellipsis;      // 溢出用省略号显示
white-space: nowrap;         // 规定段落中的文本不进行换行
```

**多行文字**溢出：

```css
overflow: hidden;            // 溢出隐藏
text-overflow: ellipsis;     // 溢出用省略号显示
display:-webkit-box;         // 作为弹性伸缩盒子模型显示。
-webkit-box-orient:vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列
-webkit-line-clamp:3;        // 显示的行数
```

## **2. css变量**

**CSS变量**又称**CSS自定义属性**，通过在css中**自定义属性--var**与**函数var()**组成，var()用于引用自定义属性。

```css
:root {
    --c-color: orange;
}
.title {
    background-color: var(--c-color);
}
```

## **3. 渐变**

**渐变**分为**线性渐变**、**径向渐变**，在使用线性渐变的时候，使用**角度以及百分比**去控制渐变，会更加的灵活多变。

使用方式：

```css
//渐变(方向)
background: linear-gradient(to right, rgba(255, 255, 255, 0),#3FB6F7,rgba(255,255,255,0));
//渐变(角度)
background: linear-gradient(88deg, #4DF7BF 0%, rgba(77, 247, 191, 0.26) 12%, rgba(77, 247, 191, 0) 100%);
```

![image-20230516171209373](C:\Users\mjf\AppData\Roaming\Typora\typora-user-images\image-20230516171209373.png)

**边框渐变**

border有个**border-image**的属性，类似background也有个background-image一样，通过为其设置渐变颜色后，实现的渐变，后面的数字4为x方向偏移量

使用方式：

```css
.border-grident{
  margin-top: 20px;
  width: 200px;
  height: 200px;
  border: 4px solid;
  border-image: linear-gradient(to right, #8f41e9, #578aef) 4;
}
```

![image-20230516171719510](C:\Users\mjf\AppData\Roaming\Typora\typora-user-images\image-20230516171719510.png)

## 4. **background-size：cover 、ontain和100%**

**contain**：**图片放大至满足背景区域的最小边即止**，当背景区域与背景图片的宽高比不一致时，**背景区域可能会在长边下有空白覆盖不全**。

**cover**：**图片放大至能满足背景区域最大边时为止**，当背景区域与背景图片的宽高比不一致时，**背景图片会在短边下有裁切，显示不全**。

**百分比**：可以设置两个值

- 第一个设置**宽度**，第二个设置**高度**
- 如果只设置了一个值，那么第二个值默认会被设置为auto

示例:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    *{
      margin: 0;
      padding: 0;
    }
    .bg{
      width: 100%;
      height: 300px;
      background: url('./img/mtk.png');
      /* background-size: contain; */ 
      /* background-size: cover; */
      background-size: 100%;
      background-repeat: no-repeat;
    }
  </style>
</head>
<body>
  <div class="bg"></div>
</body>
</html>
```

结果依次为下图展示:

**contain**：

![image-20230516172648240](C:\Users\mjf\AppData\Roaming\Typora\typora-user-images\image-20230516172648240.png)

**cover**：

![image-20230516172737772](C:\Users\mjf\AppData\Roaming\Typora\typora-user-images\image-20230516172737772.png)

**百分比**（这里是100%）：

![image-20230516172755483](C:\Users\mjf\AppData\Roaming\Typora\typora-user-images\image-20230516172755483.png)

