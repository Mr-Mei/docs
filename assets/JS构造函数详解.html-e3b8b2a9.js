import{_ as n,o as s,c as a,e as p}from"./app-f810b466.js";const t={},e=p(`<h1 id="js构造函数详解" tabindex="-1"><a class="header-anchor" href="#js构造函数详解" aria-hidden="true">#</a> JS构造函数详解</h1><h2 id="一、js-函数" tabindex="-1"><a class="header-anchor" href="#一、js-函数" aria-hidden="true">#</a> 一、js 函数</h2><p>首先弄明白何为函数呢，按照犀牛书的说法，函数简单的说就是重复执行的代码块。函数是这样的一段JavaScript 代码，它只定义一次，但可能被执行或调用任意次。函数的定义方式：</p><h3 id="声明式函数定义" tabindex="-1"><a class="header-anchor" href="#声明式函数定义" aria-hidden="true">#</a> 声明式函数定义</h3><p>function 函数名 （）{}；这种定义方式，会将函数声明提升到该函数所在作用域的最开头，也是就无论你在这个函数的最小作用域的那儿使用这种方式声明的函数，在这个作用域内，你都可以调用这个函数为你所用。</p><h3 id="函数表达式" tabindex="-1"><a class="header-anchor" href="#函数表达式" aria-hidden="true">#</a> 函数表达式</h3><p>let fun = function(){}; 此方式定义的函数，只能在该作用域中，这段赋值代码执行之后才能通过fun（）调用函数，否则，由于变量声明提升，fun === undefined。</p><h3 id="new-function-形式" tabindex="-1"><a class="header-anchor" href="#new-function-形式" aria-hidden="true">#</a> new Function 形式</h3><p>var fun1 = new Function (arg1 , arg2 ,arg3 ,…, argN , body )；Function构造函数所有的参数都是字符串类型。除了最后一个参数, 其余的参数都作为生成函数的参数即形参。这里可以没有参数。最后一个参数, 表示的是要创建函数的函数体。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><blockquote><p><strong>1、第一种和第二种函数的定义的方式其实是第三种new Function 的语法糖，当我们定义函数时候都会通过 new Function 来创建一个函数，只是前两种为我们进行了封装，我们看不见了而已，js 中任意函数都是Function 的实例。</strong></p><p><strong>2、ECMAScript 定义的 函数实际上是功能完整的对象。</strong></p></blockquote><h2 id="二、构造函数" tabindex="-1"><a class="header-anchor" href="#二、构造函数" aria-hidden="true">#</a> 二、构造函数</h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><p>通过 new 函数名 来实例化对象的函数叫构造函数。任何的函数都可以作为构造函数存在。之所以有构造函数与普通函数之分，主要从功能上进行区别的，构造函数的主要 功能为 初始化对象，特点是和new 一起使用。new就是在创建对象，从无到有，构造函数就是在为初始化的对象添加属性和方法。构造函数定义时首字母大写（规范）。</p><h3 id="对new理解" tabindex="-1"><a class="header-anchor" href="#对new理解" aria-hidden="true">#</a> 对new理解</h3><p>new 申请内存, 创建对象,当调用new时，后台会隐式执行new Object()创建对象。所以，通过new创建的字符串、数字是引用类型，而是非值类型。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、常用的构造函数： 
<span class="token number">1.</span>    <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>     为      <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       的语法糖。
<span class="token number">2.</span>    <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>     为      <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     的语法糖
<span class="token number">3.</span>　<span class="token keyword">var</span>  date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">4.</span>    <span class="token operator">...</span>
<span class="token number">2</span>、执行构造函数时发生的事 ： <span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>sex</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">belief</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;量变是质变的必要准备，质变是量变积累到一定程度的必然结果！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span> <span class="token punctuation">(</span><span class="token string">&#39;zh&#39;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a <span class="token punctuation">.</span>   <span class="token keyword">let</span>   f <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>   <span class="token comment">//一个继承自 Foo.prototype 的新对象被创建。</span>
b<span class="token punctuation">.</span>   f<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment">// f 继承 Foo的原型。   </span>
b   <span class="token function">Foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span><span class="token string">&#39;zh&#39;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//执行Foo函数，将name,age,sex 参数传入Foo中执行，此时函数内部this 为 new 创建的 f对象，所以  f.name = &#39;zh&#39;;f.age = 18; f.sex = &#39;男&#39;；</span>
c<span class="token punctuation">.</span>  实例化对象完成，此时  f <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;zh&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">&#39;男&#39;</span>
<span class="token punctuation">}</span>
d<span class="token punctuation">.</span>   f<span class="token punctuation">.</span><span class="token function">belief</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     打印&#39;量变是质变的必要准备，质变是量变积累到一定程度的必然结果！

手写<span class="token keyword">new</span>函数　　
<span class="token keyword">function</span> <span class="token function">newTest</span> <span class="token punctuation">(</span><span class="token parameter">constructFunction</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> constructFunction<span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">constructFunction</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><blockquote><p><strong>当构造函数中有返回对象时候，最终new出来的对象会是构造函数的返回值，而不是new过程中生成的对象。仅当构造函数返回值是对象时有效，当不是对象时依旧返回new过程中形成的对象（无论如何new 构造函数之后都会返回一个对象值）。</strong></p></blockquote><h2 id="三、es6-中-class-与构造函数的关系" tabindex="-1"><a class="header-anchor" href="#三、es6-中-class-与构造函数的关系" aria-hidden="true">#</a> 三、ES6 中 class 与构造函数的关系</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> 为  构造函数的语法糖，即 <span class="token keyword">class</span> 的本质是 构造函数。<span class="token keyword">class</span>的继承 <span class="token keyword">extends</span>  本质 为构造函数的原型链的继承。
例如：
类的写法
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>  <span class="token comment">//定义一个名字为Person的类</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//constructor是一个构造方法，用来接收参数</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>  <span class="token comment">//this代表实例对象</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>　
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//这是一个类的方法，注意千万不要加上function</span>
        <span class="token keyword">return</span>   <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;老铁&#39;</span>，<span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
构造函数的写法
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>   <span class="token comment">//构造函数和实例化构造名相同且大写（非强制，但这么写有助于区分构造函数和普通函数）</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Person</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//避免使用者不小心讲Person当作普通函数执行</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span>请使用 <span class="token keyword">new</span> <span class="token class-name">Person</span>&quot;<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//仿ES6 class 中的写法</span>
                        <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span>   <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;老铁&#39;</span>，<span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//通过构造函数创建对象，必须使用new运算符</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、总结" tabindex="-1"><a class="header-anchor" href="#四、总结" aria-hidden="true">#</a> 四、总结</h2><blockquote><p><strong>通过 class定义的类 和 通过 构造函数定义的类 二者本质相同。并且在js执行时，会将第一种转化为第二种执行。所以 ES6 class的写法实质就是构造函数。</strong></p></blockquote>`,23),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","JS构造函数详解.html.vue"]]);export{r as default};
