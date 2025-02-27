declare namespace Layui{
  interface PageOptions {
    /**
     * 指向存放分页的容器，值可以是容器ID、DOM对象。如：    <br/>&nbsp;
     * 1. elem: 'id'   注意：这里不能加 # 号    <br/>&nbsp;
     * 2. elem: document.getElementById('id')
     */
    elem?: string | HTMLElement;
    /**
     * 数据总数。一般通过服务端得到
     */
    count?: number;
    /**
     * 每页显示的条数。laypage将会借助 count 和 limit 计算出分页数。 默认：10
     */
    limit?: number;
    /**
     * 每页条数的选择项。如果 layout 参数开启了 limit， 默认：[10, 20, 30, 40, 50]    <br/>&nbsp;
     * 则会出现每页条数的select选择框
     */
    limits?: number[];
    /**
     * 起始页。一般用于刷新类型的跳页以及HASH跳页
     */
    curr?: number | string;
    /**
     * 连续出现的页码个数 默认：5
     */
    groups?: number;
    /**
     * false:则不显示”上一页”的内容，其他值则是自定义”上一页”的内容 默认：上一页
     */
    prev?: string;

    /**
     * false:则不显示”下一页”的内容，其他值则是自定义”下一页”的内容 默认：下一页
     */
    next?: string;
    /**
     * false:则不显示”首页”的内容，其他值则是自定义”首页”的内容 默认：首页
     */
    first?: string | boolean;
    /**
     * false:则不显示”尾页”的内容，其他值则是自定义”尾页”的内容 默认：尾页
     */
    last?: string | boolean;

    /**
     * 自定义排版。可选值有：    <br/>&nbsp;
     *  count（总条目输区域）、prev（上一页区域）、    <br/>&nbsp;
     *  page（分页区域）、next（下一页区域）、limit（条目选项区域）、    <br/>&nbsp;
     *  refresh（页面刷新区域。注意：layui 2.3.0 新增） 、skip（快捷跳页区域）
     */
    layout?: Array<'count' | 'prev' | 'page' | 'next' | 'limit' | 'refresh' | 'skip'>;

    /**
     * 自定义主题。支持传入：颜色值，或任意普通字符。    <br/>&nbsp;
     *  如：    <br/>&nbsp;
     *  1. theme: '#c00'    <br/>&nbsp;
     *  2. theme: 'xxx' //将会生成 class="layui-laypage-xxx" 的CSS类，以便自定义主题
     */
    theme?: string;

    /**
     * 开启location.hash，并自定义 hash 值。如果开启，在触发分页时，    <br/>&nbsp;
     * 会自动对url追加：#!hash值={curr} 利用这个，可以在页面载入时就定位到指定页
     *
     */
    hash?: string | boolean;

    /**
     * 自定义条目模板
     * @example
     * ```js
     * limitTemplet: function(item) {
     *   return item + ' / page';
     * }
     * ```
     * 
     * @since 2.8.18
     */
    limitTemplet?: (item: string) => string;

    /**
     * 自定义跳页区域文本
     * @example
     * ```js
     * skipText: ['Go to', '', 'Confirm']
     * ```
     * @since 2.8.18
     */
    skipText?: string[];

    /**
     * 自定义总数区域文本
     * @example
     * ```js
     * countText: ['Total ','']
     * ```
     * @since 2.9.1
     */
    countText?: string[];

    /**
     * 切换分页的回调
     * @param obj 当前分页的所有选项值
     * @param first 是否首次，一般用于初始加载的条件,true则会调用渲染
     */
    jump?(obj: PageOptionsForCallback, first: boolean): void;
}

/**
 * 先排除
 */
interface PageOptionsForCallback extends Omit<Required<PageOptions>, 'count' | 'curr' | 'limit' | 'groups'> {
    /**
     * 数据总数。一般通过服务端得到
     */
    count: number;
    /**
     * 起始页。一般用于刷新类型的跳页以及HASH跳页
     */
    curr: number;
    /**
     *  每页条数的选择项。如果 layout 参数开启了 limit， 默认：[10, 20, 30, 40, 50]    <br/>&nbsp;
     *  则会出现每页条数的select选择框
     */
    limit: number;
    /**
     *  自动计算出的总分页数
     */
    pages: number;
    /**
     * 连续出现的页码个数 默认：5
     */
    groups: number;
}

// https://www.layui.com/doc/modules/laypage.html
/**
 * 分页模块
 */
interface Laypage {
    index: number;

    on<K extends keyof HTMLElementEventMap>(
        elem: HTMLElement | null,
        event: K,
        listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => void,
    ): void;

    on(elem: HTMLElement | null, event: string, listener: (this: HTMLElement, ...args: any) => any): void;

    render(options?: PageOptions): any;
}
}