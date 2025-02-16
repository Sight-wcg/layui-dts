declare namespace Layui {
  // https://www.layui.com/doc/modules/tree.html#data
  interface TreeData {
    /**
     * 节点标题
     */
    title?: string;
    /**
     * 节点唯一索引值，用于对指定节点进行各类操作
     */
    id?: string | number;
    /**
     * 节点字段名
     */
    field?: string;
    /**
     * 子节点。支持设定选项同父节点
     */
    children?: any[];
    /**
     * 点击节点弹出新窗口对应的 url。需开启 isJump 参数
     */
    href?: string;
    /**
     * 节点是否初始展开，默认 false
     */
    spread?: boolean;
    /**
     * 节点是否初始为选中状态（如果开启复选框的话），默认 false
     */
    checked?: boolean;
    /**
     * 节点是否为禁用状态。默认 false
     */
    disabled?: boolean;
  }

  interface TreeCheckData {
    data: any;
    checked: boolean;
    elem: JQuery;
  }

  interface TreeClickData {
    data: any;
    elem: JQuery;
    state: 'open' | 'close' | 'normal';
  }

  interface TreeOperateData {
    data: any;
    elem: JQuery;
    /**
     * 除了add和update就是删除del
     */
    type: 'add' | 'update' | 'del' | string;
  }

  /**
   * tree.reload()返回值
   */
  type TreeReloaded = Pick<Tree, 'config' | 'reload' | 'getChecked' | 'setChecked'>;

  // https://www.layui.com/doc/modules/tree.html#options
  /**
   * 基础参数
   */
  interface TreeOption {
    /**
     * 指向容器选择器
     */
    elem?: string | HTMLElement | JQuery;
    /**
     * 数据源
     */
    data?: TreeData[];
    /**
     * 设定实例唯一索引，用于基础方法传参使用。
     */
    id?: string;
    /**
     * 是否显示复选框
     */
    showCheckbox?: boolean;
    /**
     * 是否开启节点的操作图标。默认 false。
     */
    // 目前支持的操作图标有：add、update、del，如：edit: ['add', 'update', 'del']
    edit?: boolean | string[];
    /**
     * 是否开启手风琴模式，默认 false
     */
    accordion?: boolean;
    /**
     * 是否仅允许节点左侧图标控制展开收缩。默认 false（即点击节点本身也可控制）。
     */
    //  若为 true，则只能通过节点左侧图标来展开收缩
    onlyIconControl?: boolean;
    /**
     * 是否允许点击节点时弹出新窗口跳转。默认 false，
     */
    //  若开启，需在节点数据中设定 link 参数（值为 url 格式）
    isJump?: boolean;
    /**
     * 是否开启连接线。默认 true，若设为 false，则节点左侧出现三角图标。
     */
    showLine?: boolean;
    /**
     * 自定义各类默认文本，目前支持以下设定：
     */
    text?: {
      /**
       * 节点默认名称  '未命名'
       */
      defaultNodeName?: string;
      /**
       * 数据为空时的提示文本 '无数据'
       */
      none?: string;
    };

    /**
     * 自定义节点名称
     * @since 2.8.15
     */
    customName?: { [T in keyof TreeData]: string };

    /**
     * 复选框被点击的回调
     * @param [obj]
     */
    oncheck?(obj: TreeCheckData): void;

    /**
     * 节点被点击的回调
     * @param [obj]
     */
    click?(obj: TreeClickData): void;

    /**
     * 操作节点的回调
     * @param [obj]
     */
    operate?(obj: TreeOperateData): void;

    /**
     * 节点过滤的回调
     * @param [obj]
     */
    onsearch?(obj: { elem: any[] }): void;

    /**
     * 未知
     * @param [args]
     */
    dragstart?(...args: any): any;

    /**
     * 未知
     * @param [args]
     */
    dragend?(...args: any): any;
  }

  // https://www.layui.com/doc/modules/tree.html
  /**
   * 树形组件
   */
  interface Tree {
    /**
     * 全局参数项
     */
    config: { [index: string]: any };

    /**
     * 返回选中的节点数据数组
     * @param [id]  render参数中的id ,注意data中需要有id属性才返回
     */
    getChecked(id: string): TreeData[];

    /**
     * tree实例总数
     */
    index: number;

    /**
     * 绑定事件，内部modName默认为tree，绑定参考layui.onevent,触发参考layui.event
     * @param [events]
     * @param [callback]
     */
    on(events: string, callback: (this: Layui, obj: any) => any): any;

    /**
     * 实例重载,重载一个已经创建的组件实例，覆盖基础属性
     * @param [id] render参数中的id，保证id存在否则出js错误
     * @param [options] 基础参数
     */
    reload(id: string, options: TreeOption): TreeReloaded;

    /**
     * 核心方法
     * @param [option] 基础参数
     */
    render(option: TreeOption): any;

    /**
     * 设置tree全局参数(预设基础参数值)
     * @param [option]
     */
    set(option?: TreeOption): Tree;

    /**
     * 设置节点勾选
     * @param [id]
     */
    /**
     * 设置节点勾选
     * @param [id] render参数中的id，指明是哪个tree实例
     * @param [nodeId]  树节点数据中的id 参考render->data->id
     */
    setChecked(id: string, nodeId: any): void;
  }
}
