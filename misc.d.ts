declare namespace Layui {
    // utils
    type Fn = () => void;
    type AnyFn = (...args: any[]) => any;
    type ArgumentsType<T> = T extends (...args: infer U) => any ? U : never;
    type MaybeArray<T> = T | T[];
    type MaybePromise<T> = T | Promise<T> | JQuery.Deferred<T>;

    type ExportsCallback = (this: Layui, fn: (app: string, exports: object) => void) => void;

    /**
     * 全局属性
     */
    interface GlobalConfigOptions {
        /**
         * layui.js 所在目录（如果是 script 单独引入 layui.js，无需设定该参数）
         */
        dir?: string;
        /**
         * 一般用于更新模块缓存，默认不开启。设为 true 即让浏览器不缓存。也可以设为一个固定的值，如：201610
         */
        version?: boolean;
        /**
         * 用于开启调试模式，默认 false，如果设为 true，则JS模块的节点会保留在页面
         */
        debug?: boolean;
        /**
         * 设定扩展的 layui 模块的所在目录，一般用于外部模块扩展
         */
        base?: string;
    }

    /**
     * 缓存的所有数据
     */
    interface CacheData {
        base: string;
        builtin: Modules;
        /*
          // 仅包含layui.use指定的模块或者导入全部模块
          ,callback:{
              carousel: Function
              ,code: Function
              ,colorpicker: Function
              ,dropdown: Function
              ,element:Function
              ,flow: Function
              ,form: Function
              ,jquery: Function
              ,lay: Function
              ,laydate: Function
              ,layedit: Function
              ,layer: Function
              ,laypage: Function
              ,laytpl: Function
              ,"layui.all": Function
              ,rate: Function
              ,slider: Function
              ,table: Function
              ,transfer:Function
              ,tree: Function
              ,upload: Function
              ,util: Function
              [index:string]:Function
          }*/
        /**
         * layui.js所在目录，如果是 script 单独引入 layui.js，无需设定该参数
         */
        dir: string;
        /**
         * 记录模块自定义事件
         */
        event: { [index: string]: { [index: string]: Array<(...arg: any) => any> } };
        host: string;
        /**
         * 记录模块物理路径
         */
        modules: { [index: string]: string };
        /**
         *  记录模块加载状态
         */
        status: {
            carousel: boolean;
            code: boolean;
            colorpicker: boolean;
            dropdown: boolean;
            element: boolean;
            flow: boolean;
            form: boolean;
            jquery: boolean;
            lay: boolean;
            laydate: boolean;
            layedit: boolean;
            layer: boolean;
            laypage: boolean;
            laytpl: boolean;
            'layui.all': boolean;
            rate: boolean;
            slider: boolean;
            table: boolean;
            treeTable: boolean;
            transfer: boolean;
            tree: boolean;
            upload: boolean;
            util: boolean;
            [index: string]: boolean;
        };
        /**
         *  符合规范的模块请求最长等待秒数
         */
        timeout: number;
        version: string;
    }

    /**
     * 内置模块名和外置名称映射
     */
    type Modules = { [T in keyof LayuiModuleMap]: string };

    interface LayuiModuleMap {
        carousel: Carousel;
        code: Code;
        colorpicker: ColorPicker;
        dropdown: Dropdown;
        element: Element;
        flow: Flow;
        form: Form;
        jquery: JQueryStatic;
        lay: LayStatic;
        laydate: Laydate;
        layedit: Layedit;
        layer: Layer;
        laypage: Laypage;
        laytpl: Laytpl;
        'layui.all': string;
        rate: Rate;
        slider: Slider;
        table: Table;
        treeTable: TreeTable;
        transfer: Transfer;
        tree: Tree;
        upload: Upload;
        util: Util;
    }

    /**
     * 地址中的参数和路径信息
     */
    interface UrlHash {
        hash: string;
        href?: string;
        path: string[];
        search: { [index: string]: string };
    }

    interface deviceReturn {
        /**
         * 当前浏览器所在的底层操作系统，如：Windows、Linux、Mac 等
         */
        os: string;
        /**
         * 当前浏览器是否为 ie6-11 的版本，如果不是 ie 浏览器，则为 false
         */
        ie: boolean;
        /**
         * 当前浏览器是否为微信 App 环境
         */
        weixin: boolean;
        /**
         * 当前浏览器是否为安卓系统环境
         */
        android: boolean;
        /**
         * 当前浏览器是否为 iOS 系统环境
         */
        ios: boolean;
        /**
         * 当前浏览器是否为移动设备环境
         * @since v2.5.7
         */
        mobile: boolean;
    }
}