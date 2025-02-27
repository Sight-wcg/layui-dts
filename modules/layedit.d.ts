declare namespace Layui{
       /**
     * 编辑器基本设置
     */
       interface EditOption {
        /**
         * 重新定制编辑器工具栏，如： tool: ['link', 'unlink', 'face'] 当前可选有：    <br/>&nbsp;
         *             'strong' //加粗    <br/>&nbsp;
         *             ,'italic' //斜体    <br/>&nbsp;
         *             ,'underline' //下划线    <br/>&nbsp;
         *             ,'del' //删除线    <br/>&nbsp;
         *
         *             ,'|' //分割线    <br/>&nbsp;
         *
         *             ,'left' //左对齐    <br/>&nbsp;
         *             ,'center' //居中对齐    <br/>&nbsp;
         *             ,'right' //右对齐    <br/>&nbsp;
         *             ,'link' //超链接    <br/>&nbsp;
         *             ,'unlink' //清除链接    <br/>&nbsp;
         *             ,'face' //表情    <br/>&nbsp;
         *             ,'image' //插入图片    <br/>&nbsp;
         *             ,'help' //帮助    <br/>&nbsp;
         */

        tool?: string[];
        /**
         * 不显示编辑器工具栏，一般用于隐藏默认配置的工具bar
         */
        hideTool?: string[];
        /**
         * 设定编辑器的初始高度
         */
        height?: number | string;
        /**
         * 设定图片上传接口，如：uploadImage: {url: '/upload/', type: 'post'},需要服务端返回：    <br/>&nbsp;
         *   {	<br/>&nbsp;
         *     "code": 0 // 0表示成功，其它失败	<br/>&nbsp;
         *     ,"msg": "" // 提示信息  一般上传失败后返回	<br/>&nbsp;
         *    ,"data": {	<br/>&nbsp;
         *       "src": "图片路径"	<br/>&nbsp;
         *      ,"title": "图片名称" //可选	<br/>&nbsp;
         *       }	<br/>&nbsp;
         *  }    <br/>&nbsp;
         */

        uploadImage?: { url: string; type: string };
    }

    // https://www.layui.com/doc/modules/layedit.html
    /**
     * 富文本编辑器
     * @deprecated 2.8.0 已移除
     */
    interface Layedit {
        /**
         * 用于建立编辑器的核心方法
         * @param id 实例元素（一般为textarea）的id值
         * @param options 编辑器的可配置项
         */
        build(id: string, options?: EditOption): any;

        /**
         * 设置编辑器的全局属性
         * @param options
         */
        set(options: EditOption): Layedit;

        /**
         * 获得编辑器的内容
         * @param index 即执行layedit.build返回的值
         */
        getContent(index: number): string;

        /**
         *  获得编辑器的纯文本内容
         * @param index 即执行layedit.build返回的值
         */
        getText(index: number): string;

        /**
         *  用于同步编辑器内容到textarea（一般用于异步提交）
         * @param index 即执行layedit.build返回的值
         */
        sync(index: number): void;

        /**
         * 获取编辑器选中的文本
         * @param index 即执行layedit.build返回的值
         */
        getSelection(index: number): string;
    }
}