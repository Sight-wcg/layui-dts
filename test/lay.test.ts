function layTest() {
  const a = { a: [1, 2, 3] };
  const b = {};
  layui.lay.extend(b, a, { b: 'ok' });
  layui.lay.ie;
  layui.lay.layui;
  layui.lay.getPath;
  layui.lay.stope;
  layui.each([1, 2, 3], console.log);
  layui.lay.digit(1, 4);
  const input = layui.lay.elem('input', { id: 'abc' });
  const img = layui.lay.elem('img', { id: 'abc' });
  layui.lay.hasScrollbar;
  layui.lay.position;
  layui.lay.options('.a');
  layui.lay.options('.a', 'id');

  const ll = layui.lay(document.body);
  ll.addClass('abc a', false);
  ll.addClass('abc b', true);
  ll.removeClass('')[0].title;
  ll.hasClass('abc');
  ll.css('');
  ll.css('', '');
  const x = (window.lay.each([0, 1], () => {}));
  x.selector;
  window.lay.each
  layui.lay.each({}, () => {});
  layui.lay('div').each((index, ele) => {
      // console.log(index+ele)
  })[0].title;
  window.lay('div').find('input').addClass;
  layui.lay('');
  layui.lay('').each;
  layui.lay('').addClass('');
  layui.lay('').length;
  layui.lay('#abc').on('click', e => {
      console.log();
  });
  layui.laypage.on(document.getElementById('abc'), 'click', e => {
      console.log(e);
  });
  const eme = document.getElementById('abc');
  if (eme) {
      // let elem: HTMLButtonElement = eme;
      layui.laypage.on(null, 'click', e => {
          console.log(e);
      });
  }
  lay.hasOwn(window, 'name')
  lay.onClickOutside(document.body, (e) => {})
  lay.clipboard.writeText('123')
}