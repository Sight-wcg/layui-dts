declare namespace Layui {
    interface LAY<TElement = HTMLElement> extends ArrayLike<TElement>,Iterable<TElement> {
        /**
         * 当前的选择器
         */
        selector: string | undefined;
        /**
         * 添加 CSS 类
         * @param className  类名
         * @param [remove] 是否是移除 `className`, 默认 `false`
         */
        addClass(className: string, remove?: boolean): this;
        /**
         * 追加内容
         * @param [elem] html或者元素对象
         */
        append(elem?: string | HTMLElement): this;
        /**
         * 设置元素属性
         * @param key 是attribute的key
         * @param value 是attribute的value
         */
        attr(key: string, value: any): this;
        /**
         * 获取第一个元素属性
         */
        attr(): string;
        /**
         * 添加 css style
         * @param [key] 属性css
         * @param [value] 值
         */
        css(key: string, value: any): this;
        /**
         * 获取 css style
         * @param [key] 属性css
         */
        css(key: string): string;
        /**
         * 对元素遍历
         * @param [fn] (index,elem)
         */
        each(fn?: (this: HTMLElement, index: number, elem: HTMLElement) => any): this;
        /**
         * 查找子元素
         * @param [selector] 选择器
         */
        find(selector: string | HTMLElement): this;
        /**
         * 是否包含 css 类
         * @param [className] 类名
         */
        hasClass(className: string): boolean;
        /**
         * 设置高度
         * @param [value] 元素宽度
         */
        height(value: number | string): this;
        /**
         * 获取第一个元素高度
         */
        height(): number;
        /**
         * 设置元素的 `innerHTML`
         * @param [html] html 字符串
         */
        html(html: string): this;
        /**
         * 获取第一个元素的 `innerHTML`
         */
        html(): string;
        /**
         * 解除事件
         * @param [eventName] 事件名
         * @param [fn] 回调
         */
        off(eventName: keyof HTMLElementEventMap, fn: AnyFn): this;
        /**
         * 事件绑定，注意：只支持内置事件，不支持自定义事件
         * @param [eventName] 事件名 比如click，自定事件会绑定失败
         * @param [fn] 回调 (tip:this:any)
         */
        on(eventName: keyof HTMLElementEventMap, fn: AnyFn): this;
        /**
         * 移除元素
         * @param [elem] 实际是 removeChild(elem)
         */
        remove(elem: HTMLElement): this
        /**
         * 移除指定的 `attribute`
         * @param [key] 是 attribute 的 key
         */
        removeAttr(key: string): this;
        /**
         *  移除 className
         * @param [className]
         */
        removeClass(className: string): this;
        /**
         * 设置元素的value
         * @param [value] 值
         */
        val(value: any): this;
        /**
         * 获取第一个元素的value
         */
        val(): string;
        /**
         * 设置宽度
         * @param [value] 元素宽度
         */
        width(value: number | string): this;
        /**
         * 获取第一个元素宽度
         */
        width(): number;
    }

    interface LayTouchSwipeState {
        /**
         * 初始坐标
         */
        pointerStart: { x: number; y: number };
        /**
         * 结束坐标
         */
        pointerEnd: { x: number; y: number };
        /**
         * X 轴移动距离
         */
        distanceX: number;
        /**
         * Y 轴移动距离
         */
        distanceY: number;
        /**
         * 滑动方向
         */
        direction: 'none' | 'right' | 'left' | 'up' | 'down';
        /**
         * 开始时间
         */
        timeStart: Date;
    }

    interface Lay {
        /**
         * 查找 DOM 作为返回实例的操作对象
         * @param [selector] 选择器
         */
        (selector?: string | HTMLElement | JQuery): LAY;

        v: string;
        /**
         * 把多个对象深层复制到dest,返回也为dest
         * @param [dest]
         * @param [src]
         */
        extend(dest: any, ...src: any): any;
        /**
         * 如果是 ie 则是版本字符串，非 ie 为 false
         */
        ie: boolean | string;
        layui: Layui;
        /**
         * 获取当前 JS 所在目录
         */
        getPath: string;
        /**
         * 阻止事件冒泡
         */
        stope(event: Event): void;
        /**
        * 对象（Array、Object、DOM 对象等）遍历，可用于取代 for 语句
        * @param collection Array对象
        * @param callback 回调函数，返回 true 停止遍历，和 jQUery.each 相反
        */
        each<T>(collection: ArrayLike<T>, callback: (this: T, indexInArray: number, value: T) => any): LAY;
        each<T, K extends keyof T>(collection: T, callback: (this: T[K], propertyName: K, valueOfProperty: T[K]) => any): LAY;
        /**
         * 数字前置补零
         * @param num 原始数字
         * @param length 数字长度，默认值 2。如果原始数字长度小于 length，则前面补零
         * @returns 返回补 0 后的数字
         * @example
```js
lay.digit(6, 2); // "06"
lay.digit('7', 3); // "007"
```
         */
        digit(num: number | string, length?: number): string;
        /**
         * 创建元素
         * @param elemName 元素的标签名
         * @param attr 添加到元素上的属性
         * @example
```js
lay.elem('div', {id: 'test'}) // <div id="test"></div>
```
         */
        elem<K extends keyof HTMLElementTagNameMap>(elemName: K, attr?: object): HTMLElementTagNameMap[K];
        /**
         * 当前页面body是否存在滚动条
         */
        hasScrollbar(): boolean;
        /**
         * 创建 style 样式
         * @param options 
         * 可配置的选项
         * - target: 目标容器，指定后会将样式追加到目标容器，默认 `body`；
         * - id: 样式元素的 id，默认自增
         * - text: 样式内容
         * @since 2.8.15
         * @example
```html
<div id="targetEl">
  <!-- 样式追加到目标容器 -->
  <style id="LAY-STYLE-DF-0">.card{color: #000}</style>
</div>

lay.style({
  target: '#targetEl',
  text: '.card{color: #000}'
}) // <style id="LAY-STYLE-DF-0">.card{color: #000}</style>
```
         */
        style(options: { target?: string | HTMLElement | JQuery; id?: string; text: string }): HTMLStyleElement;
        /**
         * 将元素定位到指定目标元素附近
         * @param target 目标元素
         * @param elem 定位元素
         * @param [opts]
         * ```
         * opts
         * - position: 元素的定位模式，默认 absolute
         * - clickType: 点击类型，默认为 'left'，如果 {@link opts.target} 是 document 或 body 元素，则为 'right'
         * - align: 对齐方式，默认 left
         * - allowBottomOut: 顶部没有足够区域显示时，是否允许底部溢出
         * - margin: 边距；
         * - e: 事件对象，仅右键生效
         * - SYSTEM_RELOAD: 是否重载，用于出现滚动条时重新计算位置
         * - offset: 相对于触发元素的额外偏移量[x,y]
         * ```
         * @example
```js
<button id="targetEl">dropdown</button>
<ul id="contentEl" class="dropdown-menu">
  <li>菜单1</li>
  <li>菜单2</li>
</ul>

// 下拉菜单将被定位到按钮附近
lay.position(
  $('#targetEl')[0],
  $('#contentEl')[0],
  {
    position: 'fixed',
    align: 'center'
  }
)
```
         */
        position(
            target: HTMLElement,
            elem: HTMLElement,
            opts?: {
                position?: 'absolute' | 'fixed';
                clickType?: 'left' | 'right';
                align?: 'left' | 'center' | 'right';
                allowBottomOut?: boolean;
                margin?: number;
                e?: MouseEvent | { clientX: number; clientY: number };
                SYSTEM_RELOAD?: boolean;
                offset?: [offsetX: number, offsetY: number]
            }
        ): void;
        /**
         * 获取元素上的属性配置项
         * @param [elem] HTML 元素
         * @param [attr] 可配置的选项，string 类型指定属性名
         * @example
```js
  <div id="testEl" lay-options="{color:red}" lay-toc="{hot: true}"></div>

  var elem = $('#testEl')
  lay.options(elem) // {color:red}
  lay.options(elem[0]) // {color:red}
  lay.options('#testEl') // {color:red}
  lay.options('#testEl', {attr: 'lay-toc'}) // {hot: true}
  lay.options('#testEl', 'lay-toc') // {hot: true}

  $('#testEl').attr('lay-toc') // '{hot: true}'
```
         */
        options(elem: string | HTMLElement | JQuery, attr?: string | Record<string, string>): any;
        /**
         * 元素是否属于顶级元素（document 或 body）
         * @param [elem] HTML 元素
         */
        isTopElem(elem: any): boolean;
        /**
         * 获取 style rules
         * @param style HTMLStyle 元素
         * @param callback 用来返回 style 元素中的每个 `style rule` 的函数，返回 true 终止遍历
         * @example
```html
<style id="test">
  .lay-card{
     color: #000;
   }
   .lay-btn-success{
     color: green;
   }
</style>

lay.getStyleRules($('#test')[0], function(rule, index){
  if(rule.selectorText === '.lay-card'){
    console.log(index, rule.cssText) // 0 '.lay-card{color: #000}'
    rule.style.color = '#EEE';
    return true; // 终止遍历
  }
 }) // RuleList
   * ```
         */
        getStyleRules(style: HTMLStyleElement, callback: (ruleItem: CSSStyleRule, index: number) => boolean): CSSRuleList;
        clipboard: {
            /**
             * 剪贴板写入文本
             * @param text 写入剪贴板的文本
             * @param done 写入成功/完成回调
             * @param error 写入失败回调
             *
             * @since 2.8.17
             */
            writeText(text: string, done?: () => void, error?: (err: any) => void): void;
        };
        /**
         * 检测是否支持 Passive Event Listeners
         * @since 2.9.2
         * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
         */
        passiveSupported: boolean;
        /**
         * 是否支持 touch events
         * @since 2.9.2
         */
        touchEventsSupported(): boolean;
        /**
         * 基于 touch 事件的触摸滑动
         * @param elem
         * @param options
         * @since 2.9.2
         */
        touchSwipe(
            elem: string | HTMLElement | JQuery,
            options: {
                onTouchStart(e: TouchEvent, state: LayTouchSwipeState): void;
                onTouchMove(e: TouchEvent, state: LayTouchSwipeState): void;
                onTouchEnd(e: TouchEvent, state: LayTouchSwipeState): void;
            }
        ): void;
        /**
         * 监听指定元素外部的点击
         * @param target 被监听的元素
         * @param handler 事件触发时执行的函数
         * @param options
         * @return 返回一个停止事件监听的函数
         */
        onClickOutside(
            target: HTMLElement,
            handler: (e: MouseEvent) => void,
            options?: {
                /**
                 * 监听的事件类型，默认值：pointerdown
                 */
                event?: string;
                /**
                 * 监听范围，默认值：document
                 */
                scope?: HTMLElement | Document | Window;
                /**
                 * 忽略监听的元素或选择器字符串
                 */
                ignore?: Array<string | HTMLElement>
                /**
                 * 对内部事件侦听器使用捕获阶段
                 */
                capture?: boolean;
            }
        ): Fn;
        /**
         * 判断一个对象是否具有某个自身的属性，而不考虑继承的属性
         * @param obj 对象
         * @param key 属性名
         */
        hasOwn(obj: object, key: string): boolean;
    }
}
