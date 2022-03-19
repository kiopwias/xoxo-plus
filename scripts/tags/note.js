const removeMd = require('remove-markdown');
/**
 * note.js | global hexo script.
 *
 * ATTENTION! No need to write this tag in 1 line if u don't want see probally bugs.
 *
 * Usage:
 *
 * {% note [class] %}
 * Any content (support inline tags too).
 * {% endnote %}
 *
 * [class] : default | primary | success | info | warning | danger.
 *           May be not defined.
 */

function bscallOut (args, content) {
  return '<div class="note ' + args.join(' ') + '">' + hexo.render.renderSync({text: content, engine: 'markdown'}).trim() + '</div>';
}

hexo.extend.tag.register('note', bscallOut, {ends: true});
hexo.extend.helper.register('isPlainObject', function( value ) {
    if (!value || typeof value !== 'object' || ({}).toString.call(value) != '[object Object]' ) {
        return false;
    }
    var proto = Object.getPrototypeOf(value);
    if (proto === null) {
        return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && Function.prototype.toString.call(Ctor) === Function.prototype.toString.call(Object);
}
);

//将markdown转换为纯文本
hexo.extend.helper.register('excerpt',function(text){  
  text = text.replace(/```\s*[a-z]+\n/g,'')
  text = text.replace(/\n/g,'')
  text = text.replace(/\$/g,'')
  text = text.replace(/#*/g,'')
  let plainText = removeMd(text.replace(/---(.*?)---/g,''))
  const theme = hexo.theme.config
  let excerpt_start = theme.excerpt_start
  let excerpt_end = theme.excerpt_end < plainText.length ? theme.excerpt_end : plainText.length
  let string_start = theme.excerpt_start ? '...' : '' 
  let string_end = theme.excerpt_end < plainText.length ? ' ...' : ''
  
  return string_start + plainText.substring(excerpt_start,excerpt_end) + string_end
})
