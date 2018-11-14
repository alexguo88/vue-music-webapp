import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

const state = {
  musicList: {}, // 歌单歌曲列表
  singer: {}, // 歌取
  playing: false, // 是否正在播放
  fullScreen: false, // 是否全屏播放
  playlist: [], // 实际播放列表
  sequenceList: [], // 顺序列表
  mode: playMode.sequence, // 播放模式
  currentIndex: -1, // 当前播放索引
  disc: {},
  topList: {}, // 当前榜单
  searchHistory: loadSearch(),
  playHistory: loadPlay(),
  favoriteList: loadFavorite()
}

export default state
