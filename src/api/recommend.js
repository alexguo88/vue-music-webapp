import axios from 'axios'
import {HOST} from 'common/js/config'

// 推荐-轮播图
export function getBanner () {
  const url = HOST + '/banner'
  return axios.get(url)
}
// 推荐-推荐歌单
export function getRecommendList () {
  const url = HOST + '/personalized'
  return axios.get(url)
}

// 推荐-推荐歌曲
export function getRecommendMusic () {
  const url = HOST + '/personalized/newsong'
  return axios.get(url)
}

// 推荐-歌单明细
export function getRecommendListDetail (id) {
  const url = HOST + `/playlist/detail?id=${id}`
  return axios.get(url)
}
