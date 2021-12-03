/*
 * @Author: Li Jian
 * @Date: 2021-12-02 15:51:59
 * @LastEditTime: 2021-12-03 08:44:53
 * @LastEditors: Li Jian
 */
import { get, post } from '../axios'

// 历史上的今天
const TodayInHistory = (params: Object) => get('https://api.oick.cn/lishi/api.php', params)

// ICP备案查询
const ICPSearch = (params: Object) => get('https://api.oick.cn/icp/api.php', params)

// 火车票查询-跨域问题
const TrainTicketsSeatch = (params: Object) => get('https://huoche.tuniu.com/yii.php', params)

// 单词释义-跨域问题
const WordDefinition = (params: Object) => get('https://dict.youdao.com/jsonapi', params)

export {
  TodayInHistory,
  ICPSearch,
  TrainTicketsSeatch,
  WordDefinition
}