
/*开发版*/

const CONF = {
  port: '5757',
  rootPathname: '',
  // 微信小程序 App ID
  appId: 'wx8960c159a6b737fa',
  // 微信小程序 App Secret
  appSecret: '0c388e9f358a2e89525767c3e16c8bae',
  // 是否使用腾讯云代理登录小程序
  useQcloudLogin: true,
  /**
   * MySQL 配置，用来存储 session 和用户信息
   * 若使用了腾讯云微信小程序解决方案
   * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
   */
  mysql: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    db: 'cAuth',
    pass: 'wx8960c159a6b737fa',
    char: 'utf8mb4'
  },
  cos: {
    /**
     * 区域
     * @查看 https://cloud.tencent.com/document/product/436/6224
     */
    region: 'ap-guangzhou',
    // Bucket 名称
    fileBucket: 'wximg',
    // 文件夹
    uploadFolder: ''
  },
  // 微信登录态有效期
  wxLoginExpires: 7200
}
module.exports = process.env.NODE_ENV === 'local' ? Object.assign({}, CONF, require('./config.local')) : CONF;
