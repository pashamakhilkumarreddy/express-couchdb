document.addEventListener('DOMContentLoaded', (e) => {
  const _navbarBurgers = Array.from(document.querySelectorAll('.navbar-burger'));
  if (_navbarBurgers.length) {
    _navbarBurgers.forEach(el => {
      el.addEventListener('click', e => {
        const target = el.dataset.target;
        const _target = document.querySelector(`#${target}`);
        el.classList.toggle('is-active');
        _target.classList.toggle('is-active');
      })
    })
  }
});

if (document.querySelector('.delete-contact')) {
  document.querySelector('.delete-contact').addEventListener('click', async function (e) {
    try {
      const contactId = e.target.dataset.id;
      const isContactDeleted = await fetch(`/contact/${contactId}`, {
        method: 'DELETE'
      });
      if (contactId) {
        location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  });
}