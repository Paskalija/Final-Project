const root = 'http://localhost:7000';
const posts = root + '/posts';
const users = root + '/users';


export const api = {
  post_get_id: posts + '/',
  root: 'http://localhost:7000',
  post_post: posts + '/',
  post_get_myrecipes_id: posts + '/myrecipes/:id',
  post_get_category_breakfast: posts + '/category/breakfast',
  post_get_category_brunch: posts + '/category/brunch',
  post_get_category_lunch: posts + '/category/lunch', 
  post_get_category_dinner: posts + '/category/dinner',
  post_patch_id: posts + '/',
  post_delete_id: posts + '/',
  post_recipe_id: posts + '/recipe/',
  user_post_register: users + '/register',
  user_post_login: users + '/login',
  user_get_profile: users + '/profile',
  user_patch: users + '/update',
  user_post_logout: users + '/logout',
  user_get_update: users + '/update',
  user_delete: users + '/'
}