const btnTabs = document.querySelectorAll('.btn-tabs');
const tabs = document.querySelectorAll('.tabs__item');

export function switchTabs() {
    btnTabs.forEach(function (item) {
        item.addEventListener('click', function () {
            if (!item.classList.contains('active')) {
                btnTabs.forEach(function (item) {
                    item.classList.remove('active');
                });
                item.classList.add('active');
                tabs.forEach(function (item) {
                    item.classList.add('hidden');
                });
                document.querySelector(item.getAttribute('data-id')).classList.remove('hidden');
            }
        });
    });
}