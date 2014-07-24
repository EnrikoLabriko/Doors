var cityselect = {
    init: function () {
        cityselect.toggle();
        cityselect.setPopupCloseOnClick();
    },
    toggle: function () {
        $('.city').click(function (event) {
            $('.pop-up-window').toggleClass('hidden');
            event.stopPropagation();
        })
    },
    setPopupCloseOnClick: function () {
        $('html').click(function () {
            $('.pop-up-window').addClass('hidden');
        });
        $('.pop-up-window').click(function (event) {
            event.stopPropagation();
        });
    }
};

$(document).ready(cityselect.init);