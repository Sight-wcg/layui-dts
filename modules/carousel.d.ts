declare namespace Layui {
    interface CarouselOptions {
        /**
         * 指向容器选择器，如：elem: '#id'，也可以是 DOM 对象
         */
        elem: string | HTMLElement | JQuery;
        /**
         * 设定轮播容器宽度，支持像素和百分比
         * @default '600px'
         */
        width?: string;
        /**
         * 设定轮播容器高度，支持像素和百分比
         * @default '280px'
         */
        height?: string;
        /**
         * 是否全屏轮播
         * @default false
         */
        full?: boolean;
        /**
         * 轮播切换动画方式
         * - `default` 左右切换
         * - `updown` 上下切换
         * - `fade` 渐隐渐显切换
         * @default 'default'
         */
        anim?: 'default' | 'updown' | 'fade';
        /**
         * 是否自动切换
         * - `true` 自动滚动，鼠标移入会暂停、移出重新恢复
         * - `false` 不自动滚动
         * - `alway` 始终自动滚动，不受鼠标移入移出影响（2.7.0）
         * @default true
         */
        autoplay?: boolean | 'always';
        /**
         * 自动切换的时间间隔，单位：ms（毫秒），不能低于800
         * @default 3000
         */
        interval?: number;
        /**
         * 初始开始的条目索引
         * @default 0
         */
        index?: number;
        /**
         * 切换箭头默认显示状态
         * - `hover` 悬停显示
         * - `always` 始终显示
         * - `none` 始终不显示
         * @default 'hover'
         */
        arrow?: 'hover' | 'always' | 'none';
        /**
         * 指示器位置
         * - `inside` 容器内部
         * - `outside` 容器外部
         * - `none` 不显示
         * @default 'inside'
         */
        indicator?: 'insider' | 'outsider' | 'none';
        /**
         * 指示器的触发事件
         * @default 'click'
         */
        trigger?: string;
        /**
         * 轮播切换后的回调函数
         * @param [obj] 轮播条目对象
         * @since 2.7.0
         */
        change?: (obj: CarouselItem) => any;
    }

    interface CarouselItem {
        /**
         * 当前条目的索引
         */
        index: number;
        /**
         * 上一个条目的索引
         */
        prevIndex: number;
        /**
         * 当前条目的元素对象
         */
        item: JQuery;
    }

    interface CarouselClass {
        /**
         * 配置属性
         */
        config: Required<CarouselOptions>;
        /**
         * 初始焦点
         */
        elemItem: JQuery;

        /**
         * 轮播渲染
         */
        render(): void;

        /**
         * 重置轮播
         */
        reload(options: { [index: string]: string }): void;

        /**
         * 获取上一个等待条目的索引
         */
        prevIndex(): number;

        /**
         * 获取下一个等待条目的索引
         */
        nextIndex(): number;

        /**
         * 手动递增索引值
         */
        addIndex(num: number): void;

        /**
         * 手动递减索引值
         */
        subIndex(num: number): void;

        /**
         * 自动轮播
         */
        autoplay(): void;

        /**
         * 箭头
         */
        arrow(): void;

        /**
         * 指示器
         */
        indicator(): void;

        /**
         * 滑动切换 type ：sub 减，其他增
         */
        slide(type: string, num: number): void;

        /**
         * 事件处理
         */
        events(): void;
    }

    /**
     * 轮播组件
     * @see https://layui.dev/docs/2/carousel/
     */
    interface Carousel {
        config: { [index: string]: any };

        /**
         * 核心入口
         */
        render(options: Partial<CarouselOptions>): void;

        /**
         * 绑定切换事件
         * @param [event]  事件
         * @param [callback]  回调
         */
        on(event: string, callback: (this: CarouselClass, obj: CarouselItem) => any): any;

        /**
         * 重置轮播
         * @param [options] 基础参数
         */
        reload(options?: Partial<CarouselOptions>): void;

        /**
         * 设置轮播组件的全局参数
         * @param [options] 基础参数
         */
        set(options?: Partial<CarouselOptions>): Carousel;
        /**
         * 轮播的手动切换
         * @param index 轮播下标，从 0 开始计算
         * @since 2.8.0
         */
        goto(index: number): void;
    }
}
