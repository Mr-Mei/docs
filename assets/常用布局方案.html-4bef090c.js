import{_ as n,o as s,c as a,e as t}from"./app-a6289b3c.js";const p="/images/HTML/水平居中.jpg",e="/images/HTML/垂直居中.jpg",c="/images/HTML/水平垂直居中.jpg",l="/images/HTML/两列布局.png",o="/images/HTML/三列布局.png",i="/images/HTML/等分布局.png",u="/images/HTML/stickyFooter.png",k="/images/HTML/全屏布局.png",r={},d=t('<h1 id="常用布局方案" tabindex="-1"><a class="header-anchor" href="#常用布局方案" aria-hidden="true">#</a> 常用布局方案</h1><h2 id="一、水平居中" tabindex="-1"><a class="header-anchor" href="#一、水平居中" aria-hidden="true">#</a> 一、水平居中</h2><p><img src="'+p+`" alt="image-20230519165200038"></p><h3 id="_1-使用text-align属性" tabindex="-1"><a class="header-anchor" href="#_1-使用text-align属性" aria-hidden="true">#</a> <strong>1. 使用text-align属性</strong></h3><p>父元素设置 <em>text-align</em>: center，子元素设置 <em>display</em>: inline-block，实现水平居中</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 公共html结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 主要代码 */</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
        <span class="token comment">/* 主要代码 */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-定宽块级元素水平居中" tabindex="-1"><a class="header-anchor" href="#_2-定宽块级元素水平居中" aria-hidden="true">#</a> <strong>2. 定宽块级元素水平居中</strong></h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 公共html结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--方法1 子元素设置 margin: 0 auto; --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
         <span class="token comment">/* 主要代码 */</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--方法2 子元素设置 position: relative; 通过 left 属性 和 margin 实现 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
        <span class="token comment">/* 主要代码 */</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token comment">/* margin-left 为 负的宽度的一半 */</span>
        <span class="token property">margin-left</span><span class="token punctuation">:</span> -150px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--方法3 当元素开启绝对定位或者固定定位时， left 属性和 right 属性一起设置就会拉伸元素的宽度，在配合 width 属性与 margin 属性就可以实现水平居中 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 主要代码 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
        <span class="token comment">/* 主要代码 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token comment">/* 水平拉满屏幕 */</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token comment">/* 拉满屏幕之后设置宽度，最后通过 margin: auto; 实现水平居中 */</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--方法4 当元素开启绝对定位或者固定定位时， left 属性和 transform 属性即可实现水平居中 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 主要代码 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
        <span class="token comment">/* 主要代码 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-flex方案" tabindex="-1"><a class="header-anchor" href="#_3-flex方案" aria-hidden="true">#</a> 3. Flex方案</h3><p>通过 Flex 可以有多种方式实现水平居中布局的效果</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 公共html结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 主要代码 */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token comment">/* 方法一 */</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
        <span class="token comment">/* 方法二 */</span>
        <span class="token comment">/* margin: auto; */</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-grid方案" tabindex="-1"><a class="header-anchor" href="#_4-grid方案" aria-hidden="true">#</a> 4. Grid方案</h3><p>通过Grid实现居中布局比通过Flex实现的方式更多一些。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 公共html结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 开启 Grid 布局 */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token comment">/* 方法一 */</span>
        <span class="token comment">/* justify-items: center; */</span>
        <span class="token comment">/* 方法二 */</span>
        <span class="token comment">/* justify-content: center; */</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
        <span class="token comment">/* 方法三  */</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、垂直居中" tabindex="-1"><a class="header-anchor" href="#二、垂直居中" aria-hidden="true">#</a> 二、垂直居中</h2><p><img src="`+e+`" alt="image-20230519165401672"></p><h3 id="_1-行内块级元素垂直居中" tabindex="-1"><a class="header-anchor" href="#_1-行内块级元素垂直居中" aria-hidden="true">#</a> 1. 行内块级元素垂直居中</h3><p>若元素是行内块级元素，基本思想是子元素使用display: inline-block、vertical-align: middle，并让父元素行高等同于高度。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 公共html结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
        <span class="token comment">/* 为父级容器设置行高 */</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
        <span class="token comment">/* 将子级元素设置为 inline-block 元素 */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
        <span class="token comment">/* 通过 vertical-align: middle; 实现居中 */</span>
        <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-定位方式实现" tabindex="-1"><a class="header-anchor" href="#_2-定位方式实现" aria-hidden="true">#</a> 2. 定位方式实现</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 公共html结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 通过top: 50%; margin-top: 等于负的高度的一半就可以实现垂直居中 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
        <span class="token comment">/* 为父级容器开启相对定位 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
	    <span class="token comment">/* 主要代码 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token comment">/* margin-top: 等于负高度的一半 */</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> -150px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 通过top 和 bottom 将子元素拉伸至100%，设置指定的高度，通过margin:auto;即可实现垂直居中 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
        <span class="token comment">/* 为父级容器开启相对定位 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
        <span class="token comment">/* 主要代码 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token comment">/* 垂直拉满 */</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token comment">/* margin: auto 即可实现 */</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 通过top 配合 tansform 即可实现垂直居中，适用于多种场合 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
        <span class="token comment">/* 为父级容器开启相对定位 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
        <span class="token comment">/* 主要代码 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-flex方案-1" tabindex="-1"><a class="header-anchor" href="#_3-flex方案-1" aria-hidden="true">#</a> 3. Flex方案</h3><p>通过 Flex 可以有很多方式实现这个垂直居中布局的效果，以下介绍比较简单的两种方案：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 公共html结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
        <span class="token comment">/* 开启 flex 布局 */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token comment">/* 方法一 */</span>
        <span class="token comment">/* align-items: center; */</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
        <span class="token comment">/* 方法二 */</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-grid方案-1" tabindex="-1"><a class="header-anchor" href="#_4-grid方案-1" aria-hidden="true">#</a> 4. Grid方案</h3><p>Grid 实现居中布局比通过 Flex 实现的方式稍多些。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 公共html结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
        <span class="token comment">/* 开启 grid 布局 */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token comment">/* 方法一 */</span>
        <span class="token comment">/* align-items: center; */</span>
        <span class="token comment">/* 方法二 */</span>
        <span class="token comment">/* align-content: center; */</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
        <span class="token comment">/* 方法三 */</span>
        <span class="token comment">/* margin: auto; */</span>
        <span class="token comment">/* 方法四 */</span>
        <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、水平垂直居中" tabindex="-1"><a class="header-anchor" href="#三、水平垂直居中" aria-hidden="true">#</a> 三、水平垂直居中</h2><p><img src="`+c+`" alt="image-20230519165614032"></p><p>实现水平垂直居中布局基本就是将水平居中布局与垂直居中布局结合起来。</p><h3 id="_1-行内块级实现水平垂直居中" tabindex="-1"><a class="header-anchor" href="#_1-行内块级实现水平垂直居中" aria-hidden="true">#</a> 1. 行内块级实现水平垂直居中</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 公共html结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 容器元素行高等于容器高度，通过 text-align: center实现水平居中，将子级元素设置为水平块级元素，通过 vertical-align:middle实现垂直居中 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span>*5<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span>*2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 1. 设置行高等于容器高度 */</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span>*2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 通过 text-align: center; 实现水平居中 */</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
        <span class="token comment">/* 将子级元素设置为水平块级元素 */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
        <span class="token comment">/* 通过 vertical-align: middle; 实现垂直居中 */</span>
        <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-定位实现水平垂直居中" tabindex="-1"><a class="header-anchor" href="#_2-定位实现水平垂直居中" aria-hidden="true">#</a> 2. 定位实现水平垂直居中</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 公共html结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 方案一、父元素开启相对定位，子元素开启绝对定位，设置该元素的偏移量值为50%减去宽度/高度的一半 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span>*5<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span>*2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 开启相对定位 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
        <span class="token comment">/* 开启绝对定位 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token comment">/* 设置该元素的偏移量，值为 50%减去宽度/高度的一半 */</span>
        <span class="token property">left</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50% - 150px<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50% - 150px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 方案二、父元素开启相对定位，子元素开启绝对定位，设置该元素的偏移量值为50%，通过外边距负值的方式将元素移动至居中 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span>*5<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span>*2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 开启相对定位 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
        <span class="token comment">/* 开启绝对定位 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token comment">/* 设置该元素的偏移量，值为 50% */</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">margin-left</span><span class="token punctuation">:</span> -150px<span class="token punctuation">;</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> -150px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 方案三、父元素开启相对定位，子元素开启绝对定位，将子元素拉满整个容器，通过 margin: auto 实现水平垂直居中 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span>*5<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span>*2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 开启相对定位 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
        <span class="token comment">/* 开启绝对定位 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token comment">/* 将子元素拉满整个容器 */</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token comment">/* 通过 margin:auto 实现水平垂直居中 */</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 方案四、父元素开启相对定位，子元素开启绝对定位，设置该元素的偏移量，值为50%，通过 translate 反向偏移的方式，实现居中 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span>*5<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span>*2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 开启相对定位 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
        <span class="token comment">/* 开启绝对定位 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token comment">/* 设置该元素的偏移量，值为 50%*/</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token comment">/* 通过translate反向偏移的方式，实现居中 */</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-flex方案-2" tabindex="-1"><a class="header-anchor" href="#_3-flex方案-2" aria-hidden="true">#</a> 3. Flex方案</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 公共html结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 将元素设置为 flex 布局，通过 justify-content: center 以及 align-items: center 实现或者 margin: auto 实现 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span>*5<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span>*2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 将元素设置为 Flex 布局 */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token comment">/* 方法1：通过 justify-content 以及 align-items: center 实现 */</span>
        <span class="token comment">/* justify-content: center;
        align-items: center; */</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
        <span class="token comment">/* 方法2：通过 margin auto 实现 */</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-grid方案-2" tabindex="-1"><a class="header-anchor" href="#_4-grid方案-2" aria-hidden="true">#</a> 4. Grid方案</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 公共html结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span>*5<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span>*2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 元素设置为Grid 元素 */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token comment">/* 方法1：通过 items 属性实现*/</span>
        <span class="token comment">/* align-items: center; */</span>
        <span class="token comment">/* justify-items: center; */</span>
        <span class="token comment">/* 方法2：items 的缩写 */</span>
        <span class="token comment">/* place-items: center; */</span>

        <span class="token comment">/* 方法3：通过 content 属性 */</span>
        <span class="token comment">/* align-content: center; */</span>
        <span class="token comment">/* justify-content: center; */</span>
        <span class="token comment">/* 方法4：content 的缩写 */</span>
        <span class="token comment">/* place-content: center; */</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
        <span class="token comment">/* 方法5：通过 margin auto 实现 */</span>
        <span class="token comment">/* margin: auto; */</span>
        <span class="token comment">/* 方法6：通过 self 属性 */</span>
        <span class="token comment">/* align-self: center;
        justify-self: center; */</span>
        <span class="token comment">/* 方法7：self 的缩写 */</span>
        <span class="token property">place-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、两列布局" tabindex="-1"><a class="header-anchor" href="#四、两列布局" aria-hidden="true">#</a> 四、两列布局</h2><p>所谓的两列布局就是一列定宽(也有可能由子元素决定宽度)，一列自适应的布局。</p><p><img src="`+l+`" alt="image-20230519165926076"></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 公共html结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container clearfix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>定宽<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>自适应<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 公共css结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.left</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.right</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* 清除浮动 */</span>
    <span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
        <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 1. float+calc() 函数完成左列定宽右列自适应 --&gt;</span>
<span class="token comment">&lt;!-- 左列开启浮动，右列开启浮动，右列宽度为父级 100% 减去左列的宽度--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.left</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 左边列开启浮动 */</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.right</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 右边列开启浮动 */</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
        <span class="token comment">/* 宽度减去左列的宽度 */</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 2. float+margin-left完成左列定宽右列自适应 --&gt;</span>
<span class="token comment">&lt;!-- 左列开启浮动，通过外边距的方式使该容器的左边有左边列容器的宽度的外边距 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.left</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 左边列开启浮动 */</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.right</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 通过外边距的方式使该容器的左边有var(--c-size)距离 */</span>
        <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 3. absolute+margin-left完成左列定宽右列自适应 --&gt;</span>
<span class="token comment">&lt;!-- 开启定位脱离文档流，通过外边距的方式使该容器的左边有左边列容器的宽度的外边距 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.left</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 开启定位脱离文档流 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.right</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 通过外边距的方式使该容器的左边有var(--c-size)距离 */</span>
        <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 4. float+overflow完成左列定宽右列自适应 --&gt;</span>
<span class="token comment">&lt;!-- 左侧元素开始浮动，右侧自适应元素设置 overflow 会创建一个BFC完成自适应 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.left</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 左列开启浮动 */</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.right</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 右侧自适应元素设置 overflow 会创建一个BFC 完成自适应 */</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 5. 通过Flex方案实现 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.right</span> <span class="token punctuation">{</span>
        <span class="token comment">/* flex: 1; 表示 flex-grow: 1; 即该项占所有剩余空间 */</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 5. 通过Grid方案实现 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token comment">/* 将其划分为两行，其中一列有本身宽度决定， 一列占剩余宽度*/</span>
        <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> auto 1fr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、三列布局" tabindex="-1"><a class="header-anchor" href="#五、三列布局" aria-hidden="true">#</a> 五、三列布局</h2><p>三列布局主要分为2种：</p><ul><li><ol><li>前两列定宽，最后一列自适应，这一种本质上与两列布局没有什么区别，可以参照两列布局实现。</li></ol></li><li><ol start="2"><li>前后两列定宽，中间自适应。</li></ol></li></ul><p><img src="`+o+`" alt="image-20230519170343862"></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 公共html结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container clearfix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>左<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>右<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 公共css结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bgcolor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.left</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.content</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #d9480f<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.right</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.left,
    .content,
    .right</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* 清除浮动 */</span>
    <span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
        <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 1. 通过float实现 --&gt;</span>
<span class="token comment">&lt;!--需要调整HTML结构，调整后如下： --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container clearfix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>左<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>右<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 方法1：左列容器开启左浮动，右列容器开启右浮动，自适应元素设置overflow会创建一个BFC完成自适应 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.left</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 1. 左列容器开启左浮动 */</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.content</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 自适应元素设置 overflow 会创建一个BFC 完成自适应 */</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.right</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 2. 右列容器开启右浮动 */</span>
        <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 方法2：左列容器开启左浮动，右列容器开启右浮动，使中间自适应的宽度为父级容器减去两个定宽的列 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.left</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 1. 左列容器开启左浮动 */</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.content</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 3. 使中间自适应的宽度为父级容器减去两个定宽的列 */</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.right</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 2. 右列容器开启右浮动 */</span>
        <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 2. 通过position实现 --&gt;</span>
<span class="token comment">&lt;!-- 左右两列脱离文档流，并通过偏移的方式到达自己的区域，使中间自适应的宽度为父级容器减去两个定宽的列，通过外边距将容器往内缩小 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.left</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 1. 左右两列脱离文档流，并通过偏移的方式到达自己的区域 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.content</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 2. 使中间自适应的宽度为父级容器减去两个定宽的列 */</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 3. 通过外边距将容器往内缩小 */</span>
        <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.right</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 3. Flex方案 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.content</span> <span class="token punctuation">{</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
        <span class="token comment">/* flex: 1; 表示 flex-grow: 1; 即该项占所有剩余空间 */</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 4. Grid方案 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token comment">/* 将其划分为两行，其中一列有本身宽度决定， 一列占剩余宽度*/</span>
        <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> auto 1fr auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、等分布局" tabindex="-1"><a class="header-anchor" href="#六、等分布局" aria-hidden="true">#</a> 六、等分布局</h2><p>等分布局就是将一个容器平均分成几等份，这里以 4 等分为例。</p><p><img src="`+i+`" alt="image-20230519171844735"></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 公共html结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container clearfix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item item1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item item2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item item3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item item4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 公共css结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.item</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.item1</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #eccc68<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.item2</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #a6c1fa<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.item3</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #fa7d90<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.item4</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #b0ff70<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* 清除浮动 */</span>
    <span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
        <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 1. 浮动+百分比方式：开启浮动，使每个元素占25%的宽度 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.item</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 开启浮动，每个元素占 25% 的宽度 */</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 25%<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 2. 行内块级+百分比方式：需要注意的是行内块级元素有一些类似于边距的几个像素，导致各25%会超出容器 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.item</span> <span class="token punctuation">{</span>
        * 设置每个元素为行内块级元素，每个元素占 24.5% 的宽度 */
        <span class="token property">width</span><span class="token punctuation">:</span> 24.5%<span class="token punctuation">;</span>
        <span class="token comment">/* 因为行内块级元素有一些类似于边距的几个像素，导致各占25会超出容器 */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 3. Flex方案 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 开启 flex 布局 */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.item</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 每个元素占相同的宽度 */</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 4. Grid方案 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 开启 grid 布局 */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 使用 repeat 函数生成如下代码 */</span>
        <span class="token comment">/* grid-template-columns: 1fr 1fr 1fr 1fr; */</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、sticky-footer-布局" tabindex="-1"><a class="header-anchor" href="#七、sticky-footer-布局" aria-hidden="true">#</a> 七、Sticky Footer 布局</h2><p>所谓的 Sticky Footer 布局并不是一种新的前端技术和概念，它就是一种网页布局。如果页面内容不够长时，底部栏就会固定到浏览器的底部；如果足够长时，底部栏就后跟随在内容的后面。</p><p><img src="`+u+`" alt="image-20230519172334502"></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 公共html结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>left<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>right<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 公共css结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">:root</span> <span class="token punctuation">{</span>
        <span class="token property">--c-size</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">--c-bgcolor</span><span class="token punctuation">:</span> #ff8787<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.left</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #f759ab<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.content</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #52c41a<span class="token punctuation">;</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.right</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #f759ab<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.left,
    .content,
    .right</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 70px<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.header</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #70a1ff<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.footer</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #ff7a45<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.header,
    .footer</span> <span class="token punctuation">{</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 52px<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 1. 绝对定位的方式 --&gt;</span>
<span class="token comment">&lt;!-- 设置最外层容器高度为100%；让子元素元素相对于容器元素进行定位，并设置容器元素最小高度为100%；在中间区域设置padding-bottom为footer的高度 ；底部栏绝对定位，并一直吸附在底部即可实现。 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token comment">/* 1. 设置最外层容器为100% */</span>
    <span class="token selector">html,
    body</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* 2. 让子元素元素相对于容器元素进行定位，并设置容器元素最小高度为100% */</span>
    <span class="token selector">.main</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">min-height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* 3. 在中间区域设置 padding-bottom 为footer 的高度 */</span>
    <span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* 由于开启了绝对定位，宽度成了自适应，设置为100% bottom:0 始终保持底部 */</span>
    <span class="token selector">.footer</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 2. 使用calc函数实现：中间的容器最少高度为视口宽度的100% - 头部和底部两部分的高度即可完成该功能 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 这里的 中间 部分的容器最少为视口宽度的 100% - 头部和底部两部分的高度即可完成该功能 */</span>
        <span class="token property">min-height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vh - 200px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 3. Flex方案：开启 flex 布局，将子元素布局方向修改为垂直排列，设置最小高度为当前视口，使不管中间部分有多高，始终都可以保持在底部
设置中间部分容器高度为自适应 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.main</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 开启flex布局 */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token comment">/* 将子元素布局方向修改为垂直排列 */</span>
        <span class="token property">flex-flow</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
        <span class="token comment">/* 设置最小高度为当前视口，使不管中间部分有多高，始终都可以保持在底部 */</span>
        <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 设置 中间 部分自适应 */</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 4. Grid方案：开启 grid 布局，设置最小高度为当前视口，使不管中间部分有多高，始终都可以保持在底部--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.main</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 开启grid布局 */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> auto 1fr auto<span class="token punctuation">;</span>
        <span class="token comment">/* 设置最小高度为当前视口，使不管中间部分有多高，始终都可以保持在底部 */</span>
        <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、全屏布局" tabindex="-1"><a class="header-anchor" href="#八、全屏布局" aria-hidden="true">#</a> 八、全屏布局</h2><p>全部布局主要应用在后台</p><p><img src="`+k+`" alt="image-20230519173648840"></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 公共html结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>导航<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right-in<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>自适应，超出高度出现滚动条<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 公共css结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">body,
    html,
    .container</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.content</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #52c41a<span class="token punctuation">;</span>
        <span class="token comment">/* * 中间部分的布局可以参考 两列 三列 布局 */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> auto 1fr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.left</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 240px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #52c41a<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vh - 200px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.right</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #f759ab<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.header</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #70a1ff<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.footer</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #ff7a45<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.header,
    .footer</span> <span class="token punctuation">{</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 52px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 1. 使用calc函数实现：通过 calc 函数计算出中间容器的高度，中间出现滚动条的容器设置overflow: auto即出现滚动条的时候出现滚动条 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.content</span> <span class="token punctuation">{</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
        <span class="token comment">/* 通过 calc 计算容器的高度 */</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vh - 200px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.left</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.right</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 如果超出出现滚动条 */</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.right-in</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 假设容器内有500px的元素 */</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 3. Flex方案 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 开启flex布局 */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token comment">/* 将子元素布局方向修改为垂直排列 */</span>
        <span class="token property">flex-flow</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.content</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 如果超出出现滚动条 */</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
        <span class="token comment">/* 设置 中间 部分自适应 */</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.right-in</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 假设容器内有500px的元素 */</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 4. Grid方案 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 开启grid布局 */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
        <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> auto 1fr auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.content</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 如果超出出现滚动条 */</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.right-in</span> <span class="token punctuation">{</span>
        <span class="token comment">/* 假设容器内有500px的元素 */</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,59),v=[d];function m(b,g){return s(),a("div",null,v)}const h=n(r,[["render",m],["__file","常用布局方案.html.vue"]]);export{h as default};
