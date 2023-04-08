// Lấy tất cả các thẻ a trên trang web
const allLinks = document.getElementsByTagName('a');

// Lặp qua từng thẻ a và thay đổi giá trị href
for (let i = 0; i < allLinks.length; i++) {
  const link = allLinks[i];
  const oldHref = link.getAttribute('href');
  const newHref = oldHref.replace('https://phucnguyendanang.com/', 'https://www.facebook.com/giahuy.bach.18');
  link.setAttribute('href', newHref);
}
