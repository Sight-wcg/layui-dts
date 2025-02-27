declare namespace Layui {
  interface UploadOption {
    /**
     * 指向容器选择器，如：elem: '#id'。也可以是DOM对象
     */
    elem: string | HTMLElement | JQuery;
    /**
     *  触发上传的元素
     */
    readonly item?: HTMLElement;
    /**
     * 服务端上传接口,如：'/api/upload/'
     */
    url?: string;
    /**
     * 请求上传接口的额外参数,支持属性为function动态值
     * 函数参数(2.9.3): index 当前文件索引；file 当前文件对象

     */
    data?: { [index: string]: ((index?: number, file?: File) => string | number) | string | number };
    /**
     * 接口的请求头。如：headers: {token: 'sasasas'}
     */
    headers?: object;
    /**
     * 指定允许上传时校验的文件类型， 默认：images (即file,video,audio之外都可)
     *
     * 可选值有：
     * - `images` 图片类型
     * - `file` 所有文件类型
     * - `video` 视频类型
     * - `audio` 音频类型
     */
    accept?: 'images' | 'file' | 'video' | 'audio';
    /**
     * 规定打开文件选择框筛选出的文件类型，多个 MIME 类型可用逗号隔开。示例：
     * ```
     * acceptMime: 'image/*' // 筛选所有图片类型
     * acceptMime: 'image/jpeg, image/png'// 只显示 jpg 和 png 文件
     * ```
     * @see {@link https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types | MIME类型}
     */
    acceptMime?: string;
    /**
     * 规定强制返回的数据格式
     * - 若值为 ‘json’，则强制校验 JSON 数据格式
     * @default null
     * @since 2.6.9
     */
    force?: string | null;
    /**
     * 允许上传的文件后缀。一般结合 accept 参数类设定。默认：jpg|png|gif|bmp|jpeg|svg|webp   <br/>&nbsp;
     */
    //  假设 accept 为 file 类型时，那么你设置 exts: 'zip|rar|7z' 即代表只允许上传压缩格式的文件。	<br/>&nbsp;
    //  如果 accept 未设定，那么限制的就是图片的文件格式
    exts?: string;
    /**
     * 是否选完文件后自动上传。 默认：true    <br/>&nbsp;
     */
    //  如果设定 false，那么需要设置 bindAction 参数来指向一个其它按钮提交上传
    auto?: boolean;
    /**
     * 指向一个按钮触发上传，一般配合 auto: false 来使用。值为选择器或DOM对象，如：bindAction: '#btn'
     */
    bindAction?: string | HTMLElement;
    /**
     * 设定文件域的字段名,默认：file
     */
    field?: string;
    /**
     * 设置文件最大可允许上传的大小，单位 KB。不支持ie8/9 ，默认:0（即无限制）
     */
    size?: number;
    /**
     * 是否允许多文件上传。设置 true即可开启。不支持ie8/9 默认：false
     */
    multiple?: boolean;
    /**
     * 设置同时可上传的文件数量，一般配合 multiple 参数出现。 默认:0（即无限制）
     */
    number?: number;
    /**
     * 更新文件域相关属性
     */
    name?: string;
    /**
     * 是否接受拖拽的文件上传，设置 false 可禁用。不支持ie8/9 默认true
     */
    drag?: boolean;
    /**
     * 请求上传的 http 类型
     */
    method?: string;

    /**
     * 选择多文件时是否统一上传，即只发送一次请求。默认：false
     * @default false
     * @since 2.8.8
     */
    unified?: boolean;

    /**
     * 自定义内部各类场景下的提示文本
     * @since 2.8.9
     */
    text?: UploadText;

    /**
     * 服务端返回的数据类型
     * @since 2.8.17
     */
    dataType?: string;

    /**
     * 选择文件后的回调函数
     * @param obj 回调参数(工具对象)
     */
    choose?(this: UploadOptionThis, obj: UploadCallbackArg): void;

    /**
     * 文件提交上传前的回调，返回false则停止上传  实例:before:function(this,obj){}
     * 2.9.11+ 新增支持 Promise
     * @param obj  回调参数(工具对象)
     */
    before?(this: UploadOptionThis, obj: UploadCallbackArg): boolean | JQueryDeferred<boolean> | Promise<boolean>;

    /**
     * 上传后的回调
     * @param res  服务端response json
     * @param index  当前文件索引  (选择文件时自动生成的：new Date().getTime()+'-'+i)
     * @param upload  上传函数
     */
    done?(this: UploadOptionThis, res: any, index: string, upload: (files?: Blob[]) => void): void;

    /**
     * 执行上传请求出现异常的回调（一般为网络异常、URL 404等）。    <br/>&nbsp;
     * 返回两个参数，分别为：index（当前文件的索引）、upload（重新上传的方法
     * @param index 当前文件索引  (选择文件时自动生成的：new Date().getTime()+'-'+i)
     * @param upload 上传函数
     * @param res 返回值（纯文本）2.9.13+
     * @param xhr jQuery xhr 对象 2.9.16+
     */
    error?(this: UploadOptionThis, index: string, upload: (files?: Blob[]) => void, res: string, xhr: jQXhr): void;

    /**
     *  当文件全部被提交后，才触发
     * @param obj 回调参数
     */
    allDone?(this: UploadOptionThis, obj: UploadAllDoneArg): void;

    /**
     * 进度回调
     * @param percent  数字进度
     * @param elem  render参数中的elem（即点击元素dom）
     * @param event 事件
     * @param index 当前文件索引  (选择文件时自动生成的：new Date().getTime()+'-'+i)
     */
    progress?(this: UploadOptionThis, percent: number, elem: HTMLElement, event: ProgressEvent, index: string): void;
  }

  type UploadOptionThis = Required<UploadOption>;

  interface UploadAllDoneArg {
    /**
     * 得到总文件数
     */
    total: number;
    /**
     * 请求成功的文件数
     */
    successful: number;
    /**
     * 请求失败的文件数
     */
    aborted: number;
  }

  interface UploadCallbackArg {
    /**
     *  预览
     * @param callback index索引,file文件,result比如图片base64编码
     */
    preview(callback: (index: string, file: File, result: any) => void): void;

    /**
     * 上传单个文件    <br/>&nbsp;
     * 对上传失败的单个文件重新上传，一般在某个事件中使用
     * @param index 索引  (选择文件时自动生成的：new Date().getTime()+'-'+i)
     * @param file 文件
     */
    upload(index: string, file: Blob): void;

    /**
     * 追加文件到队列, 比如 choose回调中将每次选择的文件追加到文件队列
     */
    pushFile(): { [index: string]: File };

    /**
     * 重置文件和文件名
     * @param index 被重置的文件索引  (选择文件时自动生成的：new Date().getTime()+'-'+i)
     * @param file  新的文件
     * @param filename 新的名字
     */
    resetFile(index: string, file: Blob, filename: any): void;
    /**
     * 获取本次选取的文件，大文件建议用此方法获取文件信息
     * @since 2.9.9
     */
    getChooseFiles(): File[];
  }

  interface UploadRendered {
    /**
     * 参数信息
     */
    config: { [index: string]: any };

    /**
     * 重载该实例，支持重载全部基础参数
     * @param options 基础参数
     */
    reload(options?: Partial<UploadOption>): void;

    /**
     * 重新上传的方法，一般在某个事件中使用
     * @param files 需要上传的文件数组
     */
    upload(files?: Blob[]): void;
  }
  interface UploadText {
    /**
     * 数据格式错误的提示
     */
    'data-format-error'?: string;
    /**
     * 文件格式校验失败的提示
     */
    'check-error'?: string;
    /**
     * 上传失败的提示
     */
    error?: string;
    /**
     * 限制 number 属性的提示。若设置，需为函数写法
     */
    'limit-number'?: (options: UploadOptionThis, fileLength: number) => string;
    /**
     * 限制 size 属性的提示。若设置，需为函数写法
     */
    'limit-size'?: (options: UploadOptionThis, limitSize: number) => string;
    /**
     *  IE 下跨域的提示
     */
    'cross-domain'?: string;
  }

  // https://www.layui.com/doc/modules/upload.html
  /**
   * 图片/文件上传
   */
  interface Upload {
    /**
     * 全局参数项
     */
    config: { [index: string]: any };

    /**
     * 绑定事件，内部modName默认为 upload，绑定参考layui.onevent,触发参考layui.event
     * @param events
     * @param callback
     */
    on(events: string, callback: (this: Layui, obj: any) => any): any;

    /**
     * 核心方法
     * @param option 基础参数
     */
    render(option: UploadOption): UploadRendered;

    /**
     * 设置upload全局参数(预设基础参数值)
     * @param option 参数
     */
    set(option?: UploadOption): Upload;
  }
}
