import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';
import { createWriteStream } from 'fs';

// 获取当前模块路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 使用 fs.promises API
const fsPromises = fs.promises;

/**
 * 从GitHub下载文件
 * @param {Object} options - 配置选项
 * @param {string} options.owner - 仓库所有者
 * @param {string} options.repo - 仓库名称
 * @param {string} options.branch - 分支名称 (默认: 'main')
 * @param {string} options.remotePath - 远程路径 (文件夹路径)
 * @param {string[]} options.files - 要下载的文件列表 (相对路径)
 * @param {string} options.localDir - 本地保存目录
 */
async function downloadFromGitHub({
  owner,
  repo,
  branch = 'main',
  remotePath = '',
  files = [],
  localDir = './download'
}) {
  try {
    // 创建本地目录（如果不存在）
    await fsPromises.mkdir(localDir, { recursive: true });

    // 下载所有指定文件
    for (const file of files) {
      // 使用 path.posix 确保跨平台路径兼容性
      const remoteFilePath = path.posix.join(remotePath, file);
      const fileUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${remoteFilePath}`;
      const localFilePath = path.join(localDir, file);

      // 确保本地目录存在
      const dir = path.dirname(localFilePath);
      await fsPromises.mkdir(dir, { recursive: true });

      // 下载并保存文件
      await downloadFile(fileUrl, localFilePath);
      console.log(`✓ 已下载: ${remoteFilePath} -> ${localFilePath}`);
    }

    console.log('\n所有文件下载完成！');
  } catch (error) {
    console.error('下载失败:', error.message);
  }
}

/**
 * 使用 fetch 下载单个文件
 * @param {string} url - 文件URL
 * @param {string} filePath - 本地保存路径
 */
async function downloadFile(url, filePath) {
  const response = await fetch(url, {
    redirect: 'follow', // 自动跟随重定向
    headers: {
      'User-Agent': 'Node.js Fetch' // GitHub API 要求 User-Agent
    }
  });
  console.log('url', url);
  

  // 检查响应状态
  if (!response.ok) {
    throw new Error(`请求失败，状态码: ${response.status} - ${response.statusText}`);
  }

  // 创建可写流
  const fileStream = createWriteStream(filePath);
  
  // 使用 stream.pipeline 管理数据流
  if (!response.body) {
    throw new Error('响应体为空');
  }
  
  await pipeline(response.body, fileStream);
}

// 使用示例 ============================================
const config = {
  owner: 'DefinitelyTyped',          // 仓库所有者
  repo: 'DefinitelyTyped',              // 仓库名称
  branch: 'master',             // 分支（默认：main）
  remotePath: 'types/layui',         // 远程文件夹路径
  files: [                    // 要下载的文件列表
],
  localDir: path.join(__dirname, '../') // 本地保存目录
};

const modules = [
  'carousel',
  'code',
  'colorpicker',
  'component',
  'dropdown',
  'element',
  'flow',
  'form',
  'lay',
  'laydate',
  'layedit',
  'layer',
  'laypage',
  'laytpl',
  'rate',
  'slider',
  'table',
  'tabs',
  'transfer',
  'tree',
  'treeTable',
  'upload',
  'util',
]

downloadFromGitHub({
  ...config,
  files: [
    'index.d.ts',
    'Layui.d.ts',
    'misc.d.ts',
    'layui-tests.ts'
  ],
});

downloadFromGitHub({
  ...config,
  files: modules.map(file => `modules/${file}.d.ts`),
});

downloadFromGitHub({
  ...config,
  files: modules.map(file => `test/${file}.test.ts`),
});
