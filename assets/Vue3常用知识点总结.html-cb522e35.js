import{_ as t,r as e,o as p,c as o,a as n,b as l,d as c,e as s}from"./app-59688067.js";const i="/docs/images/Vue/vue3生命周期.png",u={},r=s(`<h1 id="vue3-常用知识点总结" tabindex="-1"><a class="header-anchor" href="#vue3-常用知识点总结" aria-hidden="true">#</a> Vue3 常用知识点总结</h1><h2 id="_1-初识vue3" tabindex="-1"><a class="header-anchor" href="#_1-初识vue3" aria-hidden="true">#</a> 1. 初识Vue3</h2><h3 id="_1-1-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-简介" aria-hidden="true">#</a> 1.1 简介</h3><h2 id="_1-初识vue3-1" tabindex="-1"><a class="header-anchor" href="#_1-初识vue3-1" aria-hidden="true">#</a> 1. 初识Vue3</h2><blockquote><ol><li>Vue.js 3.0 &quot;One Piece&quot; 正式版在今年9月份发布</li><li>2年多开发, 100+位贡献者, 2600+次提交, 600+次PR</li><li><strong>Vue3支持vue2的大多数特性</strong></li><li><strong>更好的支持Typescript</strong></li></ol></blockquote><h3 id="_1-2-性能的提升" tabindex="-1"><a class="header-anchor" href="#_1-2-性能的提升" aria-hidden="true">#</a> 1.2 性能的提升</h3><blockquote><ul><li>打包大小减少41%</li><li>初次渲染快55%, 更新渲染快133%</li><li>内存减少54%</li><li><strong>使用Proxy代替defineProperty实现数据响应式</strong></li><li><strong>重写虚拟DOM的实现和Tree-Shaking</strong></li></ul></blockquote><h3 id="_1-3-新增特性" tabindex="-1"><a class="header-anchor" href="#_1-3-新增特性" aria-hidden="true">#</a> 1.3 新增特性</h3><blockquote><ul><li>Composition (组合) API</li><li>setup</li></ul><p>​ ref 和 reactive</p><p>​ computed 和 watch ​ 新的生命周期函数 ​ provide与inject ​ ...</p><ul><li>新组件</li></ul><p>​ Fragment - 文档碎片</p><p>​ Teleport - 瞬移组件的位置</p><p>​ Suspense - 异步加载组件的loading界面</p><ul><li>其它API更新</li></ul><p>​ 全局API的修改</p><p>​ 将原来的全局API转移到应用对象</p><p>​ 模板语法变化</p><p>​ ...</p></blockquote><h2 id="_2-创建vue3项目" tabindex="-1"><a class="header-anchor" href="#_2-创建vue3项目" aria-hidden="true">#</a> 2. 创建vue3项目</h2><h3 id="_2-1-使用vue-cli创建" tabindex="-1"><a class="header-anchor" href="#_2-1-使用vue-cli创建" aria-hidden="true">#</a> 2.1 使用vue-cli创建</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上</span>
vue <span class="token operator">--</span>version
<span class="token comment">// 安装或者升级你的@vue/cli</span>
npm install <span class="token operator">-</span>g @vue<span class="token operator">/</span>cli
<span class="token comment">// 创建</span>
vue create vue_test
<span class="token comment">// 进入项目目录</span>
cd vue_test
<span class="token comment">// 启动</span>
npm run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-使用vite创建" tabindex="-1"><a class="header-anchor" href="#_2-2-使用vite创建" aria-hidden="true">#</a> 2.2 使用vite创建</h3>`,13),k={href:"https://cn.vuejs.org/guide/quick-start.html",target:"_blank",rel:"noopener noreferrer"},d=s(`<p>vite 是一个由原生 ESM 驱动的 Web 开发构建工具。在开发环境下基于浏览器原生 ES imports 开发，它做到了*<strong>本地快速开发启动*</strong>, 在生产环境下基于 Rollup 打包。</p><p><strong>vite的优势:</strong></p><p>1)快速的冷启动，不需要等待打包操作</p><p>2)即时的热模块更新，替换性能和模块数量的解耦让更新飞起</p><p>3)真正的按需编译，不再等待整个应用编译完成，这是一个巨大的改变</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建工程</span>
npm init vite<span class="token operator">-</span>app <span class="token operator">...</span>
<span class="token comment">// 进入工程目录</span>
cd  <span class="token operator">...</span>
<span class="token comment">// 安装依赖</span>
npm install
<span class="token comment">// 运行项目</span>
npm run dev

<span class="token comment">// 使用pnpm快速创建</span>
<span class="token comment">// 安装pnpm</span>
npm install <span class="token operator">-</span>g pnpm
<span class="token comment">// 安装vite</span>
pnpm create vite
<span class="token comment">// 指定名称与模板创建项目</span>
pnpm create vite my<span class="token operator">-</span>vue<span class="token operator">-</span>app <span class="token operator">--</span>template vue
<span class="token comment">// 安装依赖</span>
cd my<span class="token operator">-</span>vue<span class="token operator">-</span>app 
pnpm install
pnpm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-setup" tabindex="-1"><a class="header-anchor" href="#_3-setup" aria-hidden="true">#</a> 3. setup</h2><blockquote><ul><li>新的option, 所有的组合API函数都在此使用, 只在初始化时执行一次</li><li>组件中所用到的：数据、方法等等，均要配置在setup中。</li><li>函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用</li></ul></blockquote><h3 id="_3-1-setup执行的时机" tabindex="-1"><a class="header-anchor" href="#_3-1-setup执行的时机" aria-hidden="true">#</a> 3.1 setup执行的时机</h3><blockquote><ul><li>在beforeCreate之前执行(一次), 此时组件对象还没有创建</li><li>this是undefined, 不能通过this来访问data/computed/methods / props</li><li>其实所有的composition API相关回调函数中也都不可以</li></ul></blockquote><h3 id="_3-2-setup的返回值" tabindex="-1"><a class="header-anchor" href="#_3-2-setup的返回值" aria-hidden="true">#</a> 3.2 setup的返回值</h3><blockquote><ul><li>一般都返回一个对象: 为模板提供数据, 也就是模板中可以直接使用此对象中的所有属性/方法</li><li>返回对象中的属性会与data函数返回对象的属性合并成为组件对象的属性</li><li>返回对象中的方法会与methods中的方法合并成功组件对象的方法</li><li>如果有重名, setup优先</li><li>注意:</li></ul><p>​ 1)一般不要混合使用: methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods</p><p>​ 2)setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据</p><ul><li>setup的参数</li></ul><p>​ 1)setup(props, context) / setup(props, {attrs, slots, emit})</p><p>​ 2)props: 包含props配置声明且传入了的所有属性的对象</p><p>​ 3)attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs</p><p>​ 4)slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots</p><p>​ 5)emit: 用来分发自定义事件的函数, 相当于 this.$emit</p></blockquote><h2 id="_4-ref" tabindex="-1"><a class="header-anchor" href="#_4-ref" aria-hidden="true">#</a> 4. ref</h2><blockquote><ul><li>作用: 定义一个数据的响应式</li><li>语法: const xxx = ref(initValue):</li></ul><p>​ 1)创建一个包含响应式数据的引用(reference)对象</p><p>​ 2)js中操作数据: xxx.value</p><p>​ 3)模板中操作数据: 不需要.value</p><ul><li>一般用来定义一个基本类型的响应式数据</li></ul></blockquote><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{count}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>更新<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  ref
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
 
  <span class="token comment">/* 在Vue3中依然可以使用data和methods配置, 但建议使用其新语法实现 */</span>
  <span class="token comment">// data () {</span>
  <span class="token comment">//   return {</span>
  <span class="token comment">//     count: 0</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// },</span>
  <span class="token comment">// methods: {</span>
  <span class="token comment">//   update () {</span>
  <span class="token comment">//     this.count++</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// }</span>
 
  <span class="token comment">/* 使用vue3的composition API */</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
    <span class="token comment">// 定义响应式数据 ref对象</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
 
    <span class="token comment">// 更新响应式数据的函数</span>
    <span class="token keyword">function</span> <span class="token function">update</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// alert(&#39;update&#39;)</span>
      count<span class="token punctuation">.</span>value <span class="token operator">=</span> count<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      count<span class="token punctuation">,</span>
      update
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--使用setup语法糖--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      count<span class="token punctuation">.</span>value <span class="token operator">=</span> count<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-reactive" tabindex="-1"><a class="header-anchor" href="#_5-reactive" aria-hidden="true">#</a> 5. reactive</h2><blockquote><ul><li>作用: 定义多个数据的响应式</li><li>const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象</li><li>响应式转换是“深层的”：会影响对象内部所有嵌套的属性</li><li>内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的</li></ul></blockquote><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>name: {{state.name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>age: {{state.age}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>wife: {{state.wife}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>更新<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">,</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">/* 
  reactive: 
    作用: 定义多个数据的响应式
    const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
    响应式转换是“深层的”：会影响对象内部所有嵌套的属性
    内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
*/</span>
  <span class="token comment">// 定义响应式数据对象</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
    <span class="token literal-property property">wife</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;marry&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">22</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> state<span class="token punctuation">.</span>wife<span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>name <span class="token operator">+=</span> <span class="token string">&#39;--&#39;</span>
    state<span class="token punctuation">.</span>age <span class="token operator">+=</span> <span class="token number">1</span>
    state<span class="token punctuation">.</span>wife<span class="token punctuation">.</span>name <span class="token operator">+=</span> <span class="token string">&#39;++&#39;</span>
    state<span class="token punctuation">.</span>wife<span class="token punctuation">.</span>age <span class="token operator">+=</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-比较vue2与vue3的响应式" tabindex="-1"><a class="header-anchor" href="#_6-比较vue2与vue3的响应式" aria-hidden="true">#</a> 6. 比较Vue2与Vue3的响应式</h2><h3 id="_6-1-vue2的响应式" tabindex="-1"><a class="header-anchor" href="#_6-1-vue2的响应式" aria-hidden="true">#</a> 6.1 vue2的响应式</h3><blockquote><p>​ <strong>核心:</strong></p><ul><li>对象: 采用“数据劫持”结合“发布者-订阅者”模式的方式，通过“Object.defineProperty()”方法来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调</li><li>数组: 通过重写数组更新数组一系列更新元素的方法来实现元素修改的劫持</li></ul></blockquote><blockquote><p>​ <strong>问题:</strong></p><ul><li>对象直接新添加的属性或删除已有属性, 界面不会自动更新</li><li>直接通过下标替换元素或更新length, 界面不会自动更新 arr[1] = {}</li></ul></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//核心方法  -</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span>
 
<span class="token comment">// obj：要在其上定义属性的对象。</span>
<span class="token comment">// prop：要定义或修改的属性的名称。</span>
<span class="token comment">// descriptor：将被定义或修改的属性描述符。</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>对象<span class="token punctuation">,</span> 属性<span class="token punctuation">,</span> <span class="token punctuation">{</span>   
  <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>      
  <span class="token function">set</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-vue3的响应式" tabindex="-1"><a class="header-anchor" href="#_6-2-vue3的响应式" aria-hidden="true">#</a> 6.2 vue3的响应式</h3><blockquote><p>​ <strong>核心:</strong></p><ul><li>通过Proxy(代理): 拦截对data任意属性的任意(13种)操作, 包括属性值的读写, 属性的添加, 属性的删除等...</li><li>通过 Reflect(反射): 动态对被代理对象的相应属性进行特定的操作</li></ul></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//核心方法</span>
<span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token comment">// 拦截读取属性值</span>
    <span class="token function">get</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 拦截设置属性值或添加新属性</span>
    <span class="token function">set</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 拦截删除属性</span>
    <span class="token function">deleteProperty</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
 
proxy<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;tom&#39;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-对reactive与ref的理解" tabindex="-1"><a class="header-anchor" href="#_7-对reactive与ref的理解" aria-hidden="true">#</a> 7. 对reactive与ref的理解</h2><blockquote><ul><li>是Vue3的 composition API中2个最重要的响应式API</li><li>ref用来处理基本类型数据, reactive用来处理对象(递归深度响应式)</li><li>如果用ref对象/数组, 内部会自动将对象/数组转换为reactive的代理对象</li><li>ref内部: 通过给value属性添加getter/setter来实现对数据的劫持</li><li>reactive内部: 通过使用Proxy来实现对对象内部所有数据的劫持, 并通过Reflect操作对象内部数据</li><li>ref的数据操作: 在js中要.value, 在模板中不需要(内部解析模板时会自动添加.value)</li></ul></blockquote><h2 id="_8-计算属性与监视" tabindex="-1"><a class="header-anchor" href="#_8-计算属性与监视" aria-hidden="true">#</a> 8. 计算属性与监视</h2><blockquote><ul><li>computed函数:</li></ul><ol><li>与computed配置功能一致</li><li>只有getter</li><li>有getter和setter</li></ol><ul><li>watch函数</li></ul><ol><li>与watch配置功能一致</li><li>监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调</li><li>默认初始时不执行回调, 但可以通过配置immediate为true, 来指定初始时立即执行第一次</li><li>通过配置deep为true, 来指定深度监视</li></ol><ul><li>watchEffect函数</li></ul><ol><li>不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据</li><li>默认初始时就会执行第一次, 从而可以收集需要监视的数据</li><li>监视数据发生变化时回调</li></ol></blockquote><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  fistName: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user.firstName<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  lastName: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user.lastName<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  fullName1: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullName1<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  fullName2: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullName2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  fullName3: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullName3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">/*
计算属性与监视
1. computed函数: 
  与computed配置功能一致
  只有getter
  有getter和setter
2. watch函数
  与watch配置功能一致
  监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调
  默认初始时不执行回调, 但可以通过配置immediate为true, 来指定初始时立即执行第一次
  通过配置deep为true, 来指定深度监视
3. watchEffect函数
  不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据
  默认初始时就会执行第一次, 从而可以收集需要监视的数据
  监视数据发生变化时回调
*/</span>
 
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  reactive<span class="token punctuation">,</span>
  ref<span class="token punctuation">,</span>
  computed<span class="token punctuation">,</span>
  watch<span class="token punctuation">,</span>
  watchEffect
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
 
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
 
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;B&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
    <span class="token comment">// 只有getter的计算属性</span>
    <span class="token keyword">const</span> fullName1 <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fullName1&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
    <span class="token comment">// 有getter与setter的计算属性</span>
    <span class="token keyword">const</span> fullName2 <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fullName2 get&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
 
      <span class="token function">set</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fullName2 set&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> names <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
        user<span class="token punctuation">.</span>firstName <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        user<span class="token punctuation">.</span>lastName <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
    <span class="token keyword">const</span> fullName3 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
 
    <span class="token comment">/* 
    watchEffect: 监视所有回调中使用的数据
    */</span>
    <span class="token comment">/* 
    watchEffect(() =&gt; {
      console.log(&#39;watchEffect&#39;)
      fullName3.value = user.firstName + &#39;-&#39; + user.lastName
    }) 
    */</span>
    <span class="token comment">/* 
    使用watch的2个特性:
      深度监视
      初始化立即执行
    */</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      fullName3<span class="token punctuation">.</span>value <span class="token operator">=</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 是否初始化立即执行一次, 默认是false</span>
      <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否是深度监视, 默认是false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
    <span class="token comment">/* 
    watch一个数据
      默认在数据发生改变时执行回调
    */</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>fullName3<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;watch&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> names <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
      user<span class="token punctuation">.</span>firstName <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      user<span class="token punctuation">.</span>lastName <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
    <span class="token comment">/* 
    watch多个数据: 
      使用数组来指定
      如果是ref对象, 直接指定
      如果是reactive对象中的属性,  必须通过函数来指定
    */</span>
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>firstName<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>lastName<span class="token punctuation">,</span> fullName3<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">values</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;监视多个数据&#39;</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      user<span class="token punctuation">,</span>
      fullName1<span class="token punctuation">,</span>
      fullName2<span class="token punctuation">,</span>
      fullName3
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-vue3的生命周期" tabindex="-1"><a class="header-anchor" href="#_9-vue3的生命周期" aria-hidden="true">#</a> 9. vue3的生命周期</h2><p><img src="`+i+`" alt="a025e11a334fc10a154348c2a5d49cf5.png"></p><blockquote><p>​ <strong>与 2.x 版本生命周期相对应的组合式 API</strong></p><ul><li>beforeCreate -&gt; 使用 setup()</li><li>created -&gt; 使用 setup()</li><li>beforeMount -&gt; onBeforeMount</li><li>mounted -&gt; onMounted</li><li>beforeUpdate -&gt; onBeforeUpdate</li><li>updated -&gt; onUpdated</li><li>beforeDestroy -&gt; onBeforeUnmount</li><li>destroyed -&gt; onUnmounted</li><li>errorCaptured -&gt; onErrorCaptured</li></ul></blockquote><blockquote><p><strong>新增的钩子函数</strong></p><p>组合式 API 还提供了以下调试钩子函数：</p><ul><li>onRenderTracked</li><li>onRenderTriggered</li></ul></blockquote><h2 id="_10-自定义hook函数" tabindex="-1"><a class="header-anchor" href="#_10-自定义hook函数" aria-hidden="true">#</a> 10. 自定义hook函数</h2><blockquote><ul><li>使用Vue3的组合API封装的可复用的功能函数</li><li>自定义hook的作用类似于vue2中的mixin技术</li><li>自定义Hook的优势: 很清楚复用功能代码的来源, 更清楚易懂</li></ul></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 需求1: 收集用户鼠标点击的页面坐标hooks/useMousePosition.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">/* 
	收集用户鼠标点击的页面坐标
*/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">useMousePosition</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化坐标数据</span>
    <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token comment">// 用于收集点击事件坐标的函数</span>
    <span class="token keyword">const</span> <span class="token function-variable function">updatePosition</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        x<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>pageX
        y<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>pageY
    <span class="token punctuation">}</span>

    <span class="token comment">// 挂载后绑定点击监听</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> updatePosition<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 卸载前解绑点击监听</span>
    <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> updatePosition<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-torefs" tabindex="-1"><a class="header-anchor" href="#_11-torefs" aria-hidden="true">#</a> 11. toRefs</h2><blockquote><p>把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref</p><p>应用: 当从合成函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用</p><p>问题: reactive 对象取出的所有属性值都是非响应式的</p><p>解决: 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性</p></blockquote><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>foo: {{ foo }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>bar: {{ bar }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>foo2: {{ foo2 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>bar2: {{ bar2 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">/*
toRefs:
  将响应式对象中所有属性包装为ref对象, 并返回包含这些ref对象的普通对象
  应用: 当从合成函数返回响应式对象时，toRefs 非常有用，
        这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用
*/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> stateAsRefs <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>foo <span class="token operator">+=</span> <span class="token string">&#39;++&#39;</span>
      state<span class="token punctuation">.</span>bar <span class="token operator">+=</span> <span class="token string">&#39;++&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> foo2<span class="token punctuation">,</span> bar2 <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useReatureX</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...state,</span>
      <span class="token operator">...</span>stateAsRefs<span class="token punctuation">,</span>
      foo2<span class="token punctuation">,</span>
      bar2
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">useReatureX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">foo2</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bar2</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>foo2 <span class="token operator">+=</span> <span class="token string">&#39;++&#39;</span>
    state<span class="token punctuation">.</span>bar2 <span class="token operator">+=</span> <span class="token string">&#39;++&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-ref获取元素" tabindex="-1"><a class="header-anchor" href="#_12-ref获取元素" aria-hidden="true">#</a> 12. ref获取元素</h2><blockquote><p>利用ref函数获取组件中的标签元素</p><p>功能需求: 让输入框自动获取焦点</p></blockquote><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>---
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputRef<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">/* 
    ref获取元素: 利用ref函数获取组件中的标签元素
    功能需求: 让输入框自动获取焦点
*/</span>
<span class="token comment">// 声明一个 ref 来存放该元素的引用</span>
<span class="token comment">// 必须和模板里的 ref 同名</span>
<span class="token keyword">const</span> inputRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>HTMLElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  inputRef<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> inputRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44);function v(m,b){const a=e("ExternalLinkIcon");return p(),o("div",null,[r,n("p",null,[n("a",k,[l("vite官网"),c(a)])]),d])}const f=t(u,[["render",v],["__file","Vue3常用知识点总结.html.vue"]]);export{f as default};
