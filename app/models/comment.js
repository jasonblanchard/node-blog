import bookshelf from '../../config/bookshelf';
import Post from './post';

export default bookshelf.Model.extend({
  tableName: 'comments',
  hasTimestamps: true,

  post() {
    return this.belongsTo(Post);
  }

});
