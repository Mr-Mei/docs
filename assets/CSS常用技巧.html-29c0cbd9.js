import{_ as n,o as s,c as a,e as t}from"./app-8e420b99.js";const p="/images/CSS/线性渐变.jpg",e="/images/CSS/边框渐变.jpg",c="/images/CSS/contain.jpg",i="/images/CSS/cover.jpg",l="/images/CSS/百分比.jpg",o="/images/CSS/三角形.jpg",u="/images/CSS/下三角形.jpg",r="/images/CSS/凸弧形.jpg",d="/images/CSS/凹弧形.jpg",k={},v=t(`<h1 id="css常用技巧" tabindex="-1"><a class="header-anchor" href="#css常用技巧" aria-hidden="true">#</a> CSS常用技巧</h1><h2 id="_1-文字溢出省略号" tabindex="-1"><a class="header-anchor" href="#_1-文字溢出省略号" aria-hidden="true">#</a> <strong>1. 文字溢出省略号</strong></h2><p><strong>单行文字</strong>溢出：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>            // 溢出隐藏
<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>      // 溢出用省略号显示
<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>         // 规定段落中的文本不进行换行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>多行文字</strong>溢出：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>            // 溢出隐藏
<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>     // 溢出用省略号显示
<span class="token property">display</span><span class="token punctuation">:</span>-webkit-box<span class="token punctuation">;</span>         // 作为弹性伸缩盒子模型显示。
<span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span>vertical<span class="token punctuation">;</span> // 设置伸缩盒子的子元素排列方式：从上到下垂直排列
<span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span>3<span class="token punctuation">;</span>        // 显示的行数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-css变量" tabindex="-1"><a class="header-anchor" href="#_2-css变量" aria-hidden="true">#</a> <strong>2. css变量</strong></h2><p><strong>CSS变量</strong>又称<strong>CSS自定义属性</strong>，通过在css中<strong>自定义属性--var</strong>与**函数var()**组成，var()用于引用自定义属性。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token property">--c-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.title</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-渐变" tabindex="-1"><a class="header-anchor" href="#_3-渐变" aria-hidden="true">#</a> <strong>3. 渐变</strong></h2><p><strong>渐变</strong>分为<strong>线性渐变</strong>、<strong>径向渐变</strong>，在使用线性渐变的时候，使用<strong>角度以及百分比</strong>去控制渐变，会更加的灵活多变。</p><p>使用方式：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>//渐变<span class="token punctuation">(</span>方向<span class="token punctuation">)</span>
<span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">,</span>#3FB6F7<span class="token punctuation">,</span><span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span>255<span class="token punctuation">,</span>255<span class="token punctuation">,</span>0<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
//渐变<span class="token punctuation">(</span>角度<span class="token punctuation">)</span>
<span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>88deg<span class="token punctuation">,</span> #4DF7BF 0%<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>77<span class="token punctuation">,</span> 247<span class="token punctuation">,</span> 191<span class="token punctuation">,</span> 0.26<span class="token punctuation">)</span> 12%<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>77<span class="token punctuation">,</span> 247<span class="token punctuation">,</span> 191<span class="token punctuation">,</span> 0<span class="token punctuation">)</span> 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt="image-20230516171209373"></p><p><strong>边框渐变</strong></p><p>border有个<strong>border-image</strong>的属性，类似background也有个background-image一样，通过为其设置渐变颜色后，实现的渐变，后面的数字4为x方向偏移量</p><p>使用方式：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.border-grident</span><span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 4px solid<span class="token punctuation">;</span>
  <span class="token property">border-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #8f41e9<span class="token punctuation">,</span> #578aef<span class="token punctuation">)</span> 4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+e+`" alt="image-20230516171719510"></p><h2 id="_4-background-size-cover-、ontain和100" tabindex="-1"><a class="header-anchor" href="#_4-background-size-cover-、ontain和100" aria-hidden="true">#</a> 4. <strong>background-size：cover 、ontain和100%</strong></h2><p><strong>contain</strong>：<strong>图片放大至满足背景区域的最小边即止</strong>，当背景区域与背景图片的宽高比不一致时，<strong>背景区域可能会在长边下有空白覆盖不全</strong>。</p><p><strong>cover</strong>：<strong>图片放大至能满足背景区域最大边时为止</strong>，当背景区域与背景图片的宽高比不一致时，<strong>背景图片会在短边下有裁切，显示不全</strong>。</p><p><strong>百分比</strong>：可以设置两个值</p><ul><li>第一个设置<strong>宽度</strong>，第二个设置<strong>高度</strong></li><li>如果只设置了一个值，那么第二个值默认会被设置为auto</li></ul><p>示例:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span><span class="token punctuation">{</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.bg</span><span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./img/mtk.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
      <span class="token comment">/* background-size: contain; */</span> 
      <span class="token comment">/* background-size: cover; */</span>
      <span class="token property">background-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果依次为下图展示:</p><p><strong>contain</strong>：</p><p><img src="`+c+'" alt="image-20230516172648240"></p><p><strong>cover</strong>：</p><p><img src="'+i+'" alt="image-20230516172737772"></p><p><strong>百分比</strong>（这里是100%）：</p><p><img src="'+l+`" alt="image-20230516172755483"></p><h2 id="_5-css伪类三角形" tabindex="-1"><a class="header-anchor" href="#_5-css伪类三角形" aria-hidden="true">#</a> <strong>5. css伪类三角形</strong></h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>css-三角形<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.triangle</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 100px solid<span class="token punctuation">;</span>
        <span class="token property">border-color</span><span class="token punctuation">:</span> orangered skyblue gold yellowgreen<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>triangle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+`" alt="image-20230517093714860"></p><p>如果想要一个下的三角形，可以让border的上边框可见，其他边框颜色都设置为透明</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.down-triangle</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> 50px solid skyblue<span class="token punctuation">;</span>
    <span class="token property">border-right</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
    <span class="token property">border-left</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt="image-20230517094251925"></p><h2 id="_6-媒体查询" tabindex="-1"><a class="header-anchor" href="#_6-媒体查询" aria-hidden="true">#</a> 6. 媒体查询</h2><p>页面头部必须有meta关于<strong>viewport</strong>的声明</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width,initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">maximum-scale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1,user-scalable=no<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>常在做响应式布局的时候，以及大屏的时候很常用的，从而实现在不同分辨率下，实现不同的展示效果</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 超过1920分辨率后显示多列 */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span>1920px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.car_box.el-card</span> <span class="token punctuation">{</span>
    <span class="token property">min-width</span><span class="token punctuation">:</span> 450px <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 450px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-elementui样式修改的几种方式" tabindex="-1"><a class="header-anchor" href="#_7-elementui样式修改的几种方式" aria-hidden="true">#</a> <strong>7. elementui样式修改的几种方式</strong></h2><p>在vue中，修改<strong>elementui</strong>的样式，style使用css的预处理器(less, sass, scss)的写法：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">// 第一种/deep/
/deep/ .test</span> <span class="token punctuation">{</span>
 ***
<span class="token punctuation">}</span>

<span class="token selector">// 第二种::v-deep
::v-deep .test</span><span class="token punctuation">{</span>
 ***
<span class="token punctuation">}</span>
<span class="token selector">// 第三种，如果提示使用::deep代替::v-deep
::deep .test</span><span class="token punctuation">{</span>
 ***
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<strong>elementui中table</strong>的全部样式：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">① 修改表格头部背景
::v-deep .el-table th</span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">② 修改表格行背景
::v-deep .el-table tr</span><span class="token punctuation">{</span>
  	<span class="token property">background</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">③ 修改斑马线表格的背景
::v-deep .el-table--striped .el-table__body tr.el-table__row--striped td</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">④ 修改行内线的颜色
::v-deep .el-table td,.el-table th.is-leaf</span> <span class="token punctuation">{</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span>  2px solid #eee<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">⑤ 修改表格最底部边框颜色和高度
::v-deep .el-table::before</span><span class="token punctuation">{</span>
  	<span class="token property">border-bottom</span><span class="token punctuation">:</span>  1px solid #ccc<span class="token punctuation">;</span>
  	<span class="token property">height</span><span class="token punctuation">:</span> 3px
<span class="token punctuation">}</span>
<span class="token selector">⑥ 修改表头字体颜色
::v-deep .el-table thead</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> 700<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">⑦ 修改表格内容字体颜色和字体大小
::v-deep .el-table</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #6B91CE<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">⑧ 修改表格无数据的时候背景，字体颜色
::v-deep .el-table__empty-block</span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token selector">::v-deep .el-table__empty-text</span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff
<span class="token punctuation">}</span>
<span class="token selector">⑨ 修改表格鼠标悬浮hover背景色
::v-deep .el-table--enable-row-hover .el-table__body tr:hover&gt;td</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-css实现底部弧度的小技巧" tabindex="-1"><a class="header-anchor" href="#_8-css实现底部弧度的小技巧" aria-hidden="true">#</a> 8. CSS实现底部弧度的小技巧</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/** 凸圆弧 */</span>
<span class="token selector">html:
    &lt;div class=&quot;top&quot;&gt;&lt;/div &gt;
css:
.top</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.top:after</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 180%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -40%<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 0 0 50% 50%<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>71<span class="token punctuation">,</span> 71<span class="token punctuation">,</span> 245<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
	先将元素自身定位为relative，伪类设置content:&#39;&#39;，并绝对定位absolute，再设置下left ,top 值，然后通过改变width和和left就可以调节弧度。宽度需大于100%，将left设为（100%-宽度）/ 2，然后宽度越接近100%，弧度越大，相当方便。因为大部分的底部弧线都是用于背景的，实际应用的话外面只要套一个绝对定位的容器就可以了，简单实用。
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="凸弧形"></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/** 凹圆弧 */</span>
<span class="token selector">html:
    &lt;div class=&quot;top&quot;&gt;&lt;/div &gt;
css:
.top</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.top:after</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> -11px<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt="凹弧形"></p><h2 id="_9-calc-动态计算函数" tabindex="-1"><a class="header-anchor" href="#_9-calc-动态计算函数" aria-hidden="true">#</a> 9. calc() 动态计算函数</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>定义用法：
<span class="token function">calc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 函数用于动态计算长度值。
<span class="token property">需要注意的是，运算符前后都需要保留一个空格，例如：width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 10px<span class="token punctuation">)</span>，设置宽度比100%的宽度少10px ；
任何长度值都可以使用<span class="token function">calc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>函数进行计算；
<span class="token function">calc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>函数支持 <span class="token string">&quot;+&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span> 运算；
<span class="token function">calc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>函数使用标准的数学运算优先级规则；
支持版本：CSS3
常被用于自动调整表单域的大小以适应其容器的大小
使用如下：
<span class="token comment">/** div宽度为其容器的宽度减 - 100px */</span>
<span class="token selector">#div</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/** input宽度为其容器的宽度减 1em */</span>
<span class="token selector">input</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1em<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/** form 元素自身使用了窗口可用宽度的 1/6 */</span>
<span class="token selector">#formbox</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% / 6<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-css-不定宽高的垂直水平居中" tabindex="-1"><a class="header-anchor" href="#_10-css-不定宽高的垂直水平居中" aria-hidden="true">#</a> 10. CSS 不定宽高的垂直水平居中</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">1、flex
利用到了 2 个关键属性：justify-content 和 align-items，都设置为 center，即可实现居中。

&lt;div class=&quot;wrapper flex-center&quot;&gt;
    &lt;p&gt;horizontal and vertical&lt;/p&gt;
&lt;/div&gt;
.wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.flex-center</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

2、flex + margin
这是 flex 方法的变种，父级元素设置 flex，子元素设置 <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>。可以理解为子元素被四周的 <span class="token selector">margin “挤” 到了中间。

&lt;div class=&quot;wrapper&quot;&gt;
    &lt;p&gt;horizontal and vertical&lt;/p&gt;
&lt;/div&gt;
.wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper &gt; p</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">3、transform + absolute
这个组合，常用于图片的居中显示。

&lt;div class=&quot;wrapper&quot;&gt;
    &lt;img src=&quot;test.png&quot;&gt;
&lt;/div&gt;
.wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper &gt; img</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">4、table-cell
利用 table 的单元格居中效果展示，与 flex 一样，需要写在父级元素上。

&lt;div class=&quot;wrapper&quot;&gt;
    &lt;p&gt;horizontal and vertical&lt;/p&gt;
&lt;/div&gt;
.wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">5、absolute + 四个方向的值相等
使用绝对定位布局，设置 margin:auto，并设置 top、left、right、bottom 的值相等即可（不一定要都是 0）。
这种方法一般用于弹出层，需要设置弹出层的宽高。

&lt;div class=&quot;wrapper&quot;&gt;
    &lt;p&gt;horizontal and vertical&lt;/p&gt;
&lt;/div&gt;
.wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper &gt; p</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 170px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">6、writing-mode
这个方法可以改变文字的显示方向，比如让文字的显示变为垂直方向。
兼容性上还有些小瑕疵，但大部分浏览器，包括手机端已支持 writing-mode 的写法了。

&lt;div class=&quot;wrapper&quot;&gt;
    &lt;div class=&quot;wrapper-inner&quot;&gt;
        &lt;p&gt;horizontal and vertical&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;
.wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
    <span class="token property">writing-mode</span><span class="token punctuation">:</span> vertical-lr<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper &gt; .wrapper-inner</span> <span class="token punctuation">{</span>
    <span class="token property">writing-mode</span><span class="token punctuation">:</span> horizontal-tb<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper &gt; .wrapper-inner &gt; p</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">7、grid
像表格一样，网格布局让我们能够按行或列来对齐元素。然而在布局上，网格比表格更可能做到或更简单。
但它在兼容性上不如 flex，特别是 IE 浏览器，只支持 IE10 及以上。

&lt;div class=&quot;wrapper&quot;&gt;
    &lt;p&gt;horizontal and vertical&lt;/p&gt;
&lt;/div&gt;
.wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
 
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper &gt; p</span> <span class="token punctuation">{</span>
    <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">justify-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">8、::after
神奇的伪元素也能用来实现居中。

&lt;div class=&quot;wrapper&quot;&gt;
    &lt;img src=&quot;test.png&quot;&gt;
&lt;/div&gt;
.wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper::after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper &gt; img</span> <span class="token punctuation">{</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token property">水平方向很好理解。垂直方向，可以理解为</span> <span class="token punctuation">:</span><span class="token punctuation">:</span>after 把 img 往下拉到了中间。

9、<span class="token punctuation">:</span><span class="token punctuation">:</span>before
另一种是配合 <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> 共同施展的魔法。
<span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token selector">的神秘之处在于，可以消除标签之间的间隙。另外，因为伪元素搭配的，都是最基础的 CSS 写法，所以不存在兼容性的风险。

&lt;div class=&quot;wrapper&quot;&gt;
    &lt;img src=&quot;test.png&quot;&gt;
&lt;/div&gt;
.wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper::before</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper &gt; img</span> <span class="token punctuation">{</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-css给未知宽高的元素添加背景图" tabindex="-1"><a class="header-anchor" href="#_11-css给未知宽高的元素添加背景图" aria-hidden="true">#</a> <strong>11. css给未知宽高的元素添加背景图</strong></h2><p>1、添加背景图</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>format-detection<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>telephone=no<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>format-detection<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email=no<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span><span class="token punctuation">{</span><span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token punctuation">}</span>
        <span class="token selector">#wrap</span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
			<span class="token property">background</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;p_w_picpaths/page-small.jpg&#39;</span><span class="token punctuation">)</span></span> no-repeat<span class="token punctuation">;</span>
			<span class="token property">background-size</span><span class="token punctuation">:</span>cover<span class="token punctuation">;</span>
            
			<span class="token property">position</span><span class="token punctuation">:</span>fixed<span class="token punctuation">;</span>
			<span class="token property">z-index</span><span class="token punctuation">:</span>-10<span class="token punctuation">;</span>
			<span class="token property">background-position</span><span class="token punctuation">:</span>0 0<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、通过img标签添加背景图</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>format-detection<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>telephone=no<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>format-detection<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email=no<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span><span class="token punctuation">{</span><span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token punctuation">}</span>
        <span class="token selector">.imgBcground</span><span class="token punctuation">{</span>
			<span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span>
			<span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
			<span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
			<span class="token property">position</span><span class="token punctuation">:</span>fixed<span class="token punctuation">;</span>
			<span class="token property">z-index</span><span class="token punctuation">:</span>-10<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgBcground<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p_w_picpaths/page-small.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-实用的css技巧" tabindex="-1"><a class="header-anchor" href="#_12-实用的css技巧" aria-hidden="true">#</a> 12. 实用的css技巧</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">1、首字母放大
:first-letter 选择器用于指定元素首字母的样式，它只适用于块级元素。
p:first-letter</span> <span class="token punctuation">{</span>
     <span class="token property">font-size</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>
     <span class="token property">color</span><span class="token punctuation">:</span> #8A2BE2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">在线演示地址：https://codepen.io/OMGZui/pen/oNEMVvN

2、 图文环绕
Shape-outside 是一个允许设置形状的 CSS 属性，它还有助于定义文本流动的区域.
在线演示地址：https://codepen.io/OMGZui/pen/JjpBzGP

3、使用 :where() 简化代码
将相同的样式应用于多个元素时，CSS 可能如下所示：
.page div,
.paget .title,
.page #article</span> <span class="token punctuation">{</span>
 	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">这段代码看起来可读性不太友好，这时:where() 伪类就派上用场了。
:where() 伪类函数接受一个选择器列表作为其参数，并将选择所有可以通过选择器列表中的任何规则选择的元素。
上面的代码可以使用 :where() 替换：
.page :where(div, .title, #article)</span> <span class="token punctuation">{</span>
 	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

4、透明图像的阴影
您是否曾经尝试过向透明图像添加框阴影，只是为了让它看起来像您添加了边框？
它的工作方式是 drop-shadow 属性跟随给定图像的 alpha 通道。因此，阴影基于图像内部的形状，而不是显示在图像外部。
<span class="token property">在线演示地址：https</span><span class="token punctuation">:</span>//codepen.io/OMGZui/pen/bGLjJNO

5、文字打字效果
借助 CSS 动画功能，我们可以使网页设计变得越来越有创意，还可以让网页栩栩如生。在此示例中，我们使用动画和“<span class="token atrule"><span class="token rule">@keyframes</span>”属性来实现打字机效果。
<span class="token property">在线演示地址：https</span><span class="token punctuation">:</span>//codepen.io/OMGZui/pen/MWQBxqd
具体来说，对于这个演示，我们实现了 <span class="token function">steps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 属性来分割我们的文本动画。
首先，我们必须指定 <span class="token function">steps</span><span class="token punctuation">(</span><span class="token punctuation">)</span>，在这个例子中，我们希望设置动画的文本的字符长度。
其次，我们使用“@keyframes”来声明动画何时开始。例如，如果您在“Typing effect for text”之后写了另一个词，除非您更改 CSS 代码段中的 <span class="token function">steps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 数量，否则动画将不会运行。
也就是说，这种效果并不是特别新鲜。然而，大多数开发人员涌向 JavaScript 库，尽管使用 CSS 可以实现相同的结果。

6、设置自定义光标
您不太可能需要强迫访问者进入一个独特的光标。至少，不是为了一般的用户体验目的。不过，关于 cursor 属性需要注意的一件事是它允许您显示图像。这相当于以照片格式显示工具提示。
一些用例包括能够比较两张不同的照片而无需在视口中渲染这些照片。例如。游标属性可用于节省设计中的空间。由于您可以将自定义光标锁定到特定的 div 元素，它不会干扰它之外的元素。
<span class="token property">在线演示地址：https</span><span class="token punctuation">:</span>//codepen.io/OMGZui/pen/abqjMXd

7、 纯 CSS实现列表清单
<span class="token property">在线演示地址：https</span><span class="token punctuation">:</span>//codepen.io/OMGZui/pen/yLvqwZW
<span class="token property">它的工作方式是我们将复选框输入类型与</span> <span class="token punctuation">:</span>checked <span class="token property">伪类一起使用。并在</span> <span class="token punctuation">:</span>checked 规范返回 true 时使用 transform 属性更改状态。
您可以使用这种方法实现各种目标。例如，当用户单击特定复选框时切换隐藏内容。它适用于单选框和复选框等输入类型，但也可以应用于 &lt;option&gt; 和 &lt;select&gt; 元素。

8、文字描边
.custom-headline</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">-webkit-text-stroke</span><span class="token punctuation">:</span> 1px #04D939<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">9、Line Clamp
这个技巧可用于减少跨越多行的文本，我们只需要设置overflow:hidden即可。
.custom-button</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">10、固定页面头部
页面头部导航固定形式的效果，特别是页面内容很长的一些布局，这个效果非常实用，也是很多网站上比较常见的效果。
.custom-table</span> <span class="token punctuation">{</span>
  <span class="token selector">thead tr</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">11、Place Items
这是 grid 和 flexbox align-items 和 justify-items 的快捷属性。
.custom-wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr<span class="token punctuation">;</span>
  <span class="token property">place-items</span><span class="token punctuation">:</span> center center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">12、显示占位符
如果尚未填充是否需要突出显示 &lt;input&gt; 或 &lt;textarea&gt; 元素？然后，你可以使用占位符来显示其空间。
input:placeholder-shown</span> <span class="token punctuation">{</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 2px solid #04D939<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

13、<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">hover</span><span class="token punctuation">:</span> hover<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">pointer</span><span class="token punctuation">:</span> fine<span class="token punctuation">)</span>
在移动设备上，hover 属性可能存在问题。
每次点击，悬停状态也被执行。但是，@<span class="token function">media</span><span class="token punctuation">(</span><span class="token property">hover</span><span class="token punctuation">:</span> hover<span class="token punctuation">)</span> 和<span class="token punctuation">(</span><span class="token property">pointer</span><span class="token punctuation">:</span> fine<span class="token punctuation">)</span> <span class="token property">中使用了</span><span class="token punctuation">:</span>hover 属性时，悬停只在非触摸设备上可见。
这是悬停箭头动画的示例：
@media <span class="token punctuation">(</span><span class="token property">hover</span><span class="token punctuation">:</span> hover<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">pointer</span><span class="token punctuation">:</span> fine<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">arrow:hover</span> <span class="token punctuation">{</span>
      <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #027333<span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0.5rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">14、列数
此属性可用于生成基本文本列数。
在此示例中，这里有两个 &lt;p&gt; 标签，列数为 2。
.wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">column-count</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">15、实现平滑滚动
凡是需要滚动的地方都加一句scroll-behavior:smooth 来提升滚动体验！
a、经常使用的锚点定位功能就有了平滑定位功能，如
&lt;a href=&quot;#&quot;&gt;返回顶部&lt;/a&gt;
b、全局css中也建议添加
html, body</span> <span class="token punctuation">{</span> <span class="token property">scroll-behavior</span><span class="token punctuation">:</span>smooth<span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token selector">16、背景混合模式
.blend-2</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../xx/xxx.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #20126f<span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
  <span class="token property">background-blend-mode</span><span class="token punctuation">:</span> overlay<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

background-blend-mode分为如下几种模式 
normal：默认值。设置正常的混合模式
multiply：正片叠底模式
screen：滤色模式
overlay：叠加模式
darken：变暗模式
lighten：变亮模式
color-dodge：颜色减淡模式
saturation：饱和度模式
color：颜色模式
luminosity：亮度模式

17、图像填充文字效果
background-clip 属性规定背景的绘制区域
border-box：以盒边界来裁剪
padding-box：以内边距为边界来裁剪
content-box：以内容区域来裁剪

回归主题：
<span class="token property">background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span> <span class="token selector">顾名思义 就是 以文字的范围来裁剪背景图片
h1</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./flower.jpg&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
  <span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">18、文字描边效果
div</span><span class="token punctuation">{</span>
 <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
 <span class="token property">font-size</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">-webkit-text-stroke</span><span class="token punctuation">:</span> 2px blue<span class="token punctuation">;</span>
  <span class="token property">text-stroke</span><span class="token punctuation">:</span> 2px blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;div&gt;
这是文本。
&lt;/div&gt;
text-stroke 属性值中有两部分，第一部分是文字描边的宽度，第二部分是文字描边的颜色。

19、将文本设为大写或小写
<span class="token comment">/* 大写 */</span>
<span class="token selector">.upper</span> <span class="token punctuation">{</span>
  <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 小写 */</span>
<span class="token selector">.lower</span> <span class="token punctuation">{</span>
  <span class="token property">text-transform</span><span class="token punctuation">:</span> lowercase<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">&lt;div class=&quot;upper&quot;&gt;
    fdsdsdsd
&lt;/div&gt;
&lt;div class=&quot;lower&quot;&gt;
    DFDSWRREE
&lt;/div&gt;

20、暂停/播放伪类
:paused 伪类可以为处于暂停状态的媒体元素设置样式

video:paused</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0.6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">需要注意，目前仅 Safari 支持该伪类:paused

21、毛玻璃特效
.login</span> <span class="token punctuation">{</span>
  <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>5px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">其他参数：
blur()
模糊: blur(5px)
亮度: brightness(1.4)
对比度: contrast(2)
投影: drop-shadow(4px 4px 8px #fff)
灰度: grayscale(60%)
色调变化: hue-rotate(66deg)
反相: invert(60%)
透明度: opacity(50%)
饱和度: saturate(250%)
褐色: sepia(70%)

22、自定义光标
body</span><span class="token punctuation">{</span>  
   <span class="token property">cursor</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;path-to-image.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">,</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">cursor 内置属性：
default      默认光标（通常是一个箭头）
auto         默认。浏览器设置的光标
crosshair    光标呈现为十字线
pointer      光标呈现为指示链接的指针（一只手）
move         此光标指示某对象可被移动
e-resize     此光标指示矩形框的边缘可被向右（东）移动
ne-resize    此光标指示矩形框的边缘可被向上及向右移动（北/东）
nw-resize    此光标指示矩形框的边缘可被向上及向左移动（北/西）
n-resize     此光标指示矩形框的边缘可被向上（北）移动
se-resize    此光标指示矩形框的边缘可被向下及向右移动（南/东）
sw-resize    此光标指示矩形框的边缘可被向下及向左移动（南/西）
s-resize     此光标指示矩形框的边缘可被向下移动（南）
w-resize     此光标指示矩形框的边缘可被向左移动（西）
text         此光标指示文本
wait         此光标指示程序正忙（通常是一只表或沙漏）
help         此光标指示可用的帮助（通常是一个问号或一个气球

23、裁剪各种形状
div</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> crimson<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

语法详解
1、矩形：
<span class="token function">inset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> 定义一个矩形 。注意，定义矩形不是rect，而是 inset
<span class="token function">inset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>可以传入5个参数，分别对应top<span class="token punctuation">,</span>right<span class="token punctuation">,</span>bottom<span class="token punctuation">,</span>left的裁剪位置<span class="token punctuation">,</span>round radius（可选，圆角）

//示例
<span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>2em 3em 2em 1em round 2em<span class="token punctuation">)</span><span class="token punctuation">;</span>

2、圆形：
<span class="token function">circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> 定义一个圆
<span class="token function">circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>可以传人2个可选参数；
a. 圆的半径，默认元素宽高中短的那个为直径，支持百分比
b. 圆心位置，默认为元素中心点

//示例
<span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">circle</span><span class="token punctuation">(</span>30% at 150px 120px<span class="token punctuation">)</span><span class="token punctuation">;</span>

3、椭圆：
<span class="token function">ellipse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> 定义一个椭圆 
<span class="token function">ellipse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>可以传人3个可选参数；
a. 椭圆的X轴半径，默认是宽度的一半，支持百分比
b. 椭圆的Y轴半径，默认是高度的一半，支持百分比
c. 椭圆中心位置，默认是元素的中心点

//示例
<span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">ellipse</span><span class="token punctuation">(</span>45% 30% at 50% 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>

4、多边形
<span class="token function">polygon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> 定义一个多边形 
//语法
<span class="token function">polygon</span><span class="token punctuation">(</span> &lt;fill-rule&gt;? <span class="token punctuation">,</span> [ &lt;length-percentage&gt; &lt;length-percentage&gt; ]# <span class="token punctuation">)</span>
//说明
&lt;fill-rule&gt;可选，表示填充规则用来确定该多边形的内部。可能的值有nonzero和evenodd<span class="token punctuation">,</span>默认值是nonzero
后面的每对参数表示多边形的顶点坐标（X<span class="token punctuation">,</span>Y），也就是连接点

//示例
<span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>50% 0<span class="token punctuation">,</span>100% 50%<span class="token punctuation">,</span>0 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>

其他图形：
<span class="token property">矩形：clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>5% 20% 15% 10%<span class="token punctuation">)</span>
<span class="token property">三角形：clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>50% 0%<span class="token punctuation">,</span> 0% 100%<span class="token punctuation">,</span> 100% 100%<span class="token punctuation">)</span>
<span class="token property">菱形：clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>50% 0%<span class="token punctuation">,</span> 100% 50%<span class="token punctuation">,</span> 50% 100%<span class="token punctuation">,</span> 0% 50%<span class="token punctuation">)</span>
<span class="token property">梯形：clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>20% 0%<span class="token punctuation">,</span> 80% 0%<span class="token punctuation">,</span> 100% 100%<span class="token punctuation">,</span> 0% 100%<span class="token punctuation">)</span>
<span class="token property">平行四边形：clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>25% 0%<span class="token punctuation">,</span> 100% 0%<span class="token punctuation">,</span> 75% 100%<span class="token punctuation">,</span> 0% 100%<span class="token punctuation">)</span>
<span class="token property">五边形：clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>50% 0%<span class="token punctuation">,</span> 100% 38%<span class="token punctuation">,</span> 82% 100%<span class="token punctuation">,</span> 18% 100%<span class="token punctuation">,</span> 0% 38%<span class="token punctuation">)</span>
<span class="token property">六边形：clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>50% 0%<span class="token punctuation">,</span> 100% 25%<span class="token punctuation">,</span> 100% 75%<span class="token punctuation">,</span> 50% 100%<span class="token punctuation">,</span> 0% 75%<span class="token punctuation">,</span> 0% 25%<span class="token punctuation">)</span>
<span class="token property">七边形：clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>50% 0%<span class="token punctuation">,</span> 90% 20%<span class="token punctuation">,</span> 100% 60%<span class="token punctuation">,</span> 75% 100%<span class="token punctuation">,</span> 25% 100%<span class="token punctuation">,</span> 0% 60%<span class="token punctuation">,</span> 10% 20%<span class="token punctuation">)</span>
<span class="token property">八边形：clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>30% 0%<span class="token punctuation">,</span> 70% 0%<span class="token punctuation">,</span> 100% 30%<span class="token punctuation">,</span> 100% 70%<span class="token punctuation">,</span> 70% 100%<span class="token punctuation">,</span> 30% 100%<span class="token punctuation">,</span> 0% 70%<span class="token punctuation">,</span> 0% 30%<span class="token punctuation">)</span>
<span class="token property">斜角：clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>20% 0%<span class="token punctuation">,</span> 80% 0%<span class="token punctuation">,</span> 100% 20%<span class="token punctuation">,</span> 100% 80%<span class="token punctuation">,</span> 80% 100%<span class="token punctuation">,</span> 20% 100%<span class="token punctuation">,</span> 0% 80%<span class="token punctuation">,</span> 0% 20%<span class="token punctuation">)</span>
<span class="token property">槽口：clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>0% 15%<span class="token punctuation">,</span> 15% 15%<span class="token punctuation">,</span> 15% 0%<span class="token punctuation">,</span> 85% 0%<span class="token punctuation">,</span> 85% 15%<span class="token punctuation">,</span> 100% 15%<span class="token punctuation">,</span> 100% 85%<span class="token punctuation">,</span> 85% 85%<span class="token punctuation">,</span> 85% 100%<span class="token punctuation">,</span> 15% 100%<span class="token punctuation">,</span> 15% 85%<span class="token punctuation">,</span> 0% 85%<span class="token punctuation">)</span>
<span class="token property">左箭头：clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>40% 0%<span class="token punctuation">,</span> 40% 20%<span class="token punctuation">,</span> 100% 20%<span class="token punctuation">,</span> 100% 80%<span class="token punctuation">,</span> 40% 80%<span class="token punctuation">,</span> 40% 100%<span class="token punctuation">,</span> 0% 50%<span class="token punctuation">)</span>
<span class="token property">右箭头：clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>0% 20%<span class="token punctuation">,</span> 60% 20%<span class="token punctuation">,</span> 60% 0%<span class="token punctuation">,</span> 100% 50%<span class="token punctuation">,</span> 60% 100%<span class="token punctuation">,</span> 60% 80%<span class="token punctuation">,</span> 0% 80%<span class="token punctuation">)</span>
<span class="token property">星星：clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>50% 0%<span class="token punctuation">,</span> 61% 35%<span class="token punctuation">,</span> 98% 35%<span class="token punctuation">,</span> 68% 57%<span class="token punctuation">,</span> 79% 91%<span class="token punctuation">,</span> 50% 70%<span class="token punctuation">,</span> 21% 91%<span class="token punctuation">,</span> 32% 57%<span class="token punctuation">,</span> 2% 35%<span class="token punctuation">,</span> 39% 35%<span class="token punctuation">)</span>
<span class="token property">十字架：clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>10% 25%<span class="token punctuation">,</span> 35% 25%<span class="token punctuation">,</span> 35% 0%<span class="token punctuation">,</span> 65% 0%<span class="token punctuation">,</span> 65% 25%<span class="token punctuation">,</span> 90% 25%<span class="token punctuation">,</span> 90% 50%<span class="token punctuation">,</span> 65% 50%<span class="token punctuation">,</span> 65% 100%<span class="token punctuation">,</span> 35% 100%<span class="token punctuation">,</span> 35% 50%<span class="token punctuation">,</span> 10% 50%<span class="token punctuation">)</span>
<span class="token property">叉号：clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>20% 0%<span class="token punctuation">,</span> 0% 20%<span class="token punctuation">,</span> 30% 50%<span class="token punctuation">,</span> 0% 80%<span class="token punctuation">,</span> 20% 100%<span class="token punctuation">,</span> 50% 70%<span class="token punctuation">,</span> 80% 100%<span class="token punctuation">,</span> 100% 80%<span class="token punctuation">,</span> 70% 50%<span class="token punctuation">,</span> 100% 20%<span class="token punctuation">,</span> 80% 0%<span class="token punctuation">,</span> 50% 30%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">对话框：clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>0% 0%<span class="token punctuation">,</span> 100% 0%<span class="token punctuation">,</span> 100% 75%<span class="token punctuation">,</span> 75% 75%<span class="token punctuation">,</span> 75% 100%<span class="token punctuation">,</span> 50% 75%<span class="token punctuation">,</span> 0% 75%<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,65),m=[v];function b(g,y){return s(),a("div",null,m)}const f=n(k,[["render",b],["__file","CSS常用技巧.html.vue"]]);export{f as default};
