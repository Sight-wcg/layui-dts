declare namespace Layui {
  interface TabOption {
    /**
     * 选项卡的标题 不写则是unnaming
     */
    title?: string;
    /**
     * '选项卡的内容' ,支持传入html
     */
    content?: string;
    /**
     * 选项卡标题的lay-id属性值
     */
    id?: string;
    /**
     * 添加后自动切换
     * @default false
     * @since 2.8.6
     */
    change?: boolean;
    /**
     * 是否开启删除图标
     * @default false
     * @since 2.9.11
     */
    allowClose?: boolean;
  }

  interface TabElement {
    /**
     * 指定tab头元素项
     */
    headerElem: string | HTMLElement | JQuery;
    /**
     * 指定tab主体元素项
     */
    bodyElem: string | HTMLElement | JQuery;
  }

  // https://www.layui.com/doc/modules/element.html
  type ElementEventParam = {
    /**
     * 当前 tab 项的所在下标
     */
    index: number;
    /**
     * 当前的 tab 容器
     */
    elem: JQuery;
    /**
     * 前的 tab ID
     * @sinc 2.9.11
     */
    id: string;
  };
  type ElementEventMap = {
    /**
     * tab 切换事件
     */
    tab(this: HTMLElement, data: ElementEventParam): void;
    /**
     * tab 切换前的事件
     * 返回 false 阻止切换
     * @since 2.9.16
     */
    tabBeforeChange(this: HTMLElement, data: ElementEventParam & { to: { index: number; id: string } }): undefined | boolean;
    /**
     * tab 删除事件
     */
    tabDelete(this: HTMLElement, data: ElementEventParam): void;
    /**
     * tab 删除前的事件
     * 返回 false 取消关闭操作
     * @since 2.9.11+
     */
    tabBeforeDelete(this: HTMLElement, data: ElementEventParam): undefined | boolean;
  };
  /**
   * 元素操作
   */
  interface Element {
    config: { [index: string]: any };

    // set(options?: ): object;  很少用

    /**
     * 用于元素的一些事件触发
     * @param [filter] 比如：tab(filter)，tabDelete(filter)，nav(filter)，collapse(filter)
     * @param [callback]  不同filter对应的data类型不同
     */
    on<K extends keyof ElementEventMap>(event: `${K}(${TableFilter})`, callback: ElementEventMap[K]): void;
    on<K extends keyof ElementEventMap>(event: K, callback: ElementEventMap[K]): void;
    on<K extends string>(event: `${K}(${TableFilter})`, callback: AnyFn): void;

    /**
     * 用于新增一个Tab选项
     * @param [filter] tab元素的 lay-filter="value" 过滤器的值（value）
     * @param [options] 设定可选值的对象，
     */
    tabAdd(filter: string, options: TabOption): void;

    /**
     * 用于删除指定的Tab选项
     * @param [filter] tab元素的 lay-filter="value" 过滤器的值（value）
     * @param [layid] 选项卡标题列表的 属性 lay-id 的值
     * @param [force] 是否强制删除，默认为false。如果为true，则会直接删除，不会触发事件 2.9.21
     */
    tabDelete(filter: string, layid: string, force?: boolean): void;

    /**
     * 用于外部切换到指定的Tab项上
     * @param [filter] 比如：element.tabChange('demo', 'layid');中的'demo'
     * @param [layid] 比如：lay-id="yyy"中的'yyy'
     * @param [force] 是否强制切换，默认为false。如果为true，则会直接切换，不会触发事件 2.9.15
     */
    tabChange(filter: string, layid: string, force?: boolean): void;

    /**
     * 用于绑定自定义 Tab 元素（即非 layui 自带的 tab 结构）
     * @param [option] 参数
     */
    tab(option: TabElement): void;

    /**
     * 用于动态改变进度条百分比： 例如：element.progress('demo', '30%');
     * @param [filter]  lay-filter
     * @param [percent] 比例
     */
    progress(filter: string, percent: string): void;

    /**
     *  更新渲染同render， 2.1.6 开始，可以用 element.render(type, filter); 方法替代
     * @param [type]  可选有：'tab' | 'nav' | 'breadcrumb' | 'progress' | 'collapse'
     * @param [filter] lay-filter
     * @deprecated 已弃用，请使用 {@link Element.render | render} 方法

     */
    init(type?: 'tab' | 'nav' | 'breadcrumb' | 'progress' | 'collapse', filter?: string): void;

    /**
     * 更新渲染 ，当type不能识别时，layui会遍历渲染"tab""nav"|"breadcrumb"|"progress"|"collapse" 全部；<br/>&nbsp;
     * @param [type] 表单的type类型，如下：    <br/>&nbsp;
     *  1、tab 重新对tab选项卡进行初始化渲染, <br/>&nbsp;
     *  2、nav    重新对导航进行渲染   <br/>&nbsp;
     *  3、breadcrumb    重新对面包屑进行渲染  <br/>&nbsp;
     *  4、progress    重新对进度条进行渲染  <br/>&nbsp;
     *  5、collapse    重新对折叠面板进行渲染 <br/>&nbsp;
     * @param [filter] 为元素的 lay-filter="" 的值，用于局部更新，2.9.16+ 支持 jQuery 对象
     */
    render(type?: 'tab' | 'nav' | 'breadcrumb' | 'progress' | 'collapse', filter?: string | JQuery): void;
  }
}
