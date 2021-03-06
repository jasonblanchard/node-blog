import bookshelf from '../../config/bookshelf';
import Comment from './comment';

export default bookshelf.Model.extend({
  tableName: 'posts',
  hasTimestamps: true,

  comments() {
    return this.hasMany(Comment);
  }
});
