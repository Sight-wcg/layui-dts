declare namespace Layui {
  interface TransferOption {
    /**
     * 指向容器选择器
     */
    elem?: string | HTMLElement | JQuery;
    /**
     * 穿梭框上方标题
     */
    title?: any[];
    /**
     * 数据源
     */
    data?: any[];

    /**
     * 用于对数据源进行格式解析
     * @param data
     */
    parseData?(data: any): any;

    /**
     * 初始选中的数据（右侧列表）
     */
    value?: any[];
    /**
     * 设定实例唯一索引，用于基础方法传参使用。
     */
    id?: string;
    /**
     * 是否开启搜索
     */
    showSearch?: boolean;
    /**
     * 定义左右穿梭框宽度
     */
    width?: number;
    /**
     * 定义左右穿梭框高度
     */
    height?: number;
    /**
     * 自定义文本，如空数据时的异常提示等。
     */
    text?: {
      /**
       * 没有数据时的文案 '无数据'
       */
      none?: string;
      /**
       * 搜索无匹配数据时的文案 '无匹配数据'
       */
      searchNone?: string;
    };

    /**
     * 左右数据穿梭时的回调
     * @param data 数据
     * @param index 索引
     */
    onchange?(data: any, index: number): void;
    /**
     * 双击时的回调函数
     * 返回 false 会阻止穿梭
     * @param obj {elem, data, index} 当前穿梭框对象、数据项、索引,如果数据来自左边，index 为 0，否则为 1
     * @since 2.9.3
     */
    dblclick?(obj: { elem: JQuery; data: object; index: number }): boolean | void;
  }

  interface TransferRendered {
    config: { [index: string]: any };

    /**
     * 获得右侧数据
     */
    getData(): any[];

    /**
     * 重载实例  bug to fix
     * @param id  实例唯一索引
     * @param options 各项基础参数
     */
    reload(id: string, options: TransferOption): void;

    /**
     * 设定全局默认参数  bug to fix
     *
     * @param options 各项基础参数
     */
  }

  // https://www.layui.com/doc/modules/transfer.html
  /**
   * 穿梭框组件
   */
  interface Transfer {
    config: { [index: string]: any };
    index: number;

    /**
     * 获得右侧数据
     * @param id 实例唯一索引
     */
    getData(id: string): any[];

    /**
     * 核心方法
     * bug to fix
     * @param option 各项基础参数
     */
    render(option: TransferOption): TransferRendered;

    /**
     * 绑定事件，内部modName默认为transfer，绑定参考layui.onevent,触发参考layui.event
     * @param events
     * @param callback
     */
    on(events: string, callback: (this: Layui, obj: any) => any): any;

    /**
     * 重载实例  bug to fix
     * @param id  实例唯一索引
     * @param options 各项基础参数
     */
    reload(id: string, options: TransferOption): void;

    /**
     * 设定全局默认参数  bug to fix
     *
     * @param options 各项基础参数
     */
    set(options: TransferOption): void;
  }
}
