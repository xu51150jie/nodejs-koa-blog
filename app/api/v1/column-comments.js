const Router = require('koa-router')

const {ColumnCommentsDao} = require('../../dao/column-comments')
const {CommentsValidator, PositiveArticleIdParamsValidator} = require('../../validators/column-comments')
const {Auth} = require('../../../middlewares/auth');

const {Resolve} = require('../../lib/helper');
const res = new Resolve();

const AUTH_ADMIN = 16;

const router = new Router({
  prefix: '/v1'
})

// 创建评论
router.post('/column/comments', async (ctx) => {

  // 通过验证器校验参数是否通过
  const v = await new CommentsValidator().validate(ctx);

  const r = await ColumnCommentsDao.create(v);

  const data = {
    id: r.getDataValue('id'),
    column_chapter_article_id: r.getDataValue('column_chapter_article_id'),
    nickname: r.getDataValue('nickname'),
    content: r.getDataValue('content'),
    created_at: r.getDataValue('created_at')
  };

  // 返回结果
  ctx.response.status = 200;
  ctx.body = res.json(data);
})

// 删除评论
router.delete('/column/comments/:id', new Auth(AUTH_ADMIN).m, async (ctx) => {

  // 通过验证器校验参数是否通过
  const v = await new PositiveArticleIdParamsValidator().validate(ctx);

  // 获取分类ID参数
  const id = v.get('path.id');
  await ColumnCommentsDao.destroy(id);

  // 返回结果
  ctx.response.status = 200;
  ctx.body = res.success('删除评论成功')
})

// 修改评论
router.put('/column/comments/:id', new Auth(AUTH_ADMIN).m, async (ctx) => {

  // 通过验证器校验参数是否通过
  const v = await new PositiveArticleIdParamsValidator().validate(ctx);

  // 获取分类ID参数
  const id = v.get('path.id');
  await ColumnCommentsDao.update(id, v);

  // 返回结果
  ctx.response.status = 200;
  ctx.body = res.success('更新评论成功')
})

// 获取评论列表
router.get('/column/comments', async (ctx) => {
  const page = ctx.query.page;
  let commentsList = await ColumnCommentsDao.list(page);

  // 返回结果
  ctx.response.status = 200;
  ctx.body = res.json(commentsList);

})

// 获取评论详情
router.get('/column/comments/:id', async (ctx) => {
  // 通过验证器校验参数是否通过
  const v = await new PositiveArticleIdParamsValidator().validate(ctx);

  // 获取分类ID参数
  const id = v.get('path.id');
  let comments = await ColumnCommentsDao.detail(id)

  // 返回结果
  ctx.response.status = 200;
  ctx.body = res.json(comments);

})

module.exports = router