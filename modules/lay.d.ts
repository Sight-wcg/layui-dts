declare namespace Layui {
  interface LAY extends Omit<any[], 'find'> {
    /**
     * 当前的选择器
     */
    selector: string | undefined;

    /**
     *  添加css类
     * @param [className]  类名,必须项  比如 a 或 a b
     * @param [remove]  是否是移除className  默认false即添加
     */
    addClass(className: string, remove?: boolean): HTMLElement[];

    /**
     * 追加内容
     * @param [elem]  html或者元素对象
     */
    append(elem?: string | HTMLElement): HTMLElement[];

    /**
     * 设置元素属性
     * @param [key]  是attribute的key
     * @param [value] 是attribute的value
     */
    attr(key: string, value: any): HTMLElement[];

    /**
     * 获取第一个元素属性
     */
    attr(): string;

    /**
     * 添加 css style
     * @param [key]  属性css
     * @param [value]  值
     */
    css(key: string, value: any): HTMLElement[];

    /**
     * 获取 css style
     * @param [key] 属性css
     */
    css(key: string): string;

    /**
     * 对元素遍历
     * @param [fn]  (index,elem)
     */
    each(fn?: (this: HTMLElement, index: number, elem: HTMLElement) => any): HTMLElement[];

    /**
     * 查找子元素
     * @param [selector]  选择器
     */
    find(selector: string | HTMLElement): LAY;

    /**
     * 是否包含 css 类
     * @param [className] 类名
     */
    hasClass(className: string): boolean;

    /**
     * 设置高度
     * @param [value] 元素宽度
     */
    height(value: number | string): HTMLElement[];

    /**
     * 获取第一个元素高度
     */
    height(): number;

    /**
     * 设置元素的innerHTML
     * @param [html]  html
     */
    html(html: string): HTMLElement[];

    /**
     * 获取第一个元素的innerHTML
     */
    html(): string;

    /**
     * 解除事件
     * @param [eventName] 事件名 比如click
     * @param [fn] 回调
     */
    off(eventName: string, fn: (...args: any) => any): HTMLElement[];

    /**
     * 事件绑定，注意：只支持内置事件，不支持自定义事件
     * @param [eventName] 事件名 比如click，自定事件会绑定失败
     * @param [fn] 回调    (tip:this:any)
     */
    on(eventName: keyof HTMLElementEventMap, fn: (...args: any) => any): HTMLElement[];

    /**
     * 移除元素
     * @param [elem]   实际是removeChild(elem)
     */
    remove(elem: HTMLElement): HTMLElement[];

    /**
     * 移除 指定的attribute
     * @param [key]  是attribute的key
     */
    removeAttr(key: string): HTMLElement[];

    /**
     *  移除 className
     * @param [className]
     */
    removeClass(className: string): HTMLElement[];

    /**
     * 设置元素的value
     * @param [value] 值
     */
    val(value: any): HTMLElement[];

    /**
     * 获取第一个元素的value
     */
    val(): string;

    /**
     * 设置宽度
     * @param [value] 元素宽度
     */
    width(value: number | string): HTMLElement[];

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
     * @param [selector] 选择器 原始dom或者选择器字符串
     */
    (selector?: string | HTMLElement): LAY;

    v: string;

    /**
     * 把多个对象深层复制到dest,返回也为dest
     * @param [dest]
     * @param [src]
     */
    extend(dest: any, ...src: any): any;

    /**
     * 如果是ie则是版本，非ie则false
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
    stope(event?: Event): void;

    /**
     * 对象（Array、Object、DOM 对象等）遍历，可用于取代 for 语句 同layui.each
     * @param [obj]
     * @param [fn]
     */
    each(obj: object, fn?: (k: string, v: any) => void): Lay;

    /**
     * 数字前置补零
     * @param [num]  数字
     * @param [length]  补0后的长度
     */
    digit(num?: any, length?: number): string;

    /**
     * 根据tagName生成HTMLElement子元素
     * @param [elemName]  ts中小写可智能提示
     * @param [attr] 属性名
     */
    elem<K extends keyof HTMLElementTagNameMap>(elemName: K, attr?: object): HTMLElementTagNameMap[K];

    /**
     *  根据tagName生成HTMLElement子元素
     * @param elemName  非小写内置tagName
     * @param [attr] 属性名
     */
    elem(elemName: string, attr?: object): HTMLElement;

    /**
     * 当前页面body是否存在滚动条
     */
    hasScrollbar(): boolean;

    /**
     * 创建 style 标签并插入到指定的目标容器中
     * @param options target: 目标容器，原始 dom 或选择器字符串，默认 `body`；id: 样式的id，默认自增；text: 样式内容
     * @since 2.8.15
     */
    style(options: { target?: string | HTMLElement; id?: string; text: string }): void;

    /**
     * 将元素定位到指定目标元素附近
     * @param target 目标元素
     * @param elem 定位元素
     * @param [opts]
     * ```
     * opts
     * - position: 元素的定位模式，默认 absolute
     * - clickType: 点击类型，默认 left；
     * - align: 对齐方式，默认 left;
     * - allowBottomOut: 顶部没有足够区域显示时，是否允许底部溢出;
     * - margin: 边距；
     * - e: 仅右键生效，一般无需设置；
     * - SYSTEM_RELOAD: 用于出现滚动条时重新计算位置，不要主动设置
     * ```
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
      }
    ): void;

    /**
     * 获取元素上的参数，同jquery.attr()
     * @param [elem] html元素
     * @param [attr] 若空则为lay-options
     */
    options(elem: string | HTMLElement | JQuery, attr?: string): any;

    /**
     * 元素是否属于顶级元素（顶级：document 或 body）
     * @param [elem]  只有document或body才返回true
     */
    isTopElem(elem: any): boolean;

    /**
     * 获取 style rules
     * @param style 样式元素
     * @param callback 用来返回 style 元素中的每个 `style rule` 的函数，返回 true 终止遍历
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
      writeText(text: string, done: () => void, error: (err: any) => void): void;
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
  }
}
