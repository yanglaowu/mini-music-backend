var express = require('express');
var router = express.Router();
import { getRecommend, getDiscList, getDiscInfo } from '../api/recommend';
import { getSingerList, getSingerDetail } from '../api/signer';
import { getLyric, getSongsUrl } from '../api/song';
import { getHotKey, search } from '../api/search';
import {ERR_OK} from '../api/config';

router.get('/', function(req, res, next) {
  res.send({msg: 'hello'})
});

// 获取热门
router.get('/getRecommend', function(req, res, next) {
  getRecommend().then((response) => {
    if (response.code === ERR_OK) {
      res.send(response.data)
    }
  })
});
// 获取推荐歌单
router.get('/getDiscList', function(req, res, next) {
  getDiscList().then((response) => {
    if (response.code === ERR_OK) {
      res.send(response.data)
    }
  })
});
// 获取歌单详情
router.get('/getDiscInfo', function(req, res, next) {
  getDiscInfo(req.query.disstid).then(response => {
    if (response.code === ERR_OK) {
      res.send(response)
    }
  })
});
// 歌手列表
router.get('/getSignerList', function(req, res, next) {
  getSingerList().then(response => {
    if (response.code === ERR_OK) {
      res.send(response)
    }
  })
});

// 歌手详情
router.get('/getSignerDetail', function(req, res, next) {
  getSingerDetail(req.query.singermid).then(response => {
    if (response.code === ERR_OK) {
      res.send(response)
    }
  })
});

router.get('/getLyric', function(req, res, next) {
  getLyric(req.query.mid).then(response => {
    if (response.code === ERR_OK) {
      res.send(response)
    }
  })
});

router.post('/getSongsUrl', function(req, res, next) {
  getSongsUrl(req.body.songs).then(response => {
    res.send(response)
  })
});


router.get('/getHotKey', function(req, res, next) {
  getHotKey().then(response => {
    res.send(response)
  })
});

router.get('/search', function(req, res, next) {
  search(req.query.query, req.query.page, req.query.zhida, req.query.perpage).then(response => {
    res.send(response)
  })
});

module.exports = router;
