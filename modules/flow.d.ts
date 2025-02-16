declare namespace Layui {
  interface FlowOption {
    /**
     * 指定列表容器的选择器
     */
    elem?: string | HTMLElement;
    /**
     * 滚动条所在元素选择器，默认document。如果你不是通过窗口滚动来触发流加载， <br/>&nbsp;
     *   而是页面中的某一个容器的滚动条，那么通过该参数指定即可。
     */
    scrollElem?: string | HTMLElement;
    /**
     * 是否自动加载。默认true。如果设为false，点会在列表底部生成一个“加载更多”的button，则只能点击它才会加载下一页数据。
     */
    isAuto?: boolean;
    /**
     * 用于显示末页内容，可传入任意HTML字符。默认为：没有更多了
     */
    end?: string;
    /**
     * 是否开启图片懒加载。默认false。 <br/>&nbsp;
     * 如果设为true，则只会对在可视区域的图片进行按需加载。但与此同时，在拼接列表字符的时候， <br/>&nbsp;
     * 你不能给列表中的img元素赋值src，必须要用lay-src取代
     */
    isLazyimg?: boolean;
    /**
     * 与底部的临界距离，默认50。即当滚动条与底部产生该距离时，触发加载。注意：只有在isAuto为true时有效。
     */
    mb?: number;
    /**
     * 指定触发加载的方向
     * @default 'bottom'
     * @since 2.9.7
     */
    direction?: 'bottom' | 'top';
    /**
     * 自定义"加载更多"按钮文本
     * @since 2.9.11
     */
    moreText?: string;
    /**
     * 到达临界点触发加载的回调。信息流最重要的一个存在。携带两个参数：page, next
     */
    done?: (page: number, next: (html: string, hasMore: boolean) => void) => void;
  }

  // https://www.layui.com/doc/modules/flow.html
  /**
   * 流加载
   */
  interface Flow {
    /**
     * 流加载
     * @param option 信息流参数
     */
    load(option: FlowOption): void;

    /**
     * 图片懒加载
     * @param [option] 参数
     */
    lazyimg(option?: {
      /**
       * 指定开启懒加载的img元素选择器，如 elem: '.demo img' 或 elem: 'img.load' 默认:img
       */
      elem?: string;
      /**
       * 滚动条所在元素选择器，默认document
       */
      scrollElem?: string;
    }): void;
  }
}
